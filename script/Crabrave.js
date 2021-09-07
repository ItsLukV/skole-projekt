var RR = 0;
var GG = 0;
var BB = 0;

var R = 50;
var G = 0;
var B = 0;

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
  }
}
