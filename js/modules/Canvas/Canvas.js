// с большой буквы потому что здесь конструктор
function Canvas({ id, width = 700, height = 700, WIN }) {

    const canvas = document.getElementById(id);
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');

    function xs(x) {
        return (x - WIN.LEFT) / WIN.WIDTH * canvas.width;
    }
    function ys(y) {
        return canvas.height - (y - WIN.BOTTOM) / WIN.HEIGHT * canvas.height;
    }

    this.clear = function() {
        context.fillStyle = '#eee ';
        context.fillRect(0,0, canvas.width, canvas.height);
    }

    this.line = function(x1,y1, x2,y2, color = '#000', width = 2) {
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = width;
        context.moveTo(xs(x1), ys(y1));
        context.lineTo(xs(x2), ys(y2));
        context.closePath();
        context.stroke();
    }
}
