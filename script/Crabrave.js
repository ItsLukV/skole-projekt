//Lavet af
//David, Lukas og Malthe
//Fra 2.M
var R = 50;
var G = 0;
var B = 0;
var D = 0;

//chooses background color during crab rave
function colorShift() {
  if (crabRaveMode == 1) { //checks if crab rave is active
    //red
    if (R < 255) {
      R += random(0, 10);
    } else if (R > 255) {
      R = 0;
    }
    //green
    if (G < 255) {
      G += random(0, 15);
    } else if (G > 255) {
      G = 0;
    }
    //blue
    if (B < 255) {
      B += random(0, 20);
    } else if (B > 255) {
      B = 0;
    }

    //sets the background color
    background(R, G, B);

    //calls text controller
    cText(); //Crabrave.js
  }
}

//controlls text during crab rave
function cText() {

  // makes sure the angel does not go above 360 (rotate further than max)
  if (D > 360) {
    D = 0;
  }

  //Lukas is the only one who knows how this works
  push();
  fill(random(0, 255), random(0, 255), random(0, 255));
  translate(windowWidth / 2, windowHeight / 2);
  textSize(100);
  rotate(1 + D);
  text("Crabrave", 0, 0);
  pop();
  D += 1;
  console.log("test");
}