//元祖(tuple)
// 已知元素类型和数量的数组，各个元素类型可以不同。
var book;
book = ['TypeScript', 1];
console.log(book[0]);
//访问越界的元祖，报错
//TS2493: Tuple type '[string, number]' of length '2'
// has no element at index '3'.
// console.log(book[3])
// 报错，长度对了，但是类型错了
// book = [1,'TypeScript']
