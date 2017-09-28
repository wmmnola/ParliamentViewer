function setup() {
  createCanvas(windowWidth, windowHeight);
  let govStartPos = new Pos(20, 40);
  let ooStartPos = new Pos(260, 40);
  let govMargin = new Margin(govStartPos.x, govStartPos.x + 80);
  let ooMargin = new Margin(ooStartPos.x, ooStartPos.x - 80);
  let crossMargin = new Margin(govMargin.end, 220)
  var p = new Party("text", 19, "#ff0000", govStartPos, "gov", govMargin);
  var p2 = new Party("text", 19, "#3366ff", ooStartPos, "oo", ooMargin);
  let p3 = new Party("text", 19, "#009933", ooStartPos, "uo", ooMargin);
  let p4 = new Party("text", 19, "#808080", ooStartPos, "cross", crossMargin);
  party_list = [p, p2, p3, p4];
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
