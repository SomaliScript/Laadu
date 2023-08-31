/* Check Function 

function check52(id) {
    if (getNoFromValue(id) == 52) return true;
  
    return false;
  }
  
  function checkOutAreaEnd(id) {
    if (getNoFromValue(id) == getNoFromValue(players[playerName].endPoint)) {
      return true;
    }
    return false;
  }
  
  function checkprivateAreaEnd(id) {
    if (getNoFromValue(id) == 5) {
      return true;
    }
  
    return false;
  }
  
   Add and Remove funtion 
  
  function removeAllGlow(...area) {
    for (const areaValue of area) {
      for (const classValue of players[playerName][areaValue]) {
        $("." + classValue).removeClass("glow");
      }
    }
  }
  
  function removeAllEvent(...area) {
    for (const areaValue of area) {
      for (const classValue of players[playerName][areaValue]) {
        $("." + classValue).off();
      }
    }
  }
  
  function addToArea(addValue, pName, areaName) {
    players[pName][areaName].push(addValue);
  }
  
  function removeFromArea(removeValue, pName, areaName) {
    let newArr = [];
    for (const classValue of players[pName][areaName]) {
      if (classValue != removeValue) {
        newArr.push(classValue);
      }
    }
    players[pName][areaName] = newArr;
  }
  
  function removeFromPrivateAreaPos(posValue, classValue, pName) {
    let newPrivateAreaPosArr = [];
    for (const cValue of players[pName].privateAreaPos[posValue]) {
      if (cValue != classValue) {
        newPrivateAreaPosArr.push(cValue);
      }
    }
    players[pName].privateAreaPos[posValue] = newPrivateAreaPosArr;
  }
  
  function addToPrivateAreaPos(posValue, classValue, pName) {
    players[pName].privateAreaPos[posValue].push(classValue);
  }
  
  function addToOutAreaPos(posValue, classValue) {
    outAreaPos[posValue].push(classValue);
  }
  
  function removeFromOutAreaPos(posValue, classValue) {
    let newPosArr = [];
    for (const cValue of outAreaPos[posValue]) {
      if (cValue != classValue) {
        newPosArr.push(cValue);
      }
    }
    outAreaPos[posValue] = newPosArr;
  }
  
   Main Funtion 
  
  function nextPlayer() {
    if (winningOrder.length == noOfPlayer - 1) {
      setTimeout(function () {
        restartGame();
      }, 1000);
      return;
    }
    if (playerNo == 4) playerNo = 0;
    if ((rndmNo != 5 && cut != true && pass != true) || countSix == 3) {
      playerNo++;
      countSix = 0;
      preDiceBoxId = null;
    }
    if (cut == true || pass == true) {
      countSix = 0;
      preDiceBoxId = null;
      pass = false;
      cut = false;
    }
  
    if (diceBoxId != null) $(diceBoxId).removeClass("showDice");
    switchDiceBoxId();
    switchPlayerName();
    if (
      players[playerName].winArea.length == 4 ||
      (players[playerName].inArea.length == 0 &&
        players[playerName].outArea.length == 0 &&
        players[playerName].privateArea.length == 0)
    ) {
      if (rndmNo == 5) {
        rndmNo = null;
      }
      nextPlayer();
    } else if (
      players[playerName].inArea.length == 0 &&
      players[playerName].winArea.length == 0 &&
      players[playerName].outArea.length == 0 &&
      players[playerName].privateArea.length == 0
    ) {
      if (rndmNo == 5) {
        rndmNo = null;
      }
      nextPlayer();
    } else {
      $(diceBoxId).addClass("startDiceRoll");
      $(diceBoxId).one("click", function () {
        rollDice(diceBoxId);
      });
    }
  }
  /*   Open Pawn 

function openPawn() {
    let inAreaLength = players[playerName].inArea.length;
    let outAreaLength = players[playerName].outArea.length;
    if (inAreaLength == 0) {
      return;
    } else {
      if (outAreaLength == 0) {
        setTimeout(()=>autoOpen(inAreaLength),500);
        
      } else {
        manuallyOpen();
      }
    }
  }
  
  function manuallyOpen() {
    for (const classValue of players[playerName].inArea) {
      $("." + classValue).addClass("glow");
      $("." + classValue).one("click", function () {
        reUpdateOutAreaWH(...players[playerName].outArea);
        reUpdatePrivateAreaWH(...players[playerName].privateArea);
        open(classValue, 0);
      });
    }
  }
  
  function autoOpen(inAreaLength) {
    let openClassValue =
      players[playerName].inArea[Math.floor(Math.random() * inAreaLength)];
    open(openClassValue);
  }
  
  function open(openClassValue) {
    let startPoint = players[playerName].startPoint;
    let audioDuration = 500;
  
      removeAllGlow("inArea", "outArea");
      removeAllEvent("inArea", "outArea");
      removeFromArea(openClassValue, playerName, "inArea");
      addToArea(openClassValue, playerName, "outArea");
      addToOutAreaPos(getNoFromValue(startPoint), openClassValue);
      $("." + openClassValue).remove();
  
      let noInId = getNoFromValue(startPoint);
  
      let w = getUpdatedWHoutAreaPos(noInId)[0];
      let h = getUpdatedWHoutAreaPos(noInId)[1];
      if (sound == true) {
        audioDuration = openAudio.duration * 1000;
        openAudio.play();
      }
      $("#" + startPoint).append(
        `<div class="${openClassValue}" style="width:${w}%; height:${h}%;"></div>`
      );
    setTimeout(function () {
      nextPlayer();
    }, audioDuration);
  }
  
  /* move pawn  on out area
  
  function movePawnOnOutArea() {
    let outAreaLength = players[playerName].outArea.length;
    if (outAreaLength == 0) {
      return;
    } else {
      if (
        outAreaLength == 1 &&
        rndmNo != 5 &&
        players[playerName].privateArea.length == 0
      ) {
        autoMoveOnOutArea();
      } else {
        manuallyMoveOnOutArea();
      }
    }
  }
  
  function manuallyMoveOnOutArea() {
    let idArr = [];
    for (const classValue of players[playerName].outArea) {
      let idValue = $("." + classValue)
        .parent()
        .attr("id");
      if (idArr.includes(idValue)) {
        continue;
      } else {
        for (const cValue of outAreaPos[getNoFromValue(idValue)]) {
          if (cValue != classValue) {
            $("." + cValue).css("display", "none");
          }
        }
        $("." + classValue).css({
          width: 100 + "%",
          height: 100 + "%",
          display: "inline-block",
        });
        idArr.push(idValue);
        $("." + classValue).addClass("glow");
        $("." + classValue).one("click", function () {
          reUpdateOutAreaWH(...players[playerName].outArea);
          reUpdatePrivateAreaWH(...players[playerName].privateArea);
          moveOnOutArea(classValue);
        });
      }
    }
  }
  
  function autoMoveOnOutArea() {
    moveOnOutArea(players[playerName].outArea[0]);
  }
  
  function moveOnOutArea(cValue) {
    let count = -1;
    let idValue = $("." + cValue)
      .parent()
      .attr("id");
    let noInId = getNoFromValue(idValue);
    let newId = "out" + noInId;
    let oldId = newId;
    let wh = [];
    let moveingClassValue = cValue;
    let color = getColorFromValue(moveingClassValue);
    let winAudioPlay = false;
    let passAudioPlay = false;
  
    removeAllGlow("inArea", "outArea", "privateArea");
    removeAllEvent("inArea", "outArea", "privateArea");
  
    let timerId = setInterval(function () {
      if (checkOutAreaEnd(newId)) {
        count++;
        removeFromOutAreaPos(noInId, moveingClassValue);
        removeFromArea(moveingClassValue, playerName, "outArea");
        $("." + moveingClassValue).remove();
        wh = getUpdatedWHoutAreaPos(noInId);
        noInId = 1;
        newId = color + "-out-" + noInId;
        oldId = newId;
  
        addToArea(moveingClassValue, playerName, "privateArea");
        addToPrivateAreaPos(noInId, moveingClassValue, playerName);
  
        wh = getUpdatedWHprivateAreaPos(noInId);
        if (sound == true) {
          jumpAudio.play();
        }
        $("#" + newId).append(
          `<div class="${moveingClassValue}" style="width:${wh[0]}%; height:${wh[1]}%;"></div>`
        );
      } else if (players[playerName].privateArea.includes(moveingClassValue)) {
        count++;
        $("." + moveingClassValue).remove();
        removeFromPrivateAreaPos(noInId, moveingClassValue, playerName);
        wh = getUpdatedWHprivateAreaPos(noInId);
        if (checkprivateAreaEnd(oldId)) {
          pass = true;
          removeFromArea(moveingClassValue, playerName, "privateArea");
          addToArea(moveingClassValue, playerName, "winArea");
          sendToWinArea(moveingClassValue, playerName, color);
          if (players[playerName].winArea.length == 4) {
            if (sound == true) {
              winAudioPlay = true;
              winAudio.play();
            }
            updateWinningOrder(playerName);
            showWinningBadge();
          }
          if (sound == true && winAudioPlay == false) {
            passAudio.play();
            passAudioPlay = true;
          }
        } else {
          noInId++;
          newId = color + "-out-" + noInId;
          oldId = newId;
          addToPrivateAreaPos(noInId, moveingClassValue, playerName);
          wh = getUpdatedWHprivateAreaPos(noInId);
          if (sound == true) {
            jumpAudio.play();
          }
          $("#" + newId).append(
            `<div class="${moveingClassValue}" style="width:${wh[0]}%; height:${wh[1]}%;"></div>`
          );
        }
      } else {
        count++;
        $("." + moveingClassValue).remove();
        removeFromOutAreaPos(noInId, moveingClassValue);
        wh = getUpdatedWHoutAreaPos(noInId);
        if (check52(oldId)) {
          noInId = 1;
          newId = "out" + noInId;
          oldId = newId;
        } else {
          noInId++;
          newId = "out" + noInId;
          oldId = newId;
        }
  
        addToOutAreaPos(noInId, moveingClassValue);
        wh = getUpdatedWHoutAreaPos(noInId);
        if (sound == true) {
          jumpAudio.play();
        }
  
        $("#" + newId).append(
          `<div class="${moveingClassValue}" style="width:${wh[0]}%; height:${wh[1]}%;"></div>`
        );
      }
  
      if (count == rndmNo) {
        clearInterval(timerId);
        cutPawn(noInId, moveingClassValue);
        if (sound == true && winAudioPlay == true) {
          winAudio.onended = () => {
            nextPlayer();
          };
        } else if (sound == true && passAudioPlay == true) {
          passAudio.onended = () => {
            nextPlayer();
          };
        } else {
          setTimeout(() => nextPlayer(), 500);
        }
      }
    }, 500);
  }
  
  /*  Move on Private Area 
  
  function movePawnOnPrivateArea() {
    let privateAreaLength = players[playerName].privateArea.length;
    let outAreaLength = players[playerName].outArea.length;
    if (privateAreaLength == 0 || rndmNo == 5) {
      return;
    } else {
      let moveingClassArr = [];
      for (const cValue of players[playerName].privateArea) {
        let idValue = $("." + cValue)
          .parent()
          .attr("id");
        let noInId = getNoFromValue(idValue);
        if (rndmNo <= 5 - noInId) {
          moveingClassArr.push(cValue);
        }
      }
      if (moveingClassArr.length == 0) {
        flag = false;
        return;
      } else if (outAreaLength == 0 && moveingClassArr.length == 1) {
        flag = true;
        autoMoveOnPrivateArea(moveingClassArr);
      } else {
        flag = true;
        manuallyMoveOnPrivateArea(moveingClassArr);
      }
    }
  }
  
  function manuallyMoveOnPrivateArea(moveingClassArr) {
    let idArr = [];
    for (const classValue of moveingClassArr) {
      let idValue = $("." + classValue)
        .parent()
        .attr("id");
      if (idArr.includes(idValue)) {
        continue;
      } else {
        for (const cValue of players[playerName].privateAreaPos[
          getNoFromValue(idValue)
        ]) {
          if (cValue != classValue) {
            $("." + cValue).css("display", "none");
          }
        }
        $("." + classValue).css({
          width: 100 + "%",
          height: 100 + "%",
          display: "inline-block",
        });
        idArr.push(idValue);
        $("." + classValue).addClass("glow");
        $("." + classValue).one("click", function () {
          reUpdateOutAreaWH(...players[playerName].outArea);
          reUpdatePrivateAreaWH(...players[playerName].privateArea);
          moveOnPrivateArea(classValue);
        });
      }
    }
  }
  
  function autoMoveOnPrivateArea(moveingClassArr) {
    moveOnPrivateArea(moveingClassArr[0]);
  }
  
  function moveOnPrivateArea(cValue) {
    let idValue = $("." + cValue)
      .parent()
      .attr("id");
    let moveingClassValue = cValue;
    let noInId = getNoFromValue(idValue);
    let color = getColorFromValue(moveingClassValue);
    let count = -1;
    let newId = color + "-out-" + noInId;
    let oldId = newId;
    let wh = [];
    let winAudioPlay = false;
    let passAudioPlay = false;
  
    removeAllGlow("inArea", "outArea", "privateArea");
    removeAllEvent("inArea", "outArea", "privateArea");
  
    let timerId = setInterval(function () {
      count++;
      $("." + moveingClassValue).remove();
      removeFromPrivateAreaPos(noInId, moveingClassValue, playerName);
  
      wh = getUpdatedWHprivateAreaPos(noInId);
  
      if (checkprivateAreaEnd(oldId)) {
        pass = true;
        removeFromArea(moveingClassValue, playerName, "privateArea");
        addToArea(moveingClassValue, playerName, "winArea");
        sendToWinArea(moveingClassValue, playerName, color);
        if (players[playerName].winArea.length == 4) {
          if (sound == true) {
            winAudioPlay = true;
            winAudio.play();
          }
          updateWinningOrder(playerName);
          showWinningBadge();
        }
        if (sound == true && winAudioPlay == false) {
          passAudio.play();
          passAudioPlay = true;
        }
      } else {
        noInId++;
        newId = color + "-out-" + noInId;
        oldId = newId;
        addToPrivateAreaPos(noInId, moveingClassValue, playerName);
        wh = getUpdatedWHprivateAreaPos(noInId);
        if (sound == true) {
          jumpAudio.play();
        }
        $("#" + newId).append(
          `<div class="${moveingClassValue}" style="width:${wh[0]}%; height:${wh[1]}%;"></div>`
        );
      }
  
      if (count == rndmNo) {
        clearInterval(timerId);
        if (sound == true && winAudioPlay == true) {
          winAudio.onended = () => {
            nextPlayer();
          };
        } else if (sound == true && passAudioPlay == true) {
          passAudio.onended = () => {
            nextPlayer();
          };
        } else {
          setTimeout(() => nextPlayer(), 500);
        }
      }
    }, 500);
  }
  
  /* update player 
  function updatePlayer() {
    if (players[playerName].inArea.length == 4 && rndmNo < 5) {
      setTimeout(() => nextPlayer(), 500);
      return;
    }
    if (players[playerName].winArea.length < 4) {
      if (flag == true) {
        flag = false;
        return;
      } else if (
        rndmNo == 5 &&
        players[playerName].outArea.length == 0 &&
        players[playerName].inArea.length == 0
      ) {
        setTimeout(() => nextPlayer(), 500);
        return;
      } else if (players[playerName].outArea.length > 0) {
        return;
      } else if (
        players[playerName].inArea.length > 0 &&
        flag == false &&
        rndmNo < 5
      ) {
        setTimeout(() => nextPlayer(), 500);
        return;
      } else if (
        players[playerName].inArea.length > 0 &&
        flag == false &&
        rndmNo == 5
      ) {
        return;
      } else {
        setTimeout(() => nextPlayer(), 500);
        return;
      }
    } else {
      setTimeout(() => nextPlayer(), 500);
      return;
    }
  }
  /* cut the pawn 

function cutPawn(noInId, moveingClassValue) {
    if (players[playerName].outArea.includes(moveingClassValue)) {
      if ([1, 48, 9, 22, 35, 14, 27, 40].includes(noInId)) {
        return;
      } else {
        let colorInClass = getColorFromValue(moveingClassValue);
        let targetClass = null;
        for (const cValve of outAreaPos[noInId]) {
          if (colorInClass != getColorFromValue(cValve)) {
            targetClass = cValve;
          }
        }
        if (targetClass != null) {
          $("." + targetClass).remove();
          if (sound == true) {
            cutAudio.play();
          }
          colorInClass = getColorFromValue(targetClass);
          let pName = colorInClass + "Player";
          removeFromArea(targetClass, pName, "outArea");
          addToArea(targetClass, pName, "inArea");
          removeFromOutAreaPos(noInId, targetClass);
          let noInClass = getNoFromValue(targetClass);
          $(`#in-${colorInClass}-${noInClass}`).append(
            `<div class='${colorInClass}-pawn${noInClass}'></div>`
          );
          cut = true;
          getUpdatedWHoutAreaPos(noInId);
        }
      }
    } else {
      return;
    }
  }*/