function ShotPage() {
    const shot = new Shot();

    function updateScore() {
        document.getElementById('score').innerHTML =
            `Результат: ${shot.getScore()} очков`;
    }

    function toggleMode() {
        const isManual = shot.getManual();

        if (isManual) {
            document.querySelector('.manual').classList.remove('hide');
            document.querySelector('.random').classList.add('hide');
        } else {
            document.querySelector('.manual').classList.add('hide');
            document.querySelector('.random').classList.remove('hide');
        }
    }

    function isManualHandler(event) {
        shot.setManual(event.target.checked);
        toggleMode();
    }

    function shotHandler() {
        const r = Math.abs(Number(document.getElementById('inputR').value));

        if (shot.getManual()) {
            const x = Number(document.getElementById('inputX').value);
            const y = Number(document.getElementById('inputY').value);
            shot.shotManual(x, y, r);
        } else {
            const count = Number(document.getElementById('count').value);
            if (count > 0) {
                shot.shotRandom(count, r);
            }
        }

        updateScore();
    }

    function resetHandler() {
        shot.resetScore();
        updateScore();
    }

    this.init = function() {
        document.getElementById('shotButton')
            .addEventListener('click', shotHandler);

        document.getElementById('isManual')
            .addEventListener('change', isManualHandler);

        document.getElementById('resetScore')
            .addEventListener('click', resetHandler);

        toggleMode();
        updateScore();
    };
}