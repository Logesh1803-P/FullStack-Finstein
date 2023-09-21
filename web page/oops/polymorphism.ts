// ----------------------------polymorphism---overloading------------------------

// class Person1{
//     name:string;

//     constructor(nameParameter:string){

//         this.name = nameParameter

//     }

//     character():string;

//     character(type:string):string;

//     character(type?:string){

//         if(type){
//             return this.name+" are "+type+" character"
//         }else
//             return this.name+" are empty character"
//     }

// }

// let person1 = new Person1("logesh")
// let person2 = new Person1("david")

// console.log(person1.character())
// console.log(person1.character("ANGRY"))
// console.log(person2.character("SOFT"))


//----------------------------------overriding-------------------------------------

class Person1{
    name:string;
    constructor(name_var:string){
        this.name = name_var
    }

    responseTime():string{
        return this.name +" takes .20 sec"
    }
}

class Person2 extends Person1{

    responseTime(): string {
        return this.name + " takes 0.5 sec"   
    }
}

let ayyanar = new Person1("ayyanar")
let david = new Person2("david")


console.log(ayyanar.responseTime())
console.log(david.responseTime())