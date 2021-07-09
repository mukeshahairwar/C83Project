var last_x;
var last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 2;

var screenwidth = screen.width;

var newwidth = 10;
var newheight = 10;

if (screenwidth <= 900) {
    newwidth = screen.width - 70;
    newheight = screen.height - 300;
    canvas.width = newwidth;
    canvas.height = newheight;
}

canvas.addEventListener("touchstart", touch_start);

function touch_start(e) {
    color = document.getElementById("ColorInput").value;
    width = document.getElementById("WidthInput").value;
    last_x = e.touches[0].clientX - canvas.offsetLeft;;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", touch_move);

function touch_move(e) {
    current_y = e.touches[0].clientY - canvas.offsetTop;
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
    last_y = current_y;
    last_x = current_x;
}

function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

canvas.addEventListener("mousedown",mouse_down);

function mouse_down(e){
    color = document.getElementById("ColorInput").value;
    width = document.getElementById("WidthInput").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove",mouse_move);

function mouse_move(e){
  
    current_x = e.clientX - canvas.offsetLeft;;
    current_y = e.clientY - canvas.offsetTop;
  
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo (last_x,last_y);
        ctx.lineTo (current_x,current_y);
        ctx.stroke();
        last_y = current_y;
        last_x = current_x;
    }
}
canvas.addEventListener("mouseup", mouse_up);

function mouse_up(e){
    mouseEvent = "moueup";
}
canvas.addEventListener("mouseleave", mouse_leave);

function mouse_leave(e){
    mouseEvent = "mouseleave";
}