//重载

function getUserInfo(name:string):void;
function getUserInfo(age:number):void;
function getUserInfo(str:any):void{
    if(typeof str == "string"){
        console.log("名字:",str)
    }
    if(typeof str == "number"){
        console.log("年龄",str)
    }
}
getUserInfo("老王")