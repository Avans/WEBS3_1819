class QuoteListView
{
    constructor(data)
    {
        let container = document.getElementById('container');
        container.innerHTML += "<ul>";

        for(let i = 0; i < data.length; i++)
        {
            container.innerHTML += "<li>"+data[i]+"</li>"
        }
        container.innerHTML += "</ul>";
    }   
}