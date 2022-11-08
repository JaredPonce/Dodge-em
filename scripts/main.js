let player;
let x = 0,
    y = 0,
    z = 0;

let leftBorder, rightBorder;
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

    // upButton = createButton("");
    // upButton.position(width / 3, height / 2);
    // downButton = createButton("");
    // downButton.position(width - width / 3, height / 2);
}

function draw() {
    // if (playerState == ALIVE) {
    background(225);

    player.vel.x = x;

    if (touches.x <= width / 2) {
        player.position.y -= 10;
    } else if (touches.x >= width / 2) {
        player.position.y += 10;
    }

    console.log(x);
    // }
}

function gameOverScreen() {
    playerState = DEAD;
    background(0);

    car.remove();
    clearInterval(refreshCaller);
    clearInterval(callSpawner);
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
