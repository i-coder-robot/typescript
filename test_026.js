//接口
function getCounter() {
    //强制转换类型为Counter
    var counter = (function (start) {
        console.log(start);
    });
    counter.interval = 666;
    counter.reset = function () {
        console.log('reset func');
    };
    return counter;
}
var myCounter = getCounter();
myCounter(8);
myCounter.reset();
myCounter.interval = 888;
console.log(myCounter.interval);
