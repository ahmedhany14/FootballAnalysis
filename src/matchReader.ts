const { ReadCsv } = require('./CsvReader');
import { stringToDate } from './parseDate';
import { matchResult } from './MatchResult';
type matchData = [Date, string, string, number, number, matchResult, string];

export class MatchReader extends ReadCsv<matchData> {

    constructor(public path: string) {
        super(path);
    }

    public mapRow(row: string[]): matchData {
        return [
            stringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResult,
            row[6]
        ];
    }
}