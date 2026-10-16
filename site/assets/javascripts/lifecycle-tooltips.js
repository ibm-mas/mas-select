// Add interactive tooltips to work order lifecycle diagram
document.addEventListener('DOMContentLoaded', function() {
    const lifecycleImg = document.querySelector('img[usemap="#lifecycle-map"]');
    if (!lifecycleImg) return;

    // Tooltip data for each stage (clockwise from top)
    const tooltips = {
        'Created': 'This is the working record for the job. It captures what needs to be done, where the work happens, how urgent it is, and any instructions the technician will need later.',
        'Approved': 'Approval means the work can move ahead. At this point, planned items can be reserved and the planned cost and rate information for the job is recorded.',
        'Assigned': 'Before work starts, check that the right person owns the job and has the schedule, instructions, parts, and tools needed to do it.',
        'In Progress': 'Use this stage when physical work has actually started. Record labor, materials, services, and tools as the work happens so the record stays accurate.',
        'Completed': 'Use this when the physical work is finished. The record can still need final review or closeout, and some setups can move the work order forward automatically when assignments are completed.',
        'Closed': 'Closing finalizes the record. Unused item reservations are removed and the job becomes part of maintenance history.'
    };

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'lifecycle-tooltip';
    tooltip.style.cssText = 'position: absolute; background: rgba(0,0,0,0.9); color: white; padding: 12px; border-radius: 4px; font-size: 14px; max-width: 300px; z-index: 1000; pointer-events: none; display: none; line-height: 1.5;';
    document.body.appendChild(tooltip);

    // Update image map coordinates based on actual image size (circular layout)
    function updateImageMap() {
        const map = document.querySelector('map[name="lifecycle-map"]');
        if (!map) return;

        const img = lifecycleImg;
        const width = img.clientWidth;
        const height = img.clientHeight;
        const scale = width / 2991; // Original image width

        // Circular positions (clockwise from top): [centerX, centerY, radius]
        // Original coords scaled to current image size
        const positions = [
            [1495 * scale, 400 * scale, 350 * scale],   // Created (top)
            [2300 * scale, 900 * scale, 350 * scale],   // Approved (top-right)
            [2300 * scale, 2100 * scale, 350 * scale],  // Assigned (bottom-right)
            [1495 * scale, 2600 * scale, 350 * scale],  // In Progress (bottom)
            [690 * scale, 2100 * scale, 350 * scale],   // Completed (bottom-left)
            [690 * scale, 900 * scale, 350 * scale]     // Closed (top-left)
        ];

        const areas = map.querySelectorAll('area');
        areas.forEach((area, index) => {
            if (positions[index]) {
                const coords = positions[index].map(Math.round).join(',');
                area.setAttribute('coords', coords);
            }
        });
    }

    // Check if point is inside circle
    function isInsideCircle(x, y, cx, cy, radius) {
        const dx = x - cx;
        const dy = y - cy;
        return (dx * dx + dy * dy) <= (radius * radius);
    }

    // Show tooltip on hover - handle both direct parent and glightbox wrapper
    const container = lifecycleImg.closest('p') || lifecycleImg.parentElement;
    
    container.addEventListener('mousemove', function(e) {
        const areas = document.querySelectorAll('map[name="lifecycle-map"] area');
        const rect = lifecycleImg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        let found = false;

        areas.forEach(area => {
            const coords = area.getAttribute('coords').split(',').map(Number);
            const [cx, cy, radius] = coords;

            if (isInsideCircle(x, y, cx, cy, radius)) {
                const stageName = area.getAttribute('alt');
                tooltip.textContent = tooltips[stageName];
                tooltip.style.display = 'block';
                tooltip.style.left = e.pageX + 15 + 'px';
                tooltip.style.top = e.pageY + 15 + 'px';
                found = true;
            }
        });

        if (!found) {
            tooltip.style.display = 'none';
        }
    });

    container.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
    
    // Prevent glightbox from opening when hovering over image map areas
    const glightboxLink = lifecycleImg.closest('a.glightbox');
    if (glightboxLink) {
        glightboxLink.addEventListener('click', function(e) {
            // Check if click is on an image map area
            const rect = lifecycleImg.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const areas = document.querySelectorAll('map[name="lifecycle-map"] area');
            for (let area of areas) {
                const coords = area.getAttribute('coords').split(',').map(Number);
                const [cx, cy, radius] = coords;
                if (isInsideCircle(x, y, cx, cy, radius)) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            }
        });
    }

    // Update coordinates on load and resize
    updateImageMap();
    window.addEventListener('resize', updateImageMap);
    lifecycleImg.addEventListener('load', updateImageMap);
});

// Made with Bob
