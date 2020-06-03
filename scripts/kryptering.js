function fjern(){
    var x = document.getElementById("løsning").value;
    if(x == 13){
        document.getElementById("krypt").style.display = "none";
    } else {
        alert("forkert")
    }
}