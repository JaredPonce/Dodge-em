let player;
let x = 0,
    y = 0,
    z = 0;

let leftBorder, rightBorder;
let shootButton;
// let upButton, downButton;

// let ALIVE = 1;
// let DEAD = 0;
// let playerState = ALIVE;

function setup() {
    createCanvas(windowWidth, windowHeight);

    player = new Sprite(width / 2, height / 2, 50, 50, "dynamic");
    player.color = "black";

    leftBorder = new Sprite(0, height / 2, 50, height, "static");
    rightBorder = new Sprite(width, height / 2, 50, height, "static");

    shootButton = createButton("shoot");
    shootButton.position(width / 2, height - height / 4);
    shootButton.size(200, 200);
}

function draw() {
    background(225);

    player.vel.x = x;

    if (touches.x <= width / 2) {
        player.position.y -= 10;
    } else if (touches.x >= width / 2) {
        player.position.y += 10;
    }
}

function shoot() {}

function gameOverScreen() {
    playerState = DEAD;
    background(0);

    player.color = color(0, 0, 255, 20);

    textSize(50);
    fill(255);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
}

window.addEventListener("devicemotion", function (e) {
    x = parseInt(e.accelerationIncludingGravity.x) * -2;
    y = parseInt(e.accelerationIncludingGravity.y);
    z = parseInt(e.accelerationIncludingGravity.z);
});
