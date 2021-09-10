var x;
var y;
var xx = 1;
var yy = 1;

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
  colorShift();
  shape(x, y);
}
function manualMove() {
  switch(keyCode) {
    case 39:
    case 68:
      xx += 1
    break
    case 37:
    case 65:
      xx -= 1
    break
    case 38:
    case 87:
      yy -=1
    break
    case 40:
    case 83:
      yy += 1
    break
  } 
}
