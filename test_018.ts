//解构

// 对象解构

let man = {
    who:'老王',
    age:'28',
    work:'隔壁的'
}

let {who,...other}=man
console.log(who)
let msg2 = `${other.work} ${other.age}`
console.log(msg2)

//b是可选参数，b有可能是undefined，所以在函数内部，给一个默认值
function defaultValue(o:{a:string,b?:number}){
    let {a,b=100} = o
}

//函数声明时候的解构
type C = {a:string,b?:number}
function f4({a,b}:C):void{}

// 为参数给默认值
function f5({c='',d=0}={}):void{}

//为函数参数c提供默认值，调用的时候，必须传入一个含有c的对象
function f6({c,d=0}={c:''}):void{}
f6({c:'老张'})
f6()
// 报错，解构的时候拿不到c
// f6({d:0})
