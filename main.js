let player, car;
let callSpawner, refreshCaller;
let difficulty = 1000,
    carSpeed = 4,
    maxCars = 1;
let x, y;

let ALIVE = 1;
let DEAD = 0;
let playerState = ALIVE;

window.addEventListener("devicemotion", function (e) {
    x = parseInt(e.accelerationIncludingGravity.x) * -2.5;
    y = parseInt(e.accelerationIncludingGravity.x) * 1;
});

function setup() {
    createCanvas(400, 800);

    player = new Sprite(300, 600, 40, 70, "dynamic");
    player.color = "blue";

    car = new Group();

    callSpawner = setInterval(spawnCar, difficulty, carSpeed);
    refreshCaller = setInterval(increaseDifficulty, 1000);
}

function draw() {
    if (playerState == ALIVE) {
        background(225);

        console.log(carSpeed);
        player.vel.x = x;
        player.vel.y = y;

        if (player.collides(car)) gameOverScreen();

        player.position.x > width
            ? (player.position.x = width)
            : player.position.x < 0
            ? (player.position.x = 0)
            : (player.position.x = player.position.x);

        player.position.y <= 500
            ? (player.position.y = 500)
            : player.position.y < 800
            ? (player.position.y = 800)
            : (player.position.y = player.position.y);
    }

    // else if (playerState == DEAD) {
    // }
}

function spawnCar(vel) {
    new car.Sprite(random(25, 375), -50, 40, 70).vel = vel;
    car.color = "red";
}

function increaseDifficulty() {
    clearInterval(callSpawner);
    if (difficulty >= 500) difficulty += -50;
    if (carSpeed <= 10) carSpeed += 0.05;

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
