var Parliament = function(parties, startingPosGov, startingPosOO) {
  this.parties = parties;
  this.startingPosGov = startingPosGov;
  this.startingPosOO = startingPosOO;
  this.nextPosGov = startingPosGov;
  this.nextPosOO = startingPosOO;
  this.uoParties = [];
  this.crossBenchers = [];
  this.showParliament = function() {
    for (let i = 0; i < parties.length; i++) {
      if (parties[i].partyType == "gov") {
        this.nextPosGov = parties[i].show(this.nextPosGov);
        this.govMargin = parties[i].margin;
      }
      if (parties[i].partyType == "oo") {
        this.nextPosOO = parties[i].show(this.nextPosOO);
        this.ooMargin = parties[i].margin;
      }
      if (parties[i].partyType == "uo") {
        this.uoParties.push(parties[i]);
      }
      if (parties[i].partyType == "cross") {
        this.crossBenchers.push(parties[i]);
        this.crossMargin = parties[i].margin
        console.log(this.crossMargin);
      }
    }
    try {
      this.nextPosUO = new Pos(this.startingPosOO.x, this.nextPosOO.y +
        (offset + 20));
      for (let i = 0; i < this.uoParties.length; i++) {
        this.nextPosUO = this.uoParties[i].show(this.nextPosUO);
      }
      this.nextPosCross = new Pos(this.crossMargin.start, this.nextPosUO.y +
        5);
    } catch (TypeError) {
      console.log("No UO Parties")
    }
    try {
      for (let i = 0; i < this.crossBenchers.length; i++) {
        console.log(this.nextPosCross);
        this.nextPosCross = this.crossBenchers[i].show(this.nextPosCross);
      }
    } catch (TypeError) {
      console.log("No Crossbenchers")
    }
    this.drawSpeaker();
    this.labelParties();
  }
  this.drawSpeaker = function() {
    let x = (this.govMargin.end + this.ooMargin.end) / 2;
    fill("#000000");
    stroke("#c6bf39");
    strokeWeight(2);
    ellipse(x, 20, 20, 20)
  }
  this.labelParties = function() {
    console.log("word")
    push();
    translate(0, 0)
    rotate(PI / 2.0);
    fill(0, 0, 0);
    textSize(32);
    text("word", 250, 250);
    pop();
  }
}
