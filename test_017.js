//解构
//arr1是数组
var arr1 = [66, 77];
var one, two = arr1;
// 相当于
// let one=arr1[0]
// let two=arr1[1]
//参数是tuple
function f2(_a) {
    var one = _a[0], two = _a[1];
    console.log(one);
    console.log(two);
}
f2([11, 22]);
var _a = [1, 2, 3, 4, 5, 6], first = _a[0], rest = _a.slice(1);
console.log(first);
console.log(rest);
var _b = [1, 2, 3, 4], fourth = _b[3];
console.log(fourth);
