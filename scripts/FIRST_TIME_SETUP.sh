#!/bin/bash

# User-Centered Documentation - First Time Setup Script
# This script helps new users set up the project for the first time

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
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
    echo -e "${CYAN}═══════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}  $1${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════${NC}"
    echo ""
}

print_step() {
    echo -e "${MAGENTA}▶ ${NC}$1"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Welcome message
show_welcome() {
    clear
    print_header "Welcome to User-Centered Documentation!"
    echo -e "${CYAN}This script will help you set up the project for the first time.${NC}"
    echo ""
    echo "What this script will do:"
    echo "  1. Check system prerequisites (Python, pip, git)"
    echo "  2. Install required Python packages (MkDocs, mkdocs-carbon)"
    echo "  3. Verify the project structure"
    echo "  4. Build the documentation site"
    echo "  5. Show you how to use the project"
    echo ""
    read -p "Press Enter to continue..."
    echo ""
}

# Function to check and install prerequisites
check_and_install_prerequisites() {
    print_header "Step 1: Checking System Prerequisites"
    
    local missing_critical=0
    
    # Check Python
    print_step "Checking Python 3..."
    if command_exists python3; then
        local python_version=$(python3 --version)
        print_success "Python 3 is installed: $python_version"
    else
        print_error "Python 3 is not installed"
        print_info "Please install Python 3 from: https://www.python.org/downloads/"
        missing_critical=1
    fi
    
    # Check pip
    print_step "Checking pip3..."
    if command_exists pip3; then
        print_success "pip3 is installed"
    else
        print_error "pip3 is not installed"
        print_info "pip3 usually comes with Python. Try reinstalling Python."
        missing_critical=1
    fi
    
    # Check git
    print_step "Checking Git..."
    if command_exists git; then
        local git_version=$(git --version)
        print_success "Git is installed: $git_version"
    else
        print_error "Git is not installed"
        print_info "Please install Git from: https://git-scm.com/downloads"
        missing_critical=1
    fi
    
    if [ $missing_critical -eq 1 ]; then
        echo ""
        print_error "Critical dependencies are missing. Please install them and run this script again."
        exit 1
    fi
    
    echo ""
    print_success "All system prerequisites are installed!"
    echo ""
}

# Function to install Python dependencies
install_python_dependencies() {
    print_header "Step 2: Installing Python Dependencies"
    
    print_step "Installing MkDocs and required packages..."
    
    if pip3 install -r requirements.txt; then
        print_success "Python dependencies installed successfully"
    else
        print_error "Failed to install Python dependencies"
        print_info "Try running: pip3 install --user -r requirements.txt"
        exit 1
    fi
    
    # Verify installation
    print_step "Verifying MkDocs installation..."
    if python3 -m mkdocs --version >/dev/null 2>&1; then
        local mkdocs_version=$(python3 -m mkdocs --version)
        print_success "MkDocs verified: $mkdocs_version"
    else
        print_error "MkDocs installation verification failed"
        exit 1
    fi
    
    echo ""
}

# Function to verify project structure
verify_project_structure() {
    print_header "Step 3: Verifying Project Structure"
    
    local required_files=("mkdocs.yml" "requirements.txt" "scripts/build.sh")
    local missing_files=0
    
    for file in "${required_files[@]}"; do
        print_step "Checking for $file..."
        if [ -f "$file" ]; then
            print_success "Found $file"
        else
            print_error "Missing $file"
            missing_files=1
        fi
    done
    
    if [ $missing_files -eq 1 ]; then
        print_error "Some required files are missing. Make sure you're in the project root directory."
        exit 1
    fi
    
    # Check for docs directory
    print_step "Checking for docs directory..."
    if [ -d "docs" ]; then
        print_success "Found docs directory"
    else
        print_error "Missing docs directory"
        exit 1
    fi
    
    echo ""
    print_success "Project structure verified!"
    echo ""
}

# Function to make build script executable
setup_build_script() {
    print_header "Step 4: Setting Up Build Script"
    
    print_step "Making build.sh executable..."
    if chmod +x scripts/build.sh; then
        print_success "build.sh is now executable"
    else
        print_warning "Could not make build.sh executable. You may need to use 'bash scripts/build.sh' instead of './scripts/build.sh'"
    fi
    
    echo ""
}

# Function to build the site for the first time
initial_build() {
    print_header "Step 5: Building Documentation Site"
    
    print_info "This will build the documentation site for the first time..."
    echo ""
    
    if python3 -m mkdocs build --clean; then
        print_success "Documentation site built successfully!"
        print_info "Site files are in the 'site' directory"
    else
        print_error "Build failed. Please check the errors above."
        exit 1
    fi
    
    echo ""
}

# Function to show next steps
show_next_steps() {
    print_header "Setup Complete! 🎉"
    
    print_success "Your User-Centered Documentation site is ready to use!"
    echo ""
    echo -e "${CYAN}Quick Start Guide:${NC}"
    echo ""
    echo "1. View the documentation locally:"
    echo -e "   ${GREEN}./scripts/build.sh serve${NC}"
    echo "   Then open: http://127.0.0.1:8000"
    echo ""
    echo "2. Build the site:"
    echo -e "   ${GREEN}./scripts/build.sh build${NC}"
    echo ""
    echo "3. Deploy to GitHub Pages:"
    echo -e "   ${GREEN}./scripts/build.sh deploy${NC}"
    echo ""
    echo "4. Generate PDF documentation:"
    echo -e "   ${GREEN}./scripts/build.sh pdf${NC}"
    echo ""
    echo "5. See all available commands:"
    echo -e "   ${GREEN}./scripts/build.sh help${NC}"
    echo ""
    echo -e "${CYAN}Recommended Next Steps:${NC}"
    echo ""
    echo "  • Run './scripts/build.sh serve' to preview the documentation"
    echo "  • Edit files in the 'docs' directory to update content"
    echo "  • Update mkdocs.yml to modify navigation"
    echo "  • Commit your changes to Git"
    echo "  • Deploy to GitHub Pages when ready"
    echo ""
    echo -e "${YELLOW}Important Configuration:${NC}"
    echo "  • Update site_url in mkdocs.yml with your GitHub Pages URL"
    echo "  • Update repo_name and repo_url in mkdocs.yml"
    echo "  • Update site_author in mkdocs.yml"
    echo "  • Update deployment URL in scripts/build.sh (deploy_site function)"
    echo ""
    echo -e "${YELLOW}Need Help?${NC}"
    echo "  • Check the documentation at: http://127.0.0.1:8000 (after running serve)"
    echo "  • Review mkdocs.yml for configuration"
    echo "  • Run './scripts/build.sh help' for command reference"
    echo "  • Check README.md for detailed instructions"
    echo ""
    
    read -p "Would you like to start the development server now? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo ""
        print_info "Starting development server..."
        print_info "Press Ctrl+C to stop the server when you're done"
        echo ""
        sleep 2
        ./scripts/build.sh serve
    else
        echo ""
        print_info "You can start the server anytime with: ./scripts/build.sh serve"
        echo ""
    fi
}

# Main setup function
main() {
    # Change to repository root directory (parent of scripts directory)
    cd "$(dirname "$0")/.."
    
    # Run setup steps
    show_welcome
    check_and_install_prerequisites
    install_python_dependencies
    verify_project_structure
    setup_build_script
    initial_build
    show_next_steps
}

# Run main function
main

# Made with Bob