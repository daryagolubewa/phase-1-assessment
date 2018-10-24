class League {
  constructor(options = {}) {
    this.teams = options.teams || [];
    this.calculator = options.calculator || new PointsCalculator();
  }
}
