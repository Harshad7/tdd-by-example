import {Money, Expression, Bank,  } from './money'

test('Test multiplication', ()=>{
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toEqual(expect.objectContaining(Money.dollar(10)));
    expect(five.times(3)).toEqual(expect.objectContaining(Money.dollar(15)));
})

test('Test Franc multiplication', ()=>{
    const five = Money.franc(5);
    expect(five.times(2)).toEqual(expect.objectContaining(Money.franc(10)));
    expect(five.times(3)).toEqual(expect.objectContaining(Money.franc(15)));
})

test('Testing equality', ()=> {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy
    expect(Money.dollar(6).equals(Money.dollar(5))).toBeFalsy
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy
})

test('Testing Currencies', ()=>{
    expect('USD').toBe(Money.dollar(1).currency)
    expect('CHF').toBe(Money.franc(1).currency)
})

test('Addition', ()=>{
   /* const sum : Money = Money.dollar(5).plus(Money.dollar(5));
    expect(Money.dollar(10)).toEqual(sum) */
    const five : Money = Money.dollar(5);
    const sum : Expression = five.plus(five);
    const bank : Bank = new Bank(); 
    const reduce : Money | null = bank.reduce(sum, 'USD');
    expect(Money.dollar(10)).toEqual(reduce)
    

})