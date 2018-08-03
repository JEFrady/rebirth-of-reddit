let inspect = new XMLHttpRequest();
inspect.addEventListener('load', function(res){
    let target = JSON.parse(res.currentTarget.response).data.children
    for (let i=0;i<target.length;i++) {
        let post = target[i];
        console.log("Post Title: " + post.data.title)
        console.log("Post Author: " + post.data.author)
        // console.log("Post Title: " + post.data.preview.images[0].source.url)
        console.log(post.data)
    }
})
inspect.open('GET', 'https://www.reddit.com/r/youseeingthisshit.json');
inspect.send();

