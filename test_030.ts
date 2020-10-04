class AnyThing{
    private name:string
    constructor(name: string) {
        this.name=name
    }
}

class Toy extends AnyThing{
    constructor() {
        super('Toy');
    }
}

class Worker2{
    private name:string
    constructor(name:string) {
        this.name=name
    }
}
let anyThing = new AnyThing('玩具')
let toy = new Toy()
let worker = new Worker2("老王")

anyThing=toy
// Worker不是AnyThing的子类，所以不能赋值
// anyThing=worker