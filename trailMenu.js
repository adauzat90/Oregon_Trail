//DELETE TEST VARIABLES
party_members.push(new Person("John",true))
party_members.push(new Person("James",false))
party_members.push(new Person("Lizzy",false))
party_members.push(new Person("Amanda",false))
party_members.push(new Person("Luke",false))

party = new Party("banker");

party.addParty(party_members);

transaction = new Transaction()
transaction.buyOxen(8,20)
transaction.buyFood(1000,.20);
transaction.buyClothing(5,10);
transaction.buyWagonWheel(3,10);
transaction.buyWagonAxle(2,10);
transaction.buyWagonTongue(1,10);

console.log(transaction);

party.addTransactionToParty(transaction);
party.setStartDate(3);
party.nextLandMark = landmarks[0];
party.landMarkIndex = 0;
party.milesTraveled = 0;



//party.milesTraveled = 110;

function trailMenu(){
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
		"<img src='pictures\\TopBorder.png' class = 'topBorder'>"+
		"Independence <br>"+
		party.getDate()+ "<br>"+
		"<div class='whiteBox'>"+
			"Weather: " + weather.getWeather() + "<br>"+
			"Health: " + party.getHealth() + "<br>"+
			"Pace: "+ party.pace.name + "<br>"+
			"Rations: "+ party.rations.name + "<br>"+
		"</div>"+
		
		"<ol class = 'option_menu'>You may:<br>"+
			"<div class = 'options'>"+
				"<li> Continue on trail</li>"+
				"<li> Check supplies</li>"+
				"<li> Change pace</li>"+
				"<li> Change food rations</li>"+
				"<li> Stop to rest</li>"+
				
			"</div>"+
		"What is your choice? "+
		"<input class='submit_on_enter' type='number' id = 'choice' max = '9'>"+
		"</ol>"+
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
	
	if(party.canTalk){
		$(".options").append(`
			<li> Talk to people </li>`)
	}
	
	if(party.atStore){
		$(".options").append(`
			<li> Buy supplies</li>`)
	}
	
	if(!party.atStore && !party.canTalk){
		$(".options").append(`
			<li> Fish for food </li>`)
	}
	
    var choice = document.getElementById("choice");
    choice.focus();
	console.log("Out side of document.ready funct")
	
	$('body').off("keydown");
    $(document).ready(function() {
		console.log("In document ready function");
		$(".submit_on_enter").off("keydown");
      $('.submit_on_enter').keydown(function(event) {
		  console.log("in add on event function");
        // enter has keyCode = 13, change it if you want to use another button
        if (event.keyCode == 13) {
			console.log("In trail event code")
          if(parseInt(choice.value) == 1){
			//Continue on trail
			if(party.atStore){party.atStore = false;}
			if(party.canTalk){party.canTalk = false;}
			trailScreen();
              return false;
          }
		  else if(parseInt(choice.value) == 2){
			  //supply menu
			  console.log("Showing supply menu");
			  trailSupplyMenu();
			  return false;
			}
		  else if(parseInt(choice.value) == 3){
			  //Change pace
			  trailPaceMenu();
			  return false;
		  }
		  else if(parseInt(choice.value) == 4){
			  //Change food rations
			  trailFoodRationMenu();
			  return false;
		  }
		  else if(parseInt(choice.value) == 5){
			  //Stop to rest
			  trailRestMenu();
			  return false;
		  }
		  else if(parseInt(choice.value) == 6 && party.canTalk){
			  //Talk to people
			  trailTalkMenu();
			  return false;
		  }
		  else if(parseInt(choice.value) == 6 && !party.atStore && !party.canTalk){
			  fishingMenu();
			  return false;
		  }
		  else if(parseInt(choice.value) == 7 && party.atStore){
			  //Buy Supplies
			  trailBuyMenu(party.previousLandMark);
			  return false;
		  }

		}

        else if((event.keyCode >= 49 && event.keyCode <= 55) || (event.keyCode >= 97 && event.keyCode <= 103))
        {console.log("Valid Input")}
        else{
            choice.value = null;
        }

      });
    });
}

function trailSupplyMenu(){
	var gameScreen = document.getElementById("game");

    gameScreen.innerHTML = 
	"<img src= 'pictures\\TopBorder.png' class = 'topBorder'>"+
	"<b>Your Supplies</b><br>"+
	"oxen	"+party.oxen+"<br>"+
	"sets of clothing	"+party.clothing+"<br>"+
	"wagon wheels	"+party.wagonWheels+"<br>"+
	"wagon axles	"+party.wagonAxles+"<br>"+
	"wagon tongues	"+party.wagonTongues+"<br>"+
	"pounds of food	"+party.food+"<br>"+
	"money left	$"+party.money+"<br><br>"+
	"Press SPACE BAR to continue"+
	"<img src= 'pictures\\TopBorder.png' class = 'bottomBorder'>";
	
	console.log("Within supplyMenu html changed");
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				console.log("Space bar pressed");
				trailMenu()
			}
		})

	});
}


function trailPaceMenu(){
	var gameScreen = document.getElementById("game");

    gameScreen.innerHTML = 
	"<img src= 'pictures\\TopBorder.png' class = 'topBorder'>"+
	"<b>Change pace</b><br>"+
	'(currently "'+party.pace+'")<br><br>'+
	"<ol class = 'option_menu'>"+
		"The pace at which you travel can change. Your choices are:<br>"+
		"<div class = 'options'>"+
			"<li> a steady pace</li>"+
			"<li> a strenuous pace</li>"+
			"<li> a grueling pace</li>"+
			"<li> find out what these different paces mean</li>"+
		"</div>"+
		"What is your choice?"+
		"<input class='submit_on_enter' type='number' id = 'choice' max = '4'>"+
	"</ol>"+
	"<img src= 'pictures\\TopBorder.png' class = 'bottomBorder'>";
	
	var choice = document.getElementById("choice");
    choice.focus();
    $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        if (event.keyCode == 13) {
          if(parseInt(choice.value) == 1){
			//a steady pace
			party.pace = paceTypes.steady;
			trailMenu()
              return false;
          }
		  else if(parseInt(choice.value) == 2){
			  //a strenuous pace
			  party.pace = paceTypes.strenuous;
			  trailMenu()
			}
		  else if(parseInt(choice.value) == 3){
			  //a grueling pace
			  party.pace = paceTypes.grueling;
			  trailMenu()
		  }
		  else if(parseInt(choice.value) == 4){
			  //pace info screen
			  //NEED TO ADD
			  trailMenu()
		  }
		  
          return false;
        }

        else if((event.keyCode >= 49 && event.keyCode <= 52) || (event.keyCode >= 97 && event.keyCode <= 100))
        {console.log("Valid Input")}
        else{
            choice.value = null;
            return false;
        }

      });
    });
	
}

function trailFoodRationMenu(){
	var gameScreen = document.getElementById("game");

    gameScreen.innerHTML = 
	"<img src= 'pictures\\TopBorder.png' class = 'topBorder'>"+
	"<b>Change food rations</b><br>"+
	'(currently "'+party.rations+'")'+
	"<ol class = 'option_menu'>"+
		"The pace at which you travel can change. Your choices are:<br>"+
		"<div class = 'options'>"+
			"<li> filling - meals are large and generous.</li>"+
			"<li> meager - meals are small, but adequate.</li>"+
			"<li> bare bones - meals are very small; everyone stays hungry.</li>"+
		"</div>"+
		"What is your choice?"+
		"<input class='submit_on_enter' type='number' id = 'choice' max = '3'>"+
	"</ol>"+
	"<img src= 'pictures\\TopBorder.png' class = 'bottomBorder'>";
	
	var choice = document.getElementById("choice");
    choice.focus();
    $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        if (event.keyCode == 13) {
          if(parseInt(choice.value) == 1){
			//a steady pace
			party.rations = rationTypes.filling;
			trailMenu()
              return false;
          }
		  else if(parseInt(choice.value) == 2){
			  //a strenuous pace
			  party.rations = rationTypes.meager;
			  trailMenu()
			}
		  else if(parseInt(choice.value) == 3){
			  //a grueling pace
			  party.rations = rationTypes.bareBones;
			  trailMenu()
		  }
		  
          return false;
        }

        else if((event.keyCode >= 49 && event.keyCode <= 51) || (event.keyCode >= 97 && event.keyCode <= 99))
        {console.log("Valid Input")}
        else{
            choice.value = null;
            return false;
        }

      });
    });
}

function trailRestMenu(){
	$("#game").append(
		"<div class = 'center_screen_menu'>"+
				"How many days would you like to rest? "+
				"<input type='number' class = 'center_screen_input' id = 'days_to_rest'>"+
		"</div>"
	);
	var rest_choice = document.getElementById("days_to_rest");
	rest_choice.focus()
	$(document).ready(function() {
		$(rest_choice).keydown(function(event) {
			if (event.keyCode == 13){
				party.rest(parseInt(rest_choice.value));
				trailMenu();
			}
		});
	})
}

function trailTradeMenu(){}

function trailTalkMenu(){
	var gameScreen = document.getElementById("game");
	randomPerson = persons[Math.floor(Math.random() * 0)]; 
	randomSaying = sayings[Math.floor(Math.random() * 0)];
    gameScreen.innerHTML = 
	"<img src= 'pictures\\TopBorder.png' class = 'topBorder'>"+
	randomPerson+"<br>"+
	randomSaying+"<br>"+
	"Press SPACE BAR to continue"+
	"<img src= 'pictures\\TopBorder.png' class = 'topBorder'>";
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				trailMenu()
			}
		})

	});
	
}

function trailBuyMenu(town){
	var gameScreen = document.getElementById("game");

    gameScreen.innerHTML = 
	"<img src= 'pictures\\TopBorder.png' class = 'topBorder'>"+
	"<div class = 'whiteBox'>"+
	party.nextLandMark.name + "<br>" +
	party.getDate()+
	"</div>"+
	"<ol class = 'option_menu'>You may buy:<br>"+
		"<div class='options'>"+
			"<li> Oxen			<span class = 'cost'>$"+ town.oxenPrice.toFixed(2) +" per ox</span></li>"+
			"<li> Clothing		<span class = 'cost'>$"+ town.clothingPrice.toFixed(2) +" per set</span></li>"+
			"<li> Wagon wheels	<span class = 'cost'>$"+ town.wheelPrice.toFixed(2) + " per wheel</span></li>"+
			"<li> Wagon axles	<span class = 'cost'>$"+ town.axlePrice.toFixed(2) +" per axle</span></li>"+
			"<li> Wagon tongues	<span class = 'cost'>$"+ town.tonguePrice.toFixed(2)+" per tongue</span></li>"+
			"<li> Food			<span class = 'cost'>$"+ town.foodPrice.toFixed(2)+" per pound</span></li>"+
			"<li> Worms			<span class = 'cost'>$"+ town.wormPrice.toFixed(2)+" per worm</span></li>"+
			"<li> Leave store</li>"+
		"</div>"+
	"You have $"+party.money+" to spend.<br>"+
	"Which number? "+
	"<input class='submit_on_enter' type='number' id = 'choice' max = '8'>"+
	"</ol>"+
	"<span id='purchase_item'></span>"+
	"<img src= 'pictures\\TopBorder.png' class = 'topBorder'>";
	
	var choice = document.getElementById("choice");
    choice.focus();
    $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        if (event.keyCode == 13) {
          if(parseInt(choice.value) == 1){
			$("#purchase_item").html("How many oxen? <input class='submit_on_enter' type='number' id = 'oxen' max = '20'>")
			var oxenChoice = document.getElementById("oxen");
			oxenChoice.focus();
			choice.disabled = true;
			$(oxenChoice).keydown(function(event) {
				if (event.keyCode == 13) {
					if(oxenChoice.value*town.oxenPrice < party.money){
						transaction.buyOxen(parseInt(oxenChoice.value),town.oxenPrice);
						party.addTransactionToParty(transaction);
					}
					$("#purchase_item").html("");
					$("#purchase_item").append(
					"You did not have enough money to buy the oxen")
					choice.value = null;
					choice.disabled = false;
					choice.focus();
					
				}
			});
          }
		  else if(parseInt(choice.value) == 2){
			  //buy clothing
			$("#purchase_item").html("How many sets? <input class='submit_on_enter' type='number' id = 'clothing' max = '20'>")
			var clothingChoice = document.getElementById("clothing");
			clothingChoice.focus();
			choice.disabled = true;
			$(clothingChoice).keydown(function(event) {
				if (event.keyCode == 13) {
					if(clothingChoice.value*town.clothingPrice < party.money){
						transaction.buyClothing(parseInt(clothingChoice.value),town.clothingPrice);
						party.addTransactionToParty(transaction);
					}
					$("#purchase_item").html("");
					$("#purchase_item").append(
					"You did not have enough money to buy the clothing")
					choice.value = null;
					choice.disabled = false;
					choice.focus();
				}
			});

			}
		  else if(parseInt(choice.value) == 3){
			  //buy wagon wheels
			$("#purchase_item").html("How many wheels? <input class='submit_on_enter' type='number' id = 'wheel' max = '20'>")
			var wheelChoice = document.getElementById("wheel");
			wheelChoice.focus();
			choice.disabled = true;
			$(wheelChoice).keydown(function(event) {
				if (event.keyCode == 13) {
					if(wheelChoice.value*town.wheelPrice < party.money){
						transaction.buyWagonWheel(parseInt(wheelChoice.value),town.wheelPrice);
						party.addTransactionToParty(transaction);
					}
					$("#purchase_item").html("");
					$("#purchase_item").append(
					"You did not have enough money to buy the wheels")
					choice.value = null;
					choice.disabled = false;
					choice.focus();
				}
			});

		  }
		  else if(parseInt(choice.value) == 4){
			  //buy wagon axles
			$("#purchase_item").html("How many axles? <input class='submit_on_enter' type='number' id = 'axle' max = '20'>")
			var axleChoice = document.getElementById("axle");
			axleChoice.focus();
			choice.disabled = true;
			$(axleChoice).keydown(function(event) {
				if (event.keyCode == 13) {
					if(axleChoice.value*town.axlePrice < party.money){
						transaction.buyWagonAxle(parseInt(axleChoice.value),town.axlePrice);
						party.addTransactionToParty(transaction);
					}
					$("#purchase_item").html("");
					$("#purchase_item").append(
					"You did not have enough money to buy the axles")
					choice.value = null;
					choice.disabled = false;
					choice.focus();
				}
			});

		  }
		  else if(parseInt(choice.value) == 5){
			  //buy wagon tongues
			$("#purchase_item").html("How many tongues? <input class='submit_on_enter' type='number' id = 'tongue' max = '20'>")
			var tongueChoice = document.getElementById("tongue");
			tongueChoice.focus();
			choice.disabled = true;
			$(tongueChoice).keydown(function(event) {
				if (event.keyCode == 13) {
					if(tongueChoice.value*town.tonguePrice < party.money){
						transaction.buyWagonTongue(parseInt(tongueChoice.value),town.tonguePrice);
						party.addTransactionToParty(transaction);
					}
					$("#purchase_item").html("");
					$("#purchase_item").append(
					"You did not have enough money to buy the wagon tongues")
					choice.value = null;
					choice.disabled = false;
					choice.focus();
				}
			});

		  }
		  else if(parseInt(choice.value) == 6){
			  //buy food
			$("#purchase_item").html("How many pounds? <input class='submit_on_enter' type='number' id = 'food' max = '20'>")
			var foodChoice = document.getElementById("food");
			foodChoice.focus();
			choice.disabled = true;
			$(foodChoice).keydown(function(event) {
				if (event.keyCode == 13) {
					if(foodChoice.value*town.foodChoice < party.money){
						transaction.buyFood(parseInt(foodChoice.value), town.foodPrice);
						party.addTransactionToParty(transaction);
					}
					$("#purchase_item").html("");
					$("#purchase_item").append(
					"You did not have enough money to buy the food")
					choice.value = null;
					choice.disabled = false;
					choice.focus();
				}
			});

		  }
		  else if(parseInt(choice.value) == 7){
			  // leave store
			  trailMenu()

		  }
		  else if(parseInt(choice.value) == 8){
			  //buy worms
			  $("#purchase_item").html("How many worms? <input class='submit_on_enter' type='number' id = 'worm'>")
			var wormChoice = document.getElementById("worm");
			wormChoice.focus();
			choice.disabled = true;
			$(wormChoice).keydown(function(event) {
				if (event.keyCode == 13) {
					if(wormChoice.value*town.wormPrice < party.money){
						transaction.buyFood(parseInt(wormChoice.value), town.wormPrice);
						party.addTransactionToParty(transaction);
					}
					$("#purchase_item").html("");
					$("#purchase_item").append(
					"You did not have enough money to buy the worms")
					choice.value = null;
					choice.disabled = false;
					choice.focus();
				}
			});
		  }

          return false;
        }

        else if((event.keyCode >= 49 && event.keyCode <= 56) || (event.keyCode >= 97 && event.keyCode <= 104))
        {console.log("Valid Input")}
        else{
            choice.value = null;
            return false;
        }

      });
    });
}

function fishingMenu(){
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
	"<img src= 'pictures\\TopBorder.png' class = 'topBorder'>"+
	"<span id = 'fishingAnim'></span>"+
	"How many worms would you like to use? "+
	"<input class='submit_on_enter' type='number' id = 'choice'><br><br>"+
	"<span id = 'fish'></span>"+
	"<img src= 'pictures\\TopBorder.png' class = 'bottomBorder'>"
	
	var choice = document.getElementById("choice");
	choice.focus();
	$(document).ready(function() {
		$(choice).keydown(function(event){
			if (event.keyCode == 13){
				choice.disabled = true;
				catchFish(parseInt(choice.value));
			}
		})

	});
	
}

function catchFish(wormsUsed){
	var poundsOfFish = 0;
	var fishCaught = 0;
	$("#fishingAnim").html("<img src = 'pictures/gifs/fishing.gif'>")
	for(var i = 0; i<wormsUsed; i++){
		var random = Math.floor(Math.random() * 100)
		if(random<85){
			fishCaught++;
			poundsOfFish += Math.floor(Math.random() * 15)+1;
		}
	}
	
	$("#fish").append(
		"You caught " + fishCaught + " fish totaling " + poundsOfFish + " pounds.<br><br>"+
		"Press SPACE BAR to continue"
	)
	party.food += poundsOfFish;
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				trailMenu();
			}
		})

	});
	
}

//ADD THE REST OF THE PEOPLE AND SAYINGS
persons = [
"A town resident tells you:"
]

sayings = [
'"Some folks seems to think that two oxen are enough to get them to Oregon! Two oxen can barely '+
'"move a fully loaded wagon, and if one of them gets sick or dies, you won\'t be going anywhere. '+
'I wouldn\'t go overland with less than six."'
]