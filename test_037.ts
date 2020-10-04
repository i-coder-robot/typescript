//泛型

function Go<T>(who:T): T{
    return who
}

let result = Go<string>("老王")
// 类型推断
// let result = Go("老王")
let result2 = Go<number>(666)
// let result2 = Go(666)

// function Log<T>(msg:T[]):T[]{
//     console.log(msg.length)
//     return msg
// }

//泛型函数
// let MyLog:<T>(msg:T)=>T=Log

// interface FnInterface<T> {
//     <T>(msg:T):T
// }
//
// let MyLog:FnInterface<string>=Log

class Make<T>{
    defaultValue:T
    do:(a:T,b:T)=>T
}

let v=new Make<number>()
v.defaultValue=666
v.do=function (a,b){
    return a*b
}

let v2=new Make<string>()
v2.defaultValue=''
v2.do=function (a,b){
    return a+b
}

console.log(v2.do("老王",",常来玩儿啊"))