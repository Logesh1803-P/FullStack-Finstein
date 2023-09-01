




// let studentGrade =[{name :'sasthi',grade:'A'},{name:'ragul',grade :'O'},{name:'logesh',grade:'A'}]

// let AverageGrade = prompt("Enter your AVG Grade:")

// let FilterBYGrade = studentGrade.filter(e => e.grade > AverageGrade.toUpperCase())

// console.log(FilterBYGrade)

function studentGradeAverage(gradeArray){
    sum = 0
    // for(let i = 0;i < gradeArray.length; i++){
    //     sum = sum + gradeArray[i]
    // }
    // var EachStudentAverage = sum / gradeArray.length
    // return EachStudentAverage

    gradeArray.forEach(e => sum = sum + e)
    var EachStudentAverage = sum / gradeArray.length
    return EachStudentAverage
}

let studentGrade =[{name :'sasthi',grade:[50,50,50,50,50]},{name:'ragul',grade :[75,75,75,75,75]},{name:'logesh',grade:[100,100,100,100,100]}]

let AverageGrade = prompt("Enter your AVG Grade:")

let FilterBYGrade = studentGrade.filter(e => studentGradeAverage(e.grade) > AverageGrade.toUpperCase())

console.log(FilterBYGrade)