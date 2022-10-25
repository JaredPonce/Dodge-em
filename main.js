let player, car;
let callSpawner;
let difficulty = 1000,
    carSpeed = 4,
    maxCars = 1;
let x, y;

let ALIVE = 1;
let DEAD = 0;
let playerState = ALIVE;

window.addEventListener("devicemotion", function (e) {
    x = parseInt(e.accelerationIncludingGravity.x) * -2.5;
});

function setup() {
    createCanvas(400, 800);

    player = new Sprite(300, 700, 40, 70, "dynamic");
    player.color = "blue";

    car = new Group();

    callSpawner = setInterval(spawnCar, difficulty, 1, carSpeed);
    refreshCaller = setInterval(increaseDifficulty, 1000);
}

function draw() {
    if (playerState == ALIVE) {
        background(225);

        console.log(carSpeed);
        player.vel.x = x;

        if (player.collides(car)) gameOverScreen();

        player.position.x > width
            ? (player.position.x = width)
            : player.position.x < 0
            ? (player.position.x = 0)
            : (player.position.x = player.position.x);
    } else if (playerState == DEAD) {
    }
}

function spawnCar(amount, vel) {
    new car.Sprite(random(25, 375), -50, 40, 70);
    car.color = "red";
    car.vel.y = vel;
}

function increaseDifficulty() {
    clearInterval(callSpawner);
    if (difficulty >= 600) difficulty += -50;
    if (carSpeed <= 8) carSpeed += 0.05;

    callSpawner = setInterval(spawnCar, difficulty, 1, carSpeed);
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
