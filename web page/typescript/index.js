// let a = 1
// let a = 'abc'
// console.log(a)
var A = /** @class */ (function () {
    function A() {
        this.a = 1;
        this.b = 2;
        this.a = 5;
        this.b = 10;
    }
    A.prototype.increment = function () {
        return this.a++;
    };
    A.prototype.decrement = function () {
        return this.b + 1;
    };
    return A;
}());
var a1 = new A();
console.log(a1.a);
console.log(a1.increment());
console.log(a1.decrement());
