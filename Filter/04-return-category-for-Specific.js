



let job = [{name:"logesh",role:"developer"},{name:"david",role:"ui"},{name:'ayu',role:"ui"}]

let role = prompt("Enter the role (only in small) :")

let result7 = job.filter(e => e.role == role.toLowerCase())

console.log(result7)