// TODO: добавить функции (add, subtract, multiply, divide) основных математических операций.
// TODO: написать функцию operate, которая возвращает результат вычисления на основе выбранного оператора.
// const Operators = {
//     ADD: {NAME: 'add', SYMBOL: '+'},
//     SUB: {NAME: 'sub', SYMBOL: '-'},
//     MUL: {NAME: 'mul', SYMBOL: '×'},
//     DIV: {NAME: 'div', SYMBOL: '÷'},
//     PER: {NAME: 'per', SYMBOl: '%'},
// }

const Operators = {
    ['add']: '+',
    ['sub']: '-',
    ['mul']: '×',
    ['div']: '÷',
    ['per']: '%',
}


const digitButtons = document.querySelectorAll('.digit');
const operatorsButtons = document.querySelectorAll('.operator')
const displayLabel = document.querySelector('.display');
const historyLabel = document.querySelector('.history');


let displayValue = '';
let selectedOperator = '';
let tempValue = '';


function clear() {
    displayValue = '0';
    selectedOperator = '';
    tempValue = '';
}


function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function percent(a, b) {
    return (a / 100) * b;
}


function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'sub':
            return subtract(a, b);
        case 'mul':
            return multiply(a, b);
        case 'div':
            return divide(a, b);
        case 'per':
            return percent(a, b);
        // TODO: Add Equal operator case
        default:
            break;
    }
}


function populateDisplay(displayText = displayValue) {
    historyLabel.textContent = `${tempValue} ${Operators[selectedOperator] || ''} ${displayValue}`;
    displayLabel.textContent = displayText;
}


function onDigitPressed(e) {
    const value = e.target.value;
    displayValue = displayValue === '0' ? value : displayValue + value;
    populateDisplay();
}


function onOperatorPressed(e) {
    if (displayValue === '') return;

    if ( e.target.value === 'equal') {
        if (selectedOperator == '') return;
        populateDisplay(operate(selectedOperator, parseInt(tempValue), parseInt(displayValue)));
        historyLabel.textContent += ' =';
        return clear();
    }

    tempValue = selectedOperator == '' ? displayValue : operate(selectedOperator, parseInt(tempValue), parseInt(displayValue));
    displayValue = '';
    selectedOperator = e.target.value;
    populateDisplay();
}


digitButtons.forEach(btn => btn.addEventListener('click', onDigitPressed))
operatorsButtons.forEach(btn => btn.addEventListener('click', onOperatorPressed))
