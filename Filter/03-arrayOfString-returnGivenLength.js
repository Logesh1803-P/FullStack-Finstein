
function ReturnLenght(char, length_limit){

    // let newResult 
    let newResult = char.filter(e => e.length > length_limit);
    return newResult;
}



let char = ["logesh","sameer","david"];

let length_limit = prompt("enter max length string you Want:");

let result7 = ReturnLenght(char, length_limit);
console.log(result7);