// "Was this page helpful?" feedback widget
// Click thumbs up/down → in-page dialog with follow-up questions
// On submit → sends to Power Automate HTTP trigger endpoint
// Set ENDPOINT_URL to your Power Automate HTTP POST URL

(function () {
    'use strict';

    var STORAGE_KEY = 'mas-feedback-';
    var ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycbzD2BwQQeQhdi-oK0wiy-oCRquvITxQTTHzDYejDgtz3V_8MQqR6TO5G0kzlnQ0EQJy/exec';

    // Questions by vote type
    var QUESTIONS = {
        yes: {
            q1Label: 'What made this page helpful?',
            q1Options: [
                'It answered my question',
                'I completed my task',
                'It was easy to understand',
                'It was easy to find',
                'The examples were helpful',
                'Other'
            ],
            q2Label: 'Anything we should keep or improve?',
            q2Placeholder: 'Optional'
        },
        no: {
            q1Label: 'What was missing or difficult?',
            q1Options: [
                'I couldn\'t find the information I needed',
                'The instructions were unclear',
                'The content was too basic',
                'The content was too advanced',
                'The page was too long',
                'The information seemed incorrect or outdated',
                'I was looking for something else',
                'Other'
            ],
            q2Label: 'What were you trying to do?',
            q2Placeholder: 'Optional — describe your task',
            q3: true
        }
    };

    var Q3_OPTIONS = [
        'Using search',
        'Using AI assistant / Copilot',
        'Asking a colleague',
        'Trial and error',
        'Another help page',
        'Other'
    ];

    function getPageKey() {
        return STORAGE_KEY + window.location.pathname;
    }

    function hasVoted() {
        try { return !!localStorage.getItem(getPageKey()); } catch (e) { return false; }
    }

    function recordVote(vote) {
        try { localStorage.setItem(getPageKey(), vote); } catch (e) {}
    }

    // ── Dialog builder ────────────────────────────────────────────────────────

    function buildDialog(vote, widget) {
        var cfg = QUESTIONS[vote];
        var dlg = document.createElement('div');
        dlg.className = 'pf-dialog';
        dlg.setAttribute('role', 'dialog');
        dlg.setAttribute('aria-modal', 'true');
        dlg.setAttribute('aria-label', 'Feedback follow-up');

        var html = [
            '<div class="pf-dialog__inner">',
            '  <button class="pf-dialog__close" aria-label="Close feedback dialog">&times;</button>',

            // Q1 — multiple choice
            '  <fieldset class="pf-dialog__fieldset">',
            '    <legend class="pf-dialog__legend">' + cfg.q1Label + '</legend>',
            '    <div class="pf-dialog__options">'
        ];

        cfg.q1Options.forEach(function (opt, i) {
            var id = 'pf-q1-' + i;
            html.push(
                '      <label class="pf-dialog__option" for="' + id + '">',
                '        <input type="radio" name="pf-q1" id="' + id + '" value="' + opt + '">',
                '        <span>' + opt + '</span>',
                '      </label>'
            );
        });

        html.push(
            '    </div>',
            '  </fieldset>',

            // Q2 — open text
            '  <div class="pf-dialog__field">',
            '    <label class="pf-dialog__label" for="pf-q2">' + cfg.q2Label + ' <span class="pf-dialog__optional">(optional)</span></label>',
            '    <textarea id="pf-q2" class="pf-dialog__textarea" rows="3" placeholder="' + cfg.q2Placeholder + '"></textarea>',
            '  </div>'
        );

        // Q3 — thumbs down only
        if (cfg.q3) {
            html.push(
                '  <div class="pf-dialog__field" id="pf-q3-wrap">',
                '    <p class="pf-dialog__label">Did you solve your problem another way? <span class="pf-dialog__optional">(optional)</span></p>',
                '    <div class="pf-dialog__row">',
                '      <label class="pf-dialog__option pf-dialog__option--inline" for="pf-q3-yes">',
                '        <input type="radio" name="pf-q3" id="pf-q3-yes" value="Yes"> <span>Yes</span>',
                '      </label>',
                '      <label class="pf-dialog__option pf-dialog__option--inline" for="pf-q3-no">',
                '        <input type="radio" name="pf-q3" id="pf-q3-no" value="No"> <span>No</span>',
                '      </label>',
                '    </div>',
                '    <div id="pf-q3-how" class="pf-dialog__options pf-dialog__options--hidden">'
            );
            Q3_OPTIONS.forEach(function (opt, i) {
                var id = 'pf-q3how-' + i;
                html.push(
                    '      <label class="pf-dialog__option" for="' + id + '">',
                    '        <input type="radio" name="pf-q3-how" id="' + id + '" value="' + opt + '">',
                    '        <span>' + opt + '</span>',
                    '      </label>'
                );
            });
            html.push('    </div>', '  </div>');
        }

        html.push(
            '  <div class="pf-dialog__actions">',
            '    <button class="pf-dialog__skip">Skip</button>',
            '    <button class="pf-dialog__submit">Submit</button>',
            '  </div>',
            '</div>'
        );

        dlg.innerHTML = html.join('');

        // Q3 yes → reveal how
        if (cfg.q3) {
            dlg.querySelectorAll('input[name="pf-q3"]').forEach(function (radio) {
                radio.addEventListener('change', function () {
                    var howWrap = dlg.querySelector('#pf-q3-how');
                    if (this.value === 'Yes') {
                        howWrap.classList.remove('pf-dialog__options--hidden');
                    } else {
                        howWrap.classList.add('pf-dialog__options--hidden');
                    }
                });
            });
        }

        // Close / skip
        function dismiss() {
            dlg.remove();
            showThanks(vote, widget);
        }
        dlg.querySelector('.pf-dialog__close').addEventListener('click', dismiss);
        dlg.querySelector('.pf-dialog__skip').addEventListener('click', dismiss);

        // Submit
        dlg.querySelector('.pf-dialog__submit').addEventListener('click', function () {
            var q1El = dlg.querySelector('input[name="pf-q1"]:checked');
            var q2El = dlg.querySelector('#pf-q2');
            var payload = {
                page: window.location.pathname,
                vote: vote,
                q1: q1El ? q1El.value : '',
                q2: q2El ? q2El.value.trim() : ''
            };
            if (cfg.q3) {
                var q3El = dlg.querySelector('input[name="pf-q3"]:checked');
                var q3HowEl = dlg.querySelector('input[name="pf-q3-how"]:checked');
                payload.solved = q3El ? q3El.value : '';
                payload.solved_how = q3HowEl ? q3HowEl.value : '';
            }
            sendToEndpoint(payload);
            dlg.remove();
            showThanks(vote, widget);
        });

        // Keyboard: Escape closes
        dlg.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') dismiss();
        });

        return dlg;
    }

    function showThanks(vote, widget) {
        widget.innerHTML = vote === 'yes'
            ? '<p class="page-feedback__thanks">Glad it helped.</p>'
            : '<p class="page-feedback__thanks">Thanks. We\'ll use this to improve the page.</p>';
    }

    function sendToEndpoint(data) {
        if (!ENDPOINT_URL) return;
        try {
            // Use GET with query params — most reliable cross-origin method for Apps Script
            var qs = Object.keys(data).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(data[k] || '');
            }).join('&');
            var img = new Image();
            img.src = ENDPOINT_URL + '?' + qs;
        } catch (e) {}
    }

    // ── Widget builder ────────────────────────────────────────────────────────

    function buildWidget() {
        var widget = document.createElement('div');
        widget.className = 'page-feedback';
        widget.setAttribute('role', 'region');
        widget.setAttribute('aria-label', 'Page feedback');

        if (hasVoted()) {
            widget.innerHTML = '<p class="page-feedback__thanks">Thanks for your feedback.</p>';
            return widget;
        }

        widget.innerHTML = [
            '<p class="page-feedback__question">Was this page helpful?</p>',
            '<div class="page-feedback__buttons">',
            '  <button class="page-feedback__btn page-feedback__btn--yes" aria-label="Yes, this page was helpful">',
            '    <span aria-hidden="true">👍</span> Yes',
            '  </button>',
            '  <button class="page-feedback__btn page-feedback__btn--no" aria-label="No, this page was not helpful">',
            '    <span aria-hidden="true">👎</span> No',
            '  </button>',
            '</div>'
        ].join('');

        widget.querySelector('.page-feedback__btn--yes').addEventListener('click', function () {
            recordVote('yes');
            var dlg = buildDialog('yes', widget);
            widget.innerHTML = '';
            widget.appendChild(dlg);
        });

        widget.querySelector('.page-feedback__btn--no').addEventListener('click', function () {
            recordVote('no');
            var dlg = buildDialog('no', widget);
            widget.innerHTML = '';
            widget.appendChild(dlg);
        });

        return widget;
    }

    function insertWidget() {
        if (window.location.pathname.endsWith('/') ||
            window.location.pathname.endsWith('/index.html')) return;

        var content = document.querySelector('.md-content__inner') ||
                      document.querySelector('article') ||
                      document.querySelector('main');
        if (!content) return;

        var divider = document.createElement('hr');
        content.appendChild(divider);
        content.appendChild(buildWidget());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertWidget);
    } else {
        insertWidget();
    }
})();
