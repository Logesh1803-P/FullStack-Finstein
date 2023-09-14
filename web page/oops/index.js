//  creating class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    // constructor(){
    //     this.m = 10
    // }
    function A(i, j) {
        this.m = i;
        this.n = j;
    }
    A.prototype.inc = function () {
        return this.m + 1;
    };
    return A;
}());
// creating object
// let a1 = new A()
// creating object with constructor parameter
var a2 = new A(1, 3);
// Invoking
// console.log(a1.m)
// console.log(a1.inc())
// console.log(a2.m)
// console.log(a2.n)
// console.log(a2.inc())
// inheritant
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.decrement = function () {
        return this.n - 3;
    };
    return B;
}(A));
// relation ship father -> child
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C.prototype.decrement = function () {
        return this.n - 2;
    };
    return C;
}(B));
var b1 = new B(2, 4);
// console.log(b1.decrement())
// console.log(b1.m)
// console.log(b1.inc())
var c1 = new C(70, 8);
var E = /** @class */ (function () {
    function E() {
        this.a = 1;
    }
    E.prototype.increment = function () {
        return this.a + 1;
    };
    return E;
}());
var d1 = new E();
console.log(d1.increment());
