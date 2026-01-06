function newbook(t, a, rt){
    this.title =  t;
    this.author = a;
    this.timeOfRead = rt;
}

let title, auth, time;

function getbook(){
    title = document.getElementById("title").value;
    auth = document.getElementById("author").value; 
    time = document.getElementById("time").value;
    /*return [title, auth, time];*/
}

let book, text;

function addbook(){
    book = new newbook(title, auth, time);
    text = '<tr>' + '<td>'+book.title+'</td>'+'<td>'+book.author+'</td>'+'<td>'+book.timeOfRead+'</td>'+'</tr>';
}

function test(){
    console.log(book);
    document.getElementById("booklist").innerHTML += text;
}