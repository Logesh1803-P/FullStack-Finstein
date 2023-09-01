a = [3,4,5]
console.log(sqart(a))

function sqart(a) {
    b=[]
    for(i = 0; i < a.length; i++){
       b[i] = a[i] * a[i] 
    }
    return b
}