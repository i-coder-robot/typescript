//解构

// 数组解构
//arr1是数组
let arr1=[66,77]
let one,two=arr1

// 相当于
// let one=arr1[0]
// let two=arr1[1]
//参数是tuple
function f2([one,two]:[number,number]){
    console.log(one)
    console.log(two)
}
f2([11,22])

let [first,...rest]=[1,2,3,4,5,6]
console.log(first)
console.log(rest)

let [,,,fourth]=[1,2,3,4]
console.log(fourth)