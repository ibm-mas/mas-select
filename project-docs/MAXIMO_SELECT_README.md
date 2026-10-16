# Maximo Application Suite Select Documentation Project

## Overview

This is a journey-based, Q&A-driven documentation set for **Maximo Application Suite Select** — a simplified, ready-to-use SaaS maintenance management system for mid-market organizations.

## Documentation Approach

### Journey-Based Structure

Content is organized around **user journeys** and **jobs to be done**, not applications or traditional task/concept/reference structure.

### Five Main Journeys

1. **🟦 Start Fast** — Get from zero to first value in minutes
2. **🟩 Get Work Done** — Complete everyday maintenance tasks
3. **🟨 Improve Results** — Make your maintenance program more efficient
4. **🟧 Work Smarter** — Use AI, automation, and insights to scale
5. **🟥 Get Answers** — Find quick answers to common questions

## Content Model

Every topic follows a **Q&A format**:

```markdown
# [Natural user question]

[Clear, direct answer]

## When to use this
[Optional: Context]

## What happens next
[Optional: Outcomes]

## Related topics
- [Links to related content]
```

## Key Principles

1. **User-centric** — Focus on what users need to do, not system features
2. **Self-contained** — Each topic stands alone
3. **Connected** — Strong linking between related topics
4. **Progressive** — Users can move from basic to advanced naturally
5. **Scannable** — Easy to find answers quickly

## Source Materials (Priority Order)

1. **PRFAQ** (`PRFAQ MAS SaaS Select (Draft).docx`) — Primary source for user goals and positioning
2. **IA Document** (`IA_Maximo_Select.docx`) — Structural foundation
3. **Maximo Manage Documentation** — Reference for workflows
   - https://www.ibm.com/docs/en/masv-and-l/maximo-manage/cd
4. **External Sources** — Only to fill gaps (e.g., maximosecrets.com)

## What's Included

### Product Scope

Maximo Application Suite Select includes:
- Work order management
- Asset tracking
- Preventive maintenance
- Inventory management
- Mobile access
- Basic reporting and dashboards

### What's NOT Included

- Installation or setup (it's SaaS)
- Configuration or customization
- System administration
- Developer content

## Current Status

### ✅ Completed

- Journey-based IA structure created
- Directory structure established
- Navigation configured in mkdocs.yml
- Placeholder topics generated for all sections
- Main index and overview pages created
- "Get Answers" aggregation page created

### 🚧 In Progress

All topics are currently **placeholders** marked as "Content to be completed"

### 📝 Next Steps

1. Research and write content for each topic using source materials
2. Add screenshots and examples
3. Build strong cross-linking between topics
4. Test user flows and navigation
5. Review for IBM Style compliance

## File Structure

```
user_centered_doc/
├── docs/
│   ├── index.md                          # Main landing page
│   ├── start-fast/
│   │   ├── what-can-i-do/               # Product overview
│   │   ├── first-task/                   # Role-based first tasks
│   │   └── basics/                       # Core concepts
│   ├── get-work-done/
│   │   ├── plan-work/                    # PM, scheduling
│   │   ├── complete-work/                # Technician workflows
│   │   ├── manage-assets/                # Asset tracking
│   │   ├── manage-inventory/             # Parts management
│   │   ├── monitor-respond/              # Dashboards, alerts
│   │   ├── organize-people/              # Labor, crews
│   │   └── setup-control/                # Admin tasks
│   ├── improve-results/
│   │   ├── improve-work/                 # Efficiency tips
│   │   ├── improve-data/                 # Data quality
│   │   └── improve-adoption/             # User adoption
│   ├── work-smarter/
│   │   ├── ai-automation/                # AI features
│   │   ├── scale-operation/              # Scaling guidance
│   │   └── insights-outcomes/            # Analytics
│   └── get-answers/
│       └── index.md                      # Q&A aggregation
├── scripts/
│   ├── generate_placeholders.py          # Generate placeholder topics
│   ├── build.sh                          # Build and deploy
│   └── FIRST_TIME_SETUP.sh              # Initial setup
├── mkdocs.yml                            # Site configuration
├── PRFAQ MAS SaaS Select (Draft).docx   # Product context
├── IA_Maximo_Select.docx                # Information architecture
└── MAXIMO_SELECT_README.md              # This file
```

## Working with This Documentation

### Building Locally

```bash
# First time setup
./scripts/FIRST_TIME_SETUP.sh

# Build the site
./scripts/build.sh build

# Serve locally (http://127.0.0.1:8000)
./scripts/build.sh serve
```

### Creating New Topics

1. Use the Q&A format template
2. Start with the user's question as the title
3. Provide a clear, direct answer
4. Add related topics links
5. Mark as placeholder if information is incomplete

### Writing Guidelines

- Use plain language
- Use active voice
- Be clear, direct, and concise
- Focus on user goals, not system features
- Avoid jargon and system-centric explanations

### Content Transformation Rules

When adapting from Maximo Manage docs:

**REMOVE:**
- Installation, configuration, customization
- System administration
- Environment setup

**SIMPLIFY:**
- Complex workflows
- Technical jargon

**REFOCUS ON:**
- What the user needs to do
- Why it matters
- Clear outcomes

## Target Users

### Primary Personas

1. **Maintenance Technicians** — Complete work orders, report time
2. **Maintenance Supervisors** — Plan, assign, track work
3. **Inventory Clerks** — Manage parts and supplies
4. **Plant/Operations Managers** — Monitor performance
5. **Light Administrators** — Load data, manage users

### Organization Profile

- $10-30M revenue
- 60-200 maintained assets
- 1-2 sites
- Small maintenance teams
- Limited IT resources
- Need fast time-to-value

## Success Criteria

Users should be able to:
1. Start with a simple question
2. Get a clear answer quickly
3. Move naturally to the next level of understanding
4. Progress from basic to advanced without gaps

## Support

- **Product help**: Click (?) icon in Maximo Application Suite Select
- **Field help**: Click field name or press Alt+F1
- **Documentation issues**: Submit via GitHub

---

**Made with Bob** 🤖