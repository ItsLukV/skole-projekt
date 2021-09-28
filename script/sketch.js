//Lavet af
//David, Lukas og Malthe
//Fra 2.M
let canvas_x;
let canvas_y;
let crabRaveMode = 0;
let movementControll = "auto"

function preload() {
  crabRave = loadSound("assets/CrabRave.mp3");
  img = loadImage("assets/Carrot.png");
  vision = "carrot"
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
  if(vision == "john"){
    johnyTime = true
  }else {
    johnyTime = false
  }
  background(0);
  moveStyleChange()
  if (movementControll === "manual"){
    manualMove()
  } else if (movementControll === "manualOriginal"){
    manualMoveOriginal()
  }
  if(johnyTime == true){
    johny()
  } else {
    movement()
  } 
  raveTime();
  easterTime();
  eight();
  windowSize();
  johnCina();
  quake()
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
      vision = "crab"
    } else if (crabRaveMode === 1) {
      crabRaveMode = 0;
      print("crab end");
      img = loadImage("assets/Carrot.png");
      vision = "carrot"
      crabRave.pause();
    }
  }
}
function moveStyleChange(){
  switch (keyCode){
    case 90:
      movementControll = "manual"
      keyCode = 0
    break
    case 88:
      movementControll = "auto"
      xx = 1
      yy = 1
      keyCode = 0
    break
    case 67:
      movementControll = "manualOriginal"
  }
}