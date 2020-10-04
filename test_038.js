//泛型约束
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Log(msg) {
    console.log(msg.max);
    return msg;
}
Log({ max: 666 });
function getAttribute(obj, key) {
    return obj[key];
}
var xx = { a: 1, b: "老王", c: 2, d: "老张" };
getAttribute(xx, "b");
// 没有y属性，报错
// getAttribute(xx,"y")
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var BMWFactory = /** @class */ (function (_super) {
    __extends(BMWFactory, _super);
    function BMWFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BMWFactory.prototype.MakeCar = function () {
        return "BMW car";
    };
    return BMWFactory;
}(Car));
var BenzFactory = /** @class */ (function (_super) {
    __extends(BenzFactory, _super);
    function BenzFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BenzFactory.prototype.MakeCar = function () {
        return "Benz car";
    };
    return BenzFactory;
}(Car));
function createFactory(c) {
    return new c();
}
console.log(createFactory(BMWFactory).MakeCar());
console.log(createFactory(BenzFactory).MakeCar());
