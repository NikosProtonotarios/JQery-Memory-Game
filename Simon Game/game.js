$(document).ready(function () {
  let buttonColours = ["green", "red", "yellow", "blue"];
  let gamePattern = [];
  let userClickedPattern = [];

  function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour)
      .fadeOut(100)
      .fadeIn(100);
    playSound(randomChosenColour);
  }
  nextSequence();

  function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  $("div.btn").click(function () {
    let curentButton = $("div").fadeOut(100).fadeIn(100);
    console.log(curentButton);
  });
});
