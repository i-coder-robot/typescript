//函数

// 函数类型

let add:(a:number,b:number)=>number = function (x:number,y:number) :number{
    return x+y
}

//可选参数 使用？ 和 默认参数

function fullName(firstName:string,lastName?:string):string{
    if (!lastName){
        lastName="欢喜哥"
    }
    return ""
}

//默认参数
function fullName2(firstName:string,lastName='Tom'):string{
    return ""
}
// 剩余参数
function fullName3(firstName:string,...restOtherNames:string[]):string{
    return ""
}