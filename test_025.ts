//接口
//
// 继承接口

interface Shape {
    color: string
}

interface Draw {
    area: number
}

interface Square extends Shape,Draw {
    border: number
}

let square = {} as Square
square.color = 'orange'
square.border = 1
square.area = 10