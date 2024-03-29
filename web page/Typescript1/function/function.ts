//---------------------------------- Normal Functions-------------------------------------

function pow( a : number, b : number): number|string{
    
    return  Math.pow(a,b)
    
}

console.log(pow(4,2))



// ---------------------------------Normal function with default values-----------------------------------

function sum1( a : number = 6 , b : string ):string{

    return a + b

}
 

console.log(sum1( 2, 'loge' ))
// console.log(sum1( 2))
console.log(sum1( undefined,'logesh'))



// --------------------------------------optional parameter---------------------------------------------


function sum2( a : [number,string?] , b : string , c?:number):string{
    if(typeof(c)!== undefined){
        return a + b + c

    }
    return a + b 

}
 

console.log(sum2( [100],'loge'))
console.log('sum is :',sum2( [100],'loge',100))
// console.log(sum2( [],'l' ))


// ---------------------------------dynamic number of parameter--------------------------------------

                    function sum3( a : number ,... b : number[] ):number[]{

                        let add = b.map((e) => e + a )

                        return add

                    }
                    // let num1 :number = 200
                    
                    // let c : number[] = [1,2,3]
                    console.log(sum3( 200, 1,2))

        // function sum3(a:any,...b:number[]):number{

        //     return a + b
        // }

        // console.log('sum is:',sum3(2,5,6,7))




// spread operator
let a1 : number[] = [3,5]
  
console.log(1,2,a1)
console.log(1,2,...a1)


