//export from './Game/dir/board.js';
//import './syles.css';

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

function startGame() {
  document.getElementById("start-button").style.display = "none";

  const twoplayers = document.getElementById("two-player").style.display = "block";

  const thirdplayers = document.getElementById("three-player").style.display = "block";

  const fourplayers = document.getElementById("four-player").style.display = "block";

  twoplayers.addEventListener("click", start2);
  thirdplayers.addEventListener("click", start3);
  fourplayers.addEventListener("click", start4);

}
function start2() {
    document.getElementById("two-player").style.display = "none";
    document.getElementById("three-player").style.display = "none";
    document.getElementById("four-player").style.display = "none";
    console.log("two players funciton was called");
}
function start3(){
  document.getElementById("two-player").style.display = "none";
  document.getElementById("three-player").style.display = "none";
  document.getElementById("four-player").style.display = "none";
  console.log("three players funciton was called");
}

function start4(){
  document.getElementById("two-player").style.display = "none";
  document.getElementById("three-player").style.display = "none";
  document.getElementById("four-player").style.display = "none";
  console.log("four players funciton was called");
}
function hide() {
  var div = document.getElementyById('whatYouWantToHide');
  div.style.display = 'none';
}

/* start game 
function startGame() {
    if (noOfPlayer == 2) {
      setPawn("r", "y");
    } else if (noOfPlayer == 3) {
      setPawn("r", "g", "y");
    } else {
      setPawn("r", "g", "y", "b");
    }
    $("main").css("display", "block");
    nextPlayer();
  }
  function setPawn(...color) {
    for (const colorName of color) {
      players[colorName + "Player"].inArea = [
        colorName + "-pawn1",
        colorName + "-pawn2",
        colorName + "-pawn3",
        colorName + "-pawn4",
      ];
      for (i = 1; i <= 4; i++)
        $(`#in-${colorName}-${i}`).append(
          `<div class='${colorName}-pawn${i}'></div>`
        );
    }
  }
  $("#twoPlayer").click(function () {
    $(".selected").removeClass("selected");
    $("#twoPlayer").addClass("selected");
    noOfPlayer = 2;
  });
  $("#threePlayer").click(function () {
    $(".selected").removeClass("selected");
    $("#threePlayer").addClass("selected");
    noOfPlayer = 3;
  });
  $("#fourPlayer").click(function () {
    $(".selected").removeClass("selected");
    $("#fourPlayer").addClass("selected");
    noOfPlayer = 4;
  });
  
  $("#startGame").click(function () {
    $("#home-container").css("display", "none");
    startGame();
  });

  */