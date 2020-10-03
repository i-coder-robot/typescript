//枚举

enum Week{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}
let day:Week = Week.Sunday
console.log(day)
let dayName:string = Week[5]
console.log(dayName)

//可以看一下生成的JS文件