function Graph2DPage() {

    const WIN = {
        LEFT: -5,
        BOTTOM: -5,
        WIDTH: 10,
        HEIGHT: 10
    }
    
    const canvas = new Canvas({
        id: 'canvas2D',
        WIN
    });

    function f(x) {
        return Math.sin(x)
    }

    function printFunction(f, color = 'green', width = 1) {
        const { LEFT, WIDTH } = WIN
        let x = LEFT;
        const dx = WIDTH / 100;
        while (x <= WIDTH + LEFT) {
            canvas.line(x, f(x), x + dx, f(x + dx), color, width);
            x += dx;
        }
    }

    function printOXY() {
        const { LEFT, WIDTH, BOTTOM, HEIGHT } = WIN;
        const RIGHT = WIDTH + LEFT;
        const TOP = HEIGHT + BOTTOM;

        // сетка
        xed = LEFT;
        while (xed <= RIGHT) {
            canvas.line(xed, BOTTOM, xed, TOP, 'grey', 1);
            xed++
        }

        yed = BOTTOM;
        while (yed <= TOP) {
            canvas.line(LEFT, yed, RIGHT, yed, 'grey', 1);
            yed++
        }

        // Оси
        canvas.line(LEFT, 0, RIGHT, 0);
        canvas.line(0, BOTTOM, 0, TOP);

        // Стрелка Ox
        canvas.line(RIGHT, 0, RIGHT - WIDTH / 40,  WIDTH / 40);
        canvas.line(RIGHT, 0, RIGHT - WIDTH / 40, -WIDTH / 40);

        // Стрелка Oy
        canvas.line(0, TOP, - WIDTH / 40, TOP - WIDTH / 40);
        canvas.line(0, TOP,  WIDTH / 40, TOP - WIDTH / 40);

        h = 0.1

        // Еденичные отрезки на OX
        xed = LEFT;
        while (xed <= RIGHT){
            if (xed !== 0) {
                canvas.line(xed, -h, xed, h);
            }
            xed++
        }

        // Единичные отрезки на OY
        yed = BOTTOM;
        while (yed <= RIGHT){
            if (yed !== 0) {
                canvas.line(-h, yed, h, yed);
            }
            yed++
        }    
    }

    function render() {
        canvas.clear();
        printOXY();
        printFunction(f, 'red', )
    }

    render();
}


