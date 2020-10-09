//接口
var findUser;
findUser = function (userId) {
    var userIds = ["87", "66", "99", "2"];
    if (userIds.indexOf(userId) > -1) {
        return true;
    }
    return false;
};
console.log(findUser("5"));
console.log(findUser("66"));
var myArray;
myArray = ["老王", "老张"];
var n1 = myArray[0];
console.log(n1);
