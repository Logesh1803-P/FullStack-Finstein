//  anomos function
 
 a = [8,4,6,2]

 newa = a.map(function(e){return e * 2})
 console.log(newa)


//  normal function

function square(element){
    return element * 2
}
 b = [5,6,78,8]

 newb = b.map(square)
 console.log(newb)
 

//  arrow functionL

c = [3,2,1,4]

newc = c.map((e) => {return e * 2})
console.log(newc)


//  anomos function with variable

square = function(e){
    return e * 2
}
d = [2,5,7,8]

newd = d.map(square)
console.log(newd)



