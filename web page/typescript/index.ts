// let a = 1
// let a = 'abc'
// console.log(a)

//-------------------------------------------creating class--------------------------------------

class A{
     a = 1;
     b = 2;

    constructor(){
        this.a = 5
        this.b = 10

    }
   
    increment(){
        return this.a++;

    }
    decrement(){
        return this.b + 1;

    }
}
let a1 = new A();

console.log(a1.a)
console.log(a1.increment())
console.log(a1.decrement())

