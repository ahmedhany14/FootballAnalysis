import { matchData } from "../Type";
import { Analyzer } from "../interfaces";
import { OutputTarget } from "../interfaces";

export class Summary {
    private output: string = "";
    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget) { }

    // responsible for building the report
    public build(matchData: matchData[]): void {
        this.output = this.analyzer.run(matchData);
    }

    // responsible for printing the report
    public print() {
        this.outputTarget.print(this.output);
    }
}