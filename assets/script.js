var questions = document.getElementById("question");
var options = document.getElementById("choice");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

var timerEl = document.getElementById("countdown");
var timeLeft = 75;
var questionIndex = 0;

var quiz = [
    {
        question: "1. When referring to a function, scope is __?",
        choices: [
            "How far the function goes.",
            "Where the function is visible and accessible.",
            "How long the function is.",
            "The type of function it is (i.e. async...).",
        ],
        answer: "Where the function is visible and accessible.",
    },
    {
        question: "2. When using javascript, if/else is used in __?",
        choices: [
            "A function.",
            "A conditional statement.",
            "A variable.",
            "A loop.",
        ],
        answer: "A conditional statement.",
    },
    {
        question: "3. When writing a function, return is used for __?",
        choices: [
            "Create a new variable.",
            "To add a line break in the html.",
            "Starting the next part of the function.",
            "Closing out the function, and returning a value.",
        ],
        answer: "Closing out the function, and returning a value.",
    },
    {
        question: "4. Why would you write a variable outside of a function?",
        choices: [
            "So it can be easily seen.",
            "To keep your code clean.",
            "To be able to update it quickly.",
            "To allow all functions access to the variable, not just one.",
        ],
        answer: "To allow all functions access to the variable, not just one.",
    },
    {
        question: "5. When using javascript for is used in a __?",
        choices: ["Function.", "Variable.", "Loop.", "None of the above."],
        answer: "Function.",
    },
];

function displayQuestions() {
    questions.textContent = quiz[questionIndex].question;
    choice1.innerHTML = `
    <p>${quiz[questionIndex].choices[0]}</p>
    <input type="radio" name="radio" value="${quiz[questionIndex].choices[0]}" id="input1"/>
    <span class="checkmark"></span>
    `;
    choice2.innerHTML = `
    <p>${quiz[questionIndex].choices[1]}</p>
    <input type="radio" name="radio" id="input2"/>
    <span class="checkmark"></span>
    `;
    choice3.innerHTML = `
    <p>${quiz[questionIndex].choices[2]}</p>
    <input type="radio" name="radio" id="input3"/>
    <span class="checkmark"></span>
    `;
    choice4.innerHTML = `
    <p>${quiz[questionIndex].choices[3]}</p>
    <input type="radio" name="radio" id="input4"/>
    <span class="checkmark"></span>
    `;
}

function checkAnswer() {
    // checks to see if the input 1 is selected, and does so for each input below
    if (questionIndex < quiz.length -1) {
        if (document.getElementById("input1").checked) {
            // if the value is the correct answer, it updates the index point and cycles questions

            if (
                document.getElementById("choice1").querySelector('p').innerText === quiz[questionIndex].answer
            ) {
                questionIndex++;
                displayQuestions();
                // if the answer is wrong it will deduct time from the timer, and cycle questions along with adding an index point
            } else {
                timeLeft = timeLeft - 10;
                questionIndex++;
                displayQuestions();
            }
        } if (document.getElementById("input2").checked) {
            console.log(document.getElementById("choice2").querySelector('p').innerText);
            console.log(quiz[questionIndex].answer);
            if (
                document.getElementById("choice2").querySelector('p').innerText === quiz[questionIndex].answer
            ) {
                questionIndex++;
                displayQuestions();
            } else {
                timeLeft = timeLeft - 10;
                questionIndex++;
                displayQuestions();
            }
        } if (document.getElementById("input3").checked) {
            if (
                document.getElementById("choice3").querySelector('p').innerText === quiz[questionIndex].answer
            ) {
                questionIndex++;
                displayQuestions();
            } else {
                timeLeft = timeLeft - 10;
                questionIndex++;
                displayQuestions();
            }
        } if (document.getElementById("input4").checked) {
            if (
                document.getElementById("choice4").querySelector('p').innerText === quiz[questionIndex].answer
            ) {
                questionIndex++;
                displayQuestions();
            } else {
                timeLeft = timeLeft - 10;
                questionIndex++;
                displayQuestions();
            }
        }
    } else {
        localStorage.setItem('highscore', timeLeft);
        window.location.href = 'highscores.html'
    }
}



function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + " seconds remaining";
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = "";
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
        }
    }, 1000);
}

countdown();
displayQuestions();



document.getElementById("next").addEventListener("click", checkAnswer);
