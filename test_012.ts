// never 永远不存在的数据类型，没有子类型

function error(msg:string):never{
    throw new Error(msg)
}

function fail(){
    return error("异常啦")
}

function loopEver():never{
    while(true){

    }
}


