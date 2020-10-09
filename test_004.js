var UserModel = /** @class */ (function () {
    function UserModel(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '' + lastName;
    }
    return UserModel;
}());
var user4 = new UserModel("欢喜", "哥");
function Hello4(person) {
    return "你好 " + person.firstName + '' + person.lastName;
}
console.log(Hello4(user4));
