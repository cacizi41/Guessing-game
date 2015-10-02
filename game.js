// Question1

var one = document.getElementById('a');
var two = document.getElementById('b');
var three = document.getElementById('c');

var a = document.getElementById('d');
var b = document.getElementById('e');
var c = document.getElementById('f');

var photo1 = 'img/pulp-fiction.jpg'
var photo2 = 'img/arcade-fire.jpg'
var photo3 = 'img/traffic-jam.jpg'


var questions = ['Is your favorite movie Pulp fiction?',"Do you like Arcade fire?","Do you want to ride bike to CF?"];
var answers = ['YES','Y','NO','N'];

function question1() {
	var question1 = prompt(questions[0]);
	if (question1.toUpperCase() === answers[0]|| question1.toUpperCase() === answers[1]) {
		one.innerHTML = "Great! You got great taste!";
		a.innerHTML = '<img src=' + photo1 + ' width="200" />';
	}else{
  		one.innerHTML = "I wish you would love it!";
	}
}
question1();
// Question 2
function question2() {
	var question2 = prompt(questions[1]);
	if(question2.toUpperCase() === answers[0]|| question2.toUpperCase()=== answers[1]){
	  two.innerHTML = "we can be friends then!";
	  b.innerHTML ='<img src=' + photo2 + ' width="200" />';
	}else{
	  two.innerHTML = "I would still be your friend.";
	}
}
question2();
// Question 3
function question3() {
	var question3 = prompt(questions[2])
	if(question3.toUpperCase() === answers[0]|| question3.toUpperCase()=== answers[1]){
	  three.innerHTML = "Great workout! You can shower there.";
	  c.innerHTML = '<img src=' + photo3 + ' width="200" />';
	}else{
	three.innerHTML = "Traffic is horrible those days";
	}
}

question3();
