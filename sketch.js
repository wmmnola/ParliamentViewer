function setup() {
  createCanvas(windowWidth, windowHeight);
  govStartPos = new Pos(20, 20);
  ooStartPos = new Pos(260, 20);
  govMargin = new Margin(govStartPos.x, govStartPos.x + 80);
  ooMargin = new Margin(ooStartPos.x, ooStartPos.x - 80);
  var p = new Party("text", 19, "#ff0000", govStartPos, "gov", govMargin);
  var p2 = new Party("text", 19, "#3366ff", ooStartPos, "oo", ooMargin);
  let p3 = new Party("text", 19, "#009933", ooStartPos, "uo", ooMargin);
  let party_list = [p, p2, p3];
  let parl = new Parliament(party_list, govStartPos, ooStartPos);
  parl.showParliament();
}

function draw() {

}

var Pos = function(x, y) {
  this.x = x;
  this.y = y;
}
var Margin = function(start, end) {
  this.start = start;
  this.end = end;
}
