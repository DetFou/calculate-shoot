function createMatrix(length, type) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push([]);
        for (var j = 0; j < length; j++) {
            arr[i].push(0);
        }
    }
    
    switch (type) {   // типы матриц
    case 'MainDiag':
    for (var i = 0; i < length; i++) arr[i][i] = 1;
    break;

    case 'SecondDiag':
    for (var i = 0; i < length; i++) arr[i][length-i-1] = 1;
    break;

    case 'Upper':
    for (var i = 0; i < length; i++) {
        for (var j = i; j < length; j++) {
            arr[i][j] = 1;
        }
    }
    break;

    case 'Lower':
    for (var i = 0; i < length; i++) {
        for (var j = 0; j <= i; j++) {
            arr[i][j] = 1;
        }
    }
    break;

    case 'I':
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            arr[i][j] = i+1;
        }
    }
    break;
    
    case 'J':
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            arr[i][j] = j+1;
        }
    }
    break;

    default:
    break;
}
return arr;
}

function handleMatrix(type) {
    var length = Number(document.getElementById('matrixSize').value);
    var matrix = createMatrix(length, type);
    var output = document.getElementById('outputMatrix')
    output.innerHTML = '';
    console.log(matrix);
    // здесь должен быть вывод
    var table = document.createElement('table');
      matrix.forEach(row => {
        var tr = document.createElement('tr');
        row.forEach(value => {
          var td = document.createElement('td');
          td.textContent = value;
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });

      // добавляем таблицу в DOM
    output.appendChild(table);

    
}



function connectButton(type) {
    var btn = document.getElementById('get-' + type + '-matrix');
    if (btn) {
        btn.addEventListener('click', function() {
            handleMatrix(type);
        });
    }
}

function initMatrix() {
    var types = ['Zero', 'MainDiag', 'SecondDiag', 'Upper', 'Lower', 'I', 'J'];

    types.forEach(connectButton);
}