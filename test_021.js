function Create(sconfig) {
    var newSquare = { color: 'blue', area: 10 };
    if (sconfig.color) {
        newSquare.color = sconfig.color;
    }
    if (sconfig.x) {
        newSquare.area = 3.14 * sconfig.x * sconfig.x;
    }
    return newSquare;
}
var mySquare = Create({ color: 'orange', x: 6 });
console.log(mySquare);
var p0 = { x: 6, y: 6 };
// 对只读属性赋值，报错如下：
// Cannot assign to 'x' because it is a read-only property.
// p0.x=10
var userList = ["老赵", "老钱", "老孙", "老李"];
// 对只读数组赋值，报错如下
//TS2542: Index signature in type 'readonly string[]' only permits reading.
// userList[0]="老王"
