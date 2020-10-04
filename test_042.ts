//类型保护

interface Wolf{
    hunt()
    eat()
}

interface Buffalo{
    eat()
}

function  getAnimal():Wolf|Buffalo{
    return Math.random()*100>80?new Wolf2():new Buffalo2()
}

let animal = getAnimal()
if (isWolf(animal)){
    animal.hunt()
}

//谓词
function isWolf(animal:Wolf|Buffalo):animal is Wolf{
    return (animal as Wolf).hunt!=undefined
}


// instanceof

class Wolf2{
    hunt(){}
    eat(){}
}

class Buffalo2{
    eat(){}
}

function  getAnimal2():Wolf2|Buffalo2{
 return Math.random()*100>80?new Wolf2():new Buffalo2()
}

let animal2 = getAnimal2()
if (animal2 instanceof Wolf2){
    animal2.hunt()
}
// typeof 对于解除类型的比较，比如string ,number,bool等