# MAS Select Help Center

User-facing documentation for **IBM Maximo Application Suite Select** — a task-based, search-first help experience designed for field technicians, supervisors, inventory clerks, and administrators.

## Repository Structure

```
mas-select/
├── docs/                    # Documentation source files (Markdown)
│   ├── get-work-done/      # Task-based content by user journey
│   ├── improve-results/    # Optimization and troubleshooting
│   ├── work-smarter/       # Scaling and standardization
│   ├── start-fast/         # Onboarding and basics
│   ├── get-answers/        # Quick reference pages
│   └── assets/             # JS, CSS, images
├── scripts/                # Build and utility scripts
├── tools/                  # Theme overrides and templates
├── mkdocs.yml              # MkDocs configuration
├── requirements.txt        # Python dependencies
└── README.md               # This file
```

## Quick Start

See **[LOCAL_DEPLOYMENT_GUIDE.md](LOCAL_DEPLOYMENT_GUIDE.md)** for detailed setup instructions.

### Quick Setup

1. **Install dependencies:**
   ```bash
   pip3 install -r requirements.txt
   ```

2. **Serve locally:**
   ```bash
   python3 -m mkdocs serve -a 127.0.0.1:8001
   ```
   Then open: http://localhost:8001/mas-select/

3. **Build site:**
   ```bash
   python3 -m mkdocs build
   ```

## Deployment

See **[GITHUB_PAGES_DEPLOYMENT_GUIDE.md](GITHUB_PAGES_DEPLOYMENT_GUIDE.md)** for deployment instructions.

## Working with Content

### Editing Content

1. Edit Markdown files in `docs/`
2. Test locally with `python3 -m mkdocs serve`
3. Commit and push changes

### Navigation Structure

The navigation in `mkdocs.yml` is **journey-based and intentional**.

## Tech Stack

- **MkDocs** with Carbon Design System styling
- **Custom JavaScript** for role filtering, search, and tooltips
- **Custom CSS** for layout and Carbon token alignment
- **Markdown** for all documentation content

## Key Features

- **Role-based filtering** — Users can filter content by their role (technician, supervisor, clerk, administrator)
- **Search-first design** — Optimized for direct search queries
- **Journey-based navigation** — Organized by job-to-be-done rather than system menus
- **Question-based page titles** — Pages answer user questions directly

## Project Status

Pre-release documentation.