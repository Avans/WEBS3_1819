console.log('Hello world');

//Person person = new Person();

//let / var

let stijn = {
    naam: "Stijn",
    leeftijd: 29,
    hobbys: "bietje cooi kloppe",
    hoorcollege: {
        week1: "introductie",
        week2: "dom manippulatie"
    }
}

let ger = {
    naam: "Ger",
    leeftijd: 42,
    hobbys: ["prog1", "prog2"]
}

let stefan = {
    naam: "Stefan",
    leeftijd: 35,
}

let personen = [
    stijn, ger, stefan, "kip", 0, function() {}
]

let lijstje = [];
let objectje = {};

lijstje['x'] = "y";
objectje["x"] = "y";

console.log(lijstje);
console.log(objectje);

for(let i = 0; i < personen.length; i++){
    if(personen[i].hobbys)
    {
        console.log(personen[i].naam + " heeft " + personen[i].hobbys.length + " hobbys")
    }
    else
    {
        console.log(personen[i].naam + " heeft geen hobbys!");
    }
}

//let vs var
console.log(personen);

//deze haakejs zijn een scope
{
    var nietgeheim = "die kun je wel gewoon lezen";
    let geheim = "Ik ben een groot fan van reistebrei";
}

//console.log(geheim);

//functies

//manier 1
function SayHello1(){
    console.log("hello world");
}

SayHello1();

//manier 2
let SayHello2 = function(){
    console.log("hello world 2")
}

let ietsAnders = SayHello2;

console.log(ietsAnders);


//nu word het hip
let Person = function(pNaam, pLeeftijd){
    this.naam = pNaam;
    this.leeftijd = pLeeftijd;
}

let stijn2 = new Person("Stijn", 29);

console.log(stijn2);




