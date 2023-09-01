

let pin = 1234
var userPin
var last_View

for(let i = 0; i < 4; i++){
    userPin = prompt("Enter your pin:")
    if(userPin  == pin){
        console.log('That wascorrect!')
        // userPin = ''
        last_View = true
        break
    }else
        console.log('Sorry that was wrong.')
        // userPin = ''
        last_View = false
}
if(!last_View)
    console.log("4 attempt complete:")
else
    console.log("GET IT")