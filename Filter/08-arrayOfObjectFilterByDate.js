

function checkDate(productArray,startDate,endDate){
    if( productArray.date >= startDate && productArray.date <= endDate)
        return productArray
}

let productManufactureDate = [{name :'milk',date: '11-08-2023'},{name :'biscate',date: '15-08-2023'},{name :'chacolate',date: '17-08-2023'},{name :'chips',date: '23-08-2023'}]

let startDate = prompt("Enter StartDate:")

let endDate = prompt("Enter End date:")

let filterByDate = productManufactureDate.filter( e => checkDate(e,startDate,endDate))
// let productArray = []

// for(let j = 0; j < filterByDate.length; j++){
//     productArray[j] = filterByDate[j].name
// }
// // let productName = filterByDate.name

console.log(filterByDate)
// console.log(productName)