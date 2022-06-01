// TODO: добавить функции (add, subtract, multiply, divide) основных математических операций.
// TODO: написать функцию operate, которая возвращает результат вычисления на основе выбранного оператора.

const Operators = {
    ADD: {NAME: 'add', SYMBOL: '+'},
    SUB: {NAME: 'sub', SYNBOL: '-'},
    MUL: {NAME: 'mul', SYNBOL: '×'},
    DIV: {NAME: 'div', SYNBOL: '÷'},
}

let firstNumberString = '';
let secondNumberString = '';
let selectedOperator = '';


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


function operate(operator, a, b) {
    switch (operator) {
        case Operators.ADD.NAME:
            return add(a, b);
        case Operators.SUB.NAME:
            return subtract(a, b);
        case Operators.MUL.NAME:
            return multiply(a, b);
        case Operators.DIV.NAME:
            return divide(a, b);
        default:
            break;
    }
}

