describe("Team", () => {
    let team;

    beforeEach(() => {
        team = new Team({name: 'Ducks', wins: 6, losses: 2, overtimeLosses: 2});
    });

    it("has a name", () => {
        expect(team.name).toEqual('Ducks');
    });

    it("has wins", () => {
        expect(team.wins).toEqual(6);
    });

    it("has losses", () => {
        expect(team.losses).toEqual(2);
    });

    it("has overtimeLosses", () => {
        expect(team.overtimeLosses).toEqual(2);
    });
});