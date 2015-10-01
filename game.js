// Question1
function question1() {
var question1 = prompt('Is your favorite movie Pulp fiction?');
if (question1.toUpperCase() === 'YES'|| question1.toUpperCase() === 'Y') {
  one.innerHTML = "Great! You got great taste!";
} else {
  one.innerHTML = "I wish you would love it!";
  }
}

// Question 2
function question2() {
var question2 = prompt("Do you like Arcade fire?");
if(question2.toUpperCase() === 'YES'|| question2.toUpperCase()==='Y'){
  two.innerHTML = "we can be friends then!";
} else {
  two.innerHTML = "I would still be your friend.";
  }
}

// Question 3
function question3() {
var question3 = prompt("Do you want to ride bike to CF?")
if(question3.toUpperCase() === 'YES'|| question3.toUpperCase()==='Y'){
  three.innerHTML = "Great workout! You can shower there."
} else {
  three.innerHTML = "Traffic is horrible those days";
  }
}

question1();
question2();
question3();
