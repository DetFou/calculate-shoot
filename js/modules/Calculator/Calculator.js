function Calculator() {
    let a = 0;
    let b = 0;
    let operand = null;

    function factorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    this.clear = function() {
        a = 0;
        b = 0;
        operand = null;
        return '';
    };

    this.setA = function(value) {
        a = Number(value);
    };

    this.setB = function(value) {
        b = Number(value);
    };

    this.setOperand = function(value) {
        operand = value;
    };

    this.calculateBinary = function() {
        switch (operand) {
            case 'add': return a + b;
            case 'sub': return a - b;
            case 'mult': return a * b;
            case 'div': return a / b;
            case 'degree': return Math.pow(a, b);
            default: return b;
        }
    };

    this.calculateUnary = function(operation, value) {
        const d = Number(value);

        switch (operation) {
            case 'sqrt': return Math.sqrt(d);
            case 'factorial': return factorial(d);
            case 'cos': return Math.cos(d);
            case 'sin': return Math.sin(d);
            case 'module': return Math.abs(d);
            case 'switch': return -d;
            default: return d;
        }
    };
}