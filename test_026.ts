//接口

//混合类型

interface Counter {
    (start: number): string

    interval: number

    reset(): void
}

function getCounter(): Counter {
    //强制转换类型为Counter
    let counter = (function (start: number) {
        console.log(start)
    }) as Counter
    counter.interval = 666
    counter.reset = function () {
        console.log('reset func')
    }

    return counter
}

let myCounter = getCounter()

myCounter(8)
myCounter.reset()
myCounter.interval=888
console.log(myCounter.interval)