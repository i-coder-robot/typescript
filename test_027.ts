//接口继承类
//继承了成员，但是不要实现，包括受保护和私有的成员
//创建一个这样的接口的时候，只能是其类或者子类所实现

class State {
    private curState:any
}

interface Stateable extends State{
    change()
}

class Controller extends State implements Stateable{
    change() {
    }
}

class Text extends State{
    change(){}
}

class ImageController implements Stateable{
    change() {
    }

    private curState: any;

}