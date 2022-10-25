let player, car;
let callSpawner;
let difficulty = 1000;
let x, y;

let ALIVE = 1;
let DEAD = 0;
let playerState = ALIVE;

window.addEventListener("devicemotion", function (e) {
    x = parseInt(e.accelerationIncludingGravity.x) * -1;
    y = parseInt(e.accelerationIncludingGravity.y);
});

function setup() {
    createCanvas(400, 800);

    player = new Sprite(300, 700, 40, 70, "dynamic");
    player.color = "blue";

    car = new Group();

    callSpawner = setInterval(spawnCar, difficulty, 1, 3);
    refreshCaller = setInterval(increaseDifficulty, 3000);
}

function draw() {
    if (playerState == ALIVE) {
        background(225);

        player.vel.x = x;
        player.vel.y = y;

        if (player.collides(car)) gameOverScreen();
    } else if (playerState == DEAD) {
    }
}

function spawnCar(amount, vel) {
    for (let i = 0; i < amount; i++) {
        new car.Sprite(random(25, 375), -50, 40, 70);
        car.color = "red";
        car.vel.y = vel;
    }
}

function increaseDifficulty() {
    clearInterval(callSpawner);
    if (difficulty >= 300) difficulty += -25;
    callSpawner = setInterval(spawnCar, difficulty, 1, 3);
}

function gameOverScreen() {
    playerState = DEAD;
    background(0);
    car.remove();

    clearInterval(refreshCaller);
    clearInterval(callSpawner);
    textSize(50);
    fill(255);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
}
