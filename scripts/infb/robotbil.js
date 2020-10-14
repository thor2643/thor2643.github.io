function programmering(){
    window.scrollTo(0, 1000);
}

window.onscroll = function() {kode()};

function kode(){
    if(document.body.scrollTop > 420 || document.documentElement.scrollTop > 420){
        document.getElementById("kode").style.display = "block";
        document.getElementById("kode").style.transition = "all 2.5s";
        document.getElementById("kode").style.opacity = "1";

        
    }else{
        //document.getElementById("kode").style.display = "none";
        document.getElementById("kode").style.opacity = "0";
        document.getElementById("kode").style.transition = "all 0.3s";
    }
}


const box = document.querySelector("#kodescroll");
const rect = box.getBoundingClientRect();
console.log(rect);


function getY(e){
    var rect=document.getElementById("kodescroll").getBoundingClientRect;
    var y=e.clientY - rect.top;
    console.log(y);
}

var kode = document.getElementsByClassName("kodedele");
var i;

for(var i=0; i<kode.length; i++){
    kode[i].addEventListener('click', function(){
        this.classList.toggle("aktiv");
        var kodeforklaring = this.nextElementSibling;
        if(kodeforklaring.style.display === "block"){
            kodeforklaring.style.display="none";
        }else{
            kodeforklaring.style.display="block";
        }
    })
}

function vis(clickedId){
    var info = document.getElementById(clickedId).nextElementSibling; 
    var x = document.getElementsByClassName("kodeforklaring");
    var z = document.getElementsByClassName("kodedele");

    for(i=0; i < x.length; i++){
        x[i].style.display = "none";
        z[i].setAttribute("onclick", "vis(this.id)")
    }

    if(info.style.display = "none"){
     info.style.display = "block"; 
     
    } else if(info.style.display = "block"){
        info.style.display = "none";
        alert("jatak");
    }  

    document.getElementById(clickedId).setAttribute("onclick", "gem(this.id)")  
}

function gem(clickedId){
    var info = document.getElementById(clickedId).nextElementSibling;
    info.style.display = "none";
    document.getElementById(clickedId).setAttribute("onclick", "vis(this.id)")
}