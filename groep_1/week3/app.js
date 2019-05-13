
document.getElementById('randomize').addEventListener('click', function(){
    let prom1 = fetch('https://api.chucknorris.io/jokes/random');

    //first response
    let prom2 = prom1.then(response => response.json());

    //then data
    prom2.then(data => {
        document.getElementById('chuck').setAttribute('src', data.url)
    })
})

