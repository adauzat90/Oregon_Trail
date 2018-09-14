function trailScreen(){
	console.log("Refreshing trail Screen");
	var gameScreen = document.getElementById("game");
	//ADD WEATHER HEALTH
    gameScreen.innerHTML = 
		"<img src='pictures\\TopBorder.png' class = 'topBorder'>"+
		"<img id = 'wagonTrain' src = 'pictures/gifs/cart.gif'><br>"+
		"Press ENTER to size up the situation <br>"+
		"Date: " + party.getDate() + "<br>"+
		"Weather: " + weather.getWeather() + "<br>"+
		"Health: " + party.getHealth() + "<br>"+
		"Food: " + party.food + " pounds <br>"+
		"Next landMark: " + party.tillNextLandMark +" miles <br>"+
		"Miles Traveled: " + party.milesTraveled + " miles <br>"+
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>"; 
	//Since it's a callback function it has to be stored in a function like it is or else
	//it won't have the object reference when executed
	updateParty = setTimeout(function(){
			var pause = party.travelOneDay();
			if(pause){
				
			}
			else{trailScreen();}
		} ,1500);

	$(document).ready(function() {
		$('body').keydown(function(event){
			if (event.keyCode == 13){
				clearTimeout(updateParty);
				trailMenu();
			}
		});
	})
}