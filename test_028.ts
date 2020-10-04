class Man{
    name:string
    constructor(name:string) {
        this.name=name
    }
    SayHello(){
        return `早啊, ${this.name}, 吃了嘛？`
    }
}

let zhao=new Man("老赵")
zhao.SayHello()