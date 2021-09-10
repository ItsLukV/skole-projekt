var R = 50;
var G = 0;
var B = 0;
var D = 0;
function colorShift() {
  if (crabRaveMode == 1) {
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
    background(R, G, B);
    cText();
  }
}
function cText() {
  if (D > 360) {
    D = 0;
  }
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