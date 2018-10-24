class Team {
  constructor(options = {}) {
    this.losses = options.losses || 0;
    this.name = options.name || '';
    this.overtimeLosses = options.overtimeLosses || 0;
    this.wins = options.wins || 0;
    this.points = ((this.wins * 2) + (this.losses * 0) + (this.overtimeLosses * 1));
  }

  


}
