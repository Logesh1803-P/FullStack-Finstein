function Summation(num){
    let sum = 0
    for(let i = 1; i <= num; i++){
        sum = sum + i
    }
    return sum
}

let num = prompt("Enter number :")

let result4 = Summation(num)
console.log(result4)