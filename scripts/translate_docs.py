#!/usr/bin/env python3
"""
Translation workflow for the MAS Select help center.

Translates only the pages listed in `nav` in mkdocs.yml, plus the snippet files
that those pages include. Output follows the mkdocs-static-i18n "suffix"
convention: docs/page.md -> docs/page.<lang>.md.

The script does not call a translation service. It prepares work and checks
results, so the translator can be Bob in a session now and an API later:

  extract  Split pages into segments and write the ones that are not in the
           cache to translations/pending/<lang>.json.
  import   Validate translated segments and add them to the cache.
  build    Assemble docs/*.<lang>.md from the English pages and the cache.
           A page that has a missing or invalid segment is not written, so
           the site falls back to the English page.
  status   Report how many segments are cached or missing, per page.

Cache: translations/cache/<lang>.json (segment hash -> source and target).
Glossary: translations/glossary.yml.
"""

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

import yaml
from markdown.extensions.toc import slugify

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
TRANSLATIONS = ROOT / "translations"
GLOSSARY = TRANSLATIONS / "glossary.yml"

TOKEN_RE = re.compile(r"⟦(\d+)⟧")
TRANSLATABLE_ATTRS = r"(?:title|alt|placeholder|aria-label)"

MASK_RE = re.compile(
    r"""
    (?P<code>`[^`\n]+`)
    |(?P<link>\]\([^)\s]*(?:\s+"[^"]*")?\)(?:\{[^}]*\})?)
    |(?P<tag><[^>]+>)
    |(?P<attrlist>\{:?\s*[#.][^}]*\}|\{\s*[A-Za-z-]+=[^}]*\})
    |(?P<url>https?://[^\s)>\]]+)
    """,
    re.X,
)

FENCE_RE = re.compile(r"^\s*(```|~~~)")
HR_RE = re.compile(r"^\s*(-{3,}|\*{3,}|_{3,})\s*$")
TABLE_SEP_RE = re.compile(r"^\s*\|?[\s:\-|]+\|?\s*$")
ADMONITION_RE = re.compile(r'^(\s*(?:!!!|\?\?\?\+?)\s+\S+\s+")(.*)("\s*)$')
ADMONITION_BARE_RE = re.compile(r"^\s*(?:!!!|\?\?\?\+?)\s+\S+\s*$")
PREFIX_RE = re.compile(r"^(\s*(?:(?:#{1,6}|>|[-*+]|\d+[.)])\s+)*)(.*?)(\s*)$")
HEADING_RE = re.compile(r"^\s*(#{1,6})\s+")
SNIPPET_RE = re.compile(r'^(\s*--8<--\s+")([^"]+)(")')


# ---------------------------------------------------------------- masking


def mask(text):
    """Replace protected content with numbered tokens. Returns (masked, tokens)."""
    tokens = []

    def add(literal):
        tokens.append(literal)
        return f"⟦{len(tokens)}⟧"

    def repl(m):
        if m.group("tag"):
            pieces = re.split(rf'({TRANSLATABLE_ATTRS}=")([^"]*)(")', m.group("tag"))
            out = []
            for i, piece in enumerate(pieces):
                if i % 4 == 2:
                    out.append(piece)  # attribute value stays translatable
                elif piece:
                    out.append(add(piece))
            return "".join(out)
        return add(m.group(0))

    return MASK_RE.sub(repl, text), tokens


def unmask(text, tokens):
    return TOKEN_RE.sub(lambda m: tokens[int(m.group(1)) - 1], text)


def has_words(masked):
    return bool(re.search(r"[^\W\d_]", TOKEN_RE.sub("", masked)))


def seg_id(masked):
    return hashlib.sha256(masked.encode("utf-8")).hexdigest()[:16]


# ---------------------------------------------------------------- parsing


class Segment:
    def __init__(self, text):
        self.original = text
        self.masked, self.tokens = mask(text)
        self.id = seg_id(self.masked)


class Page:
    """A page as a list of parts: literal strings and Segment objects per line."""

    def __init__(self, path):
        self.path = path
        self.lines = []  # list of (kind, parts); kind is "text" or "heading"
        self._parse(path.read_text(encoding="utf-8"))

    def segments(self):
        for _, parts in self.lines:
            for part in parts:
                if isinstance(part, Segment):
                    yield part

    def _seg_or_lit(self, text):
        if not text.strip():
            return text
        seg = Segment(text)
        return seg if has_words(seg.masked) else text

    def _parse(self, content):
        raw = content.split("\n")
        in_front = bool(raw) and raw[0].strip() == "---"
        in_fence = False
        raw_block = None
        for idx, line in enumerate(raw):
            if in_front:
                self.lines.append(("lit", [line]))
                if idx > 0 and line.strip() == "---":
                    in_front = False
                continue
            if FENCE_RE.match(line):
                in_fence = not in_fence
                self.lines.append(("lit", [line]))
                continue
            if in_fence:
                self.lines.append(("lit", [line]))
                continue
            if raw_block:
                self.lines.append(("lit", [line]))
                if f"</{raw_block}>" in line:
                    raw_block = None
                continue
            m = re.match(r"^\s*<(script|style)\b", line)
            if m:
                if f"</{m.group(1)}>" not in line:
                    raw_block = m.group(1)
                self.lines.append(("lit", [line]))
                continue
            if not line.strip() or HR_RE.match(line) or SNIPPET_RE.match(line):
                self.lines.append(("lit", [line]))
                continue
            if line.lstrip().startswith("|"):
                self.lines.append(("lit", self._table_parts(line)))
                continue
            if ADMONITION_BARE_RE.match(line):
                self.lines.append(("lit", [line]))
                continue
            m = ADMONITION_RE.match(line)
            if m:
                self.lines.append(("lit", [m.group(1), self._seg_or_lit(m.group(2)), m.group(3)]))
                continue
            m = PREFIX_RE.match(line)
            prefix, text, trailing = m.groups()
            kind = "heading" if HEADING_RE.match(line) else "text"
            self.lines.append((kind, [prefix, self._seg_or_lit(text), trailing]))

    def _table_parts(self, line):
        if TABLE_SEP_RE.match(line):
            return [line]
        parts = []
        cells = re.split(r"(?<!\\)\|", line)
        for i, cell in enumerate(cells):
            if i > 0:
                parts.append("|")
            if not cell.strip():
                parts.append(cell)
                continue
            lead = cell[: len(cell) - len(cell.lstrip())]
            trail = cell[len(cell.rstrip()):]
            parts.extend([lead, self._seg_or_lit(cell.strip()), trail])
        return parts

    # ---- rendering

    def render(self, translate, snippet_map):
        """Return the translated page text. `translate(segment)` gives masked text."""
        out = []
        seen_ids = {}
        for kind, parts in self.lines:
            line = ""
            for part in parts:
                if isinstance(part, Segment):
                    line += unmask(translate(part), part.tokens)
                else:
                    line += part
            if kind == "heading":
                line = self._pin_heading_id(line, parts, seen_ids)
            m = SNIPPET_RE.match(line)
            if m and m.group(2) in snippet_map:
                line = SNIPPET_RE.sub(lambda mm: mm.group(1) + snippet_map[mm.group(2)] + mm.group(3), line, count=1)
            out.append(line)
        return fix_raw_html("\n".join(out))

    def _pin_heading_id(self, line, parts, seen_ids):
        """Pin the English anchor so that links to anchors keep working."""
        english = "".join(p.original if isinstance(p, Segment) else p for p in parts)
        if re.search(r"\{\s*#", english):
            return line
        text = HEADING_RE.sub("", english).strip()
        text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
        text = re.sub(r"[`*_]", "", text)
        text = re.sub(r"<[^>]+>", "", text)
        slug = slugify(text, "-")
        count = seen_ids.get(slug, 0)
        seen_ids[slug] = count + 1
        if count:
            slug = f"{slug}_{count}"
        return f"{line.rstrip()} {{ #{slug} }}"


def fix_raw_html(text):
    """Raw HTML is not rewritten by MkDocs. Pages in /<lang>/ sit one level
    deeper than the English pages, so relative asset paths need one more '../'."""
    text = re.sub(
        r'(\bsrc=")(?!https?:|/|data:|#)([^"]*")',
        lambda m: m.group(1) + "../" + m.group(2),
        text,
    )
    return text


# ---------------------------------------------------------------- inputs


def nav_pages():
    config = yaml.safe_load((ROOT / "mkdocs.yml").read_text(encoding="utf-8"))
    pages = []

    def walk(node):
        if isinstance(node, str):
            if node.endswith(".md"):
                pages.append(node)
        elif isinstance(node, list):
            for item in node:
                walk(item)
        elif isinstance(node, dict):
            for value in node.values():
                walk(value)

    walk(config.get("nav", []))
    return pages


def in_scope(selected=None):
    """Nav pages plus the snippet files they include."""
    pages = list(nav_pages())
    if selected:
        pages = [p for p in pages if p in selected]
        missing = set(selected) - set(pages)
        if missing:
            sys.exit(f"Not in nav: {', '.join(sorted(missing))}")
    snippets = []
    for p in pages:
        for line in (DOCS / p).read_text(encoding="utf-8").split("\n"):
            m = SNIPPET_RE.match(line)
            if m and m.group(2).endswith(".md") and (DOCS / m.group(2)).exists() and m.group(2) not in snippets:
                snippets.append(m.group(2))
    return snippets + pages


def load_glossary():
    return yaml.safe_load(GLOSSARY.read_text(encoding="utf-8"))


def protected_terms(glossary):
    terms = []
    for group in glossary["do_not_translate"].values():
        terms.extend(group)
    return terms


def cache_path(lang):
    return TRANSLATIONS / "cache" / f"{lang}.json"


def load_cache(lang):
    p = cache_path(lang)
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else {}


def save_cache(lang, cache):
    p = cache_path(lang)
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(cache, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def target_path(src, lang):
    return DOCS / (src[: -len(".md")] + f".{lang}.md")


# ---------------------------------------------------------------- validation


def validate(source_masked, target_masked, terms):
    """Return a list of problems with a translated segment."""
    problems = []
    if not target_masked.strip():
        return ["empty translation"]
    if "\n" in target_masked:
        problems.append("contains a line break")
    src_tokens = sorted(TOKEN_RE.findall(source_masked))
    tgt_tokens = sorted(TOKEN_RE.findall(target_masked))
    if src_tokens != tgt_tokens:
        problems.append(f"placeholders differ: source {src_tokens}, target {tgt_tokens}")
    for marker in ("**", "[", "]", "*"):
        if source_masked.count(marker) != target_masked.count(marker):
            problems.append(f"marker {marker!r} count differs")
    for term in terms:
        if term in source_masked and term not in target_masked:
            problems.append(f"protected term changed or missing: {term}")
    return problems


# ---------------------------------------------------------------- commands


def cmd_extract(args):
    cache = load_cache(args.lang)
    pending = {}
    for src in in_scope(args.pages):
        for seg in Page(DOCS / src).segments():
            if seg.id not in cache:
                pending[seg.id] = seg.masked
    out = TRANSLATIONS / "pending" / f"{args.lang}.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(pending, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{len(pending)} segments to translate -> {out.relative_to(ROOT)}")


def cmd_import(args):
    glossary = load_glossary()
    terms = protected_terms(glossary)
    pending = json.loads((TRANSLATIONS / "pending" / f"{args.lang}.json").read_text(encoding="utf-8"))
    translated = json.loads(Path(args.file).read_text(encoding="utf-8"))
    cache = load_cache(args.lang)
    added, failed = 0, 0
    for sid, target in translated.items():
        if sid not in pending:
            print(f"  skipped unknown segment {sid}")
            continue
        problems = validate(pending[sid], target, terms)
        if problems:
            failed += 1
            print(f"  REJECTED {sid}: {'; '.join(problems)}\n    source: {pending[sid]}\n    target: {target}")
            continue
        cache[sid] = {"source": pending[sid], "target": target, "glossary_version": glossary["version"]}
        added += 1
    save_cache(args.lang, cache)
    missing = [s for s in pending if s not in cache]
    print(f"added {added}, rejected {failed}, still missing {len(missing)}")
    return 1 if failed else 0


def cmd_build(args):
    cache = load_cache(args.lang)
    glossary = load_glossary()
    terms = protected_terms(glossary)
    scope = in_scope(args.pages)
    built, skipped = [], []
    snippet_map = {}
    for src in scope:
        page = Page(DOCS / src)
        missing = [s.id for s in page.segments() if s.id not in cache]
        invalid = [
            s.id for s in page.segments()
            if s.id in cache and validate(s.masked, cache[s.id]["target"], terms)
        ]
        if missing or invalid:
            skipped.append((src, len(missing), len(invalid)))
            continue
        text = page.render(lambda s: cache[s.id]["target"], snippet_map)
        dest = target_path(src, args.lang)
        dest.write_text(text, encoding="utf-8")
        built.append(src)
        if src.startswith("_snippets/"):
            snippet_map[src] = target_path(src, args.lang).relative_to(DOCS).as_posix()
    # snippets are built first, so pages can point at the translated snippet
    print(f"built {len(built)} page(s):")
    for src in built:
        print(f"  {target_path(src, args.lang).relative_to(ROOT)}")
    for src, missing, invalid in skipped:
        print(f"  FALLBACK to English: {src} ({missing} missing, {invalid} invalid segment(s))")
    return 0


def cmd_status(args):
    cache = load_cache(args.lang)
    total = done = 0
    for src in in_scope(args.pages):
        segs = list(Page(DOCS / src).segments())
        have = sum(1 for s in segs if s.id in cache)
        total += len(segs)
        done += have
        print(f"{have:4}/{len(segs):<4} {src}")
    print(f"{done}/{total} segments cached for '{args.lang}'")
    return 0


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="command", required=True)
    for name in ("extract", "import", "build", "status"):
        p = sub.add_parser(name)
        p.add_argument("--lang", required=True)
        p.add_argument("--pages", nargs="*", help="Pages relative to docs/ (default: all nav pages)")
        if name == "import":
            p.add_argument("file", help="JSON file: segment id -> translated text")
    args = parser.parse_args()
    sys.exit({"extract": cmd_extract, "import": cmd_import, "build": cmd_build, "status": cmd_status}[args.command](args) or 0)


if __name__ == "__main__":
    main()
