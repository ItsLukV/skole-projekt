let canvas_x;
let canvas_y;
let crabRaveMode = 0;

function preload() {
  x = random(101, windowWidth - 101);
  y = random(101, windowHeight - 101);
  canvas_x = windowWidth;
  canvas_y = windowHeight;
}

function setup() {
  img = loadImage("assets/Carrot.png");
  crabRave = loadSound("assets/CrabRave.mp3");
  createCanvas(canvas_x, canvas_y);
  frameRate(50);
}

function draw() {
  background(0);
  movement();
  raveTime();
}

function sketch() {}
//gaming

function shape(x, y) {
  image(img, x, y, 100, 100);
}

function raveTime() {
  if (mouseIsPressed) {
    mouseIsPressed = false;
    crabRave.play();
    crabRaveMode == 1;
    if (crabRaveMode === 0) {
      crabRaveMode == 1;
    } else if (crabRaveMode === 1) {
      crabRaveMode = 0;
    }
  }
}
