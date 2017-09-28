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
    this.nextPosUO = new Pos(this.startingPosOO.x, this.nextPosOO.y +
      (offset + 20));
    for (let i = 0; i < this.uoParties.length; i++) {
      this.nextPosUO = this.uoParties[i].show(this.nextPosUO);
    }
    this.nextPosCross = new Pos(this.crossMargin.start, this.nextPosUO.y +
      50);
    for (let i = 0; i < this.crossBenchers.length; i++) {
      console.log(this.nextPosCross);
      this.nextPosCross = this.crossBenchers[i].show(this.nextPosCross);
    }
    this.drawSpeaker();
  }
  this.drawSpeaker = function() {
    let x = (this.govMargin.end + this.ooMargin.end) / 2;
    fill("#000000");
    stroke("#c6bf39");
    strokeWeight(2);
    ellipse(x, 20, 20, 20)
  }
}
