export class Money implements Expression{
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

    public plus (addend: Money): Money {
        return new Money(this.amount + addend.amount, this.currency);
    }
}

export interface Expression{

}

export class Bank{
    public reduce(source : Expression , to : string ): Money | null{
        return Money.dollar(10);
    }
}


