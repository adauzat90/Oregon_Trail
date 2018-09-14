class Weather{
	constructor(){
		this.season = 0;
		this.weather = 'cold'
		this.healthChange = 0.0;
		this.riverDepthChange = 0.0;
	}
	
	updateWeather(){
		var random = Math.floor(Math.random()*100)
		var currentMonth = party.date.getMonth();
		if((currentMonth <= 2) || (currentMonth >= 11)){
			//winter
			this.season = 1;
			
			if(random <= 55){
				this.weather = 'snowing';
				this.healthChange = -.02
				this.riverDepthChange += .4
			}
			else if(random > 55 && random <= 75){
				this.weather = "cold"
				this.healthChange = -.01
			}
			else if(random > 75 && random <= 85){
				this.weather = "raining"
				this.healthChange = -.01
				this.riverDepthChange += .2
			}
			else if (random > 85){
				this.weather = "cool"
				this.healthChange = .02
			}
			
		}
		else if((currentMonth>=3)&&(currentMonth<=4)){
			//spring
			this.season = 2
			
			if(random <= 65){
				this.weather = "warm"
				this.healthChange = .04
				this.riverDepthChange -= .1
			}
			else if(random > 65 && random <= 90){
				this.weather = "raining";
				this.healthChange = -.01;
				this.riverDepthChange += .2
			}
			else if(random > 90){
				this.weather = "hot"
				this.healthChange = -.03;
				this.riverDepthChange -= .3
			}
		}
		else if((currentMonth >= 5) && (currentMonth <= 7)){
			//summer
			this.season = 3;
			
			if(random <= 75){
				this.weather = "hot"
				this.healthChange = -.03
				this.riverDepthChange -= .3
			}
			else if(random > 75 && random <= 90){
				this.weather = "warm";
				this.healthChange = .04;
				this.riverDepthChange -= .1
			}
			else if(random > 90){
				this.weather = "raining"
				this.healthChange = -.01;
				this.riverDepthChange += .2
			}
		}
		else if((currentMonth>=7)&&(currentMonth<=10)){
			//fall
			this.season = 3
			
			if(random <= 65){
				this.weather = "cool"
				this.healthChange = .02
			}
			else if(random > 65 && random <= 90){
				this.weather = "raining";
				this.healthChange = -.01;
				this.riverDepthChange += .2
			}
			else if(random > 90){
				this.weather = "warm"
				this.healthChange = .04;
				this.riverDepthChange -= .1
			}
		}
	}
	
	getWeather(){
		return this.weather;
	}
	
}