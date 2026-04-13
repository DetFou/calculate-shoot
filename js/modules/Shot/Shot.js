function Shot() {
    let isManual = false;
    let score = 0;

    function center(x, y) {
        return (x === 0 && y === 0) ? 10 : 0;
    }

    function star(x, y, r) {
        const a = (-r + Math.sqrt(r ** 2 + 4 * r)) / 2;
        const b = r / (r + a);
        return (Math.abs(y) < r / (Math.abs(x) + a) - b) ? 4 : 0;
    }

    function romb(x, y, r) {
        return (Math.abs(x) + Math.abs(y) < r) ? 3 : 0;
    }

    function circle(x, y, r) {
        return (Math.sqrt(x ** 2 + y ** 2) < r) ? 2 : 0;
    }

    function square(x, y, r) {
        return (Math.abs(x) < r && Math.abs(y) < r) ? 1 : 0;
    }

    function getHitResult(x, y, r) {
        return center(x, y) ||
            star(x, y, r) ||
            romb(x, y, r) ||
            circle(x, y, r) ||
            square(x, y, r) ||
            0;
    }

    this.setManual = function(value) {
        isManual = value;
    };

    this.getManual = function() {
        return isManual;
    };

    this.getScore = function() {
        return score;
    };

    this.resetScore = function() {
        score = 0;
    };

    this.shotManual = function(x, y, r) {
        score += getHitResult(x, y, r);
        return score;
    };

    this.shotRandom = function(count, r) {
        for (let i = 0; i < count; i++) {
            const x = Math.random() * 4 - 2;
            const y = Math.random() * 4 - 2;
            score += getHitResult(x, y, r);
        }
        return score;
    };
}