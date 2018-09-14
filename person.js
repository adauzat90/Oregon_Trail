class Person{
    constructor(name,is_party_leader){
        this.name = name;
        this.is_party_leader = is_party_leader;
		this.alive = true;
		this.health = 5;
		this.hasDiseases = []
    }
	
	didDrown(){
		var random = Math.floor(Math.random() * 100);
		
		if(random < 90){return false;}
		else{return true;}
	}
	
	died(){
		this.alive = false;
		
		$("#game").append( 
			"<div class = 'center_screen_menu' id='died'>"+
					this.name + " has died <br>"+ 
					"Would you like to leave a gravestone?"+
					"<input class = 'center_screen_input' id='death'>"+
			"</div>");
			var choice = document.getElementById("death")
			var name = this.name;
			console.log(choice)
			$(document).ready(function() {
				$('body').off("keydown");
				$(choice).keydown(function(event){
					console.log(choice.value)
					if (event.keyCode == 13){
						
						if(choice.value == 'y' || choice.value == 'Y'){
							console.log(name)
							console.log("Creating Tombstone")
							createTombStoneScreen(name);
							
						}
						else{
							$("#died").remove();
						}
					}
				});
			})
			return true;
	}
	
	addRandomDisease(){
		if(this.hasDiseases.length < 7){
			console.log("Adding random Disease");
			var random = Math.floor(Math.random()*7);
			var diseasesNotHad = Object.keys(diseases).filter(key => this.hasDiseases.indexOf(key));
			if(this.hasDiseases.length>0){
				var uniqueDisease = false;
				while(true){
					for(var i = 0; i<this.hasDiseases.length; i++){
						if(random != this.hasDiseases[i].id){
							uniqueDisease = true;
						}
					}
					if(uniqueDisease){break;}
					else{random = Math.floor(Math.random()*7);}
				}
			}
			


			
			this.hasDiseases.push(diseases[diseasesNotHad[random]])
			this.health -= this.hasDiseases[this.hasDiseases.length-1].onContract
			
			$("#game").append( 
			"<div class = 'center_screen_menu' id='disease'>"+
					this.name + " has " + this.hasDiseases[this.hasDiseases.length-1].name+"<br>"+ 
					"Press SPACE BAR to continue"+
			"</div>");
			
			$(document).ready(function() {
				$('body').off("keydown");
				$('body').keydown(function(event){
					if (event.keyCode == 32){
						$("#disease").remove();
						trailScreen();
					}
				});
			})
			return true;
		}
		else{return false;}
	}
	
	updateHealth(change){
		
		if(this.hasDiseases.length > 0){
			for(var i = 0; i<this.hasDiseases.length; i++){
				change += this.hasDiseases[i].perDay;
			}
		}
		
		this.health += change;
		
		
		var random = Math.floor(Math.random()*100) + this.health * 10;
		
		var pause = false;
		
		if (this.health <= 0){
			this.health = 0;
			pause = this.died();
		}
		
		else if(this.health > 5){
			this.health = 5;
		}
		
		else if (this.alive && random<60){
			var addedADisease = this.addRandomDisease();
			console.log("Outside of random disease");
			pause = pause || addedADisease;
		}
		return pause;
	}
}