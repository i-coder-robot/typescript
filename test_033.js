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
//抽象类
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.printName = function () {
        console.log("\u6211\u662F" + this.name);
    };
    return Human;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    Student.prototype.sayHello = function () {
        console.log("大家好~");
    };
    Student.prototype.readBook = function () {
        console.log("正在读书...");
    };
    return Student;
}(Human));
var s = new Student("小王");
s.printName();
s.sayHello();
s.readBook();
// (s as Student).readBook()
