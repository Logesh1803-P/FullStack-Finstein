


let personHobbies = [{name :'logesh',hobbie :'cricket'},{name:'david',hobbie:'chess'},{name:'hemanth',hobbie:'chess'}]

let hobbieHolder = prompt("Enter the hobbie:")

let FilterByHobbie = personHobbies.filter(e => e.hobbie == hobbieHolder.toLowerCase())

console.log(FilterByHobbie)
