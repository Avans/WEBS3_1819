class ChuckService
{
    getQuotes(ammount){
        ammount = 1;
        //for()

        let chuckpromise = fetch("https://api.chucknorris.io/jokes/random");
        chuckpromise
            .then(response => response.json())
            .then(data => {
                return data;
            })
    }
}