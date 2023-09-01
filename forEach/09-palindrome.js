
function checkPalindrome(word){
    j = word.length -1
    for( let i = 0; i < word.length / 2 ;i++){
        if(word[i] == word[j]){ 
            j--;    
        }
        else{
            return false
            break
        }        
    }
    return true
}

var word = prompt("Enter any word:")
let result2 = checkPalindrome(word)
if(!result2){
    console.log("not")
}
else{
    console.log("palindrome")
}