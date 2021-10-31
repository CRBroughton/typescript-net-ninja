import { HasFormatter } from "../interfaces/HasFormatter.js"

// Classes

export class Invoice implements HasFormatter {
    // the three below values has optional modifiers which go in front:
    // readonly: Can only be read, cannot be modified in or out of the class.
    // private: Can only be read inside of the class.
    // public: This is the default behaviour, can be read and modified anywhere.

    // client: string;
    // details: string;
    // amount: number;

    constructor(
        // this.client = c;
        // this.details = d;
        // this.amount = a;
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}