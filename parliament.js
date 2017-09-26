var Parliament = function(parties, startingPosGov, startingPosOO) {
  this.parties = parties;
  this.startingPosGov = startingPosGov;
  this.startingPosOO = startingPosOO;
  this.nextPosGov = startingPosGov;
  this.nextPosOO = startingPosOO;
  console.log(this.parties)
  this.showParliament = function() {
    for (let i = 0; i < parties.length; i++) {
      console.log(parties[i]);
      if (parties[i].partyType == "gov") {
        console.log("true")
        this.nextPosGov = parties[i].show(this.nextPosGov);
      }
    }
  }
}
