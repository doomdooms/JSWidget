const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ctx.globalCompositeOperation = 'difference';
let width = document.getElementById('Width');
let onBtn = document.getElementById('onBtn');
let offBtn = document.getElementById('offBtn');
let controlTab = document.getElementById('controlTab');

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let hue = 0;
let direction = true;
let isDrawing = false,
    lastX = 0,
    lastY = 0;

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    if (onBtn.checked) {
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        }

        if(direction) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }
    } else {
        ctx.lineWidth = width.value;
    }

    ctx.beginPath();
    // start from
    ctx.moveTo(lastX,lastY);

    //  go to
    ctx.lineTo(e.offsetX, e.offsetY);
    [lastX, lastY] = [e.offsetX, e.offsetY];

    ctx.stroke();
    if (hue===360) {
        hue = 0;
    } hue++;



}

function toggleOpen() {
    this.classList.toggle('down')
}


canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup',() => isDrawing = false);
canvas.addEventListener('mouseout',() => isDrawing = false);
controlTab.addEventListener('click',toggleOpen);
