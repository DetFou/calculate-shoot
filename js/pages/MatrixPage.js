function MatrixPage() {
    const matrixModule = new Matrix();

    function printMatrix(matrix) {
        const output = document.getElementById('outputMatrix');
        output.innerHTML = '';

        const table = document.createElement('table');

        for (let i = 0; i < matrix.length; i++) {
            const tr = document.createElement('tr');

            for (let j = 0; j < matrix[i].length; j++) {
                const td = document.createElement('td');
                td.innerHTML = matrix[i][j];
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        output.appendChild(table);
    }

    function handleMatrix(type) {
        const length = Number(document.getElementById('matrixSize').value);
        const matrix = matrixModule.createMatrix(length, type);
        printMatrix(matrix);
    }

    function bindButton(type) {
        const button = document.getElementById('get-' + type + '-matrix');
        if (button) {
            button.addEventListener('click', function() {
                handleMatrix(type);
            });
        }
    }

    this.init = function() {
        const types = ['Zero', 'MainDiag', 'SecondDiag', 'Upper', 'Lower', 'I', 'J'];
        for (let i = 0; i < types.length; i++) {
            bindButton(types[i]);
        }
    };
}