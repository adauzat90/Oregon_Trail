var party_members = [];
var party;
var weather = new Weather();
var randomEvents =  new RandomEvents();
server = new Server("localhost");

function startingGameMenu(){
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
		`<img src="pictures\\TopBorderTitle.png" id ="topBorderTitle">
        <ol class = 'option_menu'>You may:<br>
            <li>Travel the Trail</li>
            <li>Learn about the Trail</li>
            <li>See the Oregan Top Ten</li>
            <li>Turn Sound Off</li>
            <li>Choose Management Options</li>
            <li>End</li>
            What is your choice?
            <input class='submit_on_enter' type='number' id = 'choice' max = '6'>
		</ol>
		<img src="pictures\\BottomBorder.png" class = "frillyBottom">`
    var choice = document.getElementById("choice");
    choice.focus();
    $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        
        if (event.keyCode == 13) {
          if(parseInt(choice.value) == 1){
              console.log("Changing to profession selection")
			  profSelectionMenu();
              return false;
          }
		  else if (parseInt(choice.value) == 3){
			  highScoreScreen()
		  }
          return false;
        }

        else if((event.keyCode >= 49 && event.keyCode <= 53) || (event.keyCode >= 97 && event.keyCode <= 101))
        {console.log("Valid Input")}
        else{
            choice.value = null;
            return false;
        }

      });
    });
}

function profSelectionMenu(){
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
        `<img src="pictures\\TopBorder.png" class = "topBorder">
		Many kinds of people made the trip to Oregan. <br>
        <ol class = 'option_menu'>You may: <br>
			<div class = 'options'>
				<li>Be a banker from Boston </li>
				<li>Be a carpenter from Ohio </li>
				<li>Be a farmer from Illonois </li>
				<li>Find out the differences between these choices </li>
			</div>
        What is your choice?
        <input class = 'submit_on_enter' type='number' id = 'choice'>
		</ol>
		<img src="pictures\\TopBorder.png" class = "bottomBorder">`;
    
    var choice = document.getElementById("choice");
    choice.focus();
    $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        var choice = document.getElementById("choice");
        if (event.keyCode == 13) {
          
          if(parseInt(choice.value) == 1){
                party = new Party("banker");
          }
          else if(parseInt(choice.value) == 2){
              party = new Party("carpenter");
          }
          else if (parseInt(choice.value) == 3){
              party = new Party("farmer");
          }
          nameLeaderScreen();
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

function nameLeaderScreen(){
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
		`<img src="pictures\\TopBorder.png" class = "topBorder">
        What is the first name of the wagon leader?
        <input class='submit_on_enter' type='text' id = 'leader_name'>
		<img src="pictures\\TopBorder.png" class = "bottomBorder">`;
    
    var leader_name = document.getElementById("leader_name");
    leader_name.focus();
    $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        if (event.keyCode == 13) {
            var party_leader = new Person(leader_name.value,true)
            party_members.push(party_leader);
            nameFollowersScreen();
          return false;
        }


      });
    });
}

function nameFollowersScreen(){
    var gameScreen = document.getElementById("game")
    gameScreen.innerHTML = 
		"<img src='pictures\\TopBorder.png' class = 'topBorder'>" +
        "What are the first names of the four other members in your party? <br>"+
		"<ol class = 'option_menu'>"+
			"<div class = 'options'>"+
				"<li>" + party_members[0].name + "</li>"+
				"<li> <input class='submit_on_enter' type='text' id = 'follower1'> </li>" +
				"<li> <input class='submit_on_enter' type='text' id = 'follower2'> </li>" +
				"<li> <input class='submit_on_enter' type='text' id = 'follower3'> </li>" +
				"<li> <input class='submit_on_enter' type='text' id = 'follower4'> </li>" +
			"</div>"+
		"</ol>" +
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>"
    document.getElementById("follower1").focus();
    $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        if (event.keyCode == 13) {
            var follower1_name = document.getElementById("follower1").value
            var follower2_name = document.getElementById("follower2").value
            var follower3_name = document.getElementById("follower3").value
            var follower4_name = document.getElementById("follower4").value
            party_members.push(new Person(follower1_name,false));
            party_members.push(new Person(follower2_name,false));
            party_members.push(new Person(follower3_name,false));
            party_members.push(new Person(follower4_name,false));
            startMonthMenu();
            return false;
        }


      });
    });
}

function startMonthMenu(){
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
        `<img src='pictures\\TopBorder.png' class = 'topBorder'>
		It is 1848. Your jumping off place for Oregon is Independence, Missouri. You must decide which month to leave Independence<br>
		<ol class = 'option_menu'>
			<div class = 'options'>
				<li>March</li>
				<li>April </li>
				<li>May </li>
				<li>June </li>
				<li>July </li>
				<li>Ask for advice </li>
			</div>
			What is your choice? <input class='submit_on_enter' type='number' id = 'choice'>
		</ol>
		<img src='pictures\\TopBorder.png' class = 'bottomBorder'>`
    
    var choice = document.getElementById("choice");
    choice.focus();
    
    $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        var choice = document.getElementById("choice");
        if (event.keyCode == 13) {
          
          if(parseInt(choice.value) != 6){
              party.startMonth = parseInt(choice.value) + 2;
          }
          MattTalking();
		  console.log("In StartMonthMenu");
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

function MattTalking(){
    var index = 0;
    var MattPhrases = [
		`<img src='pictures\\TopBorder.png' class = 'topBorder'>
		Before leaving Independence you should buy equipment and 
        supplies. You have $` + party.money + ` in cash, but you don't 
        have to spend it all now.<br><br>
        Press SPACE BAR to continue
		<img src='pictures\\TopBorder.png' class = 'bottomBorder'>`,
		
        `<img src='pictures\\TopBorder.png' class = 'topBorder'>
		Hello, I'm Matt. So you're going to Oregon! I can 
        fix you up with what you need: <br><br>
        - a team of oxen to pull your wagon <br>
        - clothing for both summer and winter<br><br>
        Press SPACE BAR to continue
		<img src='pictures\\TopBorder.png' class = 'bottomBorder'>`,

        `<img src='pictures\\TopBorder.png' class = 'topBorder'>
		Hello, I'm Matt. So you're going to Oregon! I can 
        fix you up with what you need: <br><br>
        - plenty of food for the trip <br>
        - spare parts for your wagon<br><br>
        Press SPACE BAR to continue
		<img src='pictures\\TopBorder.png' class = 'bottomBorder'>`
	];
	
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
	"<span id = matt_span>"+MattPhrases[0]+"</span>";
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				if(index < 2){
					index++;
					document.getElementById("matt_span").innerHTML = MattPhrases[index]
				}
				else{MattsGenStoreMenu();}
			}
		})

	});
	
    
    
}

function LeavingIndepenceScreen(){
	//ADD PICTURE
	
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
		"<div class = 'whiteBox'>" +
        "Independence <br>"+
		party.getDate()+"<br>"+
		"</div>"+
		"<div class description>"+
		  "<img src = 'pictures/independenceTown.jpg'>"+
		"</div>"+
		"Press SPACE BAR to continue"+
		"</div>";
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				trailMenu()
			}
		})

	});
}

function highScoreScreen(){
	var gameScreen = document.getElementById("game");
	server.getHighScores();
}

function displayHighScores(html){
	var gameScreen = document.getElementById("game");
	gameScreen.innerHTML = html
}

