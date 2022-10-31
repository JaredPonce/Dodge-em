let player, car;
let callSpawner, refreshCaller;
let difficulty = 1000,
    carSpeed = 4;
let x, upButton, downButton;

// Pagina para generar sonidos bfxr.met

let ALIVE = 1;
let DEAD = 0;
let playerState = ALIVE;

window.addEventListener("devicemotion", function (e) {
    x = parseInt(e.accelerationIncludingGravity.x) * -2.5;
});

function setup() {
    createCanvas(400, 700);

    player = new Sprite(width / 2, height / 1.5, 40, 70, "dynamic");
    player.color = "blue";

    car = new Group();
    car.color = "red";

    upButton = createButton("⬆️");
    upButton.position(width / 4, height - height / 4);
    upButton.mousePressed(function () {
        player.position.y -= 20;
    });

    downButton = createButton("⬇️");
    downButton.position(width - width / 4, height - height / 4);
    downButton.mousePressed(function () {
        player.position.y += 20;
    });

    callSpawner = setInterval(spawnCar, difficulty, carSpeed);
    refreshCaller = setInterval(increaseDifficulty, 1500);
}

function draw() {
    if (playerState == ALIVE) {
        background(225);

        player.vel.x = x;

        if (player.collides(car)) gameOverScreen();

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
    new car.Sprite(random(25, 375), -50, 40, 70, "dynamic");
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
