export class Money{
    protected amount! : number;
    constructor(amount : number) {
        this.amount = amount;
    }
    public getAmount(): number{
        return this.amount
    }
    public equals(obj: any): Boolean{
        const money : Money =  obj as Money;
        return this.amount === money.getAmount();
    }
}

export class Dollar extends Money{

    public constructor(amount : number){
        super(amount);
    }
    
    public times(multiplier: number) : Dollar | null{
       return new Dollar(this.amount * multiplier);
    }

  
}

export class Franc extends Money {
    
    public constructor(amount : number){
        super(amount);
    }   
    
    public times(multiplier: number) : Franc | null{
       return new Franc(this.amount * multiplier);
    }
}



