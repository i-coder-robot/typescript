// 变量声明的关键字
// let
// 块级作用域,使用成对大括号包裹起来的代码
// function f1(isDone:boolean){
//     let x=99
//     if (isDone){
//         let y=x+1
//         return y
//     }
//
//     // 由于上面let使用块级作用域，所以下面这个b是访问不到的，所以报错
//     //但是在作用域里可以访问到外面，所以在 if (isDone){...}内部，可以访问到x
//     //在f1函数体内访问不到y,鼠标放到y上面提示 let y: undefined
//     //tsc的时候， 提示 Cannot find name 'y'.
//     return y
// }
// console.log(f1(true))
// console.log(f1(false))

// 使用let，解决了全部输出3，3，3的问题
// let每次循环的时候，生成了一个新的执行环境，相当于立即执行函数，所以解决了输出不对的问题
// 推荐多使用let
for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}