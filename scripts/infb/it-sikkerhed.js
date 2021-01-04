function vis(clickedId){
    var x = document.getElementsByClassName("forklaringer");
    var z = document.getElementsByClassName("overskrifttekst");

    for(i=0; i < x.length; i++){
        x[i].style.display = "none";
        z[i].setAttribute("onclick", "vis(this.id)")
    }

    if(clickedId == "FIT") {
        x[0].style.display = "block";
    }
    else if(clickedId == "hack") {
        x[1].style.display = "block";
    }
    else if(clickedId == "ACID") {
        x[2].style.display = "block";
    }
    else if(clickedId == "trans") {
        x[3].style.display = "block";
    }
    else if(clickedId == "tilstand") {
        x[4].style.display = "block";
    }


    document.getElementById(clickedId).setAttribute("onclick", "gem(this.id)")  
}

function gem(clickedId){
    var x = document.getElementsByClassName("forklaringer");
    var z = document.getElementsByClassName("overskrifttekst");

    for(i=0; i < x.length; i++){
        x[i].style.display = "none";
        z[i].setAttribute("onclick", "vis(this.id)")
    }
}