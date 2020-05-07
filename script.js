var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 300;
var y = 200;
var dx = 3;
var dy = 3;
var height = 30;
var text = "N";

function animate () {
    var metrics = ctx.measureText(text);
    var width = metrics.width;
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    ctx.font = "bold 100px Helvetica";
    ctx.fillStyle = "#FF0000";
    ctx.fillText(text, x, y);
    
    if ((x + width > innerWidth) || (x <= 0)) {
        dx = -dx;
        
    }

    if ((y > innerHeight) || (y <= height*2)) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
animate();