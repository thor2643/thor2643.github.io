function udregn(){
    var x = document.getElementById("tal1").value;
    var y = x*10;
    document.getElementById("resultat").innerHTML = y;

}

function visKode(){
    document.getElementById("kode").style.display = "block";
    document.getElementById("viskode").innerHTML = "Gem kode";
    document.getElementById("viskode").setAttribute("onclick", "gemKode()")
}

function gemKode(){
    document.getElementById("kode").style.display = "none";
    document.getElementById("viskode").innerHTML = "Vis kode";
    document.getElementById("viskode").setAttribute("onclick", "visKode()")
}

function tegn(){
var c = document.getElementById("draw");
var ctx = c.getContext('2d');
//tegner firkant
ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.rect(350, 275, 100, 200);
ctx.stroke();
//tegner cirkel
ctx.beginPath();
ctx.arc(400, 175, 100, 0, 2*Math.PI)
ctx.strokeStyle = "blue";
ctx.stroke();
}

function visKode2(){
    document.getElementById("kode2").style.display = "block";
    document.getElementById("viskode2").innerHTML = "Gem kode";
    document.getElementById("viskode2").setAttribute("onclick", "gemKode2()")
}
function gemKode2(){
    document.getElementById("kode2").style.display = "none";
    document.getElementById("viskode2").innerHTML = "Vis kode";
    document.getElementById("viskode2").setAttribute("onclick", "visKode2()")
}
