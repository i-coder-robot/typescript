interface People{
    firstName:string
    lastName:string
}

function Greet(people:People){
    return 'Hello ' + people.firstName + ' ' + people.lastName
}

let user3:People={
    firstName: "欢喜",
    lastName: "哥"
}
console.log(Greet(user3))