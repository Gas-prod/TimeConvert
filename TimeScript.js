var isOnSelect = false;
var unitSelect = "weeks";
var number = document.getElementById("number");
var valeurs = document.getElementById("valeurs");

var numberOfWeeks;
var numberOfDays;
var numberOfHours
var numberOfMinutes;
var numberOfSeconds;

valeurs.style.color="rgb(117, 117, 117)";
valeurs.innerHTML =  "Number of days<br/><br/><br/>Number of hours<br/><br/><br/>Number of minutes<br/><br/><br/>Number of seconds"

//Touche entrer pressée
function enter(){
    valeurs.style.color="rgb(216, 216, 216)";

    if(unitSelect == "weeks"){
        numberOfWeeks = Number(number.value);
        numberOfDays = numberOfWeeks * 7;
        numberOfHours = numberOfDays * 24;
        numberOfMinutes = numberOfHours * 60;
        numberOfSeconds = numberOfMinutes * 60;

        valeurs.innerHTML = String(numberOfDays) + " days <br/><br/><br/>" + String(numberOfHours) + " hours <br/><br/><br/>" +
        String(numberOfMinutes) + " minutes <br/><br/><br/>" + String(numberOfSeconds) + " seconds";
    }else if(unitSelect == "days"){
        numberOfDays = Number(number.value);
        numberOfHours = numberOfDays * 24;
        numberOfMinutes = numberOfHours * 60;
        numberOfSeconds = numberOfMinutes * 60;

        valeurs.innerHTML = String(numberOfHours) + " hours <br/><br/><br/>" + String(numberOfMinutes) + " minutes <br/><br/><br/>" + 
        String(numberOfSeconds) + " seconds";
    }else if(unitSelect == "hours"){
        numberOfHours = Number(number.value);
        numberOfMinutes = numberOfHours * 60;
        numberOfSeconds = numberOfMinutes * 60;

        valeurs.innerHTML = String(numberOfMinutes) + " minutes <br/><br/><br/>" + String(numberOfSeconds) + " seconds";
    }else if(unitSelect == "minutes"){
        numberOfMinutes = Number(number.value);
        numberOfSeconds = numberOfMinutes * 60;

        valeurs.innerHTML = String(numberOfSeconds) + " seconds";
    }
    //si l'input ne contient pas de chiffre
    if(isNaN(number.value)){
        number.value = "";
        number.placeholder = "Please enter a number";
        valeurs.innerHTML = valeurs.innerHTML.replace("NaN", "0");
        valeurs.innerHTML = valeurs.innerHTML.replace("NaN", "0");
        valeurs.innerHTML = valeurs.innerHTML.replace("NaN", "0");
        valeurs.innerHTML = valeurs.innerHTML.replace("NaN", "0");
    }else{
        number.blur();
    }
}

//quand on clique sur la flèche
document.getElementById("fleche").addEventListener("click", function(){
    var selector = document.getElementById("selecteur");
    var cadreValeurs = document.getElementById("cadreValeurs");
    var fleche = document.getElementById("imgFleche");
    var cadreUnites = document.getElementById("cadreUnites");
    var contourValeurs = document.getElementById("contourValeurs");

    if(isOnSelect == false){
        isOnSelect = true;
        selector.style.display="block"
        number.style.display="none";
        cadreValeurs.style.height="10%";
        fleche.style.transform="rotate(0deg)";
        fleche.title="Close the unit selector";
        cadreUnites.style.display="block";
        contourValeurs.style.display="none";
    }else{
        isOnSelect = false;
        selector.style.display="none"
        number.style.display="block";
        cadreValeurs.style.height="85%";
        fleche.style.transform="rotate(180deg)";
        fleche.title="Open the unit selector";
        cadreUnites.style.display="none";
        contourValeurs.style.display="block";
    }
})

//quand on survole une unitée avec la souris
document.getElementById("weeks").addEventListener("mouseenter", function(){
    document.getElementById("textExemple").innerHTML = "Number of " + document.getElementById("textWeeks").innerHTML;
})
document.getElementById("days").addEventListener("mouseenter", function(){
    document.getElementById("textExemple").innerHTML = "Number of " + document.getElementById("textDays").innerHTML;
})
document.getElementById("hours").addEventListener("mouseenter", function(){
    document.getElementById("textExemple").innerHTML = "Number of " + document.getElementById("textHours").innerHTML;
})
document.getElementById("minutes").addEventListener("mouseenter", function(){
    document.getElementById("textExemple").innerHTML = "Number of " + document.getElementById("textMinutes").innerHTML;
})

//quand on clique sur une unitée
document.getElementById("weeks").addEventListener("click", function(){

    unitSelect = "weeks";
    var selector = document.getElementById("selecteur");
    var cadreValeurs = document.getElementById("cadreValeurs");
    var fleche = document.getElementById("imgFleche");
    var cadreUnites = document.getElementById("cadreUnites");
    
    isOnSelect = false;
    selector.style.display="none";
    number.style.display="block";
    cadreValeurs.style.height="85%";
    fleche.style.transform="rotate(180deg)";
    cadreUnites.style.display="none";  
    contourValeurs.style.display="block";
    number.value = "";
    valeurs.style.color="rgb(117, 117, 117)";
    valeurs.innerHTML =  "Number of days<br/><br/><br/>Number of hours<br/><br/><br/>Number of minutes<br/><br/><br/>Number of seconds"

    document.getElementById("number").placeholder = "Number of " + document.getElementById("textWeeks").innerHTML;
})
document.getElementById("days").addEventListener("click", function(){

    unitSelect = "days";
    var selector = document.getElementById("selecteur");
    var cadreValeurs = document.getElementById("cadreValeurs");
    var fleche = document.getElementById("imgFleche");
    var cadreUnites = document.getElementById("cadreUnites");

    isOnSelect = false;
    selector.style.display="none";
    number.style.display="block";
    cadreValeurs.style.height="85%";
    fleche.style.transform="rotate(180deg)";
    cadreUnites.style.display="none";  
    contourValeurs.style.display="block";
    number.value = "";
    valeurs.style.color="rgb(117, 117, 117)";
    valeurs.innerHTML =  "Number of hours<br/><br/><br/>Number of minutes<br/><br/><br/>Number of seconds"

    document.getElementById("number").placeholder = "Number of " + document.getElementById("textDays").innerHTML;
})
document.getElementById("hours").addEventListener("click", function(){

    unitSelect = "hours";
    var selector = document.getElementById("selecteur");
    var cadreValeurs = document.getElementById("cadreValeurs");
    var fleche = document.getElementById("imgFleche");
    var cadreUnites = document.getElementById("cadreUnites");

    isOnSelect = false;
    selector.style.display="none";
    number.style.display="block";
    cadreValeurs.style.height="85%";
    fleche.style.transform="rotate(180deg)";
    cadreUnites.style.display="none";  
    contourValeurs.style.display="block";
    number.value = "";
    valeurs.style.color="rgb(117, 117, 117)";
    valeurs.innerHTML =  "Number of minutes<br/><br/><br/>Number of seconds"

    document.getElementById("number").placeholder = "Number of " + document.getElementById("textHours").innerHTML;
})
document.getElementById("minutes").addEventListener("click", function(){

    unitSelect = "minutes";
    var selector = document.getElementById("selecteur");
    var cadreValeurs = document.getElementById("cadreValeurs");
    var fleche = document.getElementById("imgFleche");
    var cadreUnites = document.getElementById("cadreUnites");

    isOnSelect = false;
    selector.style.display="none";
    number.style.display="block";
    cadreValeurs.style.height="85%";
    fleche.style.transform="rotate(180deg)";
    cadreUnites.style.display="none";  
    contourValeurs.style.display="block";
    number.value = "";
    valeurs.style.color="rgb(117, 117, 117)";
    valeurs.innerHTML =  "Number of seconds"

    document.getElementById("number").placeholder = "Number of " + document.getElementById("textMinutes").innerHTML;
})

//quand l'input obtient le focus
number.addEventListener("focus", function(){
    var change = " " + unitSelect;
    number.value = number.value.replace(change, "");
})
//quand l'input perd le focus
number.addEventListener("blur", function(){
    var change = " " + unitSelect;
    number.value = number.value + change
})