//  creating class

class A{
      m:number
      n:number

    // constructor(){
    //     this.m = 10
    // }
    constructor(i:number,j:number){
        this.m = i
        this.n = j
    }

    inc(){
        return this.m + 1
    }

}

// creating object
// let a1 = new A()

// creating object with constructor parameter
 let a2 = new A(1,3)

// Invoking

    // console.log(a1.m)
    // console.log(a1.inc())

// console.log(a2.m)
// console.log(a2.n)
// console.log(a2.inc())


// inheritant

class B extends A{


    decrement(){
        return this.n - 3
    }
    // inc(){
    //     return this.m + 100
    // }

}

// relation ship father -> child
class C extends B{
    decrement() {
        return this.n - 2
        
    }
} 
let b1 = new B(2,4)

// console.log(b1.decrement())
// console.log(b1.m)
// console.log(b1.inc())

let c1 = new C(70,8)

    // console.log(c1.decrement())
    // console.log(c1.inc())


    // interface
interface D{
    increment():number;
    a:number
}

class E implements D{

    a:number
    constructor(){
        this.a = 1
    }
    increment() {
        return this.a + 1
        
    }
}

let d1 = new E()

console.log(d1.increment())