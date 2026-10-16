# MAS Select Help Center

User-facing documentation for **IBM Maximo Application Suite Select** — a task-based, search-first help experience designed for field technicians, supervisors, inventory clerks, and administrators.

## Project Context

For detailed project information, working preferences, and AI guidance, see the **[wiki](_context/wiki/index.md)**:

- **[project.md](_context/wiki/project.md)** — What the project is, goals, users, IA model, tech stack
- **[preferences.md](_context/wiki/preferences.md)** — Working standards, tone, content conventions, AI guidance

## Repository Structure

```
mas_select/
├── docs/                    # Documentation source files (Markdown)
│   ├── get-work-done/      # Task-based content by user journey
│   ├── improve-results/    # Optimization and troubleshooting
│   ├── work-smarter/       # Scaling and standardization
│   ├── start-fast/         # Onboarding and basics
│   ├── get-answers/        # Quick reference pages
│   └── assets/             # JS, CSS, images
├── _context/               # Project context and AI guidance
│   ├── wiki/               # Project documentation
│   └── prompts/            # Content creation templates
├── scripts/                # Build and utility scripts
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
   Then open: http://localhost:8001/WCE-ID/mas_select/

3. **Build site:**
   ```bash
   python3 -m mkdocs build
   ```

## Deployment

See **[GITHUB_PAGES_DEPLOYMENT_GUIDE.md](GITHUB_PAGES_DEPLOYMENT_GUIDE.md)** for deployment instructions.

**Live Site:** https://pages.github.ibm.com/WCE-ID/mas_select/

## Working with Content

### Creating New Topics

See **[_context/prompts/new-topic.md](_context/prompts/new-topic.md)** for the content creation template.

### Editing Content

1. Edit Markdown files in `docs/`
2. Follow conventions in **[preferences.md](_context/wiki/preferences.md)**
3. Test locally with `mkdocs serve`
4. Commit and push changes

### Navigation Structure

The navigation in `mkdocs.yml` is **journey-based and intentional**. Do not reorganize without understanding the IA model. See [project.md](_context/wiki/project.md) for details.

## Tech Stack

- **MkDocs Material** with Carbon theme
- **Custom JavaScript** for role filtering, search, tooltips
- **Custom CSS** for visual enhancements
- **Markdown** for all content

See [project.md](_context/wiki/project.md) for complete tech details.

## Key Features

- **Role-based filtering** — Users can filter content by their role
- **Search-first design** — Optimized for how users actually search
- **Journey-based navigation** — Organized by job-to-be-done, not features
- **Question-based page titles** — Pages answer user questions directly

## Working with AI

This project is designed to work with AI assistants. See **[preferences.md](_context/wiki/preferences.md)** for:

- Tone and voice guidelines
- Content conventions
- IA rules
- What's useful vs. what to avoid

## Project Status

Pre-release. MAS Select has not yet launched publicly.

---

**For detailed guidance, always check the [wiki](_context/wiki/index.md) first.**