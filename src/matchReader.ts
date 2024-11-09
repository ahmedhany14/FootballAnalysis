import { stringToDate } from './parseDate';
import { matchResult } from './MatchResult';
import { DataReader } from './interfaces';
import { matchData } from './Type';

// this class only responsible for transforming the data
export class MatchReader {
    matches: matchData[] = [];
    constructor(public reader: DataReader) {
    }


    public read(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): matchData => {
            return [
                stringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as matchResult,
                row[6]
            ];
        });
    }
}