# GitHub Pages Deployment Guide for MAS Select Documentation

## Live Site URL
**Preview site:** `<live site URL>`/index.html

> **Preview only:** Every page carries `<meta name="robots" content="noindex, nofollow">`, added in `tools/overrides/base.html.j2`, so search engines do not list the site. Do not publish the URL. At GA, remove that tag and redeploy.

## Overview

This documentation site is deployed to GitHub Pages (`ibm-mas/mas-select`) using MkDocs. The deployment process automatically builds the site and publishes it to the `gh-pages` branch, which GitHub Pages serves as a static website.

## Prerequisites

Before deploying, ensure you have:

1. **Git access** to the repository: `https://github.com/ibm-mas/mas-select.git`
2. **Push permissions** to the repository
3. **Python 3.7+** installed
4. **MkDocs and dependencies** installed (see Installation section)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ibm-mas/mas-select.git
cd mas-select
```

### 2. Install Dependencies

```bash
pip3 install -r requirements.txt
```

**Required packages:**
- `mkdocs>=1.5.0` - Static site generator
- `mkdocs-carbon>=2.1.0` - Carbon Design System theme
- `mkdocs-glightbox>=0.3.0` - Image lightbox plugin
- `playwright>=1.40.0` - For PDF generation
- `pymdown-extensions>=10.0` - Markdown extensions

## Deployment Methods

### Method 1: Using MkDocs Directly (Recommended)

This is the simplest and most reliable method:

```bash
# Navigate to project directory
cd mas-select

# Deploy to GitHub Pages
python3 -m mkdocs gh-deploy --force
```

**What this does:**
1. Builds the documentation site from `docs/` directory
2. Creates/updates the `gh-pages` branch
3. Pushes the built site to the remote `gh-pages` branch
4. GitHub Pages automatically serves the content

**Expected output:**
```
INFO    -  Cleaning site directory
INFO    -  Building documentation to directory: /path/to/mas-select/site
INFO    -  Documentation built in 1.23 seconds
INFO    -  Copying '/path/to/mas-select/site' to 'gh-pages' branch and pushing to GitHub.
INFO    -  Your documentation should shortly be available at: `<live site URL>`
```

### Method 2: Using the Build Script

The project includes a comprehensive build script with additional features:

```bash
# Full deployment workflow (build + deploy)
./scripts/build.sh deploy
```

**What this does:**
1. Checks prerequisites
2. Cleans the build directory
3. Builds the site
4. Checks for uncommitted changes
5. Optionally commits changes
6. Deploys to GitHub Pages

**Interactive prompts:**
- If you have uncommitted changes, it will ask if you want to commit them
- You can provide a commit message
- Changes are pushed to `master` branch before deploying

### Method 3: Manual Deployment

For more control over the process:

```bash
# 1. Build the site locally
python3 -m mkdocs build --clean

# 2. Review the built site
open site/index.html

# 3. Deploy to GitHub Pages
python3 -m mkdocs gh-deploy --force
```

## Deployment Workflow

### Standard Workflow

1. **Make changes** to documentation files in `docs/` directory
2. **Test locally** using the development server:
   ```bash
   python3 -m mkdocs serve -a localhost:8001
   ```
3. **Review changes** at http://localhost:8001/mas-select/
4. **Commit changes** to the `master` branch:
   ```bash
   git add .
   git commit -m "docs: update documentation"
   git push origin master
   ```
5. **Deploy to GitHub Pages**:
   ```bash
   python3 -m mkdocs gh-deploy --force
   ```
6. **Verify deployment** at `<live site URL>`

### Quick Deployment (No Testing)

If you're confident in your changes:

```bash
# Commit and deploy in one go
git add .
git commit -m "docs: update documentation"
git push origin master
python3 -m mkdocs gh-deploy --force
```

## Understanding the Deployment Process

### What Happens During Deployment

1. **Build Phase:**
   - MkDocs reads `mkdocs.yml` configuration
   - Processes all Markdown files in `docs/`
   - Applies the Carbon theme
   - Generates static HTML, CSS, and JavaScript
   - Creates the `site/` directory with built files

2. **Deploy Phase:**
   - Switches to `gh-pages` branch (creates if doesn't exist)
   - Copies contents of `site/` directory to `gh-pages` branch
   - Commits the changes
   - Pushes to remote `gh-pages` branch

3. **GitHub Pages Phase:**
   - GitHub detects changes to `gh-pages` branch
   - Serves the content at `<live site URL>`
   - Changes appear within 1-2 minutes

### Branch Structure

- **`master` branch:** Source code and documentation files
  - `docs/` - Markdown source files
  - `mkdocs.yml` - Configuration
  - `scripts/` - Build scripts
  - `tools/` - Theme customizations

- **`gh-pages` branch:** Built HTML site (auto-generated)
  - Contains only the static website files
  - Automatically managed by MkDocs
  - Should not be edited manually

## Configuration

### Site Configuration (mkdocs.yml)

Key settings for GitHub Pages deployment:

```yaml
site_name: Maximo Application Suite Select help center
site_url: https://ibm-mas.github.io/mas-select/
site_description: Journey-based documentation for Maximo Application Suite Select
site_author: IBM
use_directory_urls: false

# Repository
repo_name: ibm-mas/mas-select
repo_url: https://github.com/ibm-mas/mas-select
edit_uri: ''
```

**Important settings:**
- `site_url`: Must match your GitHub Pages URL
- `use_directory_urls: false`: Creates `.html` files instead of directories
- `repo_url`: Links to your repository

### GitHub Pages Settings

To verify GitHub Pages is enabled:

1. Go to repository settings: https://github.com/ibm-mas/mas-select/settings/pages
2. Ensure **Source** is set to `gh-pages` branch
3. The site should be published at: `<live site URL>`

## Troubleshooting

### Deployment Fails

**Error:** `Permission denied (publickey)`

**Solution:** Ensure you have SSH keys set up or use HTTPS authentication
```bash
# Check remote URL
git remote -v

# If using SSH, ensure keys are configured
# If using HTTPS, you may need to authenticate
```

**Error:** `gh-pages branch not found`

**Solution:** MkDocs will create it automatically on first deployment
```bash
python3 -m mkdocs gh-deploy --force
```

### Site Not Updating

**Issue:** Changes don't appear on live site

**Solutions:**
1. **Wait 1-2 minutes** - GitHub Pages takes time to rebuild
2. **Clear browser cache** - Hard refresh (Cmd+Shift+R on Mac)
3. **Check deployment status:**
   ```bash
   git log gh-pages -1
   ```
4. **Verify GitHub Pages is enabled** in repository settings

### Build Warnings

**Warning:** `WARNING - A relative path to 'file.md' is included in the 'nav' configuration`

**Solution:** Ensure all files referenced in `mkdocs.yml` exist in `docs/`

**Warning:** `WARNING - The following pages exist in the docs directory, but are not included in the "nav" configuration`

**Solution:** These pages are accessible but not in the navigation menu. Add them to `mkdocs.yml` if needed.

### Uncommitted Changes

**Issue:** Deployment script warns about uncommitted changes

**Solution:**
```bash
# Commit changes first
git add .
git commit -m "docs: describe your changes"
git push origin master

# Then deploy
python3 -m mkdocs gh-deploy --force
```

## Verification

### After Deployment

1. **Check the live site:**
   - Visit: `<live site URL>`
   - Verify your changes appear
   - Test navigation and links

2. **Check the gh-pages branch:**
   ```bash
   git checkout gh-pages
   ls -la
   git checkout master
   ```

3. **View deployment history:**
   ```bash
   git log gh-pages --oneline -10
   ```

## Best Practices

### Before Deploying

1. ✅ **Test locally** using `mkdocs serve`
2. ✅ **Review all changes** in the browser
3. ✅ **Check for broken links** and images
4. ✅ **Commit to master branch** first
5. ✅ **Write descriptive commit messages**

### During Deployment

1. ✅ **Use `--force` flag** to ensure clean deployment
2. ✅ **Monitor the output** for errors
3. ✅ **Wait for completion** before closing terminal

### After Deployment

1. ✅ **Verify the live site** immediately
2. ✅ **Test on different browsers** if major changes
3. ✅ **Check mobile responsiveness** if layout changes
4. ✅ **Document significant changes** in commit messages

## Rollback Procedure

If you need to rollback to a previous version:

```bash
# 1. Find the commit you want to rollback to
git log gh-pages --oneline

# 2. Reset gh-pages to that commit
git checkout gh-pages
git reset --hard <commit-hash>
git push origin gh-pages --force

# 3. Return to master branch
git checkout master
```

## Automation Options

### GitHub Actions (Future Enhancement)

You can automate deployment using GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy Documentation
on:
  push:
    branches:
      - master
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: 3.x
      - run: pip install -r requirements.txt
      - run: mkdocs gh-deploy --force
```

This would automatically deploy whenever you push to `master`.

## Quick Reference Commands

```bash
# Deploy to GitHub Pages
python3 -m mkdocs gh-deploy --force

# Deploy using build script
./scripts/build.sh deploy

# Test locally before deploying
python3 -m mkdocs serve -a localhost:8001

# Build without deploying
python3 -m mkdocs build --clean

# Check MkDocs version
python3 -m mkdocs --version

# View deployment history
git log gh-pages --oneline -10

# Check current branch
git branch

# View remote URLs
git remote -v
```

## Support and Resources

### Documentation
- **MkDocs Documentation:** https://www.mkdocs.org/
- **MkDocs GitHub Pages Guide:** https://www.mkdocs.org/user-guide/deploying-your-docs/
- **Carbon Theme:** https://github.com/carbon-design-system/mkdocs-carbon

### Repository
- **Source Code:** https://github.com/ibm-mas/mas-select
- **Live Site:** `<live site URL>`
- **Issues:** https://github.com/ibm-mas/mas-select/issues

### Local Documentation
- **Local Deployment Guide:** `LOCAL_DEPLOYMENT_GUIDE.md`
- **Build Script:** `scripts/build.sh`
- **Configuration:** `mkdocs.yml`

## Summary

**To deploy to the live server:**

```bash
# Simple one-command deployment
python3 -m mkdocs gh-deploy --force
```

**Live site will be available at:**
`<live site URL>`/index.html

**Deployment takes:** 1-2 minutes to go live after pushing

---

**Made with Bob** 🤖