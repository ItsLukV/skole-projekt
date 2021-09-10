let canvas_x;
let canvas_y;
let crabRaveMode = 0;
let movementControll = "auto"

function preload() {
  crabRave = loadSound("assets/CrabRave.mp3");
  img = loadImage("assets/Carrot.png");
  x = random(101, windowWidth - 101);
  y = random(101, windowHeight - 101);
  canvas_x = windowWidth;
  canvas_y = windowHeight;
  console.log("ready");
}

function setup() {
  angleMode(DEGREES);
  createCanvas(canvas_x, canvas_y);
  frameRate(50);
  console.log("ready");
}

function draw() {
  background(0);
  moveStyleChange()
  if (movementControll === "manual"){
    manualMove()
  }
  print (error)
  text ("error, move", 55, 55)
  }
  raveTime();
  easterTime();
  eight();
  windowSize();
  johnCina();
}

function sketch() {
  print("gaming");
}

function shape(x, y) {
  image(img, x, y, 100, 100);
}

function raveTime() {
  if (mouseIsPressed) {
    mouseIsPressed = false;
    if (crabRaveMode === 0) {
      crabRave.play(29);
      crabRaveMode = 1;
      print("crab time");
      img = loadImage("assets/Crab.png");
    } else if (crabRaveMode === 1) {
      crabRaveMode = 0;
      print("crab end");
      img = loadImage("assets/Carrot.png");
      crabRave.pause();
    }
  }
}
function moveStyleChange(){
  switch (keyCode){
    case 90:
      movementControll = "manual"
    break
    case 88:
      movementControll = "auto"
    break
  }
}
