var x;
var y;
var xx = 1;
var yy = 1;
var RGB;
function movement() {
  //moving down
  if (x + xx < 0) {
    xx *= -1;
  } else {
    x += xx;
  }
  if (y + yy < 0) {
    yy *= -1;
  } else {
    y += yy;
  }
  //moving up
  if (x + xx > canvas_x - 100) {
    xx *= -1;
  } else {
    x += xx;
  }
  if (y + yy > canvas_y - 100) {
    yy *= -1;
  } else {
    y += yy;
  }
  background(x + 50 * (255 / canvas_x), y + 50 * (255 / canvas_y), 0);
  shape(x, y);
  if (crabRaveMode === 0) {
  } else if (crabRaveMode === 1) {
    RGB = [rando] + random(10, 100);
    G += random(10, 100);
    B += random(10, 100);
    background(R, G, B);
    shape(x, y);
  }
}
