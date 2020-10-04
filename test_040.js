//交叉类型
function CrossType(one, two) {
    var r = {};
    for (var prop in one) {
        r[prop] = one[prop];
    }
    for (var prop in two) {
        if (!r.hasOwnProperty(prop)) {
            r[prop] = two[prop];
        }
    }
    return r;
}
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var Man2 = /** @class */ (function () {
    function Man2() {
    }
    Man2.prototype.Happy = function () {
        console.log("找小姐姐");
    };
    Man2.prototype.Work = function () {
        console.log("家里有矿");
    };
    return Man2;
}());
var Woman2 = /** @class */ (function () {
    function Woman2() {
    }
    Woman2.prototype.Happy = function () {
        console.log("买，买，买");
    };
    Woman2.prototype.Work = function () {
        console.log("有人养，上啥班啊！");
    };
    return Woman2;
}());
var m = CrossType(new Person2("老王"), new Man2());
m.Work();
m.Happy();
var w = CrossType(new Person2("老王媳妇"), new Woman2());
w.Work();
w.Happy();
