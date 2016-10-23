export class Transaction {
    constructor(
        public traderId: string,
        public timestamp: number,
        public value: number) { }
}