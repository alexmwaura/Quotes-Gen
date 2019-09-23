export class Quote {
    showDescription: boolean;
    public myDate : Date
    constructor(
        public id: number,
        public name: string,
        public quote: string,
        public subject: string,
        public description: string,

    ){
        this.showDescription = false;
        this.myDate = new Date ()
    }
}
