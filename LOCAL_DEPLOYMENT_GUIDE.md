# MAS Select Documentation - Local Build & Deployment Guide

## Quick Reference

**Current Local Server:** http://localhost:8001/WCE-ID/mas_select/index.html

**Status:** ✅ Server is currently running on port 8001

## Overview

This guide explains how to build and deploy the Maximo Application Suite Select documentation locally using MkDocs.

## Prerequisites

- **Python 3.7+** (installed at: `/Library/Developer/CommandLineTools/usr/bin/python3`)
- **pip3** (Python package manager)
- **Git** (for version control)

## Project Structure

```
mas_select/
├── docs/                    # Documentation source (Markdown files)
├── site/                    # Built HTML output (generated)
├── mkdocs.yml              # MkDocs configuration
├── requirements.txt        # Python dependencies
├── scripts/                # Build automation scripts
│   └── build.sh           # Main build script
└── tools/                  # Theme customizations
```

## Installation & Setup

### 1. Install Dependencies

```bash
# Navigate to project directory
cd /Users/yvetteharrington/Documents/GitHub/mas_select

# Install Python packages
pip3 install -r requirements.txt
```

**Installed packages:**
- `mkdocs>=1.5.0` - Static site generator
- `mkdocs-carbon>=2.1.0` - Carbon Design System theme
- `mkdocs-glightbox>=0.3.0` - Image lightbox plugin
- `playwright>=1.40.0` - For PDF generation
- `pymdown-extensions>=10.0` - Markdown extensions

## Build Commands

### Option 1: Using MkDocs Directly

#### Build the Site
```bash
python3 -m mkdocs build
```
- Generates static HTML in `/site` directory
- Takes ~1 second to build
- Output: `/Users/yvetteharrington/Documents/GitHub/mas_select/site`

#### Serve Locally (Development Server)
```bash
# Default port (8000)
python3 -m mkdocs serve

# Custom port (if 8000 is in use)
python3 -m mkdocs serve -a localhost:8001
```

**Features:**
- Live reload on file changes
- Watches `docs/` and `mkdocs.yml`
- Auto-rebuilds when you save changes
- Access at: http://localhost:8001/WCE-ID/mas_select/

#### Clean Build
```bash
python3 -m mkdocs build --clean
```
- Removes old files before building
- Ensures fresh build

### Option 2: Using Build Script

The project includes a comprehensive build script with additional features:

```bash
# Build only
./scripts/build.sh build

# Serve locally
./scripts/build.sh serve

# Clean build directory
./scripts/build.sh clean

# Check prerequisites
./scripts/build.sh check

# Full workflow (build + optional deploy)
./scripts/build.sh full

# Deploy to GitHub Pages
./scripts/build.sh deploy

# Show help
./scripts/build.sh help
```

## Current Setup

### Active Server
- **URL:** http://localhost:8001/WCE-ID/mas_select/
- **Port:** 8001 (custom, avoiding default 8000)
- **Status:** Running in Terminal 1
- **Features:** Live reload enabled

### Site Configuration (mkdocs.yml)

```yaml
site_name: Maximo Application Suite Select help center
site_url: https://pages.github.ibm.com/WCE-ID/mas_select/
theme:
  name: carbon
  prefix: IBM
  custom_dir: tools/overrides
```

### URL Structure

The site uses `use_directory_urls: false` which means:
- URLs end in `.html` (e.g., `/index.html`)
- Direct file access without trailing slashes
- Better for offline viewing

## Development Workflow

### 1. Start Development Server

```bash
python3 -m mkdocs serve -a localhost:8001
```

### 2. Edit Content

Navigate to `docs/` and edit Markdown files:
```bash
docs/
├── index.md                 # Homepage
├── start-fast/             # Getting started content
├── get-work-done/          # Task-based guides
├── improve-results/        # Optimization guides
├── work-smarter/           # Advanced features
└── get-answers/            # Q&A section
```

### 3. View Changes

- Save your file
- Browser auto-refreshes
- Changes appear immediately

### 4. Stop Server

Press `Ctrl+C` in the terminal

## Deployment Options

### Local Deployment (Current)

**Already running at:** http://localhost:8001/WCE-ID/mas_select/

To restart if stopped:
```bash
python3 -m mkdocs serve -a localhost:8001
```

### GitHub Pages Deployment

```bash
# Deploy to gh-pages branch
python3 -m mkdocs gh-deploy --force
```

**What happens:**
1. Builds the site
2. Pushes to `gh-pages` branch
3. Available at: https://pages.github.ibm.com/WCE-ID/mas_select/
4. Takes 1-2 minutes to go live

### Static Build (for hosting elsewhere)

```bash
# Build static files
python3 -m mkdocs build

# Output directory
ls site/
```

Copy the `site/` directory to any web server.

## Troubleshooting

### Port Already in Use

**Error:** `OSError: [Errno 48] Address already in use`

**Solution:** Use a different port
```bash
python3 -m mkdocs serve -a localhost:8001
# or
python3 -m mkdocs serve -a localhost:8002
```

### MkDocs Not Found

**Error:** `mkdocs: command not found`

**Solution:** Use Python module syntax
```bash
python3 -m mkdocs serve
```

### Build Warnings

**Warning:** Pages not in navigation

Some pages exist but aren't in `mkdocs.yml` nav:
- `about/export-pdf.md`
- `start-fast/first-task/admin-first-task.md`
- `start-fast/first-task/clerk-first-task.md`

These are accessible but not in the menu.

### Dependencies Missing

```bash
pip3 install -r requirements.txt
```

## File Watching

The development server watches:
- All files in `docs/`
- `mkdocs.yml` configuration
- Theme files in `tools/overrides/`

Changes to these files trigger automatic rebuild.

## Build Statistics

Typical build:
- **Source files:** ~50 Markdown files
- **Output files:** ~150 HTML files
- **Build time:** ~1 second
- **Total size:** ~5 MB

## URLs & Access Points

### Local Development
- **Homepage:** http://localhost:8001/WCE-ID/mas_select/index.html
- **Any page:** http://localhost:8001/WCE-ID/mas_select/[path]/[page].html

### GitHub Pages (Production)
- **Homepage:** https://pages.github.ibm.com/WCE-ID/mas_select/
- **Any page:** https://pages.github.ibm.com/WCE-ID/mas_select/[path]/[page].html

## Quick Commands Reference

```bash
# Build
python3 -m mkdocs build

# Serve (default port)
python3 -m mkdocs serve

# Serve (custom port)
python3 -m mkdocs serve -a localhost:8001

# Deploy to GitHub Pages
python3 -m mkdocs gh-deploy --force

# Clean build
python3 -m mkdocs build --clean

# Check version
python3 -m mkdocs --version
```

## Current Status

✅ **Dependencies:** Installed  
✅ **Build:** Successful  
✅ **Server:** Running on port 8001  
✅ **Live Reload:** Enabled  
✅ **GitHub Pages:** Deployed  

## Next Steps

1. **Edit content** in `docs/` directory
2. **View changes** at http://localhost:8001/WCE-ID/mas_select/
3. **Commit changes** to Git
4. **Deploy** with `python3 -m mkdocs gh-deploy --force`

---

**Made with Bob** 🤖