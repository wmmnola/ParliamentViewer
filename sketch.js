function setup() {
  createCanvas(windowWidth, windowHeight);
  startPos = new Pos(20, 20)
  var p = new Party("text", 19, "#ff0000", startPos);
  p.show();
}

function draw() {

}

var Pos = function(x, y) {
  this.x = x;
  this.y = y;
}
