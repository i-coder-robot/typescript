// 变量声明的关键字
// var
//闭包为例子
function ff() {
    var a = 999;
    return function gg() {
        var b = a + 1;
        return b;
    };
}
var g = ff();
console.log(g());
function Completed(isDone) {
    if (isDone) {
        var x = 100;
    }
    return x;
}
console.log(Completed(true));
console.log(Completed(false));
// 执行结果
// 100
// undefined
// var的规则是  声明是提前的，如下:
// function Completed(isDone){
//     var x
//     if (isDone){
//         x= 100
//     }
//     return x
// }
//典型案例
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
//执行结果
//3
//3
//3
// 如何解决
for (var i = 0; i < 3; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i);
}
// let
// const
