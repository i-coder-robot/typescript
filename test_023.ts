interface OrderInterface{
    payTime:Date
    setTime(d:Date)
}


//类实现接口
class Order implements OrderInterface{
    payTime:Date
    setTime(d: Date) {
        this.payTime=d
    }

    constructor() {
    }
}