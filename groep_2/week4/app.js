

class DierBattle
{
    dier1;
    dier2;
    winnaar;
    bedrag;

    constructor(data){
        this.dier1 = data.dier1;
        this.dier2 = data.dier2;
        this.bedrag = data.bedrag;
    }

    setWinnaar(win)
    {
        if(win == 1)
        {
            this.winnaar = this.dier1;
        }
        else{
            this.winnaar = this.dier2
        }
    }
}

class AddBattleView
{

    constructor(controller){

        document.getElementById('isplayed').addEventListener('change', (event) => {
            document.getElementById('winnaar').style.display = this.checked ? 'block' : 'none';
        })

        document.getElementById('battle-form').addEventListener('submit', function(event){
            event.preventDefault();
        
            controller.addBattle({
                dier1: this.dier1.value,
                dier2: this.dier2.value
            });
        })
    }

}


class BattleView
{
    constructor(){
        this.container = document.getElementById('roster');
        this.container.innerHTML = "";
        this.table = document.createElement('table');
    }
    
    draw(battles){
      

        let header = this.drawRow(null, "Dier 1", "V.S", "Dier 2", null)
        this.table.appendChild(header);

        battles.forEach(b => {
            let img1 = document.createElement("img");
            img1.src = b.dier1img;
            let img2 = document.createElement("img");
            img2.src = b.dier2img;
            let battle = this.drawRow(img1, b.dier1, "V.S", b.dier2, img2);
            this.table.appendChild(battle);
        });

        //this.container.appendChild(this.table);
    }

    drawRow(img1, a, b, c, img2){
        let row = document.createElement('tr');
        // let td1 = document.createElement('td');
        // td1.appendChild(img1);
        let td2 = document.createElement('td');
        td2.innerText = a;
        let td3 = document.createElement('td');
        td3.innerText = b;
        let td4 = document.createElement('td');
        td4.innerText = c;
        // let td5 = document.createElement('td');
        // td5.appendChild(img2);

        //row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        //row.appendChild(td5);
        return row;
    }
}

class BattleController
{
    constructor(){
        this.service = new BattleService();
        this.addbattleview = new AddBattleView(this);
        this.showbattleview = new BattleView(this);
    }

    showBattles(){
        let battles = this.service.getBattles();  
        this.showbattleview.draw(battles);
    }

    addBattle(battle){
        this.service.addBattle(battle).then(() => {
            //B
            this.showBattles();
        })
      
    }
}

class BattleService
{
    constructor(){
        this.battles = [
            new DierBattle({
                dier1: "Schaap", dier2: "Olifant", bedrag: 100
            }),
            new DierBattle({
                dier1: "Krokodiel", dier2: "Kip", bedrag: 10000
            })
        ]
    }

    getBattles()
    {
        return this.battles;
    }

    addBattle(battle){
        return  new Promise((resolve, reject) => {
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(res => res.json())
                .then(data => battle.dier1img = data.message)
                .then(() => {
                    fetch("https://dog.ceo/api/breeds/image/random")
                        .then(res => res.json())
                        .then(data => battle.dier2img = data.message)
                        .then(() => {
                            this.battles.push(battle);
                            resolve(this.battles);
                        })
                })
        })
        
    }
}

let controller = new BattleController();
controller.showBattles();

class Monster{
    name;
}

class FlyingMonster extends Monster{
    height;
}

class WaterMonster extends Monster{
    depth;
}