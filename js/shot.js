var isManual = false;
var score = 0

// блок с рисунками
function center(x,y,r) {
    return (x === 0 && y === 0) ? 10 : 0;
}

function star(x,y,r) {
    var a = (-r + Math.sqrt(r**2 + 4*r))/2
    var b = r/(r+a)
    console.log(a,b)
    return (Math.abs(y) < r / (Math.abs(x) + a) - b) ? 4 : 0;
}

function romb(x,y,r) {
    return (Math.abs(y) + Math.abs(x) < r) ? 3 : 0;
}

function circle(x,y,r) {
    return (Math.sqrt(x ** 2 + y ** 2) < r) ? 2 : 0;
}

function square(x,y,r) {
    return (Math.abs(x) < r && Math.abs(y) < r) ? 1 : 0;
}

// обработка рисунка по результатам
function getHitResult(x,y,r) {
    return center(x,y,r) ||
    star(x,y,r) ||
    romb(x,y,r) ||
    circle(x,y,r) ||
    square(x,y,r) ||
    0;
}

// основа
function shotHandler() {
    var radius = Math.abs(Number(document.getElementById('inputR').value))
    if (isManual ){
        var x = Number(document.getElementById('inputX').value);
        var y = Number(document.getElementById('inputY').value);
        score += getHitResult(x, y, radius);
    } else {
        var count = Number(document.getElementById('count').value);
        if (count > 0) {
            for (var i = 0; i < count; i++) {
                var x = Math.random()*4 -2;
                var y = Math.random()*4 -2;
                score += getHitResult(x, y, radius);
            }
        }
    }
    document.getElementById('score').innerHTML = `Результат: ${score} очков`;   // Можно переписать

}

// проверка на ручную стрельбу
function isManualHandler(event) {
    isManual = event.target.checked;
    if (isManual) { //Стреляем вручную
        document.querySelector('.manual').classList.remove('hide')
        document.querySelector('.random').classList.add('hide')
    } else {
        document.querySelector('.manual').classList.add('hide')
        document.querySelector('.random').classList.remove('hide')

    }
}

// ну блин, не знаю что это
function resetScore() {
    score = 0;
    document.getElementById('score').innerHTML = `Результат: ${score} очков`;
}

function initTarget() {
    document.getElementById('shotButton').addEventListener('click', shotHandler);
    document.getElementById('isManual').addEventListener('change', isManualHandler);
    document.getElementById('resetScore').addEventListener('click', resetScore);
}