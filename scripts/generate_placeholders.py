#!/usr/bin/env python3
"""
Generate placeholder topics for Maximo Application Suite Select documentation based on IA structure.
"""

import os
from pathlib import Path

# Base directory for docs
DOCS_DIR = Path(__file__).parent.parent / "docs"

# IA Structure with topics
IA_STRUCTURE = {
    "start-fast": {
        "first-task": [
            ("supervisor-first-task.md", "How do I assign and track work?", "Supervisor"),
            ("clerk-first-task.md", "How do I issue a part?", "Inventory Clerk"),
            ("admin-first-task.md", "How do I load user data?", "Administrator"),
        ],
        "basics": [
            ("what-is-asset.md", "What is an asset?", "Basic concept"),
            ("what-is-work-order.md", "What is a work order?", "Basic concept"),
            ("what-is-location.md", "What is a location?", "Basic concept"),
        ],
    },
    "get-work-done": {
        "plan-work": [
            ("plan-recurring-maintenance.md", "How do I plan recurring maintenance?", "PM, Master PM, Job Plans"),
            ("decide-what-work.md", "How do I decide what work should be done?", "Job Plans"),
            ("schedule-work.md", "How do I schedule work?", "Calendar, Routes"),
        ],
        "complete-work": [
            ("find-work.md", "How do I find my work?", "Work Queue Manager, RBA"),
            ("complete-job.md", "How do I complete a job?", "Work Order, Service Requests"),
            ("cant-complete-task.md", "What if I can't complete a task?", "Troubleshooting"),
        ],
        "manage-assets": [
            ("track-asset-history.md", "How do I track asset history?", "Asset application"),
            ("classify-assets.md", "How do I classify assets?", "Classifications"),
            ("asset-fails.md", "What happens when an asset fails?", "Failure Codes"),
        ],
        "manage-inventory": [
            ("issue-parts.md", "How do I issue parts to a job?", "Issues and Transfers"),
            ("track-stock-levels.md", "How do I track stock levels?", "Inventory, Storerooms"),
            ("stock-incorrect.md", "What happens if stock is incorrect?", "Count Books"),
        ],
        "monitor-respond": [
            ("detect-issues-early.md", "How do I detect issues early?", "Condition Monitoring"),
            ("what-metrics-matter.md", "What metrics matter?", "KPI Manager/Viewer"),
            ("act-on-alerts.md", "How do I act on alerts?", "Operational Dashboards"),
        ],
        "organize-people": [
            ("assign-right-people.md", "How do I assign the right people?", "Labor, Crafts, Crews"),
            ("standardize-data.md", "How do I standardize data?", "Domains"),
        ],
        "setup-control": [
            ("get-data-into-system.md", "How do I get data into the system?", "Data-loading tool"),
            ("automate-communication.md", "How do I automate communication?", "Communication Templates, Push Notifications"),
        ],
    },
    "improve-results": {
        "improve-work": [
            ("reduce-downtime.md", "How do I reduce downtime?", "Best practices"),
            ("improve-completion-rates.md", "How do I improve completion rates?", "Best practices"),
        ],
        "improve-data": [
            ("data-looks-wrong.md", "Why does my data look wrong?", "Data quality"),
            ("make-data-reliable.md", "How do I make data reliable?", "Data quality"),
        ],
        "improve-adoption": [
            ("technicians-not-using.md", "Why aren't technicians using the system?", "Adoption"),
            ("simplify-workflows.md", "How do I simplify workflows?", "Adoption"),
        ],
    },
    "work-smarter": {
        "ai-automation": [
            ("ai-improve-maintenance.md", "How can AI improve maintenance?", "AI features"),
            ("what-can-automate.md", "What can I automate?", "Automation"),
        ],
        "scale-operation": [
            ("manage-more-assets.md", "How do I manage more assets?", "Scaling"),
            ("standardize-across-teams.md", "How do I standardize across teams?", "Scaling"),
        ],
        "insights-outcomes": [
            ("data-into-decisions.md", "How do I turn data into decisions?", "Analytics"),
            ("optimize-performance.md", "How do I optimize performance?", "Analytics"),
        ],
    },
}


def create_placeholder(filepath, title, context, related_topics=None):
    """Create a placeholder topic file."""
    content = f"""# {title}

**Placeholder — Content to be completed**

This topic will cover: {context}

**Information needed**: 
- Detailed workflow from Maximo Manage documentation
- Step-by-step instructions
- Screenshots or examples
- Common issues and troubleshooting

## Related topics

"""
    
    if related_topics:
        for topic in related_topics:
            content += f"- [{topic['title']}]({topic['link']})\n"
    else:
        content += "- [Get answers](../../get-answers/index.md)\n"
    
    # Create directory if it doesn't exist
    filepath.parent.mkdir(parents=True, exist_ok=True)
    
    # Write file
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Created: {filepath.relative_to(DOCS_DIR)}")


def generate_all_placeholders():
    """Generate all placeholder topics."""
    print("Generating placeholder topics for Maximo Application Suite Select documentation...\n")
    
    for section, subsections in IA_STRUCTURE.items():
        print(f"\n📁 {section}/")
        for subsection, topics in subsections.items():
            print(f"  📁 {subsection}/")
            for filename, title, context in topics:
                filepath = DOCS_DIR / section / subsection / filename
                if not filepath.exists():
                    create_placeholder(filepath, title, context)
                else:
                    print(f"  ⏭️  Skipped (exists): {filename}")
    
    print("\n✅ Placeholder generation complete!")


if __name__ == "__main__":
    generate_all_placeholders()

# Made with Bob
