import { ReadCsv } from './CsvReader'

const reader = new ReadCsv('football.csv');
reader.read();
const matches = reader.data;

enum matchResult {
    HOME_WIN = 'H',
    AWAY_WIN = 'A',
    DRAW = 'D',
}


let manUWins = 0;
matches.map((match: string[]): void => {
    manUWins +=
        ((match[2] === 'Man United' && match[5] === matchResult.AWAY_WIN) ? 1 : 0)
        |
        ((match[1] === 'Man United' && match[5] === matchResult.HOME_WIN) ? 1 : 0);
});

console.log(`Man United won ${manUWins} games`);