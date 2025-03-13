import { Dollar, Franc } from './money'

test('Test multiplication', ()=>{
    const five = new Dollar(5);
    expect(five.times(2)).toEqual(expect.objectContaining(new Dollar(10)));
    expect(five.times(3)).toEqual(expect.objectContaining(new Dollar(15)));
})

test('Test Franc multiplication', ()=>{
    const five = new Franc(5);
    expect(five.times(2)).toEqual(expect.objectContaining(new Franc(10)));
    expect(five.times(3)).toEqual(expect.objectContaining(new Franc(15)));
})

test('Testing equality', ()=> {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy
    expect(new Dollar(6).equals(new Dollar(5))).toBeFalsy
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy
    expect(new Franc(6).equals(new Franc(5))).toBeFalsy
})
