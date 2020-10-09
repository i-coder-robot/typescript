//抽象类
abstract class Human{
    name:string

    constructor(name:string) {
        this.name=name
    }
    printName ():void{
        console.log(`我是${this.name}`)
    }

    abstract sayHello():void
}

class Student extends  Human{
    constructor(name:string) {
        super(name);
    }

    sayHello(): void {
        console.log("大家好~")
    }

    readBook():void{
        console.log("正在读书...")
    }
}

let s = new Student("小王")

s.printName()
s.sayHello()
s.readBook()

// (s as Student).readBook()