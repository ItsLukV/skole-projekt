//Lavet af
//David, Lukas og Malthe
//Fra 2.M
var RT = 0
var GT = 0
var BT = 0
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
function johny(){
    //moving down
  if (x + xx < 0) {
    xx *= -1;
    colorT()
  } else {
    x += xx;
  }
  if (y + yy < 0) {
    yy *= -1;
    colorT()
  } else {
    y += yy;
  }
  //moving up
  if (x + xx > canvas_x - 100) {
    xx *= -1;
    colorT()
  } else {
    x += xx;
  }
  if (y + yy > canvas_y - 100) {
    yy *= -1;
    colorT(x,y)
  } else {
    y += yy;
  }
  background(x + 50 * (255 / canvas_x), y + 50 * (255 / canvas_y), 0);
  colorShift();
  shapeT(x, y);
}
function colorT(x,y){
  noStroke()
  RT = random(0, 255)
  GT = random(0, 255)
  BT = random(0, 255)
}
function shapeT (x,y){
  image(img, x, y, 100, 100);
  fill(RT,GT,BT,125)
  ellipse(x+50, y+50, 100)
}