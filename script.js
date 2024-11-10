let displayValue = "";
let currentOperator = "";

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
}

// clears the display
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

function appendOperator(operator) {
    if (displayValue && !currentOperator) {
        displayValue += " " + operator + " ";
        currentOperator = operator;
    }
    updateDisplay(displayValue);
}

// Calculation function
function calculate() {
    try {
        // displayValue = displayValue.replace(); 
        const result = eval(displayValue);  // eval does the actual math of whatever is in the dis.
        if (!isFinite(result)) throw "Error"; //isFinite checks for a finite number (NaN or infinity)
        updateDisplay(result);
        displayValue = result;
        currentOperator = "";
    } catch (error) {
        updateDisplay("Error");
        displayValue = "";
        currentOperator = "";
    }
}

// need functions for clearing display, updating display, calculations