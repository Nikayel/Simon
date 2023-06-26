// constants
const buttonColors = ["red","blue","green","yellow"];
const rand = nextSequence();
const randomChosenColors = buttonColors[rand];
const gamepattern = [];
const userClickedPattern = [];
let started = false;
let level = 1;

gamepattern.push(randomChosenColors);

const chosenButton = document.getElementById(randomChosenColors);
flashButton(chosenButton);

//EventListener:
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button){
    button.addEventListener("click",function(event){
        const userChosenColor = event.target.id;
        userClickedPattern.push(userChosenColor);
        animatePress(userChosenColor);

    });
});

document.addEventListener("keypress",function(event){
    if(!started){
        nextSequence();
        started = true;
        document.getElementById("level-title").textContent = "level "+level;
        level++;
    }
});







//functions:
// Use this function to generate a random number and use that random number to choose the random button
function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
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
