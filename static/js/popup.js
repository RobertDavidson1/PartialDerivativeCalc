// modal.js

document.addEventListener('DOMContentLoaded', function () {
    // Get all math cards
    const mathCards = document.querySelectorAll('.math-card');

    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close-modal');

    // Add click event to each math card to open the respective modal
    mathCards.forEach(function (card) {
        card.addEventListener('click', function () {
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
                // Trigger MathJax to typeset the newly added LaTeX
                if (typeof MathJax !== 'undefined') {
                    MathJax.typesetPromise([modal]).catch(function (err) {
                        console.error('MathJax typeset failed: ' + err.message);
                    });
                }
            }
        });
    });

    // Add click event to each close button to close the modal
    closeButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Add click event outside the modal content to close the modal
    window.addEventListener('click', function (event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(function (modal) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Add keyboard event to close modals with the Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(function (modal) {
                modal.style.display = 'none';
            });
        }
    });
});
