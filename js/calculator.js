var a = 0;
var b = 0;
var c = 0;
var operand = null;

function calculatorNumberHandler(event) {
    var input = document.getElementById('calculator-input');
    if (input.value === '' || input.value === '0') {
        input.value = event.target.innerHTML;
    } else {
        input.value += event.target.innerHTML;
    }
}

// очистить поле ввода числа
function calculatorClearHandler() {
    document.getElementById('calculator-input').value = '';
    a = 0;
    b = 0;
    operand = null;
}

// смена знака
function calculatorSwitchSignHandler() {
    var input = document.getElementById('calculator-input');
    if (input.value !== '0') {
        if (input.value.charAt(0) !== '-') {
            input.value = '-' + input.value
        } else input.value = input.value.slice(1)
    }
    return input.value;
}

// факториал
function calculatorFactorialHandler(d) {
    var e = 1;
    for (var i = 1; i <= d; i++){
        e = e * i;
    }
    console.log(e, d)
    return e;
}

// модуль
function calculatorModuleHandler() {
    var input = document.getElementById('calculator-input');
    if (input.value.charAt(0) === '-') {
        input.value = input.value.slice(1)
    }
    return input.value;
}

// десятичная точка
function calculatorDotHandler() {
    var input = document.getElementById('calculator-input');
    if (input.value.indexOf('.') === -1) {
        if (input.value === '') {
            input.value = '0.';
        } else {
            input.value += '.';
        }
    }
    return input.value;
}

// знаки
function calculatorOperandHandler(event) {
    operand = event.target.dataset.operand;
    a = Number(document.getElementById('calculator-input').value);
    document.getElementById('calculator-input').value = '';
}

// операторы с одной переменными
function calculatorOperandInterHandler(event) {
    var input = document.getElementById('calculator-input');
    var operandOne = event.currentTarget.dataset.operand;
    var d = Number(input.value);
    switch (operandOne) {
        case 'sqrt': c = Math.pow(d, 1/2); break;
        case 'factorial': c = calculatorFactorialHandler(d);  break;
        case 'switch': c = calculatorSwitchSignHandler(); break;
        case 'module': c = calculatorModuleHandler(); break;
        case 'dot': c = calculatorDotHandler(); break; 
    }
    input.value = c;
}

// операторы с двумя числами
function calculatorCalculateHandler() {
    var input = document.getElementById('calculator-input');
    b = Number(input.value);
    c = 0;
    switch (operand) {
        case 'add': c = a + b; break;
        case 'sub': c = a - b; break;
        case 'mult': c = a * b; break;
        case 'div': c = a / b; break;
        case 'degree': c = Math.pow(a, b); break;
    }
    console.log(a, b)
    input.value = c;
}

// обрабатываем кнопки
function initCalculator() {
    var numberButton = document.querySelectorAll('.calculator-number');
    for (var i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener('click', calculatorNumberHandler);
    }
    // обработка очистки
    document.querySelector('.calculator-clear').addEventListener('click', calculatorClearHandler);
    // обрабатываем операции
    var operandButtons = document.querySelectorAll('.calculator-operand');
    for (var i = 0; i < operandButtons.length; i++) {
        operandButtons[i].addEventListener('click', calculatorOperandHandler);
    }
    // обрабатываем смежные операции
    var operandButtonsInter = document.querySelectorAll('.calculator-operand-inter');
    for (var i = 0; i < operandButtonsInter.length; i++) {
        operandButtonsInter[i].addEventListener('click', calculatorOperandInterHandler);
    }
    //Обработать "равно"
    document.querySelector('.calculator-calculate').addEventListener('click', calculatorCalculateHandler)
}
