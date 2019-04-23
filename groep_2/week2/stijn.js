
document.getElementById("title").style.color = "red";

let subtitle = document.createElement("h2");
subtitle.innerText = "Cool kitties!";

document.getElementById('subtitle').appendChild(subtitle);

let kittycounter = 102;

function showMeTheKitty(callback){

    //Hij moet even data ergens van daan halen!
    setTimeout(function(){
        kittycounter++;
        callback(kittycounter);
    }, 500)

}


document.getElementById("kittybtn").addEventListener('click', addKittyToList);

function addKittyToList(){
    showMeTheKitty(kittyid => {
        let kittyboject = makemeakitty(kittyid); 
    });
}


function makemeakitty(kittyid){
    let kittybox = document.createElement("div");
    kittybox.classList.add("cat-box");

    let kittyheader = document.createElement("header");
    kittyheader.innerText = "Cool cat nr " + kittyid;

    let kittyfooter = document.createElement("p");
    kittyfooter.innerText = "placekitten.com";

    let kittyimg = document.createElement("img").src = "http://placekitten.com/g/200/" + kittyid;

    kittybox.appendChild(kittyheader);
    kittybox.appendChild(kittyimg);
    kittybox.appendChild(kittyfooter);

    return kittybox;
}

makemeakitty("test");



{/* <div class="cat-box">
<header>Cool cat</header>
<img src="http://placekitten.com/g/200/101">
<p class="footer">placekitten.com</p>
</div> */}
