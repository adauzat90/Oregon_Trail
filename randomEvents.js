class RandomEvents{
	
	didRandomEventHappen(){
		var chance = Math.floor(Math.random() *100);
		
		if(chance < 0){
			chance = Math.floor(Math.random() *100);
			
			if(chance < 100){
				this.brokenWagon(this)
			}
			return true; // pause the game
		}
		return false;
	}
	
	foodSpoil(){
		var amountSpoiled = Math.ceil(Math.random() * (party.food*.25)) // most can spoil 25%
		party.food -= amountSpoiled;
		$("#game").append( 
						"<div class = 'center_screen_menu' id='randomEvent'>"+
							amountSpoiled + " pounds of food spoiled"+
						"</div>");
		$(document).ready(function() {
			$('body').keydown(function(event){
				if (event.keyCode == 32){
					trailScreen();
				}
			});
		});
	}
	
	lostOxen(){
		party.oxen -= 1;
		$("#game").append( 
						"<div class = 'center_screen_menu' id='randomEvent'>"+
							"An oxen roamed off"+
						"</div>");
		$(document).ready(function() {
			$('body').keydown(function(event){
				if (event.keyCode == 32){
					trailScreen();
				}
			});
		});
	}
	
	luckWagon(){	}
	
	theives(){ }
	
	wrongPath(){
		var lostDays = Math.floor(Math.random() * 5)+1;
		party.rest(lostDays);
		$("#game").append( 
						`<div class = 'center_screen_menu' id='randomEvent'>
							You took a wrong path and lost ${lostDays} day${lostDays == 1 ? "" : "s"}.
						</div>`);
	}
	
	brokenWagon(self){
		var wagonPartNum = Math.floor(Math.random() * 3);
		$("#game").append( 
						`<div class = 'center_screen_menu' id='randomEvent'>
							You broke a wagon ` + wagonPartDescriptions[wagonPartNum] + `!<br><br>
							Would you like to spend a day to try to repair it?
							<input class='center_screen_input' id = 'fixChoice'>
						</div>`);
						
		var fixChoice = document.getElementById("fixChoice")
		$(document).ready(function() {
			$('body').off("keydown");
			$(fixChoice).keydown(function(event) {
				if(event.keyCode == 13){
					if (fixChoice.value == "Y" || fixChoice.value == "y"){
						$("#randomEvent").remove();
						self.repairWagonPart(wagonPartNum);
						
					}
					else if (fixChoice.value == "N" || fixChoice.value == "n"){
						$("#randomEvent").remove();
						self.replaceWagonPart(wagonPartNum);
					}
				}
			})
		})
	}
	
	repairWagonPart(wagonPart){
		var random = Math.ceil(Math.random() * 100)
		
		if(random<85){
			$("#game").append( 
						"<div class = 'center_screen_menu' id='randomEvent'>"+
							"You successfully repaired the wagon "+ wagonPartDescriptions[wagonPart]+
						"</div>");
		}
		else{
			var output = 
						"<div class = 'center_screen_menu' id='randomEvent'>"+
							"You did not successfully repair the wagon "+ wagonPartDescriptions[wagonPart] +
							" so it was replaced"+
						"</div>";
			if(wagonPart == 0 && party.wagonWheels>=1){party.wagonWheels -= 1}
			else if(wagonPart == 1 && party.wagonAxles>=1){party.wagonAxles -= 1}
			else if(wagonPart == 2 && party.wagonTongues>=1){party.wagonTongues -= 1}
			else{
				output = 
						"<div class = 'center_screen_menu' id='randomEvent'>"+
							"You did not successfully repair the wagon "+ wagonPartDescriptions[wagonPart] +
							" and you do not have a spare part to replace it with"+
						"</div>";
			}
			$('#game').append(output)
		}
		
		$(document).ready(function() {
			$('body').keydown(function(event) {
				if(event.keyCode == 32){
					trailScreen();
				}
			})
		})
	}
	
	replaceWagonPart(wagonPart){
		
		var output = 
				"<div class = 'center_screen_menu' id='randomEvent'>"+
					"Your wagon "+ wagonPartDescriptions[wagonPart] + " was replace."+
				"</div>"
		
		if(wagonPart == 0 && party.wagonWheels>=1){party.wagonWheels -= 1}
		else if(wagonPart == 1 && party.wagonAxles>=1){party.wagonAxles -= 1}
		else if(wagonPart == 2 && party.wagonTongues>=1){party.wagonTongues -= 1}
		else{
				output = 
						"<div class = 'center_screen_menu' id='randomEvent'>"+
							"You do not have a spare "+ wagonPartDescriptions[wagonPart] +
							" and you do not have a spare part to replace it with"+
						"</div>";
			}
		console.log(output)
		$('#game').append(output);
			
		$(document).ready(function() {
			$('body').keydown(function(event) {
				if(event.keyCode == 32){
					trailScreen();
				}
			})
		})
	}
}