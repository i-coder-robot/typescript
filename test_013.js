//object
// 符合定义
MakeStrong({ point: 10 });
// MakeLove({name:"老王"})
// MakeLove(null)
//如下基础类型，都会报错
// Make(18)
// Make('老王')
// 强制转换
// let msg:any = "老王，今天去哪家玩儿啊？"
// let len:number=(<string>msg).length
// let len2:number= (msg as string).length
