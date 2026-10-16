#!/usr/bin/env python3
"""
Comprehensive link checker for MAS Select documentation.
Checks for broken links, mismatched titles, and missed linking opportunities.
"""

import os
import re
from pathlib import Path
from typing import Dict, List, Tuple, Set

# Base directory for docs
DOCS_DIR = Path("docs")

def extract_title(content: str) -> str:
    """Extract the H1 title from markdown content."""
    # Look for # Title (H1)
    match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    if match:
        return match.group(1).strip()
    return ""

def extract_links(content: str, filepath: str) -> List[Tuple[str, str, int]]:
    """Extract all markdown and HTML links from content.
    Returns list of (link_text, link_url, line_number)
    """
    links = []
    lines = content.split('\n')
    for i, line in enumerate(lines, 1):
        # Find all [text](url) patterns
        for match in re.finditer(r'\[([^\]]+)\]\(([^\)]+)\)', line):
            link_text = match.group(1)
            link_url = match.group(2)
            links.append((link_text, link_url, i))
        
        # Find all <a href="..."> patterns
        for match in re.finditer(r'<a\s+[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', line, re.IGNORECASE):
            link_url = match.group(1)
            link_text = re.sub(r'<[^>]+>', '', match.group(2)).strip()
            links.append((link_text or link_url, link_url, i))
    return links

def resolve_link_path(source_file: Path, link_url: str) -> Path:
    """Resolve a relative link URL to an absolute path."""
    if link_url.startswith('http://') or link_url.startswith('https://') or link_url.startswith('mailto:') or link_url.startswith('javascript:'):
        return None  # External link
    
    # Remove query and anchor if present
    link_path = link_url.split('#')[0].split('?')[0]
    if not link_path or link_path == '#':
        return None  # Just an anchor
    
    # Resolve relative to source file
    source_dir = source_file.parent
    target_path = (source_dir / link_path).resolve()

    # If referencing .html, check if either .html or .md exists in docs
    if not target_path.exists() and link_path.endswith('.html'):
        md_variant = target_path.with_suffix('.md')
        if md_variant.exists():
            return md_variant
    
    return target_path

def check_links():
    """Main link checking function."""
    
    # First pass: collect all files and their titles
    file_titles: Dict[Path, str] = {}
    all_files: Set[Path] = set()
    
    print("=" * 80)
    print("MAS SELECT HELP CENTER - COMPREHENSIVE LINK CHECK")
    print("=" * 80)
    print()
    
    for md_file in DOCS_DIR.rglob("*.md"):
        all_files.add(md_file)
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
            title = extract_title(content)
            file_titles[md_file] = title
    
    print(f"📊 Found {len(all_files)} markdown files")
    print()
    
    # Second pass: check all links
    broken_links = []
    title_mismatches = []
    external_links = []
    anchor_only_links = []
    all_internal_links = []
    
    for source_file in sorted(all_files):
        with open(source_file, 'r', encoding='utf-8') as f:
            content = f.read()
            links = extract_links(content, str(source_file))
            
            for link_text, link_url, line_num in links:
                # Skip images
                if any(ext in link_url.lower() for ext in ['.png', '.jpg', '.jpeg', '.gif', '.svg']):
                    continue
                
                # Check if external
                if link_url.startswith('http://') or link_url.startswith('https://'):
                    external_links.append((source_file, link_text, link_url, line_num))
                    continue
                
                # Check if anchor only
                if link_url.startswith('#'):
                    anchor_only_links.append((source_file, link_text, link_url, line_num))
                    continue
                
                # Resolve internal link
                target_path = resolve_link_path(source_file, link_url)
                
                if target_path:
                    all_internal_links.append((source_file, link_text, link_url, target_path, line_num))
                    
                    # Check if file exists
                    if not target_path.exists():
                        broken_links.append((source_file, link_text, link_url, line_num))
                    else:
                        # Check if link text matches target title
                        target_title = file_titles.get(target_path, "")
                        if target_title:
                            # Normalize for comparison
                            normalized_link = link_text.lower().strip()
                            normalized_title = target_title.lower().strip()
                            
                            # Check for various mismatch patterns
                            if normalized_link != normalized_title:
                                # Allow some variations
                                if not (
                                    normalized_link.startswith("i want to know more about") or
                                    normalized_link.startswith("how do i") or
                                    normalized_link.startswith("what") or
                                    normalized_link.startswith("why") or
                                    "see" in normalized_link or
                                    "learn" in normalized_link or
                                    "check" in normalized_link or
                                    "review" in normalized_link
                                ):
                                    title_mismatches.append((
                                        source_file, 
                                        link_text, 
                                        target_title, 
                                        link_url, 
                                        line_num
                                    ))
    
    # Report findings
    print("=" * 80)
    print("🔍 LINK ANALYSIS RESULTS")
    print("=" * 80)
    print()
    
    print(f"📈 Statistics:")
    print(f"  - Total internal links: {len(all_internal_links)}")
    print(f"  - External links: {len(external_links)}")
    print(f"  - Anchor-only links: {len(anchor_only_links)}")
    print(f"  - Broken links: {len(broken_links)}")
    print(f"  - Potential title mismatches: {len(title_mismatches)}")
    print()
    
    # Report broken links
    if broken_links:
        print("=" * 80)
        print("❌ BROKEN LINKS")
        print("=" * 80)
        print()
        for source, text, url, line in sorted(broken_links):
            try:
                rel_source = source.resolve().relative_to(Path.cwd().resolve())
            except ValueError:
                rel_source = source
            print(f"File: {rel_source}:{line}")
            print(f"  Link text: '{text}'")
            print(f"  Target: {url}")
            print(f"  ❌ Target file does not exist")
            print()
    else:
        print("✅ No broken links found!")
        print()
    
    # Report title mismatches
    if title_mismatches:
        print("=" * 80)
        print("⚠️  POTENTIAL TITLE MISMATCHES")
        print("=" * 80)
        print()
        print("These links may not match their target page titles:")
        print()
        for source, link_text, target_title, url, line in sorted(title_mismatches):
            rel_source = source.relative_to(Path.cwd())
            print(f"File: {rel_source}:{line}")
            print(f"  Link text: '{link_text}'")
            print(f"  Target title: '{target_title}'")
            print(f"  Target: {url}")
            print()
    else:
        print("✅ All link texts appear appropriate!")
        print()
    
    # Report external links
    if external_links:
        print("=" * 80)
        print("🌐 EXTERNAL LINKS")
        print("=" * 80)
        print()
        for source, text, url, line in sorted(external_links):
            try:
                rel_source = source.relative_to(Path.cwd())
            except ValueError:
                rel_source = source
            print(f"File: {rel_source}:{line}")
            print(f"  Text: '{text}'")
            print(f"  URL: {url}")
            print()
    
    # Analyze linking opportunities
    print("=" * 80)
    print("🔗 LINKING OPPORTUNITIES ANALYSIS")
    print("=" * 80)
    print()
    
    # Find pages with few or no incoming links
    incoming_links: Dict[Path, List[Path]] = {}
    for source, _, _, target, _ in all_internal_links:
        if target not in incoming_links:
            incoming_links[target] = []
        incoming_links[target].append(source)
    
    orphaned_pages = []
    low_link_pages = []
    
    for page in all_files:
        if page.name == 'index.md':
            continue  # Skip index pages
        
        link_count = len(incoming_links.get(page, []))
        if link_count == 0:
            orphaned_pages.append(page)
        elif link_count <= 2:
            low_link_pages.append((page, link_count))
    
    if orphaned_pages:
        print("⚠️  Pages with NO incoming links (potential orphans):")
        print()
        for page in sorted(orphaned_pages):
            try:
                rel_page = page.relative_to(Path.cwd())
            except ValueError:
                rel_page = page
            title = file_titles.get(page, "(no title)")
            print(f"  - {rel_page}")
            print(f"    Title: {title}")
        print()
    
    if low_link_pages:
        print("ℹ️  Pages with few incoming links (1-2):")
        print()
        for page, count in sorted(low_link_pages, key=lambda x: x[1]):
            try:
                rel_page = page.relative_to(Path.cwd())
            except ValueError:
                rel_page = page
            title = file_titles.get(page, "(no title)")
            print(f"  - {rel_page} ({count} link{'s' if count > 1 else ''})")
            print(f"    Title: {title}")
        print()
    
    print("=" * 80)
    print("✅ LINK CHECK COMPLETE")
    print("=" * 80)

if __name__ == "__main__":
    check_links()

# Made with Bob
