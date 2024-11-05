let displayValue = "";
let currentOperator = "";

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerHTML = "";
}

function clearDisplay() {
    displayValue = "";
    currentOperator = "";
}

// need functions for clearing display, updating display, calculations