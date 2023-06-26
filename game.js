// constants
const buttonColors = ["red","blue","green","yellow"];
const rand = nextSequence();
const randomChosenColors = buttonColors[rand];
const gamepattern = [];

gamepattern.push(randomChosenColors);

const chosenButton = document.getElementById(randomChosenColors);
flashButton(chosenButton);










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
