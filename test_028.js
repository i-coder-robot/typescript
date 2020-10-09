var Man = /** @class */ (function () {
    function Man(name) {
        this.name = name;
    }
    Man.prototype.SayHello = function () {
        return "\u65E9\u554A, " + this.name + ", \u5403\u4E86\u561B\uFF1F";
    };
    return Man;
}());
var zhao = new Man("老赵");
console.log(zhao.SayHello());
