// let randomPoint = {
//     nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//     createNum: function () {
//         return function () {
//             let rand = Math.floor(Math.random() * 10)
//             console.log(rand)
//             return {
//                 num: this.nums[rand]
//             }
//         }
//     }
// }
//
// let getNum = randomPoint.createNum()
// let num = getNum()
// 编译没问题
// 运行报错
// TypeError: Cannot read property '0' of undefined
// getNum 是拿到了 4-10行的这个函数，然后执行getNum()，调用的上下文是global，
// this就指向了global，而global.nums是没有这个属性的，所以是undefined,
// 下面this.nums[rand]访问下标就会报错。TS可以解决这个问题，是把function变成箭头函数
// 箭头函数，是保存了创建时候的this值。

let randomPoint2 = {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    createNum: function () {
        return () => {
            let rand = Math.floor(Math.random() * 10)
            console.log(`随机数是${rand}`)
            return {
                num: this.nums[rand]
            }
        }
    }
}

let getNum2 = randomPoint2.createNum()
let num2 = getNum2()
console.log(num2['num'])


//TS还有一种方式就是明确告知this是什么类型，代码如下
interface MyNum{
    num:number
}
interface RandomPoint{
    nums:number[],
    createNum(this:RandomPoint):()=>MyNum
}

// let randomPoint3 = {
//     nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//     createNum: function (this:RandomPoint ) {
//         return () => {
//             let rand = Math.floor(Math.random() * 10)
//             console.log(`随机数是${rand}`)
//             return {
//                 num: this.nums[rand]
//             }
//         }
//     }
// }
//
// let getNum3 = randomPoint3.createNum()
// let num3 = getNum3()
// console.log(num3['num'])

//this参数在回调函数中

interface UIController{
    addClickListener(onclick:(this:void,e:Event)=>void):void
}
class Handler{
    type :string
    onClickCool = (e:Event) =>{
        //this对应定义时候的Handler
        this.type=e.type
    }
}
let h=new Handler()
let uiController:UIController={
    addClickListener() {

    }
}
uiController.addClickListener(h.onClickCool)