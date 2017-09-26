var Parliament = function(parties, startingPosGov, startingPosOO) {
  this.parties = parties;
  this.startingPosGov = startingPosGov;
  this.startingPosOO = startingPosOO;
  this.nextPosGov = startingPosGov;
  this.nextPosOO = startingPosOO;


  this.showParliament = function() {
    for (let i = 0; i < parties.length; i++) {
      if (parties[i].partyType == "gov") {
        this.nextPosGov = parties[i].show(this.nextPosGov);
      }
      if (parties[i].partyType == "oo") {
        this.nextPosOO = parties[i].show(this.nextPosOO);
      }
    }
  }
}
