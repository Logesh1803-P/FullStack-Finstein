//------------------------abstraction------------------------

abstract class Bank{

   abstract rate_Of_Interest():number;

}

class SBI extends Bank{

    rate_Of_Interest():number {
        return 5.9
    }

}

class HCF extends Bank{
    rate_Of_Interest():number {
        return 6.0
    }
}

let sbi = new SBI()
let hcf = new HCF()

console.log(sbi.rate_Of_Interest())
console.log(hcf.rate_Of_Interest())