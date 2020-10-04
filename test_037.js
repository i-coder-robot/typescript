//泛型
function Go(who) {
    return who;
}
var result = Go("老王");
// 类型推断
// let result = Go("老王")
var result2 = Go(666);
// let result2 = Go(666)
function Log(msg) {
    console.log(msg.length);
    return msg;
}
//泛型函数
// let MyLog:<T>(msg:T)=>T=Log
// interface FnInterface<T> {
//     <T>(msg:T):T
// }
//
// let MyLog:FnInterface<string>=Log
var Make = /** @class */ (function () {
    function Make() {
    }
    return Make;
}());
var v = new Make();
v.defaultValue = 666;
v.do = function (a, b) {
    return a * b;
};
var v2 = new Make();
v2.defaultValue = '';
v2.do = function (a, b) {
    return a + b;
};
console.log(v2.do("老王", "常来玩儿啊"));
