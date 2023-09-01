function factorial(num){
    let f = 1
    for(let i = num; i > 0 ; i--){
        
        f = f * i

    }
    return f
}

n = 5;

let result3 = factorial(n)
console.log(result3)