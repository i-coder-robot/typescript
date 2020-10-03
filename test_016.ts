// 变量声明的关键字
// const 赋值后不能再改变

const price = 20

const cat={
    name:"Tom",
    age: 5
}
// 报错，因为它是常量, 第一次的时候指向一个地址，
// 再次赋值是指向另外一个地址，这个是不允许的
// cat={
//     name:"Tom",
//     age: 5
// }
//但是可以对属性进行修改
cat.name="tony"
cat.age++