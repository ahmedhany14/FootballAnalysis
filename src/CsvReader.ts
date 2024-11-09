import fs from 'fs';

// this class only responsible for reading the csv file
export class ReadCsv {
    public data: string[][] = [];

    constructor(public path: string) { };

    public read(): void {
        this.data = fs.readFileSync(this.path, 'utf-8').split('\n').map((row: string): string[] => {
            return row.split(',');
        });
    }

}