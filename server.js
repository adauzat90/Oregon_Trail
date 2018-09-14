class Server{
	constructor(url){
		this.url = url
	}
	

	// Post data to an endpoint on the server
	
	getHighScores(){
		var html = "<table><tr><th>Name</th><th>Score</th></tr>";
		var highScoreJSON = $.getJSON(`highScores.php`,function(score){
		
		for(var i = 0; i<score.length; i++){
			console.log(score[i].name);
			html += (`<tr><td>${score[i].name}</td><td>${score[i].score}</td></tr>`)
		}
		html += "</table>"
		console.log(html);
		displayHighScores(html);
		});
		
	}
	
	addHighScore(){
		
	}
	
	addTombStone(){
		
	}
	
	
}