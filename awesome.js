function myCoolFunction() {
	var numberone = parseInt(document.getElementsByName("number1")[0].value, 10);
	var numbertwo = parseInt(document.getElementsByName("number2")[0].value, 10);
	var answer = numberone + numbertwo;
	
	document.getElementsByName("amaze")[0].innerHTML = answer;
	var catmeow = document.getElementById("catmeow");
	
	document.getElementById("kitten").style.visibility = "visible";
	catmeow.play();
	
}