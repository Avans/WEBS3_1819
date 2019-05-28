
export class View {
    render(data){
        document.getElementById('content').innerHTML = `message: ${data}`;
    }
}