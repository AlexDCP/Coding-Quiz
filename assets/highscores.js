let name = prompt("Please enter your name", "Your name here");

localStorage.setItem('name', name);

document.getElementById('name').innerHTML = localStorage.getItem('name');

document.getElementById('score').innerHTML = localStorage.getItem('highscore');