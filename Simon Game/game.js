let buttonColours = ["green", "red", "yellow", "blue"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}
nextSequence();
