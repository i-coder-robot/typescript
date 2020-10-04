//存取器
let password = '123456ß'

class Person {
    //通常用一个下划线，表示私有属性
    private _fullName;
    get fullName(): string {
        return this._fullName
    }

    set fullName(newName: string) {
        if (password && password === '123456') {
            this._fullName=newName
        }else{
            console.log("你是谁，要干嘛？")
        }
    }
}

let p = new Person()
p.fullName="Jack"
if (p.fullName){
    console.log(p.fullName)
}

// 编译的时候会报错
// error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// 意思是说要用es5或者更高的版本编译
// 使用 tsc test_031.ts --target es5
