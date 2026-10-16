#!/usr/bin/env python3
"""
Generate PDF from the locally built MkDocs site using Playwright.
This script serves the site locally and saves it as a PDF.
"""

import os
import sys
import subprocess
import time
from playwright.sync_api import sync_playwright

# Configuration
LOCAL_SITE_DIR = "site"
LOCAL_PORT = 8001
SITE_URL = f"http://localhost:{LOCAL_PORT}"
OUTPUT_PDF = "maximo-application-suite-select-documentation.pdf"

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

def generate_pdf():
    """Generate PDF from the documentation site."""
    # Check if site directory exists
    if not os.path.exists(LOCAL_SITE_DIR):
        print(f"Error: Site directory '{LOCAL_SITE_DIR}' not found.")
        print("Please run 'mkdocs build' first.")
        return False
    
    # Start local server
    server = start_local_server()
    
    try:
        print(f"Generating PDF from {SITE_URL}...")
        
        with sync_playwright() as p:
            # Launch browser
            browser = p.chromium.launch()
            page = browser.new_page()
            
            # Navigate to site
            print("Loading site...")
            page.goto(SITE_URL, wait_until="networkidle")
            
            # Wait for content to load
            page.wait_for_timeout(2000)
            
            # Generate PDF
            print(f"Saving PDF to {OUTPUT_PDF}...")
            page.pdf(
                path=OUTPUT_PDF,
                format='A4',
                print_background=True,
                margin={
                    'top': '20mm',
                    'right': '15mm',
                    'bottom': '20mm',
                    'left': '15mm'
                }
            )
            
            browser.close()
        
        # Check if file was created
        if os.path.exists(OUTPUT_PDF):
            file_size = os.path.getsize(OUTPUT_PDF) / (1024 * 1024)  # Convert to MB
            print(f"✓ PDF generated successfully: {OUTPUT_PDF} ({file_size:.2f} MB)")
            return True
        else:
            print("✗ Failed to generate PDF")
            return False
    
    finally:
        # Stop the server
        print("Stopping local server...")
        server.terminate()
        server.wait()

def main():
    """Main function."""
    try:
        success = generate_pdf()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

# Made with Bob
