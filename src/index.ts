import { matchResult } from './MatchResult';
import { MatchReader } from './matchReader';
import { ReadCsv } from './CsvReader';

const csv = new ReadCsv('football.csv'); // declare csv object to only read the file

const transformedData = new MatchReader(csv); // declare transformedData object to transform the data from csv object
transformedData.read(); // call the read method to transform the data
const matches = transformedData.matches; // declare matches object to store the transformed data

let manUWins = 0, manUmatches = 0;
matches.map((match): void => {
    manUWins +=
        ((match[2] === 'Man United' && match[5] === matchResult.AWAY_WIN) ? 1 : 0)
        |
        ((match[1] === 'Man United' && match[5] === matchResult.HOME_WIN) ? 1 : 0);

    manUmatches += (match[1] === 'Man United') ? 1 : 0 | (match[2] === 'Man United' ? 1 : 0);
});

console.log(`Man United won ${manUWins} games from ${manUmatches} matches they played`);