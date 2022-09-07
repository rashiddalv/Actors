function fav(){
    var actors = document.getElementById("actors");
    var selectAct = document.getElementById("selection").value;
    var actorInfo = document.getElementById("actorInfo");
if(selectAct === 'RobertJohnDowney'){
    actorInfo.innerHTML = "Robert John Downey Jr."
} else if (selectAct === 'ScarlettIngridJohansson'){
    actorInfo.innerHTML = "Scarlett Ingrid Johansson"
}else if (selectAct === 'ChristopherRobertEvans'){
    actorInfo.innerHTML = "Christopher Robert Evans"
}else if (selectAct === 'MarkAlanRuffalo'){
    actorInfo.innerHTML = "Mark Alan Ruffalo"
}else if (selectAct === 'ChristopherHemsworth'){
    actorInfo.innerHTML = "Christopher Hemsworth"
}else if (selectAct === 'JeremyLeeRenner'){
    actorInfo.innerHTML = "Jeremy Lee Renner"
}else if (selectAct === 'ThomasWilliamHiddleston'){
    actorInfo.innerHTML = "Thomas William Hiddleston"
}

    actors.src = "img/" + selectAct + ".jpg";

}

function info(){
    var actorInfo = document.getElementById("actorInfo");
    var actors = document.getElementById("actors");
    var allInfo = document.getElementById("allInfo");
    actorInfo.style.fontSize = "40px"
    allInfo.style.opacity = "1"
    allInfo.style.visibility = "visible"
    actors.style.filter = "blur(10px)"
    actors.style.height = "300px"
}
function retInfo(){
    var actorInfo = document.getElementById("actorInfo");
    var actors = document.getElementById("actors");
    var allInfo = document.getElementById("allInfo");

    actorInfo.style.fontSize = "28px"
    allInfo.style.opacity = "0"
    allInfo.style.visibility = "hidden"
    actors.style.height = "400px"

    actors.style.filter = "blur(0px)"
}