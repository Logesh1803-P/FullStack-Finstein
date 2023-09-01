
function checkEmail(customerEmailArray,emailDomain){

    return fiterByEmailDomain = customerEmailArray.filter(e => e.email.includes(emailDomain))
}
let customerEmail = [
        {name:'logesh',email:'logesh@gmail.com'},
        {name:'hemanth',email: 'll@example.com'},
        {name:'david',email: 'll@example.com'},
        {name:'ayyanar',email:'ayo@gmail.com'}

        ] 
        
let emailDomain = prompt("Enter emailDomain:")

// let filterByEmail = customerEmail.filter(e => e.email.includes(emailDomain))
let filterByEmail =  checkEmail(customerEmail,emailDomain)
console.log(filterByEmail)

