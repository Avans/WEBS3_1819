
class PokemonFriend
{
    constructor(data)
    {

        //Object.assign(this, data);
        this.pokemonId = data.pokemonId;
        this.hoekenikje = data.hoekenikje;
        this.isbestfriend = data.isbestfriend;
        this.centjes = data.centjes;
    }

}

class PokemonFriendsView
{
    draw(pokemon)
    {
        let table = document.getElementById('friends-table');
      
        pokemon.forEach(pok => {
            let tr = document.createElement('tr');
            let tdid = document.createElement('td');
            tdid.innerText = pok.pokemonId;
            let tdname = document.createElement('td');
            tdname.innerText = pok
            tr.appendChild(tdid);
            tr.appendChild(tdname);
            table.appendChild(tr);
        })
    }
}

class PokemonFriendController
{
    constructor(){
        this.service = new PokemonFriendService();

        this.service.addPokemonFriend(new PokemonFriend({
            pokemonId: 1,
            hoekenikje: 'pokemon yellow',
            isbestfriend: false,
            centjes: 0
        })).then(() => this.friends())

        this.service.addPokemonFriend(new PokemonFriend({
                pokemonId: 65,
                hoekenikje: 'pokemon yellow',
                isbestfriend: false,
                centjes: 0
        })).then(() => this.friends())
    }

    friends(){
        let pokemons = this.service.getPokemonFriends();
        let view = new PokemonFriendsView();
        debugger;
        view.draw(pokemons);
    }
}

class PokemonFriendService
{
    constructor()
    {
        this.pokemon = [];        
    }

    getPokemonFriends(){
       return this.pokemon;
    }

    addPokemonFriend(pok){
        return fetch('https://pokeapi.co/api/v2/pokemon/' + pok.pokemonId)
            .then(res => res.json())
            .then(pokedata => {
                pok.name = pokedata.name;
                this.pokemon.push(pok);
                console.log(this.pokemon);
            })
    }
}


//buiten een klasse
let controller = new PokemonFriendController();
controller.friends();

//later pas toegevoegd, als voorbeeld
class AppRouter
{
    constructor()
    {
        this.routes = [];   
    }

    route(path, action){
        this.routes[path] = action;
    }

    goTo(path)
    {
        this.routes[path]()
    }
}

let router = new AppRouter();

routes.route('/pokemon', () => pokemonController.friends() )