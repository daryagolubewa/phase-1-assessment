class League {
  constructor(options = {}) {
    this.teams = options.teams || [];
    this.calculator = options.calculator || new PointsCalculator();
  }

   standings() {
  	let sort = this.teams.sort(function(high, low){
  		return low.points - high.points;
  	})
  	return sort;
  }

  playoffTeams() {
  	let teams = this.standings();
  	return teams.slice(0, 4);
  }
  
  positionFor(name) {
  	let teams = this.standings();
  	for (let i = 0; i < teams.length; i++) {
  		if(name === teams[i].length) {
  			return teams[i].length + 1;
  		}
  	}

  }

}
