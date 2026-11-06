"""Fix relative image paths on English fallback pages in the French site.

A page with no French translation is built from the English source into
fr/<same path>.html. Some of its relative image paths, for example
../../images/a.png, were written for the English site root, so on the French
site they resolve to fr/images/, which does not exist. Images are published
once, at the site root.

For a fallback page this hook sets every relative path into images/ to the
exact depth needed to reach the site root. Translated pages (<name>.fr.md)
are not changed.
"""

import re

_IMAGES = re.compile(r'''((?:src|href|poster)=["'])(?:\.\./)+(images/)''')


def on_page_content(html, page, config, files):
    dest = page.file.dest_path.replace("\\", "/")
    if not dest.startswith("fr/") or page.file.src_path.endswith(".fr.md"):
        return html
    ups = "../" * dest.count("/")
    return _IMAGES.sub(lambda m: m.group(1) + ups + m.group(2), html)
