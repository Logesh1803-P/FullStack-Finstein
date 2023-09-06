
emp = [
        {uid :1,name :'logesh',age :21,gender:'M',sal:20000},
        {uid :2,name :'david',age :23,gender:'M',sal:30000},
        {uid :3,name :'hamenth',age :20,gender:'M',sal:40000},
        {uid :4,name :'ragul',age :25,gender:'M',sal:50000},
        {uid :5,name :'san',age :22,gender:'M',sal:60000}
]
user = {uid :1,name :'logesh',age :21,gender:'M',sal:20000}

// function myfun(e){
//     console.log(e.sal)
// }

// myfun(user)
// function myfun({sal,name}){
//     console.log(sal,name)
// }

// myfun(user)

// let newa = emp.reduce((a,b) => a + b.sal,0)
// console.log(newa)

let newf = emp.reduce((a,{sal}) => a + sal,0)
console.log(newf)