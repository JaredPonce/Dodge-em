let player, car;
let difficulty = 1000;
let x, y, z;

window.addEventListener("devicemotion", function (e) {
    x = parseInt(e.accelerationIncludingGravity.x) * -1;
    y = parseInt(e.accelerationIncludingGravity.y);
});

function setup() {
    createCanvas(400, 800);

    player = new Sprite(300, 700, 40, 70, "dynamic");
    player.color = "blue";

    car = new Group();
}

function draw() {
    console.log(difficulty);
    background(225);

    setTimeout(() => {
        spawnCar(1, 3);
    }, difficulty);

    difficulty -= 1;

    player.vel.x = x;
    player.vel.y = y;

    if (player.overlaps(car)) gameOver();
}

function spawnCar(amount, vel) {
    for (let i = 0; i < amount; i++) {
        new car.Sprite(random(25, 575), -50, 40, 70);
        car.color = "red";
        car.vel.y = vel;
    }
}

function gameOver() {
    background(0);
}
