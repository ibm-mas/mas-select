// Click-to-copy for inline code elements in the article body.
// Clicking any inline <code> element copies its text to the clipboard.
// A brief "Copied" tooltip confirms the action — no visible button at rest.
// Excludes code elements inside fenced code blocks (pre > code), which
// already have their own copy button via content.code.copy.

document.addEventListener('DOMContentLoaded', function () {
    const article = document.querySelector('article.md-content__inner');
    if (!article) return;

    // Select inline code only — exclude code inside <pre> (fenced blocks)
    const inlineCodes = article.querySelectorAll('code:not(pre code)');

    inlineCodes.forEach(function (el) {
        el.classList.add('copy-inline-code');
        el.setAttribute('title', 'Click to copy');

        el.addEventListener('click', function () {
            const text = el.innerText.trim();
            navigator.clipboard.writeText(text).then(function () {
                showConfirmation(el);
            }).catch(function () {
                // Silently ignore — clipboard unavailable
            });
        });
    });

    function showConfirmation(el) {
        // Avoid stacking multiple tooltips if clicked rapidly
        if (el.querySelector('.copy-inline-tooltip')) return;

        const tip = document.createElement('span');
        tip.className = 'copy-inline-tooltip';
        tip.textContent = 'Copied';
        el.appendChild(tip);

        // Trigger fade-in on next frame
        requestAnimationFrame(function () {
            tip.classList.add('copy-inline-tooltip--show');
        });

        setTimeout(function () {
            tip.classList.remove('copy-inline-tooltip--show');
            setTimeout(function () {
                if (tip.parentNode) tip.parentNode.removeChild(tip);
            }, 200);
        }, 1500);
    }
});

// Made with Bob
