function Greet(people) {
    return 'Hello ' + people.firstName + ' ' + people.lastName;
}
var user3 = {
    firstName: "欢喜",
    lastName: "哥"
};
console.log(Greet(user3));
