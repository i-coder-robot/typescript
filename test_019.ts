//展开
// 数组的展开
let arr2=[1,2]
let arr3=[3,4]
//这是一个浅拷贝的，我们新生成的all数组修改，不会影响到原来的数组
let all = [0,...arr2,...arr3,5,99]
console.log(all)

// 对象的展开
let dinner={
    food:'kfc',
    price:38
}

let expand = {...dinner}

console.log(expand)