//void 没有任何返回

function log():void{
    console.log('Log something...')
}

let x:null=undefined
console.log(x)
let y:undefined=undefined
console.log(y)
let z:undefined=null
console.log(z)
// null和undefined都是所有类型的子类型
// TS中，子类型可以赋值给父类型