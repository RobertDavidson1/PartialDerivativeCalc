$(document).ready(function() {
    var mathFieldSpan = document.getElementById('math-field');
    var hiddenInput = document.getElementById('function');
    var MQ = MathQuill.getInterface(2);  // MathQuill v2 interface
    var mathField = MQ.MathField(mathFieldSpan, {
        spaceBehavesLikeTab: true,
        handlers: {
            edit: function() {
                hiddenInput.value = mathField.latex();  // Update the hidden input with the LaTeX
            }
        }
    });

    // Set initial value from the server if present
    var initialValue = hiddenInput.value;
    if (initialValue) {
        mathField.latex(initialValue);  // Load the initial value into MathQuill
    }
});
