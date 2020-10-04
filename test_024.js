//构造器接口
function CreatOp(ctor, a, b) {
    return new ctor(a, b);
}
var Op1 = /** @class */ (function () {
    function Op1(a, b) {
    }
    Op1.prototype.op = function (a, b) {
        console.log("人力计算");
        return a + b;
    };
    return Op1;
}());
var Op2 = /** @class */ (function () {
    function Op2(a, b) {
    }
    Op2.prototype.op = function (a, b) {
        console.log("计算机计算");
        return a + b;
    };
    return Op2;
}());
// CreatOp函数，第一个参数是OpConstructor类型
// 会检查传入Op1和Op2是否满足OpConstructor的签名
var personAdd = CreatOp(Op1, 1, 2);
console.log(personAdd.op(99, 1));
var computerAdd = CreatOp(Op2, 3, 4);
console.log(computerAdd.op(88, 1));
