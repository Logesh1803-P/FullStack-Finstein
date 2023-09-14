
// // let a:number = 2
// // typeof(a)
// // annotationL
// var num1: number;
// num1 = 4;
// console.log(num1)

// var num2: number = 2;
// console.log(num2)

// // type inference
// var num3 = 3;

// var num4 = num3 + 100;
// console.log(num4);

// var str1 = num1 + "some string";
// console.log(str1)

// // var nothappy : number = num1 + 'some string';
// // console.log(nothappy)

// var num6:boolean = true;
// console.log(num6)

// var num9 = num6 + 'false';
// console.log(num9);

// var num7:undefined;

// var num8: null;

// let A : number|string;
// A = 2
// A = 'logesh'
// console.log(A)

// let arr1 : number[] =  [1,2,3,4]
// console.log(arr1)

// let arr2 : (number|string)[] ;

// arr2 = ['loge','david','sams']


// arr2 = [1,3,5,6.5]
// console.log(arr2)

// let arr3 : (number|string|boolean|null|bigint|any)[];
// arr3 = ['logesh'];

// let a : {
//     name : (string|boolean),
//     age :  number|null ,
// }

// a = {
//     name : ['logesh','david',true],
//     age : 21
// }
// console.log((a.name[2]))

let a : { 
    name : (string|boolean),
    age :  number,
}[]

a = [
    {name:'logesh', age: 21},
    {name:'david',age : 22},
    {name:'kavin',age : 23},
    {name:'sams',age : 24}
]

let filterByAge = a.filter(({age}) => age <= 21)
console.log(filterByAge)



for(let i = 0; i < a.length; i++){
    if(a[i].age > 21){
        console.log("Age :",a[i].age)
    }     
}



