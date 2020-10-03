var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//展开
// 数组的展开
var arr2 = [1, 2];
var arr3 = [3, 4];
//这是一个浅拷贝的，我们新生成的all数组修改，不会影响到原来的数组
var all = __spreadArrays([0], arr2, arr3, [5, 99]);
console.log(all);
// 对象的展开
var dinner = {
    food: 'kfc',
    price: 38
};
var expand = __assign({}, dinner);
console.log(expand);
