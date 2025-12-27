function newbook(t, a, rt){
    this.title =  t;
    this.author = a;
    this.timeOfRead = rt;
}

let title, auth, time;

function addbook(){
    title = document.getElementById("title").value;
    auth = document.getElementById("author").value; 
    time = document.getElementById("time").value;
    return [title, auth, time];
}

let tit, aut, tim;

function test(){
    [tit, aut, tim] = addbook();
    console.log(tit); 
}

function test2(){
    console.log(tit);
}



/*
function test(){
    let title = document.getElementById('title').value;
    console.log(title)
};*/
