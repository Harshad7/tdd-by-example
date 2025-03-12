export class Dollar {

    amount : number;
    public constructor(amount : number){
        this.amount = amount;
    }
    
    public times(multiplier: number) : Dollar | null{
       return new Dollar(this.amount * multiplier);
    }
}

