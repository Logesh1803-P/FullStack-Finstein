var a = 10;
var b = 3;
var sum = function (a, b) { return a + b; };
console.log(sum(1, 4));
function sum1(a, b) {
    return a + b;
}
console.log(sum(5, 7));
var gg = 55;
var A = /** @class */ (function () {
    function A() {
        this.i = 1;
    }
    A.prototype.inc = function () {
        return this.i + 10;
    };
    return A;
}());
var a1 = new A();
console.log(a1.inc());
// tsc --init
// tsc index.ts -w outdir dist
