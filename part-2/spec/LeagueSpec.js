describe("League", () => {
    let blues;
    let capitals;
    let coyotes;
    let ducks;
    let flames;
    let jets;
    let penguins;
    let redWings;
    let teams = [];

    let calculator;

    let league;

    beforeAll(() => {
        blues = new Team({name: 'Blues', wins: 7, losses: 2, overtimeLosses: 1});
        capitals = new Team({name: 'Capitals', wins: 5, losses: 4, overtimeLosses: 1});
        coyotes = new Team({name: 'Coyotes', wins: 1, losses: 6, overtimeLosses: 3});
        ducks = new Team({name: 'Ducks', wins: 6, losses: 0, overtimeLosses: 4});
        flames = new Team({name: 'Flames', wins: 3, losses: 7, overtimeLosses: 0});
        jets = new Team({name: 'Jets', wins: 9, losses: 0, overtimeLosses: 1});
        penguins = new Team({name: 'Penguins', wins: 4, losses: 4, overtimeLosses: 2});
        redWings = new Team({name: 'Red Wings', wins: 8, losses: 2, overtimeLosses: 1});
        teams = [blues, capitals, coyotes, ducks, flames, jets, penguins, redWings];

        calculator = new PointsCalculator();
        league = new League({teams: teams, calculator: calculator});
    });

    it("has teams", () => {
        expect(league.teams).toEqual(teams);
    });

    it("has a calculator", () => {
        expect(league.calculator).toEqual(calculator);
    });

    describe("function standings", () => {
        it("returns a collection of teams sorted by points in descending order", () => {
            expect(league.standings()).toEqual([jets, redWings, ducks, blues, capitals, penguins, flames, coyotes]);
        });
    });

    describe("function playoffTeams", () => {
        it("returns the top half of the teams in the league", () => {
            expect(league.playoffTeams()).toEqual([jets, redWings, ducks, blues]);
        });
    });

    describe("function positionFor(name)", () => {
        it("returns the position of the team with the passed in name", () => {
            expect(league.positionFor('Jets')).toEqual(1);
            expect(league.positionFor('Flames')).toEqual(7);
        });
    });
});
