var answers = 0
var question1 = prompt('Is your favorite movie Pulp fiction?');

if(question1.toUpperCase() === 'YES'|| question1.toUpperCase() === 'Y') {
	answers ++
	alert("great! You got great taste!");
} else { 
	alert("I wish you would love it!");
}

var question2 = prompt("Do you like Arcade fire?");

if(question2.toUpperCase() === 'YES'|| question2.toUpperCase()==='Y'){
	answers ++
	alert("we can be friends then!");
} else {
	alert("I would still be your friend.");}

var question3 = prompt("Do you want to ride bike to CF?")

if(question3.toUpperCase() === 'YES'|| question3.toUpperCase()==='Y'){
	answers ++
	alert("Great workout! You can shower there.")
} else {alert("Traffic is horrible those days")}


alert ('You got ' + answers + ' out of 3 correct! My friend! Thanks for playing!' );




