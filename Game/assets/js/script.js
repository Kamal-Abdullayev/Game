let input = document.getElementById("input");
let box = document.querySelectorAll(".box");
let globe = document.getElementById("globe")

let topLeftInpit = document.getElementById("top-left");
let topInpit = document.getElementById("top");
let topRightInpit = document.getElementById("top-right");

let leftInpit = document.getElementById("left");
let centerInpit = document.getElementById("center");
let rightInpit = document.getElementById("right");

let bottomLeftInpit = document.getElementById("bottom-left");
let bottomInpit = document.getElementById("bottom");
let bottomRightInpit = document.getElementById("bottom-right");

var x = 0;
var y = 0;


var varinputValue;
input.addEventListener("keyup", (e) => {
    varinputValue = input.value;

    moveKey(e);
    topInpit.addEventListener("click", () => {
        moveUp();
    });
    rightInpit.addEventListener("click", () => {
        moveRight();
    });
    leftInpit.addEventListener("click", () => {
        moveLeft();
    });
    bottomInpit.addEventListener("click", () => {
        moveDown();
    });
    topLeftInpit.addEventListener("click", () => {
        moveUp();
        moveLeft();
    });
    topRightInpit.addEventListener("click", () => {
        moveUp();
        moveRight();
    });
    bottomLeftInpit.addEventListener("click", () => {
        moveDown();
        moveLeft();
    });
    bottomRightInpit.addEventListener("click", () => {
        moveDown();
        moveRight();
    });
    centerInpit.addEventListener("click", () => {
        moveCenter();
    });
})

function moveKey(e) {
    console.log(e.key);
    if (e.key == "ArrowUp") {
        moveUp();
    } else if (e.key == "ArrowRight") {
        moveRight();
    } else if (e.key == "ArrowLeft") {
        moveLeft();
    } else if (e.key == "ArrowDown") {
        moveDown();
    }

}

function moveUp() {
    if (y + parseInt(varinputValue) < 42) {
        y += parseInt(varinputValue);
        globe.style.bottom = `${y}%`;
    } 
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
}
function moveDown() {
    if (y - parseInt(varinputValue) > -42) {
        y -= parseInt(varinputValue);
        globe.style.bottom = `${y}%`;
    }
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
}
function moveRight() {
    if (x + parseInt(varinputValue) < 42) {
        x += parseInt(varinputValue);
        globe.style.left = `${x}%`;
    }
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
}
function moveLeft() {
    if (x - parseInt(varinputValue) > -42) {
        x -= parseInt(varinputValue);
        globe.style.left = `${x}%`;
    }
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
}
function moveCenter() {
    x = 0;
    y = 0;
    globe.style.left = `${x}%`;
    globe.style.bottom = `${y}%`;
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
}