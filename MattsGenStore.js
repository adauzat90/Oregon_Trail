var transaction = new Transaction()

function MattsGenStoreMenu(){
    console.log("In store");
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
        "<img src='pictures\\TopBorder.png' class = 'topBorder'>"+
		"Matt's General Store Independence, Missouri <br>"+
        "March 1, 1848 <br>"+
		"<ol class = 'option_menu'>You may: <br>"+
			"<div class = 'options'>"+
				"<li> Oxen        $"+transaction.oxen*40+"</li>"+
				"<li> Food        $"+transaction.food*.2+"</li>"+
				"<li> Clothing    $"+transaction.clothing*10+"</li>"+
				"<li> Worms		  $"+transaction.worms*.1+"</li>"+
				"<li> Spare Parts $"+(transaction.wagonWheels+transaction.wagonAxles+transaction.wagonTongues)*10+"<br>"+
			"</div>"+
		"Total bill:    $"+transaction.total+"<br><br>"+
        "Amount you have: $"+party.money+ "<br><br>"+
        "Which item would you like to buy? "+
        "<input class = 'submit_on_enter' type='number' id = 'choice'><br><br>"+
		"</ol>"+
        "Press SPACE BAR to leave store"+
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
	
	party.atStore = true;
	var choice = document.getElementById("choice");
	choice.focus();
    $(document).ready(function() {
		$('body').keydown(function(event){
			if (event.keyCode == 32){
				console.log("Space Bar hit")
				party.addTransactionToParty(transaction);
				MattsGenStoreGoodBye()
			}
		});
      $('.submit_on_enter').keydown(function(event) {
		  console.log("In keydown");
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        if (event.keyCode == 13) {
          console.log("Enter key pressed store");
          if(parseInt(choice.value) == 1){
                oxenBuyMenu();
          }
          else if(parseInt(choice.value) == 2){
                foodBuyMenu();
          }
          else if (parseInt(choice.value) == 3){
                clothingBuyMenu();
          }
		  else if(parseInt(choice.value) == 4){
			  wormBuyMenu();
		  }
          else if (parseInt(choice.value) == 5){
                sparePartsBuyMenu();
          }
          return false;
        }

        else if((event.keyCode >= 49 && event.keyCode <= 53) || (event.keyCode >= 97 && event.keyCode <= 101))
        {console.log("Valid Input")}
        else if (event.keyCode == 32){
			console.log("Space Bar hit")
			party.addTransactionToParty(transaction);
			MattsGenStoreGoodBye()
		}
		else{
            choice.value = null;
            return false;
        }
      });
    });
        
}

function MattsGenStoreGoodBye(){
	var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
        `<img src='pictures\\TopBorder.png' class = 'topBorder'>
		Well then, you're ready to start. Good Luck! You have a long and difficult 
		journey ahead of you.<br><br>
		Press SPACE BAR to continue
		<img src='pictures\\TopBorder.png' class = 'bottomBorder'>`;
	
	$(document).ready(function() {
		$("body").keydown(function(event){
			if (event.keyCode == 32){
				LeavingIndepenceScreen()
			}
		})

	});
}

function oxenBuyMenu(){
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
        `<img src='pictures\\TopBorder.png' class = 'topBorder'>
		There are 2 oxen in a yoke; I recommend at least 3 yoke.
        I charge $40 a yoke.<br><br>
        How many yoke do you want?
        <input class = 'submit_on_enter' type='number' id = 'choice'><br><br>
        Bill so far: $`+transaction.total +
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
		
        var choice = document.getElementById("choice");
		choice.focus();
		
        $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        
        if (event.keyCode == 13) {
          //since he charges $40 for 2 ox 
          transaction.buyOxen(parseInt(choice.value)*2,20);
		  
		  MattsGenStoreMenu();
        }

        else if(choice.value*2*20<party.money)
        {console.log("Valid Input")}
        else{
            choice.value = null;
            return false;
        }

      });
    });
}

function foodBuyMenu(){
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
		"<img src='pictures\\TopBorder.png' class = 'topBorder'>"+
        "I recommend you take at least 200 pounds of food for each person in your family. "+
		"I see that you have " + party_members.length + " people in all. You'll need flour, sugar, bacon, "+
		"and coffee. My price is 20 cents a pound.<br><br>"+
        "How many pounds of food do you want? "+
        "<input class = 'submit_on_enter' type='number' id = 'choice'><br><br>"+
        "Bill so far: $"+transaction.total + 
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
        
		var choice = document.getElementById("choice");
		choice.focus();
		
        $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        
        if (event.keyCode == 13) {
          
          transaction.buyFood(parseInt(choice.value),.20);
		  
		  MattsGenStoreMenu();
        }
		
		
        else if(choice.value*.20<party.money)
        {console.log("Valid Input")}
        else{
            choice.value = null;
            return false;
        }

      });
    });
}

function clothingBuyMenu(){
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
        `<img src='pictures\\TopBorder.png' class = 'topBorder'>
		You'll need warm clothing in the mountains. I recommend taking at least 2 set of clothes
		per person. Each set is $10.00. <br><br>
        How many sets of clothes do you want? 
        <input class = 'submit_on_enter' type='number' id = 'choice'><br><br>
        Bill so far: $`+transaction.total +
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
        
		var choice = document.getElementById("choice");
		choice.focus();
		
        $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        
        if (event.keyCode == 13) {
          
          transaction.buyClothing(parseInt(choice.value),10);
		  
		  MattsGenStoreMenu();
        }

        else if(choice.value * 10 < party.money)
        {console.log("Valid Input")}
        else{
            choice.value = null;
            return false;
        }

      });
    });
}

function wormBuyMenu(){
	 var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
        `<img src='pictures\\TopBorder.png' class = 'topBorder'>
		You can use worms to catch fish while you're on the trail <br><br>
        How many worms do you want? 
        <input class = 'submit_on_enter' type='number' id = 'choice'><br><br>
        Bill so far: $`+transaction.total +
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
        
		var choice = document.getElementById("choice");
		choice.focus();
        $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        console.log(choice.value==0);
        if (event.keyCode == 13) {
          
          transaction.buyWorms(parseInt(choice.value),.1);
		  
		  MattsGenStoreMenu();
        }
		
        else if((choice.value)*.1<party.money)
        {console.log("Valid Input")}
        else{
            choice.value = null;
            return false;
        }

      });
    });
}

function sparePartsBuyMenu(){
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = 
        `<img src='pictures\\TopBorder.png' class = 'topBorder'>
		It's a good idea to have a few spare parts for your wagon. Here are the prices:<br>
		<div class = 'options'>
			wagon wheel - $10.00 <br>
			wagon axle - $10.00 <br>
			wagon tongue - $10.00 <br><br>
		</div>
        <span id = 'parts'>How many wagon wheels?</span>
        <input class = 'submit_on_enter' type='number' id = 'choice'><br><br>
        Bill so far: $` + transaction.total + 
		"<img src='pictures\\TopBorder.png' class = 'bottomBorder'>";
        
		var choice = document.getElementById("choice");
		choice.focus();
		
		var phrases = ["How many wagon axels?","How many wagon tongues?"]
		var currentPhrase = 0;
		var phraseElem = document.getElementById("parts");
        $(document).ready(function() {
      $('.submit_on_enter').keydown(function(event) {
        // enter has keyCode = 13, change it if you want to use another button
        //Add rest of Keycodes
        
        if (event.keyCode == 13) {
          if(currentPhrase == 0){
			choice.focus();
			transaction.buyWagonWheel(parseInt(choice.value),10);
			choice.val=null;
		  }
		  else if(currentPhrase == 1){
			  transaction.buyWagonAxle(parseInt(choice.value),10);
			  choice.val=null;
		  }
		  else if(currentPhrase == 2){
			  transaction.buyWagonTongue(parseInt(choice.value),10);
			  MattsGenStoreMenu();
			  choice.val=null;
		  }
		  phraseElem.innerHTML = phrases[currentPhrase];
		  currentPhrase++;
        }

        else if(choice.value*10<party.money)
        {console.log("Valid Input")}
        else{
            choice.value = null;
            return false;
        }

      });
    });
}