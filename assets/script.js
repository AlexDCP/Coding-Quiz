var introPage = document.querySelector("#intro");
var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#question");

startButton.addEventListener("click", function(){
    introPage.setAttribute('style', "display: none;")
    questionCard.setAttribute('style', 'display: flex;')
})

