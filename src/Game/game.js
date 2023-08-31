


/*let playerNo = 0; // (red = 1, green = 2, yellow = 3, blue = 4)
let playerName = null; // store defult playerName
let diceBoxId = null; // store id value of dice box
let preDiceBoxId = null; // store id value of previou diceBoxId
let rndmNo = null; // generate rndmNo after dice is roll
let countSix = 0;
let cut = false;
let pass = false;
let flag = false;
let noOfPlayer = 4; // by default 4 player
let winningOrder = [];



function Position(length) {
  for (let i = 1; i <= length; i++) {
    this[i] = [];
  }
}

function Player(startPoint, endPoint) {
  this.inArea = [];
  this.outArea = [];
  this.privateArea = [];
  this.winArea = [];
  this.startPoint = startPoint;
  this.endPoint = endPoint;
  this.privateAreaPos = new Position(5);
}

let players = {
  rPlayer: new Player("out1", "out51"),
  gPlayer: new Player("out14", "out12"),
  yPlayer: new Player("out27", "out25"),
  bPlayer: new Player("out40", "out38"),
};


let outAreaPos = new Position(52); //Create Array for indiviual Posititon

/* ************      Fuction Diclartion Start *************** */

/* Switch Function 

function switchDiceBoxId() {
  // switch the value of diceBoxId variable
  (playerNo == 1 && (diceBoxId = "#redDice")) ||
    (playerNo == 2 && (diceBoxId = "#greenDice")) ||
    (playerNo == 3 && (diceBoxId = "#yellowDice")) ||
    (playerNo == 4 && (diceBoxId = "#blueDice"));
}

function switchPlayerName() {
  // switch the value of playerName variable
  (playerNo == 1 && (playerName = "rPlayer")) ||
    (playerNo == 2 && (playerName = "gPlayer")) ||
    (playerNo == 3 && (playerName = "yPlayer")) ||
    (playerNo == 4 && (playerName = "bPlayer"));
}

/* Get Function 

function getNoFromValue(value) {
  return +value.match(/\d+/);
}

function getColorFromValue(value) {
  return value.charAt(0);
}

function getRotateValue(color) {
  let rotate = null;
  (color == "g" && (rotate = "-45deg")) ||
    (color == "y" && (rotate = "-135deg")) ||
    (color == "b" && (rotate = "-225deg")) ||
    (color == "r" && (rotate = "-315deg"));

  return rotate;
}

function getUpdatedWHoutAreaPos(noInId) {
  let posLength = outAreaPos[noInId].length;
  let wh = [];
  if (posLength > 0) {
    wh[0] = 100 / posLength;
    wh[1] = 100 / posLength;
    for (const cValue of outAreaPos[noInId]) {
      $("." + cValue).css({
        width: wh[0] + "%",
        height: wh[1] + "%",
        display: "inline-block",
      });
    }
  }

  return wh;
}

function getUpdatedWHprivateAreaPos(noInId) {
  let wh = [];
  let privateAreaLength = players[playerName].privateAreaPos[noInId].length;

  if (privateAreaLength > 0) {
    wh[0] = 100 / players[playerName].privateAreaPos[noInId].length;
    wh[1] = 100 / players[playerName].privateAreaPos[noInId].length;
    for (const cValue of players[playerName].privateAreaPos[noInId]) {
      $("." + cValue).css({
        width: wh[0] + "%",
        height: wh[1] + "%",
        display: "inline-block",
      });
    }
  }
  return wh;
}

function reUpdateOutAreaWH(...classArr) {
  for (const classV of classArr) {
    let theId = $("." + classV)
      .parent()
      .attr("id");
    let noInId = getNoFromValue(theId);
    getUpdatedWHoutAreaPos(noInId);
  }
}
function reUpdatePrivateAreaWH(...classArr) {
  for (const classV of classArr) {
    let theId = $("." + classV)
      .parent()
      .attr("id");
    let noInId = getNoFromValue(theId);
    getUpdatedWHprivateAreaPos(noInId);
  }
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





/* restart Game 

function resetPawn(...color) {
  for (const colorName of color) {
    for (let i = 1; i <= 4; i++) {
      $(`.${colorName}-pawn${i}`).remove();
    }
  }
}

//restare
function restartGame() {
  $("#home-container").css("display", "block");
  $("main").css("display", "none");
  $("." + "badge-box").remove();
  if (noOfPlayer == 2) {
    resetPawn("r", "y");
  } else if (noOfPlayer == 3) {
    resetPawn("r", "g", "y");
  } else {
    resetPawn("r", "g", "y", "b");
  }
  $(diceBoxId).removeClass("startDiceRoll");
  $(diceBoxId).removeClass("showDice");
  $(diceBoxId).off();
  players = {
    rPlayer: new Player("out1", "out51"),
    gPlayer: new Player("out14", "out12"),
    yPlayer: new Player("out27", "out25"),
    bPlayer: new Player("out40", "out38"),
  };
  outAreaPos = new Position(52);
  playerNo = 0; // (red = 1, green = 2, yellow = 3, blue = 4)
  playerName = null; // store defult playerName
  diceBoxId = null; // store id value of dice box
  preDiceBoxId = null; // store id value of previou diceBoxId
  rndmNo = null; // generate rndmNo after dice is roll
  countSix = 0;
  cut = false;
  pass = false;
  flag = false;
  winningOrder = [];
}


/*game logic
import { Player} from  "./dir/board"
import { paths, homes, starts, stops } from "./path.js";
// Define global variables
*/
