let player, car;
let callSpawner, refreshCaller;
let difficulty = 1000,
    carSpeed = 4;
let x, y, z, upButton, downButton;

// Pagina para generar sonidos bfxr.met

let ALIVE = 1;
let DEAD = 0;
let playerState = ALIVE;

window.addEventListener("devicemotion", function (e) {
    x = parseInt(e.accelerationIncludingGravity.x) * -2.5;
    y = parseInt(e.accelerationIncludingGravity.x);
    z = parseInt(e.accelerationIncludingGravity.x);
});

function setup() {
    createCanvas(650, 1400);

    player = new Sprite(width / 2, height / 2, 80, 150, "dynamic");
    player.color = "blue";

    car = new Group();
    car.color = "red";

    callSpawner = setInterval(spawnCar, difficulty, carSpeed);
    refreshCaller = setInterval(increaseDifficulty, 1500);
}

function draw() {
    if (playerState == ALIVE) {
        background(225);

        player.vel.x = x;
        // console.log(touches.length);

        if (player.collides(car)) gameOverScreen();

        // if (touches.x < width / 2) player.position.y += 10;
        // else if (touches.x > width / 2) player.position.y -= 10;

        player.position.x > width
            ? (player.position.x = width)
            : player.position.x < 0
            ? (player.position.x = 0)
            : (player.position.x = player.position.x);

        player.position.y > height
            ? (player.position.y = height)
            : player.position.y < height / 1.5
            ? (player.position.y = height / 1.5)
            : (player.position.y = player.position.y);
    }

    // else if (playerState == DEAD) {
    // }
}

function spawnCar(vel) {
    new car.Sprite(random(25, 375), -50, 80, 150, "dynamic");
    car.vel.y = vel;
}

function increaseDifficulty() {
    clearInterval(callSpawner);
    if (difficulty >= 500) difficulty += -50;
    if (carSpeed <= 10) carSpeed += 0.1;

    callSpawner = setInterval(spawnCar, difficulty, carSpeed);
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
