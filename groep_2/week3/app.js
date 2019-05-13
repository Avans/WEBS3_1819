
class App
{
    controller = null;

    start(){
        this.controller = new ChuckController();
        this.controller.ShowQuotes();
    }
}


