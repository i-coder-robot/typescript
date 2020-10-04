//类的继承

//类继承类
class Animal{
    name:string
    constructor(name) {
        this.name=name
    }
    move(distance:number=0){
        console.log(`${this.name}跑了${distance}米`)
    }
}

class Dog extends Animal{
    constructor(name:string) {
        super(name);
    }
    eat(){
        console.log(`${this.name},在吃饭...`)
    }
}
const dog = new Dog("大黄")
dog.eat()
dog.move(20)