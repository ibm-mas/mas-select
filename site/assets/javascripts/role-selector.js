// Role-based content personalization for homepage
(function() {
    'use strict';

    // Detect page language from <html lang="...">
    var pageLang = (document.documentElement.lang || 'en').split('-')[0];

    // UI strings per language
    var ui = {
        en: {
            selectorTitle: 'Select your role to see personalized content',
            selectorSubtitle: 'Get a personalized starting point based on your role.',
            firstTaskHeading: 'Your first task',
            quickLinksHeading: 'Quick links',
            changeButton: 'Select a different role',
            welcome: 'Welcome, '
        },
        fr: {
            selectorTitle: 'Sélectionnez votre rôle pour afficher un contenu personnalisé',
            selectorSubtitle: 'Obtenez un point de départ personnalisé selon votre rôle.',
            firstTaskHeading: 'Votre première tâche',
            quickLinksHeading: 'Liens rapides',
            changeButton: 'Choisir un rôle différent',
            welcome: 'Bienvenue, '
        }
    };
    var t = ui[pageLang] || ui.en;

    // Base path prefix for links ('' for EN root, '../' for /fr/ subfolder)
    var linkPrefix = (pageLang !== 'en') ? '../' : '';

    // Role definitions with their associated content
    var rolesByLang = {
        en: {
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
        },
        fr: {
            technician: {
                name: 'Technicien',
                icon: '👷',
                image: 'images/technician_final.png',
                color: '#0f62fe',
                firstTask: {
                    title: 'Terminer un ordre de travail',
                    url: 'start-fast/first-task/technician-first-task.html',
                    description: 'Apprenez à trouver, terminer et signaler votre travail affecté'
                },
                relevantSections: [
                    { name: 'Terminer le travail', highlight: true },
                    { name: 'Gérer l\'inventaire', highlight: false },
                    { name: 'Concepts de base', highlight: false }
                ],
                quickLinks: [
                    { title: 'Trouver du travail', url: 'get-work-done/complete-work/find-work.html' },
                    { title: 'Terminer un ordre de travail', url: 'get-work-done/complete-work/complete-job.html' },
                    { title: 'Impossible de terminer une tâche', url: 'get-work-done/complete-work/cant-complete-task.html' }
                ]
            },
            supervisor: {
                name: 'Superviseur',
                icon: '👨‍💼',
                image: 'images/supervisor_final.png',
                color: '#198038',
                firstTask: {
                    title: 'Affecter et suivre le travail',
                    url: 'start-fast/first-task/supervisor-first-task.html',
                    description: 'Apprenez à créer des ordres de travail, les affecter et suivre leur avancement'
                },
                relevantSections: [
                    { name: 'Planifier le travail', highlight: true },
                    { name: 'Organiser les personnes et le travail', highlight: true },
                    { name: 'Surveiller et réagir', highlight: true }
                ],
                quickLinks: [
                    { title: 'Maintenance récurrente', url: 'get-work-done/plan-work/plan-recurring-maintenance.html' },
                    { title: 'Affecter des personnes', url: 'get-work-done/organize-people/assign-right-people.html' },
                    { title: 'Détecter les problèmes tôt', url: 'get-work-done/monitor-respond/detect-issues-early.html' }
                ]
            },
            clerk: {
                name: 'Magasinier',
                icon: '📦',
                image: 'images/inventory clerk.png',
                color: '#8a3ffc',
                firstTask: {
                    title: 'Sortir une pièce',
                    url: 'start-fast/first-task/inventory-clerk-first-task.html',
                    description: 'Apprenez à sortir des pièces, suivre l\'inventaire et gérer les niveaux de stock'
                },
                relevantSections: [
                    { name: 'Gérer l\'inventaire', highlight: true },
                    { name: 'Terminer le travail', highlight: false }
                ],
                quickLinks: [
                    { title: 'Suivre les niveaux de stock', url: 'get-work-done/manage-inventory/track-stock-levels.html' },
                    { title: 'Stock incorrect', url: 'get-work-done/manage-inventory/stock-incorrect.html' },
                    { title: 'Impossible de sortir des matériaux', url: 'get-work-done/manage-inventory/why-cant-issue-materials.html' }
                ]
            },
            administrator: {
                name: 'Administrateur',
                icon: '⚙️',
                image: 'images/Admin_final.png',
                color: '#fa4d56',
                firstTask: {
                    title: 'Charger les données utilisateurs',
                    url: 'start-fast/first-task/administrator-first-task.html',
                    description: 'Apprenez à importer des données, configurer des utilisateurs et paramétrer le système'
                },
                relevantSections: [
                    { name: 'Configurer et contrôler', highlight: true },
                    { name: 'Organiser les personnes et le travail', highlight: true }
                ],
                quickLinks: [
                    { title: 'Préparer les données à importer', url: 'get-work-done/setup-control/prepare-data-for-import.html' },
                    { title: 'Ordre de chargement correct', url: 'get-work-done/setup-control/correct-load-order.html' },
                    { title: 'Corriger les erreurs d\'importation', url: 'get-work-done/setup-control/why-does-asset-import-fail.html' }
                ]
            }
        }
    };

    var roles = rolesByLang[pageLang] || rolesByLang.en;
    
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
        var p = window.location.pathname;
        return p.endsWith('/') ||
               p.endsWith('/index.html') ||
               p.endsWith('/fr/') ||
               p.endsWith('/fr/index.html');
    }
    
    function createRoleSelector() {
        // Find the insertion point (after the search bar)
        const searchContainer = document.querySelector('.home-search-container');
        if (!searchContainer) return;
        
        // Build image src paths (relative to current page depth)
        var imgBase = linkPrefix + 'images/';

        // Create role selector container
        var selectorHTML =
            '<div class="role-selector-container">' +
                '<div class="role-selector-title">' + t.selectorTitle + '</div>' +
                '<p class="role-selector-subtitle">' + t.selectorSubtitle + '</p>' +
                '<div class="role-selector-buttons">' +
                    '<button class="role-button" data-role="technician">' +
                        '<img src="' + imgBase + 'technician_final.png" class="role-icon" alt="' + roles.technician.name + '" style="width: 54px; height: 54px;">' +
                        '<span class="role-name">' + roles.technician.name + '</span>' +
                    '</button>' +
                    '<button class="role-button" data-role="supervisor">' +
                        '<img src="' + imgBase + 'supervisor_final.png" class="role-icon" alt="' + roles.supervisor.name + '">' +
                        '<span class="role-name">' + roles.supervisor.name + '</span>' +
                    '</button>' +
                    '<button class="role-button" data-role="clerk">' +
                        '<img src="' + imgBase + 'inventory clerk.png" class="role-icon" alt="' + roles.clerk.name + '">' +
                        '<span class="role-name">' + roles.clerk.name + '</span>' +
                    '</button>' +
                    '<button class="role-button" data-role="administrator">' +
                        '<img src="' + imgBase + 'Admin_final.png" class="role-icon" alt="' + roles.administrator.name + '">' +
                        '<span class="role-name">' + roles.administrator.name + '</span>' +
                    '</button>' +
                '</div>' +
            '</div>' +
            '<div class="role-personalized-content" style="display: none;">' +
                '<div class="role-unified-card">' +
                    '<div class="role-card-header">' +
                        '<h2>' +
                            '<span class="role-header-icon"></span>' +
                            '<span class="role-header-text"></span>' +
                        '</h2>' +
                        '<button class="role-change-button">' + t.changeButton + '</button>' +
                    '</div>' +
                    '<div class="role-card-body">' +
                        '<div class="role-first-task-section">' +
                            '<h3>' + t.firstTaskHeading + '</h3>' +
                            '<a href="#" class="role-task-card">' +
                                '<div class="role-task-title"></div>' +
                                '<div class="role-task-description"></div>' +
                            '</a>' +
                        '</div>' +
                        '<div class="role-quick-links-section">' +
                            '<h3>' + t.quickLinksHeading + '</h3>' +
                            '<div class="role-links-grid"></div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        
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
            ? '<img src="' + linkPrefix + role.image + '" class="role-header-img" alt="' + role.name + '">'
            : role.icon;
        if (headerText) headerText.textContent = t.welcome + role.name.toLowerCase();
        
        // Update first task
        const taskCard = document.querySelector('.role-task-card');
        const taskTitle = document.querySelector('.role-task-title');
        const taskDescription = document.querySelector('.role-task-description');
        
        if (taskCard) taskCard.href = linkPrefix + role.firstTask.url;
        if (taskTitle) taskTitle.textContent = role.firstTask.title;
        if (taskDescription) taskDescription.textContent = role.firstTask.description;
        
        // Update quick links
        const linksGrid = document.querySelector('.role-links-grid');
        if (linksGrid) {
            linksGrid.innerHTML = role.quickLinks.map(function(link) {
                return '<a href="' + linkPrefix + link.url + '" class="role-quick-link">' + link.title + '</a>';
            }).join('');
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
