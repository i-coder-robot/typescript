//void 没有任何返回
function log() {
    console.log('Log something...');
}
var x = undefined;
console.log(x);
var y = undefined;
console.log(y);
var z = null;
console.log(z);
// null和undefined都是所有类型的子类型
// TS中，子类型可以赋值给父类型
