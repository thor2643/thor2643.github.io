function beregn(){
    var x = document.getElementById("hoejde").value;
    var y = document.getElementById("vaegt").value;
    x = x.replace(/,/g, ".")
    y = y.replace(/,/g, ".")
    var resultat = document.getElementById("resultat").value;
    var bmi = y/(x/100*x/100);
    bmi = bmi.toFixed(2);
    

    if(bmi<=18.5){
        document.getElementById("resultat").value = bmi;
        document.getElementById("kommentar").innerHTML = "Spis noget kage!"
        document.body.style.backgroundImage = "url('/billeder/infb/tynd.jpg')"
    } else if (18.5<bmi && bmi<=25) {
        document.getElementById("resultat").value = bmi ;
        document.getElementById("kommentar").innerHTML = "Perfect!"
        document.body.style.backgroundImage = "url('/billeder/infb/perfect.jpg')"
    } else if (bmi>25) {
        document.getElementById("resultat").value = bmi + "     .....snup en ært!";
        document.getElementById("kommentar").innerHTML = "Snup en ært" 
        document.body.style.backgroundImage = "url('/billeder/infb/tyk.jpg')"
    }

    if(x>300 || x<100 ){
        alert("angiv højde i cm");
    }

    if(40>y || y>150){
        alert("angiv vægt i kg");
    }

}