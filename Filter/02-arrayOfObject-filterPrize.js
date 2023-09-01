
function prizeFilter(cars,amount){
    var newCars
    newCars = cars.filter(e => e.prize > amount)
    return newCars
}

let cars = [{name:'lambo',prize:3000},{name:'ferrari',prize:4000},{name:'rolls',prize:5000}]
let amount = prompt("Enter amount your car prize:")

let result6 = prizeFilter(cars,amount)

console.log(result6)