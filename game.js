// Question1



var questions = ['Is your favorite movie Pulp fiction?',"Do you like Arcade fire?","Do you want to ride bike to CF?"];
var answers = ['YES','Y','NO','N'];

function question1() {
var question1 = prompt(questions[0]);
if (question1.toUpperCase() === answers[0]|| question1.toUpperCase() === answers[1]) {
  one.innerHTML = "Great! You got great taste!";
} else {
  one.innerHTML = "I wish you would love it!";
  }
}

// Question 2
function question2() {
var question2 = prompt(questions[1]);
if(question2.toUpperCase() === answers[0]|| question2.toUpperCase()=== answers[1]){
  two.innerHTML = "we can be friends then!";
} else {
  two.innerHTML = "I would still be your friend.";
  }
}

// Question 3
function question3() {
var question3 = prompt(questions[2])
if(question3.toUpperCase() === answers[0]|| question3.toUpperCase()=== answers[1]){
  three.innerHTML = "Great workout! You can shower there."
} else {
  three.innerHTML = "Traffic is horrible those days";
  }
}

question1();
question2();
question3();
