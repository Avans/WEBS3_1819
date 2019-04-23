

let title = document.getElementById("title");

//h2 toevoegen
let subtitle = document.createElement("H2");
subtitle.innerHTML = "Awesome kitties";
document.getElementById("subtitle").appendChild(subtitle);


let kittycounter = 102;

title.style.color = "red";

let btn = document.getElementById("kittybtn");
btn.addEventListener('click', function(){
    kittycounter++;
    let img = document.createElement("img");
    img.src = "http://placekitten.com/g/200/" + kittycounter;
    document.getElementById('kitties').appendChild(img);

})


// function printGeheim(){
//     console.log("Bush did  9/11?")
// }

// function vraagGebruikerOmToestemming(callback){
//     let result = confirm("Weet je het zeker?")

//     if(result){
//         setTimeout(callback, 500)
//     }
// }

// console.log("A")

// vraagGebruikerOmToestemming(function(){
//     console.log("B");
// });

// console.log("C");


