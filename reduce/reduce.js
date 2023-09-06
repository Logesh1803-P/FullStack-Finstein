
// arrow function
    // let a = [8,2,11,10]

    // let newa1 = a.reduce((acc,val) =>{
    //     console.log('acc:',acc)
    //     console.log('val:',val)
    //     return acc + val
        
    // })

// normal function
    // function sum(acc,val){
    //     console.log('acc:',acc)
    //     console.log('val:',val)
    //     return acc + val
        
    // }

    // let a = [8,2,11,10]

    // let newa1 = a.reduce(sum)

// aggregate function


    // let a = [8,2,11,10]

    // let newa1 = a.reduce(function (acc,val){
    //     console.log('acc:',acc)
    //     console.log('val:',val)
    //     return acc + val
        
    // })
// aggregate function with variable

    sum = function(acc,val){
        console.log('acc:',acc)
        console.log('val:',val)
        return acc + val
        
    }

    let a = [8,2,11,10]

    let newa1 = a.reduce(sum)





