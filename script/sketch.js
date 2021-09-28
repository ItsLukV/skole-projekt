//Lavet af
//David, Lukas og Malthe
//Fra 2.M
let canvas_x;
let canvas_y;
let crabRaveMode = 0;
let movementControll = "auto"

function preload() {
  //loads assets
  crabRave = loadSound("assets/CrabRave.mp3");
  img = loadImage("assets/Carrot.png");
  //sets image to prevent lag on start
  vision = "carrot"
  //sets random starting possition
  x = random(101, windowWidth - 101);
  y = random(101, windowHeight - 101);

  //sets canvas size
  canvas_x = windowWidth;
  canvas_y = windowHeight;

  //logs to show no errors
  console.log("ready preload");
}

function setup() {

  //sets degrees instead of radians
  angleMode(DEGREES);

  //creates canvas
  createCanvas(canvas_x, canvas_y);

  //sets the rate at which the program runs
  frameRate(50);

  //logs to show no errors
  console.log("ready setup");
}

function draw() {
  //chooses if johny time should be active
  if(vision == "john"){
    johnyTime = true
  }else {
    johnyTime = false
  }

  //resets canvas to prevent frames on each other
  background(0); 

  //checks if movement style should change
  moveStyleChange() //sketch.js

  //activates manual move overide ifactive
  if (movementControll === "manual"){
    manualMove() //movement.js
  } else if (movementControll === "manualOriginal"){
    manualMoveOriginal() //movement.js
  }

  //activates color change for john cena if needed
  if(johnyTime == true){
    johny() //movement.js
  } else {
    movement() //movement.js
  } 

  //funktions that always run
  raveTime(); //sketch.js
  easterTime(); // key_skill.js
  eight(); // misc.js
  windowSize(); // misc.js
  johnCina(); // key_Skill.js
  quake() // quake.js
}

//a fun thing that never was used or finished
function sketch() {
  print("gaming");
}

//draws image on x and y 
function shape(x, y) {
  image(img, x, y, 100, 100);
}

//controlls if crabRaveMode should be on or off
function raveTime() {

  //checks if mouse is pressed
  if (mouseIsPressed) {
    mouseIsPressed = false;

    //checkes if crabRaveMode is already on
    if (crabRaveMode === 0) {
    
      //plays music
      crabRave.play(29);

      //sets crabRaveMode to 1
      crabRaveMode = 1;

      //tells prints crab time
      print("crab time");

      //loads new image and sets writes check variable for image
      img = loadImage("assets/Crab.png");
      vision = "crab"

      //if crabRaveMode is already true it turns it of
    } else if (crabRaveMode === 1) {
      crabRaveMode = 0;

      //tells that crab has ended
      print("crab end");

      //loads the carrot image
      img = loadImage("assets/Carrot.png");
      vision = "carrot"

      //pauses audio
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