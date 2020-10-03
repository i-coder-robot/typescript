//接口
// 额外属性检查

// 函数类型
interface Find{
    (userId:string):boolean
}

let findUser:Find
findUser=function (userId:string):boolean{
    let userIds:Array<String>=["87","66","99","2"]
    if (userIds.indexOf(userId)>-1){
        return true
    }
    return false
}

console.log(findUser("5"))
console.log(findUser("66"))

// 可索引的类型

interface StringArray{
    [index:number]:string
}
let myArray :StringArray

myArray =["老王","老张"]

let n1:string = myArray[0]

console.log(n1)
