//  creating class
var A = /** @class */ (function () {
    // constructor(){
    //     this.i = 10
    // }
    function A(i, j) {
        this.i = i;
        this.j = j;
    }
    A.prototype.inc = function () {
        return this.i + 1;
    };
    return A;
}());
// creating object
// let a1 = new A()
// creating object with constructor parameter
var a2 = new A(1, 3);
// Invoking
// console.log(a1.i)
// console.log(a1.inc())
console.log(a2.i);
console.log(a2.j);
console.log(a2.inc());
