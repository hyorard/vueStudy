var name = "global var";

function home(){
    var homevar = "homevar";
    for(var i=0;i<100;i++){

    }
    console.log(i);
}

function home2(){
    console.log("start for loop");
    for(let i=0;i<100;i++){
        console.log(i);
    }
    console.log("for loop ended");

    console.log(i); // error
}

home();
home2();

