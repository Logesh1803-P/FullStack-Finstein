//  creating class

class A{
      i:number
      j:number

    // constructor(){
    //     this.i = 10
    // }
    constructor(i,j){
        this.i = i;
        this.j = j;
    }

    inc(){
        return this.i + 1
    }

}

// creating object
// let a1 = new A()

// creating object with constructor parameter
 let a2 = new A(1,3)

// Invoking

    // console.log(a1.i)
    // console.log(a1.inc())

console.log(a2.i)
console.log(a2.j)
console.log(a2.inc())

