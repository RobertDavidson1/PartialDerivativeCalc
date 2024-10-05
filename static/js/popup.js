document.addEventListener('DOMContentLoaded', function () {
    // Get the modal element by its ID
    var modal = document.getElementById('myModal');

    // Get all middle row sections (use their class names)
    var middleRows = document.querySelectorAll(
        '.mid-col1, .mid-col2, .mid-col3',
    );

    // Add a click event listener to each middle row element
    middleRows.forEach(function (card) {
        card.addEventListener('click', function () {
            // Optional: Populate modal content here before showing
            // Example:
            // document.getElementById('modal-body').innerHTML = '<p>Your dynamic content</p>';

            modal.classList.add('show'); // Add 'show' class to display the modal
        });
    });

    // Close button inside the modal
    var closeButton = document.querySelector('.modal .close');

    // Add an event listener to close the modal
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            modal.classList.remove('show'); // Remove 'show' class to hide the modal
        });
    }

    // Optional: close the modal when clicking anywhere outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});
