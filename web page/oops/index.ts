//// ---------------------------------creating class | Encapsulation------------------------------------

class A1{
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

////----------------------------------------- creating object---------------------------------------------
//     // let a1 = new A()




////-------------------------------creating object with constructor parameter-----------------------------

//  let a2 = new A(1,3)





// ------------------------------------------ Invoking--------------------------------------------------

//         // console.log(a1.m)
//         // console.log(a1.inc())

//         console.log(a2.m)
//         console.log(a2.n)
//         console.log(a2.inc())


//// ----------------------------------------- Inheritant-------------------------------------------------  

class B extends A1{

    constructor(i:number,j:number,k:number){
        super(i,j);  //-- the super keyword to call methods and constructors of the superclass (the parent class) from a subclass (the child class). // Call the constructor of class A with i and j----------------------

    }
    // super(i,j,n){}

    decrement(){
        return this.n - 3
    }
    inc(){
        let classA_Inc = super.inc() + 100
        return classA_Inc
    }

}
    let b1 = new B(20,40,0)

    console.log(b1.decrement())
    console.log(b1.m)
    console.log(b1.inc())


//// --------------------------------- relation ship father ---> child----------------------------------------
// class C extends B{
//     decrement() {
//         return this.n - 2
        
//     }
// } 

// let c1 = new C(70,8)

//     console.log(c1.decrement())
//     console.log(c1.inc())


// //--------------------------------------Abstraction---------------------------------------------
    abstract class F{

        m:number = 4;
        str:string;
        constructor(name:string){
            this.str = name

        }
        abstract increment():number; //------------// Abstract method that must be implemented by subclasses------
    }
    // let m:number = 10
    class G extends F{
        // m:number = 10;
        
        
        constructor(){
            super('loge')
            // m = 7
            // this.m = 10
        }

        increment():number {
            return this.m + 5
        }
    }
    let f1 = new G();
    console.log(f1.increment())
    console.log(f1.str)

//    //---------------------------------- Interface----------------------------------------------
// interface D{
//     increment():number;
//     a:number
// }

// class E implements D{

//     a:number
//     constructor(){
//         this.a = 1
//     }
//     increment() {                 // ------  must declare increment method in class E ------
//         return this.a + 1
        
//     }
// }

// let d1 = new E()

// console.log(d1.increment())