// Adds a "Copy table" button to every table in the article body.
// Copies both text/html (for Word, Google Docs, Outlook) and text/plain (TSV)
// so the destination app can use whichever format it supports.

document.addEventListener('DOMContentLoaded', function () {
    const article = document.querySelector('article.md-content__inner');
    if (!article) return;

    const tables = article.querySelectorAll('table');

    tables.forEach(function (table) {
        // Wrap the table in a relative-positioned container so the
        // button can be positioned inside it without affecting layout.
        const wrapper = document.createElement('div');
        wrapper.className = 'copy-table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);

        // Create the button
        const btn = document.createElement('button');
        btn.className = 'copy-table-btn';
        btn.setAttribute('aria-label', 'Copy table');
        btn.textContent = 'Copy table';
        wrapper.appendChild(btn);

        btn.addEventListener('click', function () {
            const tsv  = tableToTSV(table);
            const html = tableToHTML(table);

            // ClipboardItem lets us write multiple MIME types at once.
            // Word, Google Docs, and Outlook prefer text/html; plain text
            // editors and spreadsheets use the text/plain (TSV) fallback.
            if (window.ClipboardItem) {
                const item = new ClipboardItem({
                    'text/plain': new Blob([tsv],  { type: 'text/plain' }),
                    'text/html':  new Blob([html], { type: 'text/html'  })
                });
                navigator.clipboard.write([item]).then(onSuccess).catch(onError);
            } else {
                // Older browsers: fall back to plain text only
                navigator.clipboard.writeText(tsv).then(onSuccess).catch(onError);
            }
        });

        function onSuccess() {
            btn.textContent = 'Copied!';
            btn.classList.add('copy-table-btn--copied');
            setTimeout(function () {
                btn.textContent = 'Copy table';
                btn.classList.remove('copy-table-btn--copied');
            }, 2000);
        }

        function onError() {
            btn.textContent = 'Copy failed';
            setTimeout(function () {
                btn.textContent = 'Copy table';
            }, 2000);
        }
    });

    // TSV for spreadsheets and plain text editors
    function tableToTSV(table) {
        const rows = Array.from(table.querySelectorAll('tr'));
        return rows.map(function (row) {
            const cells = Array.from(row.querySelectorAll('th, td'));
            return cells.map(function (cell) {
                return cell.innerText.replace(/\s+/g, ' ').trim();
            }).join('\t');
        }).join('\n');
    }

    // Minimal HTML table for Word, Google Docs, and Outlook.
    // No classes or Carbon styles — just clean semantic markup so the
    // destination app applies its own table formatting.
    function tableToHTML(table) {
        const rows = Array.from(table.querySelectorAll('tr'));
        const rowsHTML = rows.map(function (row) {
            const cells = Array.from(row.querySelectorAll('th, td'));
            const cellsHTML = cells.map(function (cell) {
                const tag = cell.tagName.toLowerCase(); // 'th' or 'td'
                const text = cell.innerText.replace(/\s+/g, ' ').trim();
                return '<' + tag + '>' + escapeHTML(text) + '</' + tag + '>';
            }).join('');
            return '<tr>' + cellsHTML + '</tr>';
        }).join('');
        return '<table>' + rowsHTML + '</table>';
    }

    function escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
});

// Made with Bob
