//接口 ts采用鸭式变形法，这里是计算机的术语，可以自行百度
function printMessage(o) {
    console.log(o.msg);
}
var obj1 = { size: 100, msg: "今天晚上不加班，去吃大餐" };
printMessage(obj1);
