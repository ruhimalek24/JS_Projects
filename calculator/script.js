const display = document.getElementById('display');
const clear = document.getElementById('clear-btn');
let currentExpression = '';

function numberPress(ele) {
    const value = ele.textContent;
    if (value === '=') {
        calculateResult();
    } else {
        currentExpression += value;
        display.innerText = currentExpression;
    }
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        display.innerText = result;
        currentExpression = result.toString();
    } catch (error) {
        display.innerText = 'Error';
        currentExpression = '';
    }
}

clear.addEventListener('click', () => {
    display.innerText = '';
})