// TODO: hacer los límites de movimiento del player
let player;
let x = 0,
    y = 0,
    z = 0;

let leftBorder, rightBorder, downBorder;
let shootButton, proyectile;

function setup() {
    createCanvas(windowWidth, windowHeight);

    player = new Sprite(width / 2, height / 2, 50, 50, "dynamic");
    player.color = "black";

    proyectile = new Group();
    proyectile.color = "black";
    proyectile.vel.y = -10;

    leftBorder = new Sprite(0, height / 2, 50, height, "static");
    rightBorder = new Sprite(width, height / 2, 50, height, "static");
    downBorder = new Sprite(width / 2, height, width, 50, "static");

    // shootButton = createButton("shoot");
    // shootButton.position(width / 3, height - height / 4);
    // shootButton.size(200, 200);
    // shootButton.mousePressed(shoot);
    // shootButton.color = color('rgba(255, 255, 255, 50)');
}

function draw() {
    background(235);
    // player.vel.x = x;
    // player.vel.y = y;

    if (kb.presses(" ")) shoot();

    if (kb.pressing("a")) player.position.x -= 4;
    else if (kb.pressing("d")) player.position.x += 4;

    if (kb.pressing("w")) player.position.y -= 4;
    else if (kb.pressing("s")) player.position.y += 4;

    if (player.positon.y >= height / 2) player.positon.y = height / 2;
}

function shoot() {
    new proyectile.Sprite(player.position.x, player.position.y - 50, 20, 20);
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

// window.addEventListener(
//     "touchstart",
//     (e) => {
//         for (let i = 0; i < e.touches.length; i++) {
//             console.log(
//                 `touchpoint[${i}].screenX = ${e.touches[i].screenX} apa`
//             );
//         }
//
//         if (e.touches[O].screenX > width / 2) player.position.y -= 10;
//         else if (e.touches[O].screenX < width / 2) player.position.y += 10;
//     },
//     false
// );
