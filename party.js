var offset = 25;
var margin = 100;

var Party = function(name, members, c, pos, partyType) {
  this.name = name;
  this.members = members;
  this.color = color;
  this.startx = pos.x;
  this.starty = pos.y;
  this.nextx = this.startx
  this.nexty = this.starty
  this.c = color(c);
  this.partyType = partyType;

  this.show = function() {
    noStroke();
    fill(this.c);
    for (var i = 0; i < this.members; i++) {
      ellipse(this.nextx, this.nexty, 20, 20)
      this.nextx += offset;
      if (this.nextx >= margin) {
        this.nextx = this.startx;
        this.nexty += offset;
      }
    }
    return (new Pos(this.nextx, this.nexty));
  }

}
