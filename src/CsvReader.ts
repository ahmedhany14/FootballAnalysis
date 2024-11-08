import fs from 'fs';
export abstract class ReadCsv<T> {
    public data: T[] = [];

    constructor(public path: string) { };
    abstract mapRow(row: string[]): T;

    public read(): void {
        this.data = fs.readFileSync(this.path, 'utf-8').split('\n').map((row: string): string[] => {
            return row.split(',');
        }).map(this.mapRow);
    }

}