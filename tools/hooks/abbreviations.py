"""Append the abbreviation (tooltip) definitions to every page.

This replaces the pymdownx.snippets `auto_append` setting, which always adds the
English `docs/.snippets` file. A translated page needs definitions in its own
language: English keys such as "site" or "status" would otherwise add English
tooltips to ordinary words in the translated text.

A page whose content is English (including the English fallback shown on a
translated site) gets docs/.snippets. A page translated into <lang> gets
docs/.snippets.<lang>, built by scripts/translate_docs.py.
"""

from pathlib import Path


def on_page_markdown(markdown, page, config, files):
    locale = getattr(page.file, "locale", None)
    docs = Path(config.docs_dir)
    default = docs / ".snippets"
    path = docs / f".snippets.{locale}"
    if not locale or not path.exists():
        path = default
    return markdown + "\n\n" + path.read_text(encoding="utf-8")
