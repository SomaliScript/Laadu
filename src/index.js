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
