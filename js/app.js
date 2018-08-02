let inspect = new XMLHttpRequest();
inspect.addEventListener('load', function(res){
    let target = res.currentTarget.response
    console.log(target)


})
inspect.open('GET', 'https://www.reddit.com/r/andeanmusic.json');
inspect.send();

