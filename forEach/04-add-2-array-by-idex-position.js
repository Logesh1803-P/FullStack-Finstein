

function add_Index_array(a,b){
    c = []
    for (let i = 0; i < a.length;i++){
        c[i] = a[i] + b[i]
    }
    return c
}

let a = [2,3,4]
let b = [3,4,5]

let result = add_Index_array(a,b)
console.log(result)