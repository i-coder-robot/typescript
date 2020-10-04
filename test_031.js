//存取器
var password = '1234567';
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (password && password === '123456') {
                this._fullName = newName;
            }
            else {
                console.log("你是谁，要干嘛？");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p = new Person();
p.fullName = "Jack";
if (p.fullName) {
    console.log(p.fullName);
}
// 编译的时候会报错
// error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// 意思是说要用es5或者更高的版本编译
// 使用 tsc test_031.ts --target es5
