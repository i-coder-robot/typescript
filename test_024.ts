//构造器接口

interface OpInterface{
    //类的实例接口部分
    op(a:number,b:number):number
}

interface OpConstructor{
    // 类的静态接口部分
    new(a:number,b:number):OpInterface
}

function CreatOp(ctor:OpConstructor,a:number,b:number):OpInterface{
    return new ctor(a,b)
}

class Op1 implements OpInterface{
    constructor(a:number,b:number) {
    }
    op(a:number,b:number):number{
        console.log("人力计算")
        return a+b
    }

}
class Op2 implements OpInterface{
    constructor(a:number,b:number) {
    }
    op(a:number,b:number):number {
        console.log("计算机计算")
        return a+b
    }

}
// CreatOp函数，第一个参数是OpConstructor类型
// 会检查传入Op1和Op2是否满足OpConstructor的签名
let personAdd = CreatOp(Op1,1,2)
console.log(personAdd.op(99,1))
let computerAdd = CreatOp(Op2,3,4)
console.log(computerAdd.op(88,1))