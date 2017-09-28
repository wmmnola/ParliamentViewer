var Parliament = function(parties, startingPosGov, startingPosOO) {
  this.parties = parties;
  this.startingPosGov = startingPosGov;
  this.startingPosOO = startingPosOO;
  this.nextPosGov = startingPosGov;
  this.nextPosOO = startingPosOO;
  this.uoParties = [];
  console.log(this.nextPosOO)
  this.showParliament = function() {
    for (let i = 0; i < parties.length; i++) {
      if (parties[i].partyType == "gov") {
        this.nextPosGov = parties[i].show(this.nextPosGov);
      }
      if (parties[i].partyType == "oo") {
        this.nextPosOO = parties[i].show(this.nextPosOO);
      }
      if (parties[i].partyType == "uo") {
        this.uoParties.push(parties[i])
      }
    }
    this.nextPosUO = new Pos(this.startingPosOO.x, this.nextPosOO.y +
      (offset + 15));
    console.log(this.nextPosUO);
    for (let i = 0; i < this.uoParties.length; i++) {
      this.nextPosUO = this.uoParties[i].show(this.nextPosUO);
    }
  }
}
