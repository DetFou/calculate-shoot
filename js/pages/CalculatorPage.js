function CalculatorPage() {
    const calculator = new Calculator();
    const input = document.getElementById('calculator-input');

    function numberHandler(event) {
        if (input.value === '' || input.value === '0') {
            input.value = event.target.innerHTML;
        } else {
            input.value += event.target.innerHTML;
        }
    }

    function clearHandler() {
        input.value = calculator.clear();
    }

    function dotHandler() {
        if (input.value.indexOf('.') === -1) {
            if (input.value === '') {
                input.value = '0.';
            } else {
                input.value += '.';
            }
        }
    }

    function operandHandler(event) {
        calculator.setA(input.value);
        calculator.setOperand(event.target.dataset.operand);
        input.value = '';
    }

    function unaryHandler(event) {
        const operation = event.currentTarget.dataset.operand;

        if (operation === 'dot') {
            dotHandler();
            return;
        }

        const result = calculator.calculateUnary(operation, input.value || 0);
        input.value = result;
    }

    function calculateHandler() {
        calculator.setB(input.value);
        input.value = calculator.calculateBinary();
    }

    this.init = function() {
        const numberButtons = document.querySelectorAll('.calculator-number');
        for (let i = 0; i < numberButtons.length; i++) {
            numberButtons[i].addEventListener('click', numberHandler);
        }

        document.querySelector('.calculator-clear')
            .addEventListener('click', clearHandler);

        const operandButtons = document.querySelectorAll('.calculator-operand');
        for (let i = 0; i < operandButtons.length; i++) {
            operandButtons[i].addEventListener('click', operandHandler);
        }

        const unaryButtons = document.querySelectorAll('.calculator-operand-inter');
        for (let i = 0; i < unaryButtons.length; i++) {
            unaryButtons[i].addEventListener('click', unaryHandler);
        }

        document.querySelector('.calculator-calculate')
            .addEventListener('click', calculateHandler);
    };
}