//类型推断
let x2=3

class Car2{}
class BMW2 extends Car2{}
class Benz2 extends Car2{}

function buyCar():Car2[]{
    return [new BMW2(),new Benz2()]
}