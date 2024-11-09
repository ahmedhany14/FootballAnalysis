import { matchData } from "../Type";


export class AvgGoolsForTeam {
    constructor(private team: string) { }

    public run(data: matchData[]): string {
        const teamGames = data.filter((match) => {
            return match[1] === this.team || match[2] === this.team;
        });

        const goals = teamGames.reduce((acc, match) => {
            return acc + (match[1] === this.team ? match[3] : match[4]);
        }, 0) / teamGames.length;
        return `XG for ${this.team} is ${!goals ? 0 : goals} per game.`;
    }

}