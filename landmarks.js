const landmarks = [
	{name: "Kansas River Crossing", type: "river", distance: 102,
	description:
			`The Kansas River is a tributary to the Missouri.  It is approximately 170
			miles long.  Its width and depth vary depending on the recent amount of snow
			melt.  Where the Oregon Trail crosses the Kansas River, the average width is
			620 feet and the usual depth in the middle is about 4 feet.  But be sure to
			check the conditions when you get there.`,
			image:"<img src='pictures/KansasRiverCrossing.jpg'>",
			depth: 6, width: 637, canFerry: true, canIndian: false 
	},
	{name: "The Big Blue River Crossing", type: "river", distance: 185,  
			description:
			`The Big Blue River is a tributary to the Kansas River, which is in turn a
			tributary to the Missouri.  It's approximately 300 miles long.  Farther to the
			south and west is the Little Blue River, which links up with the Big Blue at
			Blue Rapids.  You'll cross the Big Blue north of the rapids, allowing you to
			avoid the Little Blue River altogether.`,
			image:"<img src='pictures/BigBlueCrossing.jpg'>",
			depth: 6, currentDepth: 6, width: 238, currentWidth: 288,
			canFerry: false, canIndian: false 
	},
	{name: "Fort Kearney", type: "fort", distance: 304, description:
			`Fort Kearney is a U.S. Army post established in 1848 near the Platte River.
			It garrisons cavalry troops who protect settlers and travelers along the Oregon
			Trail.  It was named for Gen. Stephen Kearny (often spelled 'Kearney'), who
			died in 1848 after helping establish law and order in the region and serving in
			the Mexican War`,
			image:"<img src='pictures/fortkearny.jpg'>",
			oxenPrice: 25, clothingPrice: 12.50, wheelPrice: 12.50, axlePrice: 12.50, tonguePrice: 12.50,
			foodPrice: .25, wormPrice: .15
	},
	{name: "Chimney Rock", type: "town", distance: 509, description:
			`Chimney Rock is an important landmark on the Oregon Trail.  It's a spectacular
			natural formation of solid rock and can be seen from miles around.  In fact,
			you can see it for a whole day as you approach it and another whole day as you
			leave it behind.  If you don't see it at all within a week or so after leaving
			Fort Kearney, you've probably strayed too far off the trail.`,
			image:"<img src='pictures/chimneyRock.jpg'>"
	},
	{name: "South Pass", type: "split", distance: 932, description:
			`South Pass is a valley that cuts through the Rocky Mountains at their highest
			point, the Continental Divide.  It marks the halfway point on your journey to
			Oregon.  After South Pass, the trail splits.  If you're short on supplies, you
			should head to Fort Bridger.  But if you don't need supplies, you may want to
			take the shorter route and go directly to the Green River.`,
			image:"<img src='pictures/southPass.jpg'>",
			shortcut:"Green River", shortcutLength: 94
	},
	{name: "Fort Bridger", type: "fort", distance: 989, description:
		`Fort Bridger is a U.S. army outpost, although it was founded in 1843 by fur
		trader and scout Jim Bridger as a trading post and way station.  It's an
		important stop along the Oregon Trail, where travelers can rest, buy supplies,
		and obtain information about the next stretch of the journey.  A little over
		100 miles to the southwest is the recent Mormon settlement of Salt Lake City.`,
		image:"<img src='pictures/fortBridger.jpg'>",
		oxenPrice: 35, clothingPrice: 17.50, wheelPrice: 17.50, tonguePrice: 17.50,
		axlePrice: 17.50, foodPrice: 0.35, wormPrice: 0.25
	},
	{name: "Green River Crossing", type: "river", distance: 1151, shortcutDistance: 1057, shortcut:"Green River",
	description:
			`The Green River is a tributary to the Colorado River, flowing south from the
			Continental Divide along a twisted, rugged path.  It's estimated to be more
			than 700 miles in length.  It's navigable only at high water, and even then
			it's extremely dangerous.  But you must cross it before proceeding west on the
			Oregon Trail, so be very careful.`,
			image:"<img src='pictures/BigBlueCrossing.jpg'>",
		depth: 10, width: 700, canFerry: true, canIndian: false 
	},
	{name: "Soda Springs", type: "town", distance: 1295, shortcutDistance: 1295, shortcut:"Green River", 
	description:
			`The Green River is a tributary to the Colorado River, flowing south from the
			Continental Divide along a twisted, rugged path.  It's estimated to be more
			than 700 miles in length.  It's navigable only at high water, and even then
			it's extremely dangerous.  But you must cross it before proceeding west on the
			Oregon Trail, so be very careful.`,
			image:"<img src='pictures/sodaSprings.jpg'>"
	},
	{name: "Fort Laramie", type: "fort", distance: 640, description:
			`Fort Laramie is a US Army post near the junction of the North Platte and
			Laramie Rivers.  Originally called Fort William, it was founded as a
			fur-trading post in 1834.  It was renamed for Jacques Laramie, a French trapper
			who worked in the region earlier in the century.  Fort Laramie is an important
			stop for resting and getting supplies along the trail.`,
			image:"<img src='pictures/fortLaramie.jpg'>",
	oxenPrice: 30, clothingPrice: 15, wheelPrice: 15, axlePrice: 15, tonguePrice: 15,
	foodPrice: .3, wormPrice: 0.2
	},
	{name: "Independence Rock", type: "town", distance: 887, description:
			`Independence Rock is an important landmark and resting place along the Oregon
			Trail. It's a large natural formation, almost 200 feet tall, made of soft stone
			into which many travelers and traders have carved their names, initials, or
			brief messages.  It gets its name from the fact that, in order to stay on
			schedule, travelers try to reach it no later than July 4--Independence Day`,
			image:"<img src='pictures/independenceRock.jpg'>",
	},
	{name: "Fort Hall", type: "fort", distance: 1395,
	description:
			`Fort Hall is an outpost on the banks of the Snake River.  It was originally a
			fur-trading post, founded by Nathaniel Wyeth in 1834.  Later it was bought by
			the Hudson's Bay Company.  Ever since it has served as an important stop along
			the Oregon Trail, where emigrants can rest and buy supplies.  Some travelers
			turn southwest at this point and head for California.`,
			image:"<img src='pictures/fortHall.jpg'>",
	oxenPrice: 40, clothingPrice: 20, wheelPrice: 20, axlePrice: 20, tonguePrice: 20,
	foodPrice: .4, wormPrice: 0.3
	},
	{name: "Snake River Crossing", type: "river", distance: 1534,
	description:
			`After leaving Fort Hall, the trail follows the Snake River for hundreds of
			miles.  The Snake River gets its name from the way it twists and turns through
			this ruffed country, sometimes through steep gorges.  But the trail is fairly
			flat (through dry and desolate) near the river, which makes wagon travel
			possible.  Crossing the Snake River, however, can be dangerous.`,
			image:"<img src='pictures/snakeCrossing.jpg'>",
			depth: 20, width: 50, canFerry: false, canIndian: true
	},
	{name: "Fort Boise", type: "fort", distance: 1648,
	description:
			`Fort Boise was built by the Hudson's Bay Company in 1834 as a fur-trading
			outpost.  Its name comes from the French word "boise," meaning "wooded."
			That's because there are lots of trees here, unlike the dry region of the Snake
			River Plain to the east.  An important stop on the Oregon Trail, it stands on
			the banks of the Boise River, a tributary to the Snake River.`,
			image:"<img src='pictures/fortBoise.jpg'>",
	oxenPrice: 45, clothingPrice: 22.50, wheelPrice: 22.50, axlePrice: 22.50, tonguePrice: 22.50,
	foodPrice: .45, wormPrice: 0.4
	},
	{name: "The Grand Ronde", type: "split", distance: 1430, description:
			`The Grand Ronde (French for 'great ring') is a river that runs roughly
			parallel to the Blue Mountains.  The Oregon Trail crosses through the Grande
			Ronde river valley just before the mountains.  The Grande Ronde valley is noted
			for its beauty and is greatly appreciated by emigrants as a sign that their
			long journey is nearing its end.`,
			image:"<img src='pictures/grandRonde.jpg'>",
			splitPath: 'grandRonde'
	},
	{name: "Barlow Toll Road", type:"split",distance:1520, description:
		`Emigrants who don't want to raft down the Columbia River can take the Barlow
		TollRoad.  It was cut in 1845 by Samuel Barlow, who obtained a grant from the
		territorial legislature to charge a toll for its use.  Passing through rough,
		mountainous terrain, it runs from The Dalles to the Willamette Valley.  It's a
		difficult 90 miles, but many prefer it to rafting.`,
		image:"<img src= 'pictures/tollRoad.jpg'>"
	},
	{name: "Oregon", type:"end",distance:1620}
];

function lookAround(landmark){
	var displayingDescription = false;
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
		"<img src='pictures\\TopBorder.png' class = 'topBorder'>"+
		"<div class = 'whiteBox'>" +
			landmark.name+"<br>"+
			party.getDate()+"<br>"+
		"</div><br>"+
		"<div class = 'description'>"+
			landmark.image+"<br>"+
		"</div><br>"+
		"<span id = 'pathDiv'>Press SPACE BAR to continue</span>"+
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				if(displayingDescription){
					if(landmark.type == "river"){
						riverMenu(landmark);
					}
					else{
						trailMenu();
					}
				}
				else{
					$(".description").html(landmark.description);
					displayingDescription = true;
				}
			}
		})

	});
}

function generateEndScreen(){
	var personSc = (party.persons.length * 400);
	var oxenSc = (party.oxen * 4)
	var spareSc = ((party.wagonAxles + party.wagonTongues + party.wagonWheels)*2);
	var clothingSc = (party.clothing * 2)
	var wormSc = (party.worms * .1)
	var foodSc = (party.food * .05)
	var moneySc = (party.money * .2)
	var totalSc = (personSc+oxenSc+spareSc+clothingSc+wormSc+foodSc+moneySc)*party.score_multiplier;
	$("#game").html(
		"Congratulations You've made it! <br><br>"+
		"<ol class = 'option_menu'>"+
			"Scoring: <br>"+
			"<div class='end'>"+
				"<li>People: " + personSc + "</li>"+
				"<li>Oxen: " + oxenSc + "</li>"+
				"<li>Spare Wagon Parts: " + spareSc + "</li>"+
				"<li>Sets of Clothing: " + clothingSc + "</li>"+
				"<li>Worms: " + wormSc + "</li>"+
				"<li>Food: " + foodSc + "</li>"+
				"<li>Money: " + moneySc + "</li>"+
				"<li><strong>Total Score:</strong> " + totalSc + "</li>"+
			"</div><br>"+
			"Press SPACE BAR to see highscores"
	
		)
		
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				highScoreScreen();
			}
		})
	})
}

function generateTombStone(tombstone){
	$("#game").html(
		"<div class = 'tombstone'>"+
			"<img src='pictures/tombstone.png'>"+
			"<p class = 'tomb_name'>"+tombstone.name+"</p><br>"+
			"<p class = 'epitaph'>" + tombstone.epitaph+"</p><br>"+
		"</div>"+
		"Press SPACE BAR to continue"
		)
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				trailMenu()
			}
		})
	})
}

function createTombStoneScreen(name){
	console.log(name)
	$("#game").html(
		"<div class = 'tombstone'>"+
			"<img src='pictures/tombstone.png'>"+
			"<p class = 'tomb_name'>"+name+"</p><br>"+
				"<textarea class = 'epitaph' id='ep_input'></textarea><br>"+
		"</div>"+
		"Press ENTER when done"
		)
		var input = document.getElementById("ep_input");
		input.focus()
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 13){
				trailMenu()
			}
		})
	})
}

function generateSplitPath(path){
	lookAround(path);
	var splitPath = document.getElementById("pathOptions");
	console.log(splitPath)
	
	$("#pathDiv").html(		
		"<ol class = 'option_menu'>You may:<br>"+
			"<div class = 'options' id = 'pathOptions'>"+
			"</div>"+
			"<span id = 'action'>Press SPACE BAR to continue</span>"+
		"</ol>")
	
	if(path.shortcut == "Green River"){
		$("#pathOptions").append(`
		<li>Go to Fort Bridger <br>
		<li>Take the shortcut and go to Green River`
		)
		$("#action").html(`
		What is your choice? 
		<input class='submit_on_enter' type='number' id = 'choice' max = '2'>`
		)
	}
	
	var choice = document.getElementById("choice");
	choice.focus()
	
	$(document).ready(function() {
      $(choice).keydown(function(event) {
		if(event.keyCode == 13){
			if (choice.value == 1){//display picture
				party.updateLandMark(5)
				trailScreen();
			}
			else if (choice.value == 2){
				party.updateLandMark(6)
				party.shortCutLength = path.shortcutLength
				trailScreen();
			}
		}
	  })
	})
	
}

function generateFortOrTown(fort){
	$("#game").append(
		"<div class = center_screen_menu>"+
			"<p>"+
				"You have arrived at " + fort.name + ". Would you like to look around?"+
				"<input class='center_screen_input' id = 'look'>"+
			"</p>"+
		"</div>")
	
	if(fort.type == "fort"){
		party.canTalk = true;
		party.atStore = true;
	}
	else if (fort.type == "town"){
		party.canTalk = true;
		party.atStore = false;
	}
	
	var choice = document.getElementById("look")
	choice.focus();
	$(document).ready(function() {
		$('body').off("keydown");
      $(choice).keydown(function(event) {
		if(event.keyCode == 13){
			if (choice.value == "Y" || choice.value == "y"){//display picture
				lookAround(fort);
				party.incrementLandMark()
			}
			else if (choice.value == "N" || choice.value == "n"){
				trailMenu();
				party.incrementLandMark();
			}
		}
	  })
	})
		
}

function generateRiver(river){
	$("#game").append(
		"<div class = center_screen_menu>"+
			"<p>"+
				"You are now at the " + river.name + ". Would you like to look around?"+
				"<input class='center_screen_input' id = 'look'>"+
			"</p>"+
		"</div>"
	);
	var choice = document.getElementById("look")
	choice.focus();
	$(document).ready(function() {
		$('body').off("keydown");
      $(choice).keydown(function(event) {
		if(event.keyCode == 13){
			
			if (choice.value == "Y" || choice.value == "y"){//display picture
				lookAround(river);
			}
			else if (choice.value == "N" || choice.value == "n"){
				console.log("pressed n")
				riverMenu(river);
			}
		}
	  })
	})
}

function riverInfo(river){
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
	"<img src='pictures\\TopBorder.png' class = 'topBorder'>"+
	river.name + "<br>"+
	party.getDate()+"<br>"+
	river.description + "<br><br>"+
	"Press SPACE BAR to continue"+
	"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				riverMenu(river);
			}
		})

	});
}

function riverMenu(river){
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
	"<img src='pictures\\TopBorder.png' class = 'topBorder'>"+
	river.name + "<br>"+
	party.getDate()+"<br>"+
	"<div class='whiteBox'>"+
	"Weather: " + weather.getWeather() + "<br>"+
	"River width: " + river.width + "<br>" +
	"River depth: " + (river.depth+weather.riverDepthChange) + "<br>" +
	"</div>"+
	"<div class = 'option_menu'>"+
		"You may: <br>"+
		"<ol class = 'options'>"+
			"<li> attempt to ford the river <br>"+
			"<li> caulk the wagon and float it across <br>"+
			"<li> wait to see if conditions improve <br>"+
			"<li> get more information <br>"+
		"</ol>"+
		"What is your choice? "+
		"<input class='submit_on_enter' type='number' id = 'riverChoice'>"+
	"</div>"+
	"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>"
	
	var choice = document.getElementById("riverChoice");
	choice.focus();
	
	$(document).ready(function() {
		$('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
			
			if (event.keyCode == 13) {
			  
			  if(parseInt(choice.value) == 1){
					//ford the river
					fordRiver(river);
			  }
			  else if(parseInt(choice.value) == 2){
					//caulk the wagon
					caulkWagon(river);
			  }
			  else if (parseInt(choice.value) == 3){
					//wait to see if conditions improve
					//NEED TO ADD
					$("#game").append( 
						"<div class = 'center_screen_menu' id='rest'>"+
							"How many days would you like to wait?"+ 
							"<input class='submit_on_enter' type='number' id = 'restDays'>"+
						"</div>");
			var restDays = document.getElementById("restDays")
			choice.disabled = true;
			restDays.focus();
			$(document).ready(function() {
				$(restDays).keydown(function(event){
					if (event.keyCode == 13){
						party.rest(parseInt(restDays.value))
						$("#rest").remove();
						riverMenu(river);
					}
				});
			})
			  }
			  else if (parseInt(choice.value) == 4){
					//get more info
					riverMoreInfo(river);
			  }
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

function fordRiver(river){
	if(river.depth  + weather.riverDepthChange <= 1.5){//PLAY ANIMATION Water low enough auto success
		successfulRiverCrossing();
	}
	else if(river.depth + weather.riverDepthChange >= 5){//PLAY ANIMATION Water too high auto fail
		failedRiverCrossing();
	}
	else if(river.depth + weather.riverDepthChange < 5 && river.depth + weather.riverDepthChange> 1.5){
		var random = Math.floor(Math.random() * 100);
		if (random <= 75){//PLAY ANIMATION 
			successfulRiverCrossing();
		}
		else{failedRiverCrossing();}
	}
	
}

function caulkWagon(){
	var random = Math.floor(Math.random() * 100);
	if (random <= 70){
		successfulRiverCrossing();
	}
	else {failedRiverCrossing();}
}

function successfulRiverCrossing(){
	//PLAY ANIMATION SUCCESSFUL
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
	`<img src='pictures\\TopBorder.png' class = 'topBorder'>
	<span class = description>
		<img src="pictures/successfulCrossing.jpg">
	</span>
	You had no trouble floating the wagon across. <br>
	Press SPACE BAR to continue
	<img src='pictures\\TopBorder.png' class = 'bottomBorder'>`;
	
	party.incrementLandMark();
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				trailScreen();
			}
		})

	});
	
}

function failedRiverCrossing(){
	//PLAY ANIMATION FAILED
	gameScreen = document.getElementById("game")
	gameScreen.innerHTML = 
	`<img src='pictures\\TopBorder.png' class = 'topBorder'>
	The wagon tipped over while trying to cross the river<br>
	You lost:<br>
	<span id = 'lost_items'></span>
	Press SPACE BAR to continue
	<img src='pictures\\TopBorder.png' class = 'bottomBorder'>`;
	
	var lostOxen = Math.floor(Math.random() * party.oxen); 
	var lostClothing = Math.floor(Math.random() * party.clothing);
	var lostFood = Math.floor(Math.random() * party.food);
	var lostWheels = Math.floor(Math.random() * party.wagonWheels);
	var lostAxles = Math.floor(Math.random() * party.wagonAxles);
	var lostTongues = Math.floor(Math.random() * party.wagonTongues);
	var drownPeople = []
	for (var i = 0; party.persons.length > i; i++){
		console.log()
		if(party.persons[i].didDrown()){
			drownPeople.push(party.persons[i])
			party.persons[i].alive = false;
		}
	}
	
	party.oxen -= lostOxen;
	party.clothing -= lostClothing;
	party.food -= lostFood;
	party.wagonWheels -= lostWheels;
	party.wagonAxles -= lostAxles;
	party.wagonTongues -= lostTongues;
	
	var lostItems = [lostOxen, lostClothing, lostFood, lostWheels, lostAxles, lostTongues, drownPeople]
	var formatedItems = formatLostItems(lostItems)
	
	$("#lost_items").html(formatedItems)
	
	
	
	party.incrementLandMark();
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				trailScreen();
			}
		})

	});
}

function formatLostItems(lostItems){
	var lostOxen = lostItems[0]
	var lostClothing = lostItems[1]
	var lostFood = lostItems[2]
	var lostWheels = lostItems[3]
	var lostAxles = lostItems[4]
	var lostTongues = lostItems[5]
	var lostPeople = lostItems[6]
	
	oxenLine = lostOxen + " oxen <br>";
	
	if(lostClothing > 1){
		var clothingLine = lostClothing + " sets of clothing <br>"
	}
	else if(lostClothing == 1){
		var clothingLine = lostClothing + " set of clothing <br>"
	}
	else{var clothingLine = ""}
	
	if(lostFood > 1){
		var foodLine = lostFood + " pounds of food <br>"
	}
	else if(lostFood == 1){
		var foodLine = lostFood + " pound of food <br>"
	}
	else{var foodLine = ""}
	
	if(lostWheels > 1){
		var wheelLine = lostWheels + " wagon wheels <br>"
	}
	else if(lostWheels == 1){
		var wheelLine = lostWheels + " wagon wheel <br>"
	}
	else{var wheelLine = ""}
	
	if(lostAxles > 1){
		var axleLine = lostAxles + " wagon axles <br>"
	}
	else if(lostAxles == 1){
		var axleLine = lostAxles + " wagon axle <br>"
	}
	else{var axleLine = ""}
	
	if(lostTongues > 1){
		var tongueLine = lostTongues + " wagon tongues <br>"
	}
	else if(lostTongues == 1){
		var tongueLine = lostTongues + " wagon tongue <br>"
	}
	else{var tongueLine = ""}
	
	var peopleLine = "";
	for (var i = 0; i<lostPeople.length; i++){
		peopleLine = peopleLine.concat(lostPeople[i].name + " (drowned)<br>")
	}
	
	return clothingLine + foodLine + wheelLine + axleLine + tongueLine + oxenLine + peopleLine
}

function riverMoreInfo(river){
	
	index = 0;
	riverInfo = [
	`To ford a river means to pull your wagon across a shallow part of the river,
	with the oxen still attached.`,
	
	`To caulk the wagon means to seal it so that no water can get in.
	The wagon can then be floated across like a boat.`,
	
	`To use a ferry means to put your wagon on top of a flat boat that
	belongs to someone else. The owner of the ferry will take your wagon
	across the river.`]
	
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
	"`<img src='pictures\\TopBorder.png' class = 'topBorder'>"+
	river.name + "<br>"+
	party.getDate()+"<br>"+
	"<span id = river_span>"+riverInfo[0]+"</span><br><br>"+
	"Press SPACE BAR to continue"+
	"`<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				if(index <= riverInfo.length-1){
					index++;
					document.getElementById("river_span").innerHTML = riverInfo[index]
				}
				else{riverMenu(river);}
			}
		})

	});
}