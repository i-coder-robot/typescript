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
var randomPoint2 = {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    createNum: function () {
        var _this = this;
        return function () {
            var rand = Math.floor(Math.random() * 10);
            console.log("\u968F\u673A\u6570\u662F" + rand);
            return {
                num: _this.nums[rand]
            };
        };
    }
};
var getNum2 = randomPoint2.createNum();
var num2 = getNum2();
console.log(num2['num']);
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.onClickCool = function (e) {
            //this对应定义时候的Handler
            _this.type = e.type;
        };
    }
    return Handler;
}());
var h = new Handler();
var uiController = {
    addClickListener: function () {
    }
};
uiController.addClickListener(h.onClickCool);
