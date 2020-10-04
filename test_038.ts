//泛型约束

interface maxLength {
    max: number
}

function Log<T extends maxLength>(msg: T): T {
    console.log(msg.max)
    return msg
}

Log({max: 666})


function getAttribute<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let xx = {a: 1, b: "老王", c: 2, d: "老张"}

getAttribute(xx, "b")
// 没有y属性，报错
// getAttribute(xx,"y")

abstract class Car {
    public abstract MakeCar()
}

class BMWFactory extends Car {

    MakeCar(): string {
        return "BMW car"
    }
}

class BenzFactory extends Car {

    MakeCar():string {
        return "Benz car"
    }
}

function createFactory<T extends Car>(c: new() => T): T {
    return new c()
}

console.log(createFactory(BMWFactory).MakeCar())
console.log(createFactory(BenzFactory).MakeCar())