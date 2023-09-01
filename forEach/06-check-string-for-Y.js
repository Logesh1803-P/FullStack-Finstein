
function checks(S){
    for (let i = 0; i < S.length; i++){
        if(S[i] === 'y' || S[i] === 'Y'){
            return true 
            break   
        }  
    }
    return false
}

var str1 = 'yoyo'
var result1 = checks(str1)
// result1 = str1.forEach(e => checks(e))
if(! result1 ){
    console.log("no")

}else{
    console.log("yes")

}


