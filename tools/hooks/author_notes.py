"""Show author notes while writing, hide them in published builds.

Author notes are reminders for the writer and the SMEs. They must not reach
readers. This hook accepts exactly three shapes of note:

1. SME confirmation note, on its own line or inside a table cell:
       `[SME confirmation required: ...]`
2. TODO admonition, with an indented body:
       !!! warning "TODO: Add visual content"
           A screenshot showing ... would be useful here.
3. Video placeholder, the div and caption together, where the caption carries
   the text "Video in production".

When notes are hidden the hook removes them from the Markdown before it is
rendered, so they are also absent from the HTML and the search index. After
the build it scans the output and fails the build if a note is still there,
for example because a new note used a different shape.

Show or hide:

- AUTHOR_NOTES=show or AUTHOR_NOTES=hide in the environment always wins.
- Otherwise, if HIDE_BY_DEFAULT is False, notes are shown everywhere.
- Otherwise notes are shown only by `mkdocs serve`, and hidden by `mkdocs
  build` and `mkdocs gh-deploy`.

Notes stay visible until HIDE_BY_DEFAULT is set to True.
"""

import logging
import os
import re
from pathlib import Path

from mkdocs.exceptions import PluginError

# Planned for 1 Dec 2026. While False, every build shows the notes.
HIDE_BY_DEFAULT = False

ENV_VAR = "AUTHOR_NOTES"

# Pages whose video placeholder is replaced by a real video before public
# preview. The hook leaves their placeholder alone, so the fail-safe stops a
# hidden build while the placeholder text is still there.
KEEP_VIDEO_PLACEHOLDERS = {
    "get-work-done/setup-control/plan-your-asset-hierarchy.md",
    "get-work-done/setup-control/plan-your-location-hierarchy.md",
}

# Text that must not be in a published build.
FORBIDDEN = (
    "SME confirmation required",
    "TODO:",
    "would be useful here",
    "Video in production",
)

log = logging.getLogger("mkdocs.hooks.author_notes")

_hide = False

_TODO_ADMONITION = re.compile(r'^(?P<indent>[ \t]*)!!! \w+ "TODO:[^"\n]*"[ \t]*$')
_NOTE_LINE = re.compile(r"^[ \t]*`\[SME confirmation required:[^`]*\]`[ \t]*$")
_NOTE_INLINE = re.compile(r"[ \t]*`\[SME confirmation required:[^`]*\]`")
_VIDEO_PLACEHOLDER = re.compile(
    r'<div class="video-embed"[^>]*>(?:(?!</div>).)*</div>[ \t]*\n'
    r'<p class="video-caption">[^\n]*Video in production[^\n]*</p>[ \t]*\n(?:[ \t]*\n)*',
    re.DOTALL,
)


def _resolve(command):
    choice = os.environ.get(ENV_VAR, "").strip().lower()
    if choice == "show":
        return False, f"{ENV_VAR}=show"
    if choice == "hide":
        return True, f"{ENV_VAR}=hide"
    if choice:
        raise PluginError(f"{ENV_VAR} must be 'show' or 'hide', not '{choice}'.")
    if not HIDE_BY_DEFAULT:
        return False, "HIDE_BY_DEFAULT is False"
    return command != "serve", f"command '{command}'"


def on_startup(command, dirty, **kwargs):
    global _hide
    _hide, reason = _resolve(command)
    log.info("Author notes are %s (%s).", "hidden" if _hide else "shown", reason)


def _indent(line):
    return len(line) - len(line.lstrip(" \t"))


def _strip_lines(text):
    """Remove TODO admonitions and SME notes that stand on their own line."""
    lines = text.split("\n")
    out = []
    i = 0

    def skip_blanks_after_removal(i):
        # Avoid leaving two blank lines where a note was removed.
        if out and out[-1].strip() == "":
            while i < len(lines) and lines[i].strip() == "":
                i += 1
        return i

    while i < len(lines):
        line = lines[i]
        match = _TODO_ADMONITION.match(line)
        if match:
            indent = len(match.group("indent").expandtabs(4))
            i += 1
            while i < len(lines):
                if lines[i].strip() == "":
                    j = i
                    while j < len(lines) and lines[j].strip() == "":
                        j += 1
                    if j < len(lines) and _indent(lines[j].expandtabs(4)) >= indent + 4:
                        i = j
                        continue
                    break
                if _indent(lines[i].expandtabs(4)) >= indent + 4:
                    i += 1
                    continue
                break
            i = skip_blanks_after_removal(i)
            continue
        if _NOTE_LINE.match(line):
            i = skip_blanks_after_removal(i + 1)
            continue
        out.append(line)
        i += 1
    return "\n".join(out)


def _source_path(page):
    path = page.file.src_path.replace("\\", "/")
    if path.endswith(".fr.md"):
        path = path[: -len(".fr.md")] + ".md"
    return path


def on_page_markdown(markdown, page, config, files):
    if not _hide:
        return markdown
    text = _strip_lines(markdown)
    text = _NOTE_INLINE.sub("", text)
    if _source_path(page) not in KEEP_VIDEO_PLACEHOLDERS:
        text = _VIDEO_PLACEHOLDER.sub("", text)
    return text


def on_post_build(config):
    if not _hide:
        return
    found = []
    site = Path(config.site_dir)
    for path in sorted(site.rglob("*")):
        if path.suffix != ".html" and path.name != "search_index.json":
            continue
        content = path.read_text(encoding="utf-8", errors="replace")
        hits = [phrase for phrase in FORBIDDEN if phrase in content]
        if hits:
            found.append(f"  {path.relative_to(site).as_posix()}: {', '.join(hits)}")
    if found:
        raise PluginError(
            "Author notes are hidden, but this text is still in the output:\n"
            + "\n".join(found)
            + "\nRemove it from the source, or change tools/hooks/author_notes.py "
            "so that it recognizes this kind of note."
        )
