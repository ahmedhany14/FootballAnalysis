import fs from 'fs';
export class ReadCsv {
    public data: string[][] = [];
    constructor(private path: string) { }

    public read(): void {
        this.data = fs.readFileSync(this.path, 'utf-8').split('\n').map((row: string): string[] => {
            return row.split(',');
        });
    }

}