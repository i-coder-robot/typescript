//object

declare function Make11(o: object | null): void;

// 符合定义
Make11({point:10})
Make11({name:"老王"})
Make11(null)

//如下基础类型，都会报错
// Make11(18)
// Make11('老王')

// 强制转换
let msg:any = "老王，今天去哪家玩儿啊？"
let len:number=(<string>msg).length
let len2:number= (msg as string).length