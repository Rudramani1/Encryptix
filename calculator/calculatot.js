// Variables
let currentInput = '';
let previousInput = '';
let operator = null;

// Get screen element
const screen = document.getElementById('screen');

// Function to update the display
function updateScreen() {
    screen.textContent = currentInput || '0';
}

// Event listeners for number and decimal buttons
document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0' && button.textContent === '0') return; // Prevent multiple leading zeros
        currentInput += button.textContent;
        updateScreen();
    });
});

// Event listeners for operator buttons
document.querySelectorAll('[data-operator]').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '') return; // Prevent setting operator without number
        if (previousInput !== '') {
            performCalculation();
        }
        operator = button.getAttribute('data-operator');
        previousInput = currentInput;
        currentInput = '';
    });
});

// Function to perform calculation
function performCalculation() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '√':  
            result = Math.sqrt(prev); 
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
}

// Event listener for equal button
document.getElementById('equals').addEventListener('click', () => {
    performCalculation();
    updateScreen();
});

// Event listener for clear button
document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateScreen();
});

// Event listener for delete button
document.getElementById('delete').addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
});
