// ----------------------------polymorphism---overloading------------------------

class Person{
    name:string;

    constructor(nameParameter:string){

        this.name = nameParameter

    }

    character():string;

    character(type:string):string;

    character(type?:string){

        if(type){
            return this.name+" are "+type+" character"
        }else
            return this.name+" are empty character"
    }

}

let logesh = new Person("logesh")
let sathish = new Person("sathish")
let jeeva = new Person("jeeva")


console.log(logesh.character())
console.log(sathish.character("ANGRY"))
console.log(jeeva.character("SOFT"))


//----------------------------------overriding-------------------------------------

// class Person1{
//     name:string;
//     constructor(name_var:string){
//         this.name = name_var
//     }

//     responseTime():string{
//         return this.name +" takes .20 sec"
//     }
// }

// class Person2 extends Person1{

//     responseTime(): string {
//         return this.name + " takes 0.5 sec"   
//     }
// }

// let ayyanar = new Person1("ayyanar")
// let david = new Person2("david")


// console.log(ayyanar.responseTime())
// console.log(david.responseTime())