export  class Money{
    protected amount! : number;
    protected _currency! : string;
    constructor(amount : number, currency : string) {
        this.amount = amount;
        this._currency = currency;
    }

    public getAmount(): number{
        return this.amount
    }

    public equals(obj: any): Boolean{
        const money : Money =  obj as Money;
        return this.amount === money.getAmount() && this._currency === money._currency;
    }

    static dollar (amount : number): Money{
        return new Money(amount, 'USD')
    }

    static franc (amount: number): Money{
        return new Money(amount,  'CHF')
    }

    times(multiplier : number) : Money | null{
        return new Money(multiplier * this.amount, this.currency);
    }
    get currency() : string{
        return this._currency
    }
}

export class Dollar extends Money{
    _currency: string
    public constructor(amount : number, currency: string){
        super(amount, currency);
        this._currency = currency
    }

/*     get currency(): string{
        return this._currency;
    }
    
    public times(multiplier: number) : Money | null{
       return new Money(this.amount * multiplier, this.currency);
    } */
}

export class Franc extends Money {
     _currency: string 
    public constructor(amount : number, currency: string){
        super(amount, currency);
        this._currency = currency
    }   
   
 /*   public get currency(): string{
        return 'CHF'
    }
    
    public times(multiplier: number) : Money | null{
       return new Money(this.amount * multiplier, this.currency);
    } */
}



