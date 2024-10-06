document.addEventListener('DOMContentLoaded', function () {
    const submitDiv = document.querySelector('.top-col2');
    const form = document.getElementById('partial-derivative-form');

    if (!submitDiv) {
        console.error('Submit div (.top-col2) not found');
        return;
    }

    if (!form) {
        console.error('Form (#partial-derivative-form) not found');
        return;
    }

    function submitForm() {
        console.log('Submitting form');
        form.submit();
    }

    submitDiv.addEventListener('click', submitForm);
    submitDiv.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            console.log(`Key pressed: ${event.key}`);
            submitForm();
        }
    });
});

$(document).ready(function () {
    const mathFieldSpan = document.getElementById('math-field');
    const hiddenInput = document.getElementById('function');
    const MQ = MathQuill.getInterface(2); // MathQuill v2 interface

    // Set a custom placeholder
    mathFieldSpan.setAttribute('data-placeholder', 'Enter your function here');

    const mathField = MQ.MathField(mathFieldSpan, {
        spaceBehavesLikeTab: true,
        handlers: {
            edit: function () {
                hiddenInput.value = mathField.latex(); // Update the hidden input with the LaTeX
                console.log('LaTeX updated:', hiddenInput.value); // Debugging
            },
        },
    });

    // Set initial value from the server if present
    const initialValue = hiddenInput.value;
    if (initialValue) {
        mathField.latex(initialValue); // Load the initial value into MathQuill
    }
});
