function Array_sum(a, b) {
    var sum = 0;
    
    // for (let i = 0; i < a.length; i++) {
    //     sum = sum + a[i];
    // }
    a.forEach(e => sum = sum + e)
    
    // for (let j = 0; j < b.length; j++) {
    //     sum = sum + b[j];
    // }
    b.forEach(e => sum = sum + e)
    
    return sum;
}

let x = [1, 2, 3];
let y = [5, 6, 7];

let result = Array_sum(x, y);

console.log(result);
