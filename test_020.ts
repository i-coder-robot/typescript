//接口 ts采用鸭式变形法，这里是计算机的术语，可以自行百度

// function printMessage(o:{msg:string}){
//     console.log(o.msg)
// }
// let obj1={size:100,msg:"今天晚上不加班，去吃大餐"}
//
// printMessage(obj1)

interface MsgValue{
    msg:string
}
//传递的函数必须要有接口里定义的msg，类型也要一致
function printMessage(o:MsgValue){
    console.log(o.msg)
}
let obj1={size:100,msg:"今天晚上不加班，去吃大餐"}

printMessage(obj1)