function isEven(num_list){
    let newArray
    newArray = num_list.filter(e => e % 2 == 0)

    return newArray
    
}


let num_list = [1,2,3,4,5]

// let result5 = num_list.filter(e => e % 2 == 0)
let result5 = isEven(num_list)

console.log(result5)