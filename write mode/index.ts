let a = 10
let b = 3

let sum = (a:number,b:number):number=>{return a + b}

console.log(sum(1,4))

function sum1(a:number,b:number):number{
    return a+b
}
console.log(sum(5,7))
let gg =55

class A{
    i:number
    constructor(){
        this.i = 1
    }
    inc():number{
        return this.i + 10
    }
}
let a1 = new A();
console.log(a1.inc())

// tsc --init
// tsc index.ts -w outdir dist
