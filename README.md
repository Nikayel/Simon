Simon Game ( you have to get the right pattern given by the computer or you will lose)

- I have USED HTML CSS and Javascript to make this Game
- I did use online sources for some code to save time to on the CSS and HTML
  THe link to my Game is : https://nikayel.github.io/Simon/

My code features :
Constants and variables
buttonColors: An array that stores the colors of the buttons in the game.

gamepattern: An array to store the randomly generated pattern of button presses.

userClickedPattern: An array to store the pattern of button presses made by the user.

started: A boolean variable to keep track of whether the game has started or not.

level: A variable to keep track of the current level in the game.

gameOverSound: A variable that stores the reference to the audio element for the game over sound.

there is total of two event Listeners :
"click": -- The code attaches event listeners to each button with the class .btn. When a button is clicked, the associated function is executed.
"KeyPress" -- The code also listens for the keypress event. If the game has not started (started is false), the level title is updated, nextSequence() is called to generate the first random sequence, and started is set to true.

nextSequence()
This function is responsible for generating the next random sequence of button presses. It performs the following steps:
-- Resets the userClickedPattern array to an empty array.
-- Increments the level variable by 1.
-- Updates the level title displayed on the page.
-- Generates a random number between 0 and 3 using Math.random() and Math.floor().
-- Retrieves a random color from the buttonColors array based on the random number.
-- Calls the animatePress() function to animate the chosen color.
-- Adds the chosen color to the gamepattern array.

flashButton(button)
Add and removes a CSS class on the button that is randomly chosen

animatePress(currentColor)
Same thing as FlashButton but for the users clicked buttons

checkAnswere(currentLevel)
This checks if user should continue or game over by using IF else Statement

gameReset()
resets the game to its initial state, level to 0, empties the game Pattern and ...
