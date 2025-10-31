export class Stock {
    public favourite: boolean = false;

    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number//,
        //public type: string
    ) {}

    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }
}
