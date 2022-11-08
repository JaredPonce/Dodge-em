let player;
let x = 0,
    y = 0,
    z = 0;


let leftBorder, rightBorder;
let shootButton;

function setup() {
    createCanvas(windowWidth, windowHeight);

    player = new Sprite(width / 2, height / 2, 50, 50, "dynamic");
    player.color = "black";

    leftBorder = new Sprite(0, height / 2, 50, height, "static");
    rightBorder = new Sprite(width, height / 2, 50, height, "static");

    shootButton = createButton("shoot");
    shootButton.position(width / 2, height - height / 4);
    shootButton.size(200, 200);
    shootButton.mousePressed(shoot);
}

function draw() {
    background(235);
    // player.vel.x = x;

    if (kb.presses(' ')) shoot();

    if (kb.presses('a')) player.position.x -= 4;
    else if (kb.presses('d')) player.position.x += 4;

    if (kb.presses('w')) player.position.y += 4;
    else if (kb.presses('s')) player.position.y -= 4;
}

function shoot() {
}

function gameOverScreen() {
    playerState = DEAD;
    background(0);

    player.color = color(0, 0, 255);

    textSize(50);
    fill(255);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
}

// window.addEventListener("devicemotion", function (e) {
//     x = parseInt(e.accelerationIncludingGravity.x) * -2;
//     y = parseInt(e.accelerationIncludingGravity.y);
//     z = parseInt(e.accelerationIncludingGravity.z);
// });

// window.addEventListener("touchend")
// Register a touchstart listeners for the 'source' element
const src = document.getElementById("source");

src.addEventListener('touchstart', (e) => {
  for (let i = 0; i < e.touches.length; i++) {
    console.log(`touchpoint[${i}].screenX = ${e.touches[i].screenX}`);
    console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
  }
}, false);
