//静态属性

class Post{
    static count = 0
    // name:string
    Increment(){
        Post.count++
        console.log(Post.count)
    }
}

let post = new Post()
for(let i=0;i<5;i++){
    post.Increment()
}