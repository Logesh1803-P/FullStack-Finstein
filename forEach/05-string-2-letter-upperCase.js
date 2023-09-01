
function UpperSecondLetter(str){
    var newstr = '';

    for (i = 0; i < str.length; i++){
        if( i % 2 == 0){
            newstr = newstr + str[i]
        }
        else{
            newstr = newstr + 'Z'
        }
    }
    return newstr
}

let str = 'logesh'

let result = UpperSecondLetter(str)
console.log(result)