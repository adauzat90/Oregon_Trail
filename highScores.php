<?php
$servername = "database.cs.tamu.edu";
$username = "adauzat90";
$password = "Fey&Bibi";

// Create connection
$link = new mysqli($servername, $username, $password,"adauzat90-oregon_trail");
if (!$link) {
    die('Could not connect: ' . mysql_error());
}


$highScores= [];
$result = $link->query("SELECT * FROM `highScores` ORDER BY 'Score' DESC LIMIT 0, 10");
while($row = $result -> fetch_assoc()){
    array_push($highScores,[
        "name" => $row["Name"],
        "score" => $row["Score"]
    ]);
}
echo json_encode($highScores);
?>