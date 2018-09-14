class Party{
    constructor(leader_profession){
		
		
		
        if(leader_profession == "farmer"){
            this.leader_profession = "farmer";
            this.money = 400;
            this.score_multiplier = 3;
        }
        else if (leader_profession == "carpenter"){
            this.leader_profession = "carpenter";
            this.money = 800;
            this.score_multiplier = 2;
        }
        else if (leader_profession == "banker"){
            this.leader_profession = "banker";
            this.money = 1600;
            this.score_multiplier = 1;
        }
		
		//inventory of party
		this.oxen = 0;
        this.food = 0;
        this.clothing = 0;
        this.wagonWheels = 0;
        this.wagonAxles = 0;
        this.wagonTongues = 0;
        this.worms = 0;
		
		//party stats
		this.pace = paceTypes.steady;
		this.rations = rationTypes.filling;
		this.milesTraveled = 0;
		this.landMarkIndex = 0;
		this.previousLandMark = landmarks[this.landMarkIndex];
		this.nextLandMark = landmarks[this.landMarkIndex];
		this.tillNextLandMark = this.nextLandMark.distance;
		this.atStore = false;
		this.canTalk = false;
		this.shortCutLength = 0;
		
		this.tombstones = [{"name":"Austin Dauzat","location":120, "epitaph":"RIP Hope you lived well"}]; 
		//server.getTombStones();
		this.nextTombStone = this.tombstones[0]
		this.tombstoneIndex = 0;
		
    }
	
	addParty(persons){
		this.persons = persons;
	}
	
	getMonthName(){
		var month = this.date.getMonth()
		if(month == 1){return "January"}
		else if(month == 2){return "February"}
		else if(month == 3){return "March"}
		else if(month == 4){return "April"}
		else if(month == 5){return "May"}
		else if(month == 6){return "June"}
		else if(month == 7){return "July"}
		else if(month == 8){return "August"}
		else if(month == 9){return "September"}
		else if(month == 10){return "October"}
		else if(month == 11){return "November"}
		else if(month == 12){return "December"}
	}
	
	addTransactionToParty(transaction){
		this.oxen += transaction.oxen;
        this.food += transaction.food;
        this.clothing += transaction.clothing;
        this.wagonWheels += transaction.wagonWheels;
        this.wagonAxles += transaction.wagonAxles;
        this.wagonTongues += transaction.wagonTongues;
        this.worms = transaction.worms;
		this.money -= transaction.total;
		transaction.clearTransaction();
	}
	
	setStartDate(month){
		this.date = new Date(1848,month,1,0,0,0,0)
	}
	
	updateDay(days){
		this.date.setTime(this.date.getTime() + days * 86400000)
		this.updateFood(days);
		weather.updateWeather();
		var healthUpdate = this.updateHealth();
		return healthUpdate
	}
	
	getDate(){
		return this.getMonthName() + " " +this.date.getDate() + ", " + this.date.getFullYear();
	}
	
	getHealth(){
		var health = 0;
		for(var i = 0; i<this.persons.length; i++){
			health += this.persons[i].health;
		}
		var healthString = healthStates[Math.ceil(health/this.persons.length)-1]
		return healthString;
	}
	
	updateLandMark(landMarkIndex){
		this.landMarkIndex = landMarkIndex;
		this.nextLandMark = landmarks[landMarkIndex];
		this.tillNextLandMark = this.nextLandMark.distance - this.shortCutLength;
	}
	
	updateFood(days){
		this.food -= this.rations.pounds * days * this.persons.length;
	}

	updateMileTraveled(days){
		this.milesTraveled += this.oxen * 3 * this.pace.speed;
	}
	
	checkLiving(){
		for(var i = 0; i<party.persons.length; i++){
			if(!party.persons[i].alive){
				party.persons.splice(i,1)
			}
		}
	}
	
	updateHealth(){
		//NEEDS CODE FOR IF THEIR AREN'T ENOUGH CLOTHES
		
		
		var change = this.rations.health + this.pace.health + weather.healthChange;
		var healthNotice = false;
		if(this.food<0){
			this.food = 0;
			change += noFoodChange;
		}
		
		for (var i = 0; i<this.persons.length; i++){
			var healthNotice = healthNotice || this.persons[i].updateHealth(change)
		}
		
		if (healthNotice){
			this.checkLiving()
		}
		
		return healthNotice;
	}
	
	atTombStone(){
		if(this.nextTombStone.location<= this.milesTraveled){
			generateTombStone(this.nextTombStone)
			this.incrementTombStone();
			return true;
		}
		else{return false}
	}
	
	atLandMark(){
		
		if((this.nextLandMark.distance - this.shortCutLength) <= this.milesTraveled){
			console.log(this.nextLandMark.type);
			this.milesTraveled = this.nextLandMark.distance - this.shortCutLength;
			this.tillNextLandMark = 0;
			if(this.nextLandMark.type == "river"){
				generateRiver(this.nextLandMark);
				return true;
			}
			else if(this.nextLandMark.type == "fort" || this.nextLandMark.type == "town"){
				console.log("generating fort")
				generateFortOrTown(this.nextLandMark);
				return true;
			}
			else if (this.nextLandMark.type == "split"){
				generateSplitPath(this.nextLandMark);
				return true;
			}
			else if(this.nextLandMark.type == "end"){
				generateEndScreen();
				return true;
			}
		}

		else{
			this.tillNextLandMark = this.nextLandMark.distance - this.milesTraveled;
			return false;
		}
	}
	
	incrementLandMark(){
		this.landMarkIndex++;
		this.nextLandMark = landmarks[this.landMarkIndex];
		this.previousLandMark = landmarks[this.landMarkIndex-1];
		this.tillNextLandMark = this.nextLandMark.distance - this.shortCutLength;
	}
	
	incrementTombStone(){
		if(this.tombstoneIndex<this.tombstones.length-1){
			this.tombstoneIndex++
			this.nextTombStone = this.tombstones[this.tombstoneIndex]
		}
		else{
			this.nextTombStone = {"name":"","location":120000, "epitaph":""};
		}
	}
	
	travelOneDay(){
		console.log("Traveling One Day");

		var update = this.updateDay(1);
		this.updateMileTraveled(1);
		var atLandMark = this.atLandMark();
		var atTombStone = this.atTombStone();
		var randomEvent = randomEvents.didRandomEventHappen();
		if(atLandMark || update || randomEvent || atTombStone){
			console.log("Returning True")
			return true;
		}
		else{return false;}
	}

	rest(days){
		for (var i = 0; i<days; i++){
			this.updateDay(1);
			weather.updateWeather();
			this.updateHealth();
			
		}
	}
	
}
