let url = 'https://www.reddit.com/r/PrequelMemes.json';

const request = (URL, callback) => {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', callback);
    oReq.open('Get', url);
    oReq.send();
}

request(url, res => {
    let target = JSON.parse(res.currentTarget.response).data.children;
    for (let i=0; i<target.length; i++) {
        let post = target[i];
        const cards = document.getElementById('card');

        let postContainer = document.createElement('div');
        postContainer.setAttribute('class','post');
        cards.appendChild(postContainer);

            let postImage = document.createElement('img');
            postImage.setAttribute('class', 'postImage');
            if (post.data.thumbnail === 'self' || post.data.thumbnail === 'default') {
                postImage.src = '/assets/default-post-image.jpg'
            }
            else {
                postImage.src = post.data.thumbnail;
            }
            postContainer.appendChild(postImage);

            let postData = document.createElement('div');
            postData.setAttribute('class','postData');
            postContainer.appendChild(postData);

                let postTitle = document.createElement('h1');
                postTitle.setAttribute('class','title');
                postTitle.textContent = post.data.title;
                postData.appendChild(postTitle);

                let postAuthor = document.createElement('p');
                postAuthor.setAttribute('class','author');
                postAuthor.textContent = post.data.author;
                postData.appendChild(postAuthor);

                let postDescription = document.createElement('p');
                postDescription.setAttribute('class','description');
                postDescription.textContent = post.data.selftext;
                postData.appendChild(postDescription);
     
        // console.log(post.data)
    }
});

let ranButton = document.getElementById('randomlink');
ranButton.addEventListener('click', getRandom());

function getRandom (url) {
    let randombutton = document.getElementById('randomlink').href;
    

    console.log(randombutton);
    
    
    // randomcall => {
    //     const oReq = new XMLHttpRequest();
    //     oReq.addEventListener('click', ranodmcall);
    //     oReq.open('get', randomurl);
    //     oReq.send();
    // })
    // randomcall(randomurl, res => {
    //     // let target = JSON.parse(res.currentTarget.response);
    //     console.log('test');
    // })

};

