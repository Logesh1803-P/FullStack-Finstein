
// function cap(e){  
//          b = e.name.toUpperCase()  
//     return b
// }

// s = [
//     {'name':'loki'},{'name' : 'ben'},{'name': 'fin'}
// ]

// newS1 = s.map(e => cap(e))
// console.log(newS1)

s = [
{'name':'loki'},
{'name' : 'ben'},
{'name': 'fin'}
]

newS1 = s.map((e) => { return e.name.toUpperCase()})
console.log(newS1)