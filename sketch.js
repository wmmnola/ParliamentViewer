function setup() {
  createCanvas(windowWidth, windowHeight);
  startPos = new Pos(20, 20)
  var p = new Party("text", 19, "#ff0000", startPos, "gov");
  var p2 = new Party("text", 19, "#3366ff", startPos, "gov");
  var party_list = [p, p2];
  let parl = new Parliament(party_list, startPos);
  parl.showParliament();
}

function draw() {

}

var Pos = function(x, y) {
  this.x = x;
  this.y = y;
}
