function clic(){
	if(infoStyle.visibility === "hidden"){
		infoStyle.visibility = "visible";
	}
	else{
		infoStyle.visibility = "hidden";
	}
}

var infoStyle = document.getElementById("infos").style;
var bouton = document.getElementById("bouton");

infoStyle.visibility = "hidden";
bouton.addEventListener("click", clic);
