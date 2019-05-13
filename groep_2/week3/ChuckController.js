class ChuckController
{
    service = new ChuckService();

    ShowQuotes(){
        //get data
        //let quotes = ["Chuck Norris his father is called CHuck Norris Jr."];
        let quotes = this.service.getQuotes(1); 
        console.log(quotes);    
        //return new QuoteListView(quotes);
    }
}