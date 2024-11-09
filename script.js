let displayValue = "";
let currentOperator = "";

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
}
// console.log(updateDisplay())

function clearDisplay() {
    displayValue = "";
    currentOperator = "";
    updateDisplay("0")
}

function appendNumber(number) {
    if (displayValue === 0 && number !== ".") {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay(displayValue);
}

// need functions for clearing display, updating display, calculations