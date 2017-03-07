var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var myRandom = 0;

function randomNum() {

	var random = Math.floor(Math.random() * 102) + 19;
	$("#targetNumber").html(random);
	return random;

}

	function randomCrystalNum() {
	
	var random2 = Math.floor(Math.random() * 12) + 1;	
	return random2;	

}

	//RUNNING randomNum to generage the random number to be evaluated //
	randomNum();

	// ASSIGNING VARIABLES TO THE RESULTS OF THE FUNCTIONS//
	myRandom = randomNum();
	c1 = randomCrystalNum();
	c2 = randomCrystalNum();
	c3 = randomCrystalNum();
	c4 = randomCrystalNum();


function results(){

	if(total === myRandom){
		alert("YOU WIN");
	}
	else{
		alert("You Loose");
	}

}

var total = 0;
$("#yourTotal").html("Your total is: " + total);

function setCrystals(){

	$("#crystal1").on("click", function(){
	total = total + c1;
	console.log(c1);
	$("#yourTotal").html("Your total is: " + total);
	});
	
	$("#crystal2").on("click", function(){
	total = total + c2;
	console.log(c2);
	$("#yourTotal").html("Your total is: " + total);
	});
	
	$("#crystal3").on("click", function(){
	total = total + c3;
	console.log(c3);
	$("#yourTotal").html("Your total is: " + total);
	});
	
	$("#crystal4").on("click", function(){
	total = total + c4;
	console.log(c4);
	$("#yourTotal").html("Your total is: " + total);
	});

}

setCrystals();

