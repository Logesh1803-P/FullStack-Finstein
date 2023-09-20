
// // let a:number = 2
// // typeof(a)

// // -----------------------------------annotation------------------------------------------------------

// var num1: number;

// console.log(typeof(num1))

//-----------------------------------------type annotation setting value

// var num2: number = 2;
// console.log(num2)

// // ---------------------------------------- type inference--------------------------------------------------
// var num3 = 3;

//---------------------------------------type interface (Number)-------------------------------

// var num4 = num3 + 100;
// console.log(num4);

//---------------------------------------type interface (Number + string)-------------------------------

// var str1 = num1 + "some string";
// console.log(str1)

//------------------------------------Annotation adding number and string give error------------------------- 

// var nothappy : number = num1 + 'some string';
// console.log(nothappy)  //----------------------------------ERROR---------------------------------

//-------------------------------------Boolean data type -------------------------------------------------

var num6:boolean = true;
console.log(num6)

var num9 = num6 + 'false';
console.log(num9);

//--------------------------------------undefined-------------------------------------------------------

// var num7:undefined                           //----------------as data type
// // let num7 = undefined                      //-----------------> as value
// console.log(typeof(num7))

//---------------------------------------Null---------------------------------------

// var num8: null;          //----------------as data type
//  num8 = null              //-----------------> as value



//--------------------------------------------Number and string data type------------------------------------

// let A : number|string;
// A = 2
// A = 'logesh'
// console.log(A)

//--------------------------------------------Number Array----------------------------------------------

// let arr1 : number[] =  [1,2,3,4]
// console.log(arr1)

//----------------------------------------Number and string Array--------------------------------------
// let arr2 : (number|string)[] ;

// arr2 = ['loge','david','sams']
// arr2 = [1,3,5,6.5]
// console.log(arr2)

//---------------------------------------multiple data type array-------------------------------------------

// let arr3 : (number|string|boolean|null|bigint|any)[];
// arr3 = ['logesh', 4, true, null, 22222222];

//--------------------------------------------data type for object --------------------------------------------

// let a : {
//     name : (string|boolean)[],
//     age :  number|null ,
// }

//------------------------------------------Vales for above object--------------------------------

// a = {
//     name : ['logesh','david',true],
//     age : 21
// }
// console.log((a.name[2]))
//---------------------------------------data type for object array ---------------------------
// let a : { 
//     name : (string|boolean),
//     age :  number,
// }[]

//---------------------------------------- or ------------------------------------

// var a : [{ 
//     name : (string|boolean),
//     age :  number,
// }]
//------------------------------------Values for object array -------------------------------------
// a = [
//     {name:'logesh', age: 21},
//     {name:'david',age : 22},
//     {name:'kavin',age : 23},
//     {name:'sams',age : 24}
// ]

// -------------------------------------some operation----------------------------------
// let filterByAge = a.filter(({age}) => age <= 21)
// console.log(filterByAge)



// for(let i = 0; i < a.length; i++){
//     if(a[i].age > 21){
//         console.log("Age :",a[i].age)
//     }     
// }
//-------------------------------------------------------------------------------------



