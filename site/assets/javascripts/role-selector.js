// Role-based content personalization for homepage
(function() {
    'use strict';
    
    // Role definitions with their associated content
    const roles = {
        technician: {
            name: 'Technician',
            icon: '👷',
            image: 'images/technician_final.png',
            color: '#0f62fe',
            firstTask: {
                title: 'Complete a work order',
                url: 'start-fast/first-task/technician-first-task.html',
                description: 'Learn how to find, complete, and report on your assigned work'
            },
            relevantSections: [
                { name: 'Complete work', highlight: true },
                { name: 'Manage inventory', highlight: false },
                { name: 'Basic concepts', highlight: false }
            ],
            quickLinks: [
                { title: 'Find work', url: 'get-work-done/complete-work/find-work.html' },
                { title: 'Complete work order', url: 'get-work-done/complete-work/complete-job.html' },
                { title: "Can't complete task", url: 'get-work-done/complete-work/cant-complete-task.html' }
            ]
        },
        supervisor: {
            name: 'Supervisor',
            icon: '👨‍💼',
            image: 'images/supervisor_final.png',
            color: '#198038',
            firstTask: {
                title: 'Assign and track work',
                url: 'start-fast/first-task/supervisor-first-task.html',
                description: 'Learn how to create work orders, assign them, and monitor progress'
            },
            relevantSections: [
                { name: 'Plan work', highlight: true },
                { name: 'Organize people and work', highlight: true },
                { name: 'Monitor and respond', highlight: true }
            ],
            quickLinks: [
                { title: 'Plan recurring maintenance', url: 'get-work-done/plan-work/plan-recurring-maintenance.html' },
                { title: 'Assign people', url: 'get-work-done/organize-people/assign-right-people.html' },
                { title: 'Detect issues early', url: 'get-work-done/monitor-respond/detect-issues-early.html' }
            ]
        },
        clerk: {
            name: 'Inventory Clerk',
            icon: '📦',
            image: 'images/inventory clerk.png',
            color: '#8a3ffc',
            firstTask: {
                title: 'Issue a part',
                url: 'start-fast/first-task/inventory-clerk-first-task.html',
                description: 'Learn how to issue parts, track inventory, and manage stock levels'
            },
            relevantSections: [
                { name: 'Manage inventory', highlight: true },
                { name: 'Complete work', highlight: false }
            ],
            quickLinks: [
                { title: 'Track stock levels', url: 'get-work-done/manage-inventory/track-stock-levels.html' },
                { title: 'Incorrect stock', url: 'get-work-done/manage-inventory/stock-incorrect.html' },
                { title: "Can't issue materials", url: 'get-work-done/manage-inventory/why-cant-issue-materials.html' }
            ]
        },
        administrator: {
            name: 'Administrator',
            icon: '⚙️',
            image: 'images/Admin_final.png',
            color: '#fa4d56',
            firstTask: {
                title: 'Load user data',
                url: 'start-fast/first-task/administrator-first-task.html',
                description: 'Learn how to import data, set up users, and configure the system'
            },
            relevantSections: [
                { name: 'Set up and control', highlight: true },
                { name: 'Organize people and work', highlight: true }
            ],
            quickLinks: [
                { title: 'Prepare data for import', url: 'get-work-done/setup-control/prepare-data-for-import.html' },
                { title: 'Correct load order', url: 'get-work-done/setup-control/correct-load-order.html' },
                { title: 'Fix import errors', url: 'get-work-done/setup-control/why-does-asset-import-fail.html' }
            ]
        }
    };
    
    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        // Only run on homepage
        if (!isHomepage()) return;
        
        // Check for saved role preference
        const savedRole = localStorage.getItem('mas-select-role');
        
        // Create role selector UI
        createRoleSelector();
        
        // If role is saved, apply it automatically
        if (savedRole && roles[savedRole]) {
            applyRolePersonalization(savedRole);
        }
    });
    
    function isHomepage() {
        // Check if we're on the homepage
        return window.location.pathname.endsWith('/') || 
               window.location.pathname.endsWith('/index.html') ||
               window.location.pathname.includes('/mas_select/index.html');
    }
    
    function createRoleSelector() {
        // Find the insertion point (after the search bar)
        const searchContainer = document.querySelector('.home-search-container');
        if (!searchContainer) return;
        
        // Create role selector container
        const selectorHTML = `
            <div class="role-selector-container">
                <div class="role-selector-title">Select your role to see personalized content</div>
                <p class="role-selector-subtitle">Get a personalized starting point based on your role.</p>
                <div class="role-selector-buttons">
                    <button class="role-button" data-role="technician">
                        <img src="images/technician_final.png" class="role-icon" alt="Technician" style="width: 54px; height: 54px;">
                        <span class="role-name">Technician</span>
                    </button>
                    <button class="role-button" data-role="supervisor">
                        <img src="images/supervisor_final.png" class="role-icon" alt="Supervisor">
                        <span class="role-name">Supervisor</span>
                    </button>
                    <button class="role-button" data-role="clerk">
                        <img src="images/inventory clerk.png" class="role-icon" alt="Inventory Clerk">
                        <span class="role-name">Inventory Clerk</span>
                    </button>
                    <button class="role-button" data-role="administrator">
                        <img src="images/Admin_final.png" class="role-icon" alt="Administrator">
                        <span class="role-name">Administrator</span>
                    </button>
                </div>
            </div>
            
            <div class="role-personalized-content" style="display: none;">
                <div class="role-unified-card">
                    <div class="role-card-header">
                        <h2>
                            <span class="role-header-icon"></span>
                            <span class="role-header-text"></span>
                        </h2>
                        <button class="role-change-button">Select a different role</button>
                    </div>
                    
                    <div class="role-card-body">
                        <div class="role-first-task-section">
                            <h3>Your first task</h3>
                            <a href="#" class="role-task-card">
                                <div class="role-task-title"></div>
                                <div class="role-task-description"></div>
                            </a>
                        </div>
                        
                        <div class="role-quick-links-section">
                            <h3>Quick links</h3>
                            <div class="role-links-grid"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert after search container
        searchContainer.insertAdjacentHTML('afterend', selectorHTML);
        
        // Add event listeners
        document.querySelectorAll('.role-button').forEach(button => {
            button.addEventListener('click', function() {
                const role = this.getAttribute('data-role');
                selectRole(role);
            });
        });
        
        document.querySelector('.role-change-button')?.addEventListener('click', resetRole);
    }
    
    function selectRole(roleKey) {
        // Save preference to localStorage
        localStorage.setItem('mas-select-role', roleKey);
        
        // Apply personalization
        applyRolePersonalization(roleKey);
    }
    
    function applyRolePersonalization(roleKey) {
        const role = roles[roleKey];
        if (!role) return;
        
        // Hide selector, show personalized content
        const selectorContainer = document.querySelector('.role-selector-container');
        const personalizedContent = document.querySelector('.role-personalized-content');
        
        if (selectorContainer) selectorContainer.style.display = 'none';
        if (personalizedContent) personalizedContent.style.display = 'block';
        
        // Update header
        const headerIcon = document.querySelector('.role-header-icon');
        const headerText = document.querySelector('.role-header-text');
        if (headerIcon) headerIcon.innerHTML = role.image
            ? `<img src="${role.image}" class="role-header-img" alt="${role.name}">`
            : role.icon;
        if (headerText) headerText.textContent = `Welcome, ${role.name.toLowerCase()}`;
        
        // Update first task
        const taskCard = document.querySelector('.role-task-card');
        const taskTitle = document.querySelector('.role-task-title');
        const taskDescription = document.querySelector('.role-task-description');
        
        if (taskCard) taskCard.href = role.firstTask.url;
        if (taskTitle) taskTitle.textContent = role.firstTask.title;
        if (taskDescription) taskDescription.textContent = role.firstTask.description;
        
        // Update quick links
        const linksGrid = document.querySelector('.role-links-grid');
        if (linksGrid) {
            linksGrid.innerHTML = role.quickLinks.map(link => `
                <a href="${link.url}" class="role-quick-link">
                    ${link.title}
                </a>
            `).join('');
        }
        
        // Highlight relevant sections in main content
        highlightRelevantSections(role.relevantSections);
        
        // Update the "Don't know where to start?" section
        updateFirstTasksList(roleKey);
    }
    
    function highlightRelevantSections(sections) {
        // This would add visual indicators to the main navigation cards
        // For now, we'll just log it
        console.log('Relevant sections:', sections);
    }
    
    function updateFirstTasksList(roleKey) {
        // Find the "Don't know where to start?" section
        const firstTasksSection = Array.from(document.querySelectorAll('h2')).find(
            h2 => h2.textContent.includes("Don't know where to start?")
        );
        
        if (!firstTasksSection) return;
        
        // Find the list after it
        const list = firstTasksSection.nextElementSibling;
        if (!list || list.tagName !== 'UL') return;
        
        // Highlight the selected role's task
        const listItems = list.querySelectorAll('li');
        listItems.forEach(li => {
            const link = li.querySelector('a');
            if (!link) return;
            
            // Check if this is the selected role's task
            const isSelectedRole = link.href.includes(roleKey) || 
                                   (roleKey === 'clerk' && link.href.includes('inventory-clerk'));
            
            if (isSelectedRole) {
                li.style.backgroundColor = '#e8f4ff';
                li.style.padding = '8px';
                li.style.borderRadius = '4px';
                li.style.marginBottom = '8px';
                li.style.border = '2px solid #0f62fe';
            } else {
                li.style.opacity = '0.6';
            }
        });
    }
    
    function resetRole() {
        // Clear saved preference
        localStorage.removeItem('mas-select-role');
        
        // Reload the page to show role selector
        window.location.reload();
    }
})();

// Made with Bob
