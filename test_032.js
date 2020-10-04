//静态属性
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.Increment = function () {
        Post.count++;
        console.log(Post.count);
    };
    Post.count = 0;
    return Post;
}());
var post = new Post();
for (var i = 0; i < 5; i++) {
    post.Increment();
}
