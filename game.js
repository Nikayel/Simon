// constants
const buttonColors = ["red","blue","green","yellow"];
var gamepattern = [];
var userClickedPattern = [];
let started = false;
var level = 0;


// var chosenButton = document.getElementById(randomChosenColors);
// flashButton(chosenButton);

//EventListener:
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button){
    button.addEventListener("click",function(event){
        var userChosenColor = event.target.id;
        userClickedPattern.push(userChosenColor);
        animatePress(userChosenColor);
        checkAnswere(userClickedPattern.length -1);

    });
});

document.addEventListener("keypress",function(event){
    if(!started){
        document.getElementById("level-title").textContent = "level "+level;
        nextSequence();
        started = true;
    }
});







//functions:
// Use this function to generate a random number and use that random number to choose the random button
function nextSequence(){
    userClickedPattern = [];
    level++;
    document.getElementById("level-title").textContent = "level "+level;

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColors = buttonColors[randomNumber];
    animatePress(randomChosenColors);
    gamepattern.push(randomChosenColors);


}
//Function to make the random chosen color animate(flash):

function flashButton(button){
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },300);
}
//function to animate the button that is clicked by the user:
function animatePress(currentColor){
    const button = document.querySelector(`.${currentColor}`);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
}

function checkAnswere(currentLevel){
  if(userClickedPattern[currentLevel] === gamepattern[currentLevel]){
    console.log("sucess");
    if(userClickedPattern.length === gamepattern.length){
        setTimeout(function(){
            nextSequence();
        },1000)
    }
  }else{
    document.querySelector("body").classList.add("game-over");
    setTimeout(function(){
        document.querySelector("body").classList.remove("game-over");

    },220);
    document.getElementById("level-title").textContent = "Game over! Your score was: "+level;
    gameReset();

  }
}
//new function to start over the game after game resets:
function gameReset(){
    level = 0;
    gamepattern = [];
    started = false;
}