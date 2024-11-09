import { matchData } from "./Type";

export interface OutputTarget {
    print(report: string): void;
}

export interface Analyzer {
    run(matches: matchData[]): string;
}

export interface DataReader {
    data: string[][];
    read(): void;
}
