//  arrow functionL

c = [3,2,1,4]

newc = c.map((e) => {
    let f = 1
    for(let i = e; i > 1; i--){
        f = f * i
    }
    return f

})
console.log(newc)

// aggregate function
c = [3,2,1,4]

newc = c.map(function(e) {
    let f = 1
    for(let i = e; i > 1; i--){
        f = f * i
    }
    return f

})
console.log(newc)

// aggregate function with variable

sqare = function(e) {
    let f = 1
    for(let i = e; i > 1; i--){
        f = f * i
    }
    return f

}
c = [3,2,1,4]
newc = c.map(sqare)

console.log(newc)

// normal function
 function sqare(e) {
    let f = 1
    for(let i = e; i > 1; i--){
        f = f * i
    }
    return f

}
c = [3,2,1,4]
newc = c.map(sqare)

console.log(newc)