/*Generates a random number for dicing.
export default class Dice {
    constructor(n = 6) {
      this.n = n;
    }
    roll() {
      return Math.floor(Math.random() * this.n + 1)
    }
  }


function rollDice(idValue) {
    let pX = 0;
    let pY = 0;
  
    $(idValue).removeClass("startDiceRoll").addClass("rollDice");
    if (sound == true) {
      rollAudio.play();
      rollAudio.playbackRate = 3.2;
    }
  
    let timerId = setInterval(() => {
      (pX == 100 && ((pX = 0), (pY = pY + 25))) || (pX = pX + 20);
      $(idValue).css({
        "background-position-x": pX + "%",
        "background-position-y": pY + "%",
      });
  
      if (pY == 100 && pX == 100) {
        clearInterval(timerId);
        showDice(idValue);
        if (rndmNo == 5 && countSix != 3) {
          if (players[playerName].outArea.length == 0 && players[playerName].inArea.length > 0) {
            openPawn();  // autoOpen
          }else{
            openPawn(); // manuallyOpen
            movePawnOnOutArea();
            updatePlayer();
          }
          
        } else if (rndmNo < 5) {
          movePawnOnOutArea();
          movePawnOnPrivateArea();
          updatePlayer();
        } else {
          setTimeout(function () {
            nextPlayer();
          }, 500);
        }
      }
    }, 20);
}
  
function showDice(idValue) {
    let pX = null;
    let pY = null;
    const pXpYarr = [
      [0, 0],
      [100, 0],
      [0, 50],
      [100, 50],
      [0, 100],
      [100, 100],
    ];
    rndmNo = Math.floor(Math.random() * 6);
  
    if ((preDiceBoxId == null || preDiceBoxId == idValue) && rndmNo == 5) {
      countSix++;
    }
  
    pX = pXpYarr[rndmNo][0];
    pY = pXpYarr[rndmNo][1];
    $(idValue).removeClass("rollDice");
    $(idValue).addClass("showDice");
    $(idValue).css({
      "background-position-x": pX + "%",
      "background-position-y": pY + "%",
    });
  
    preDiceBoxId = idValue;
}*/