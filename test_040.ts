//交叉类型

function CrossType<T,U>(one:T,two:U): T&U{
    let r={} as T&U
    for(let prop in one){
        r[prop] = one[prop] as any
    }
    for(let prop in two){
        if (!r.hasOwnProperty(prop)){
            r[prop] = two[prop] as any
        }
    }
    return r
}

class Person2{
    name:string
    constructor(name:string) {
        this.name=name
    }
}

interface CanAble{
    Happy():void
    Work():void
}

class Man2 implements CanAble{
    Happy(): void {
        console.log("找小姐姐")
    }

    Work(): void {
        console.log("家里有矿")
    }

}
class Woman2 implements CanAble{
    Happy(): void {
        console.log("买，买，买")
    }

    Work(): void {
        console.log("有人养，上啥班啊！")
    }
}

let m = CrossType(new Person2("老王"),new Man2())
m.Work()
m.Happy()
let w = CrossType(new Person2("老王媳妇"),new Woman2())
w.Work()
w.Happy()