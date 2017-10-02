function setup() {
  createCanvas(windowWidth, windowHeight);
  const govStartPos = new Pos(60, 40);
  const ooStartPos = new Pos(200, 40);
  const govMargin = new Margin(govStartPos.x, govStartPos.x + 40);
  const ooMargin = new Margin(ooStartPos.x, ooStartPos.x - 40);
  const crossMargin = new Margin(govMargin.end, 160)
  const p = new Party("Conservative", 5, "#279FD5", "gov", govMargin);
  const p3 = new Party("NUP", 5, "#930A1E", "gov", govMargin);
  const p4 = new Party("Green", 4, "#6AB023", "oo", ooMargin);
  const p5 = new Party("LibDems", 3, "#FAA01A", "oo", ooMargin);
  const p6 = new Party("Labour", 4, "#C52424", "oo", ooMargin);
  const p9 = new Party("RSP", 4, "#ff3385", "uo", ooMargin);
  const p7 = new Party("ClassLibs", 2, "#3B3B3B", "uo", ooMargin);
  const p8 = new Party("cross", 6, "#9E9E9E", "cross", crossMargin);
  const party_list = [p, p3, p4, p9, p5, p6, p8];
  const parl = new Parliament(party_list, govStartPos, ooStartPos);
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
