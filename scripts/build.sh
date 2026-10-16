#!/bin/bash

# User-Centered Documentation Build Script
# This script automates the process of building and deploying the documentation site

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}ℹ ${NC}$1"
}

print_success() {
    echo -e "${GREEN}✓ ${NC}$1"
}

print_warning() {
    echo -e "${YELLOW}⚠ ${NC}$1"
}

print_error() {
    echo -e "${RED}✗ ${NC}$1"
}

print_header() {
    echo ""
    echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
    echo ""
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check prerequisites
check_prerequisites() {
    print_header "Checking Prerequisites"
    
    local missing_deps=0
    
    # Check Python
    if command_exists python3; then
        print_success "Python 3 is installed: $(python3 --version)"
    else
        print_error "Python 3 is not installed"
        missing_deps=1
    fi
    
    # Check pip
    if command_exists pip3; then
        print_success "pip3 is installed"
    else
        print_error "pip3 is not installed"
        missing_deps=1
    fi
    
    # Check git
    if command_exists git; then
        print_success "Git is installed: $(git --version)"
    else
        print_error "Git is not installed"
        missing_deps=1
    fi
    
    # Check MkDocs
    if python3 -m mkdocs --version >/dev/null 2>&1; then
        print_success "MkDocs is installed: $(python3 -m mkdocs --version)"
    else
        print_warning "MkDocs is not installed"
        print_info "Installing MkDocs and dependencies..."
        pip3 install -r requirements.txt
        print_success "MkDocs installed successfully"
    fi
    
    if [ $missing_deps -eq 1 ]; then
        print_error "Missing required dependencies. Please install them and try again."
        exit 1
    fi
    
    echo ""
}

# Function to clean build directory
clean_build() {
    print_header "Cleaning Build Directory"
    
    if [ -d "site" ]; then
        print_info "Removing existing site directory..."
        rm -rf site/
        print_success "Site directory cleaned"
    else
        print_info "No existing site directory found"
    fi
    
    echo ""
}

# Function to build the site
build_site() {
    print_header "Building Documentation Site"

    # Run link checker before build
    if [ -f "scripts/link_checker.py" ]; then
        print_info "Running link checker..."
        python3 scripts/link_checker.py
    fi
    
    # Create a temporary file to track file changes
    local temp_file_list="/tmp/mkdocs_files_before.txt"
    local temp_file_list_after="/tmp/mkdocs_files_after.txt"
    
    # Capture list of files before build
    if [ -d "site" ]; then
        find site -type f > "$temp_file_list" 2>/dev/null || touch "$temp_file_list"
    else
        touch "$temp_file_list"
    fi
    
    print_info "Running MkDocs build..."
    if python3 -m mkdocs build --clean --verbose 2>&1 | tee /tmp/mkdocs_build.log; then
        print_success "Site built successfully"
        
        # Capture list of files after build
        find site -type f > "$temp_file_list_after" 2>/dev/null
        
        # Count files processed
        local total_files=$(wc -l < "$temp_file_list_after" | tr -d ' ')
        
        # Count source markdown files
        local source_files=$(find docs -type f \( -name "*.md" -o -name "*.markdown" \) 2>/dev/null | wc -l | tr -d ' ')
        
        # Count changed files (files with different timestamps or new files)
        local changed_files=0
        local unchanged_files=0
        
        if [ -s "$temp_file_list" ]; then
            # Compare file modification times
            while IFS= read -r file; do
                if [ -f "$file" ]; then
                    # Check if file was modified in last minute (during build)
                    if [ $(find "$file" -mmin -1 2>/dev/null | wc -l) -gt 0 ]; then
                        ((changed_files++))
                    else
                        ((unchanged_files++))
                    fi
                fi
            done < "$temp_file_list_after"
        else
            # All files are new if no previous build existed
            changed_files=$total_files
        fi
        
        # Display file processing statistics
        echo ""
        print_header "Build Statistics"
        print_info "Source files processed: ${BLUE}${source_files}${NC} markdown files"
        print_info "Total output files: ${BLUE}${total_files}${NC} files"
        print_success "Changed/New files: ${GREEN}${changed_files}${NC} files"
        
        if [ $unchanged_files -gt 0 ]; then
            print_info "Unchanged files: ${BLUE}${unchanged_files}${NC} files"
        fi
        
        # List some of the processed files
        echo ""
        print_info "Sample of processed files:"
        find docs -type f \( -name "*.md" -o -name "*.markdown" \) 2>/dev/null | head -10 | while read -r file; do
            echo "  • $file"
        done
        
        if [ $source_files -gt 10 ]; then
            print_info "... and $((source_files - 10)) more files"
        fi
        
        # Check for warnings
        if grep -q "WARNING" /tmp/mkdocs_build.log; then
            echo ""
            print_warning "Build completed with warnings. Check the output above."
        fi
        
        # Clean up temp files
        rm -f "$temp_file_list" "$temp_file_list_after"
    else
        print_error "Build failed. Check the errors above."
        rm -f "$temp_file_list" "$temp_file_list_after"
        exit 1
    fi
    
    echo ""
}

# Function to generate PDF
generate_pdf() {
    print_header "Generating PDF Documentation"
    
    if [ ! -d "site" ]; then
        print_error "Site directory not found. Please build the site first."
        exit 1
    fi
    
    # Check if Playwright is installed
    if ! python3 -c "import playwright" 2>/dev/null; then
        print_warning "Playwright is not installed"
        print_info "Installing Playwright..."
        pip3 install playwright
        python3 -m playwright install chromium
        print_success "Playwright installed successfully"
    fi
    
    print_info "Running PDF generation script..."
    if python3 scripts/generate_pdf_playwright.py; then
        print_success "PDF generated successfully"
    else
        print_error "PDF generation failed"
        exit 1
    fi
    
    echo ""
}

# Function to serve site locally
serve_site() {
    print_header "Starting Local Development Server"
    
    print_info "Starting MkDocs development server..."
    print_info "Site will be available at: http://127.0.0.1:8000"
    print_info "Press Ctrl+C to stop the server"
    echo ""
    
    python3 -m mkdocs serve
}

# Function to deploy to GitHub Pages
deploy_site() {
    print_header "Deploying to GitHub Pages"
    
    # Check if there are uncommitted changes
    if ! git diff-index --quiet HEAD --; then
        print_warning "You have uncommitted changes"
        read -p "Do you want to commit them before deploying? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            read -p "Enter commit message: " commit_msg
            git add -A
            git commit -m "$commit_msg"
            print_info "Pushing master branch (IBM Vault Radar pre-push scan may take ~60-90s)..."
            git push origin master
            print_success "Changes committed and pushed to master branch"
        fi
    fi
    
    print_info "Deploying to gh-pages branch (IBM Vault Radar scan will run in background)..."
    if python3 -m mkdocs gh-deploy; then
        print_success "Site deployed successfully to GitHub Pages"
        print_info "Deployed to the gh-pages branch"
        print_info "Note: It may take 1-2 minutes for changes to appear"
    else
        print_error "Deployment failed"
        exit 1
    fi
    
    echo ""
}

# Function to run full workflow
full_workflow() {
    check_prerequisites
    clean_build
    build_site
    
    print_header "Build Complete"
    print_success "Documentation site built successfully"
    
    read -p "Do you want to deploy to GitHub Pages? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        deploy_site
    else
        print_info "Skipping deployment"
        print_info "To deploy later, run: ./scripts/build.sh deploy"
    fi
}

# Function to show usage
show_usage() {
    cat << EOF
User-Centered Documentation Build Script

Usage: ./scripts/build.sh [command]

Commands:
    build       Build the documentation site
    serve       Start local development server
    deploy      Deploy to GitHub Pages
    pdf         Generate PDF documentation
    clean       Clean build directory
    check       Check prerequisites
    full        Run full workflow (build + optional deploy)
    help        Show this help message

Examples:
    ./scripts/build.sh build        # Build the site
    ./scripts/build.sh serve        # Start development server
    ./scripts/build.sh deploy       # Deploy to GitHub Pages
    ./scripts/build.sh pdf          # Generate PDF from built site
    ./scripts/build.sh full         # Build and optionally deploy

If no command is specified, 'full' is assumed.

EOF
}

# Main script logic
main() {
    # Change to repository root directory (parent of scripts directory)
    cd "$(dirname "$0")/.."
    
    # Parse command
    case "${1:-full}" in
        build)
            check_prerequisites
            build_site
            ;;
        serve)
            check_prerequisites
            serve_site
            ;;
        deploy)
            check_prerequisites
            clean_build
            build_site
            deploy_site
            ;;
        pdf)
            check_prerequisites
            generate_pdf
            ;;
        clean)
            clean_build
            ;;
        check)
            check_prerequisites
            ;;
        full)
            full_workflow
            ;;
        help|--help|-h)
            show_usage
            ;;
        *)
            print_error "Unknown command: $1"
            echo ""
            show_usage
            exit 1
            ;;
    esac
}

# Run main function
main "$@"

# Made with Bob