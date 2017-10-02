var offset = 25;


var Party = function(name, members, c, partyType, margin, st) {
  this.name = name;
  this.members = members;
  this.margin = margin;
  this.c = color(c);
  this.partyType = partyType;
  this.stroke = st;

  this.show = function(startPos) {
    this.nextx = startPos.x
    this.nexty = startPos.y
    if (this.stroke) {
      strokeWeight(1);
      stroke(this.stroke)
    } else {
      noStroke();
    }
    fill(this.c);
    if (this.partyType == "gov") {
      for (var i = 0; i < this.members; i++) {
        ellipse(this.nextx, this.nexty, 20, 20);
        this.nextx += offset;
        console.log(this.nextx + ":" + this.margin.end)
        if (this.nextx >= this.margin.end) {
          console.log("linebreak")
          this.nextx = this.margin.start;
          this.nexty += offset;
        }
      }
    }
    if ((this.partyType == "oo") || (this.partyType == "uo")) {
      for (let i = 0; i < this.members; i++) {
        ellipse(this.nextx, this.nexty, 20, 20);
        this.nextx -= offset;
        if (this.nextx <= this.margin.end) {
          this.nextx = this.margin.start;
          this.nexty += offset;
        }
      }
    }
    if (this.partyType == "cross") {
      for (var i = 0; i < this.members; i++) {
        ellipse(this.nextx, this.nexty, 20, 20);
        this.nextx += offset;
        console.log(this.nextx + ":" + this.margin.end)
        if (this.nextx >= this.margin.end) {
          console.log("linebreak")
          this.nextx = this.margin.start;
          this.nexty += offset;
        }
      }
    }
    return (new Pos(this.nextx, this.nexty));
  }


}
