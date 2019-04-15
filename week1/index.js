
let lijstje = [0, "woord", { name: "object "}]

let object = {
    getal: 0,
    woord: "bird",
    object: { name: "Object"}
}

lijstje.extra = "1337";
object['extra'] = 1337;

console.log(lijstje);
console.log(lijstje.length);
console.log(object);

let tree = {
    name: "Starks",
    members: [
        "Arya",
        "Bran",
        { name: "Jonny", isBastard: true },
        { name: "Ned", isDead: true },
        "Sansa",
        { name: "Rob", isDead: 'maybe' },
        "Caitlyn",
        "Benjamin"
    ]
}

console.log("All living members:")
for(let i = 0; i < tree.members.length; i++){
    if(!tree.members[i].isDead)
        console.log(tree.members[i])
}



