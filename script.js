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

let bk

function addbook(){
    bk = new newbook(title, auth, time);

}

function test(){
    console.log(bk);
}