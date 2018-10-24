describe("PointsCalculator", () => {
    let ducks;
    let calculator;

    beforeEach(() => {
        ducks = new Team({name: 'Ducks', wins: 6, losses: 2, overtimeLosses: 2});
        calculator = new PointsCalculator();
    });

    it("calculates points for a team", () => {
        expect(calculator.pointsForTeam(ducks)).toEqual(14);
    });
});