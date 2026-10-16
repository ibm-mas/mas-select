#!/usr/bin/env python3
"""
Generate a complete PDF from all pages in the MkDocs site.
This script visits each page and combines them into a single PDF.
"""

import os
import sys
import subprocess
import time
import yaml
from playwright.sync_api import sync_playwright
from PyPDF2 import PdfMerger

# Configuration
LOCAL_SITE_DIR = "site"
LOCAL_PORT = 8002
BASE_URL = f"http://localhost:{LOCAL_PORT}"
OUTPUT_PDF = "maximo-application-suite-select-documentation-complete.pdf"
TEMP_DIR = "temp_pdfs"

def load_navigation():
    """Load navigation structure from mkdocs.yml."""
    with open('mkdocs.yml', 'r') as f:
        config = yaml.safe_load(f)
    return config.get('nav', [])

def extract_pages(nav_item, pages=None):
    """Recursively extract all page paths from navigation."""
    if pages is None:
        pages = []
    
    if isinstance(nav_item, dict):
        for key, value in nav_item.items():
            if isinstance(value, str):
                # It's a page
                pages.append(value)
            elif isinstance(value, list):
                # It's a section with sub-items
                for item in value:
                    extract_pages(item, pages)
    elif isinstance(nav_item, list):
        for item in nav_item:
            extract_pages(item, pages)
    
    return pages

def start_local_server():
    """Start a local HTTP server for the site."""
    print(f"Starting local server on port {LOCAL_PORT}...")
    server = subprocess.Popen(
        ['python3', '-m', 'http.server', str(LOCAL_PORT)],
        cwd=LOCAL_SITE_DIR,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    time.sleep(2)  # Give server time to start
    return server

def generate_page_pdf(page, browser, output_path):
    """Generate PDF for a single page."""
    # Convert .md path to .html
    html_path = page.replace('.md', '.html')
    url = f"{BASE_URL}/{html_path}"
    
    print(f"  Processing: {page}")
    
    try:
        page_obj = browser.new_page()
        page_obj.goto(url, wait_until="networkidle", timeout=10000)
        page_obj.wait_for_timeout(1000)
        
        page_obj.pdf(
            path=output_path,
            format='A4',
            print_background=True,
            margin={
                'top': '15mm',
                'right': '10mm',
                'bottom': '15mm',
                'left': '10mm'
            }
        )
        page_obj.close()
        return True
    except Exception as e:
        print(f"    Warning: Could not process {page}: {e}")
        return False

def merge_pdfs(pdf_files, output_path):
    """Merge multiple PDFs into one."""
    print(f"\nMerging {len(pdf_files)} PDFs...")
    merger = PdfMerger()
    
    for pdf_file in pdf_files:
        if os.path.exists(pdf_file):
            merger.append(pdf_file)
    
    merger.write(output_path)
    merger.close()

def generate_complete_pdf():
    """Generate complete PDF from all pages."""
    # Check if site directory exists
    if not os.path.exists(LOCAL_SITE_DIR):
        print(f"Error: Site directory '{LOCAL_SITE_DIR}' not found.")
        print("Please run 'mkdocs build' first.")
        return False
    
    # Create temp directory
    os.makedirs(TEMP_DIR, exist_ok=True)
    
    # Load navigation and extract pages
    print("Loading navigation structure...")
    nav = load_navigation()
    pages = extract_pages(nav)
    print(f"Found {len(pages)} pages to process\n")
    
    # Start local server
    server = start_local_server()
    
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            
            pdf_files = []
            for i, page in enumerate(pages, 1):
                output_path = os.path.join(TEMP_DIR, f"page_{i:03d}.pdf")
                if generate_page_pdf(page, browser, output_path):
                    pdf_files.append(output_path)
            
            browser.close()
        
        # Merge all PDFs
        if pdf_files:
            merge_pdfs(pdf_files, OUTPUT_PDF)
            
            # Clean up temp files
            print("Cleaning up temporary files...")
            for pdf_file in pdf_files:
                os.remove(pdf_file)
            os.rmdir(TEMP_DIR)
            
            # Check result
            if os.path.exists(OUTPUT_PDF):
                file_size = os.path.getsize(OUTPUT_PDF) / (1024 * 1024)
                print(f"\n✓ Complete PDF generated successfully!")
                print(f"  File: {OUTPUT_PDF}")
                print(f"  Size: {file_size:.2f} MB")
                print(f"  Pages processed: {len(pdf_files)}")
                return True
        
        print("✗ Failed to generate PDF")
        return False
    
    finally:
        # Stop the server
        print("\nStopping local server...")
        server.terminate()
        server.wait()

def main():
    """Main function."""
    try:
        success = generate_complete_pdf()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main()

# Made with Bob
