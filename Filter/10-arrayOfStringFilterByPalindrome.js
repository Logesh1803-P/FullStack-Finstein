
function checkForPalindrome(word){
    var j = word.length - 1
    var found = false
    for( let i = 0 ; i < word.length / 2; i++){

        if( word[i] == word[j])
            j--
        
            else{
            found = true
            break
        }     
    }
    if(!found){
        return word
    }else{
        return null
    }

}

function findPalindrome(arrayString){

    var oneByOneFilter = arrayString.filter(e => checkForPalindrome(e))
    return oneByOneFilter
}


let arrayString = ['madam','david','malayalam','loge','nursesrun']

let palindrome = findPalindrome(arrayString)
console.log(palindrome)