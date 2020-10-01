class UserModel
{
    fullName:string
    firstName:string
    lastName:string
    constructor(firstName:string,lastName:string) {
        this.firstName=firstName
        this.lastName=lastName
        this.fullName = firstName + '' + lastName
    }
}

interface Person{
    firstName:string
    lastName:string
}

let user4 = new UserModel("欢喜","哥")

function Hello4(person:Person){
    return "Hello "+person.firstName+''+person.lastName
}

console.log(Hello4(user4))