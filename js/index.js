// Game Settings and global variables

var level = 0;
var buttonColors = ["blue", "red", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var sequenceInAction = false;
var audioArrayTriggered = false;

// Sounds

// Ryu Sounds

var ryuSounds = "./sounds/ryu/";

var ryuKick1 = new Audio(ryuSounds + "ryu-kick.1.mp3");
var ryuKick2 = new Audio(ryuSounds + "ryu-kick.2.mp3");
var ryuKicks = [ryuKick1, ryuKick2];

var ryuPunch1 = new Audio(ryuSounds + "ryu-punch.1.mp3");
var ryuPunch2 = new Audio(ryuSounds + "ryu-punch.2.mp3");
var ryuPunches = [ryuPunch1, ryuPunch2];

var ryuTaunt1 = new Audio(ryuSounds + "ryu-lets.do.it.mp3");
var ryuTaunt2 = new Audio(ryuSounds + "ryu-lets.go.mp3");
var ryuTaunts = [ryuTaunt1, ryuTaunt2];

var ryuLoseAudio = new Audio(ryuSounds + "ryu-lose.mp3");
var ryuWinAudio = new Audio(ryuSounds + "ryu-wins.mp3");
var ryuPainAudio = new Audio(ryuSounds + "ryu-pain.1.mp3");

// Zangief Sounds

var zangSounds = "./sounds/zangief/";

var zangReady = new Audio(zangSounds + "zangief-ready.mp3");
var zangLaughAudio = new Audio(zangSounds + "zangief-laugh.mp3");
var zangPunchAudio = new Audio(zangSounds + "zangief-attack.1.mp3");
var zangPainAudio = new Audio(zangSounds + "zangief-pain.mp3");
var zangLoseAudio = new Audio(zangSounds + "zangief-lose.mp3");
var zangWinAudio = new Audio(zangSounds + "zangief-win.mp3");

// Generic Impact/Punch Noise

var punchSound = new Audio("./sounds/punch-sound.mp3");

// Button and Gameboard Sounds

var loseSound = new Audio("./sounds/button-wrong.mp3");
var blueSound = new Audio("./sounds/button-blue.mp3");
var redSound = new Audio("./sounds/button-red.mp3");
var greenSound = new Audio("./sounds/button-green.mp3");
var yellowSound = new Audio("./sounds/button-yellow.mp3");

// Audio Array

var audioArray = [
  ryuKick1,
  ryuKick2,
  ryuPunch1,
  ryuPunch2,
  ryuTaunt1,
  ryuTaunt2,
  ryuLoseAudio,
  ryuWinAudio,
  ryuPainAudio,
  zangReady,
  zangLaughAudio,
  zangPunchAudio,
  zangPainAudio,
  zangLoseAudio,
  zangWinAudio,
  punchSound,
  loseSound,
  blueSound,
  redSound,
  greenSound,
  yellowSound,
];

// Animations

// Ryu Animations

var ryuAnim = "./images/ryu/";

var ryuIdle = [
  {
    src: ryuAnim + "ryu-idle.gif",
    timeout: 0,
    flip: false,
  },
];

var ryuWin = [
  {
    src: ryuAnim + "ryu-win.gif",
    timeout: 0,
    flip: false,
  },
];

var ryuPain = [
  {
    src: ryuAnim + "ryu-pain.1.gif",
    timeout: 400,
    flip: false,
  },
];

var ryuHKick = [
  {
    src: ryuAnim + "ryu-kick-high.1.gif",
    timeout: 900,
    flip: false,
  },
];

var ryuLKick = [
  {
    src: ryuAnim + "ryu-kick-low.1.gif",
    timeout: 420,
    flip: false,
  },
  {
    src: ryuAnim + "ryu-kick-low.2.gif",
    timeout: 420,
    flip: false,
  },
  {
    src: ryuAnim + "ryu-kick-low.3.gif",
    timeout: 700,
    flip: false,
  },
];

var ryuHPunch = [
  {
    src: ryuAnim + "ryu-punch-high.1.gif",
    timeout: 780,
    flip: false,
  },
  {
    src: ryuAnim + "ryu-punch-high.2.gif",
    timeout: 360,
    flip: false,
  },
];

var ryuLPunch = [
  {
    src: ryuAnim + "ryu-punch-low.1.gif",
    timeout: 160,
    flip: false,
  },
  {
    src: ryuAnim + "ryu-punch-low.2.gif",
    timeout: 1050,
    flip: false,
  },
  {
    src: ryuAnim + "ryu-punch-low.3.gif",
    timeout: 840,
    flip: false,
  },
];

var ryuLose = [
  {
    src: ryuAnim + "ryu-lose.1.gif",
    timeout: 1500,
    flip: false,
  },
  {
    src: ryuAnim + "ryu-lose.2.gif",
    timeout: 1620,
    flip: false,
  },
];

// Zangief Animations

var zangAnim = "./images/zangief/";

var zangIdle = [
  {
    src: zangAnim + "zangief.idle.gif",
    timeout: 0,
    flip: true,
  },
];

var zangLose = [
  {
    src: zangAnim + "zangief.lose.gif",
    timeout: 0,
    flip: true,
  },
];

var zangWin = [
  {
    src: zangAnim + "zangief.celebrate.gif",
    timeout: 0,
    flip: true,
  },
];

var zangPain = [
  {
    src: zangAnim + "zangief-hit.gif",
    timeout: 600,
    flip: true,
  },
];

var zangAttack = [
  {
    src: zangAnim + "zangief.attack.1.gif",
    timeout: 300,
    flip: false,
  },
  {
    src: zangAnim + "zangief.attack.2.gif",
    timeout: 400,
    flip: false,
  },
  {
    src: zangAnim + "zangief.attack.3.gif",
    timeout: 450,
    flip: false,
  },
  {
    src: zangAnim + "zangief.attack.4.gif",
    timeout: 450,
    flip: false,
  },
  {
    src: zangAnim + "zangief.attack.5.gif",
    timeout: 650,
    flip: false,
  },
  {
    src: zangAnim + "zangief.attack.6.gif",
    timeout: 800,
    flip: false,
  },
];

// Arena Backgrounds

var bgSRC = "./images/backgrounds/";

var backgrounds = [
  {
    src: bgSRC + "background-1.png",
  },
  {
    src: bgSRC + "background-2.png",
  },
  {
    src: bgSRC + "background-3.png",
  },
  {
    src: bgSRC + "background-4.png",
  },
  {
    src: bgSRC + "background-5.png",
  },
];

// Fighter Animation Controls

function animation(character, type) {
  let animSpecs = [];
  let animVar = "";
  if (character === "ryu") {
    switch (type) {
      case "highKick":
        animVar = Math.floor(Math.random() * ryuHKick.length);
        animSpecs = [
          ryuHKick[animVar].src,
          ryuHKick[animVar].timeout,
          ryuHKick[animVar].flip,
        ];
        break;
      case "lowKick":
        animVar = Math.floor(Math.random() * ryuLKick.length);
        animSpecs = [
          ryuLKick[animVar].src,
          ryuLKick[animVar].timeout,
          ryuLKick[animVar].flip,
        ];
        if (animVar > 0) {
          animSpecs.push("decreaseSize");
        }
        break;
      case "highPunch":
        animVar = Math.floor(Math.random() * ryuHPunch.length);
        animSpecs = [
          ryuHPunch[animVar].src,
          ryuHPunch[animVar].timeout,
          ryuHPunch[animVar].flip,
        ];
        animSpecs.push("increaseDistance");
        break;
      case "lowPunch":
        animVar = Math.floor(Math.random() * ryuLPunch.length);
        animSpecs = [
          ryuLPunch[animVar].src,
          ryuLPunch[animVar].timeout,
          ryuLPunch[animVar].flip,
        ];
        break;
      case "idle":
        animVar = Math.floor(Math.random() * ryuIdle.length);
        animSpecs = [
          ryuIdle[animVar].src,
          ryuIdle[animVar].timeout,
          ryuIdle[animVar].flip,
        ];
        break;
      case "lose":
        animVar = Math.floor(Math.random() * ryuLose.length);
        animSpecs = [
          ryuLose[animVar].src,
          ryuLose[animVar].timeout,
          ryuLose[animVar].fip,
        ];
        break;
      case "win":
        animVar = Math.floor(Math.random() * ryuWin.length);
        animSpecs = [
          ryuWin[animVar].src,
          ryuWin[animVar].timeout,
          ryuWin[animVar].fip,
        ];
        break;
      default:
        console.log("Type is " + type);
        break;
    }
  } else if (character === "zangief") {
    switch (type) {
      case "pain":
        animVar = Math.floor(Math.random() * zangPain.length);
        animSpecs = [
          zangPain[animVar].src,
          zangPain[animVar].timeout,
          zangPain[animVar].flip,
        ];
        break;
      case "idle":
        animVar = Math.floor(Math.random() * zangIdle.length);
        animSpecs = [
          zangIdle[animVar].src,
          zangIdle[animVar].timeout,
          zangIdle[animVar].flip,
        ];
        break;
      case "win":
        animVar = Math.floor(Math.random() * zangWin.length);
        animSpecs = [
          zangWin[animVar].src,
          zangWin[animVar].timeout,
          zangWin[animVar].flip,
        ];
        break;
      case "lose":
        animVar = Math.floor(Math.random() * zangLose.length);
        animSpecs = [
          zangLose[animVar].src,
          zangWin[animVar].timeout,
          zangWin[animVar].flip,
        ];
        break;
      case "attack":
        animVar = Math.floor(Math.random() * zangAttack.length);
        animSpecs = [
          zangAttack[animVar].src,
          zangAttack[animVar].timeout,
          zangAttack[animVar].flip,
        ];
        break;
      default:
        console.log("Zangief is character and type is " + type);
        break;
    }
  } else {
    console.log("Character is" + character);
  }
  return animSpecs;
}

// System Functions

function setArenaBackground() {
  let aBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)].src;
  $(".arena").css("background-image", "url(" + aBackground + ")");
}

function triggerAudioArray() {
  for (i = 0; i < audioArray.length; i++) {
    audioArray[i].play();
    audioArray[i].pause();
    audioArray[i].currentTime = 0;
  }
  audioArray = null;
  audioArrayTriggered = true;
}

function playSound(sound) {
  switch (sound) {
    case "lose":
      loseSound.play();
      break;
    case "ready":
      zangReady.play();
      break;
    case "zangPunch":
      zangPunchAudio.play();
      break;
    case "impact":
      punchSound.play();
      break;
    case "zangPain":
      zangPainAudio.play();
      break;
    case "blue":
      blueSound.cloneNode().play();
      break;
    case "red":
      redSound.cloneNode().play();
      break;
    case "green":
      greenSound.cloneNode().play();
      break;
    case "yellow":
      yellowSound.cloneNode().play();
      break;
    case "zangLaugh":
      zangLaughAudio.play();
      break;
    case "zangLose":
      zangLoseAudio.play();
      break;
    case "zangWin":
      zangWinAudio.play();
      break;
    case "ryuPunch":
      ryuPunches[Math.floor(Math.random() * ryuPunches.length)].play();
      break;
    case "ryuKick":
      ryuKicks[Math.floor(Math.random() * ryuKicks.length)].play();
      break;
    case "ryuWins":
      ryuWinAudio.play();
      break;
    case "ryuTaunt":
      ryuTaunts[Math.floor(Math.random() * ryuTaunts.length)].play();
      break;
    case "ryuPain":
      ryuPainAudio.play();
      break;
     case "ryuLose":
      ryuLoseAudio.play();
      break;
    default:
      console.log("Sound not found: " + sound);
      break;
  }
}

// Game Functions

function sequenceOrder(num) {
  level++;
  let randomNumber = Math.floor(Math.random() * num);
  gamePattern.push(buttonColors[randomNumber]);
  updateBanners("next");
  return gamePattern;
}

function resetCharacters() {
  $("#ryu-character").attr("src", animation("ryu", "idle")[0]);
  $("#zangief-character")
    .attr("src", animation("zangief", "idle")[0])
    .addClass("arena-flip");
}

function updateBanners(action) {
  switch (action) {
    case "next":
      $("h1").text("Round " + level);
      $("#start").text("Reset");
      break;
    case "reset":
      $("h1").text("Ready?");
      $("#start").text("Go!");
      break;

    default:
      break;
  }
}

function checkAnswer(button) {
  userClickedPattern.push(button.attr("id"));
  let clickValue = userClickedPattern.length - 1;
  if (userClickedPattern[clickValue] === gamePattern[clickValue]) {
    return true;
  } else {
    return false;
  }
}

function youWin() {
  $("h1").text("You win!");
  userClickedPattern = [];
  setTimeout(() => {
    playSound("ryuWins");
    zangiefLoseAnimation(2000);
  }, 1000);

  setTimeout(() => {
    beginAttack();
  }, 4000);
}

function youLose() {
  $("h1").text("You lose!");
  playSound("lose");
  playSound("zangWin");
  $("body").toggleClass("lose");
  $("h1").toggleClass("banner-lose");
  ryuLoseAnimation(4000);
  // zangiefLaugh(0);
  setTimeout(() => {
    $("body").toggleClass("lose");
    $("h1").toggleClass("banner-lose");
    clearSlate();
  }, 4000);
}

// Ryu Functions

// Ryu Attacks

function performAttackAnimation(attackType) {
  sequenceInAction = true;
  console.log("Sequence in action, line 552");
  let attackValues = "";
  let zangiefTakesDamage = animation("zangief", "pain");
  switch (attackType) {
    case "blue":
      attackValues = animation("ryu", "highKick");
      break;
    case "red":
      attackValues = animation("ryu", "highPunch");
      break;
    case "green":
      attackValues = animation("ryu", "lowKick");
      break;
    case "yellow":
      attackValues = animation("ryu", "lowPunch");
      break;
    default:
      console.log("Attack type was " + attackType);
      break;
  }

  $("#ryu-fighter").attr("src", attackValues[0]);
  playSound("ryuPunch");

  setTimeout(() => {
    $("#zangief-fighter").attr("src", zangiefTakesDamage[0]);
    playSound("impact");
  }, attackValues[1] / 2);

  setTimeout(() => {
    $("#ryu-fighter").attr("src", animation("ryu", "idle")[0]);
  }, attackValues[1]);

  setTimeout(() => {
    $("#zangief-fighter").attr("src", animation("zangief", "idle")[0]);
    sequenceInAction = false;
    console.log("Sequence ended, line 588");
  }, attackValues[1] / 2 + zangiefTakesDamage[1]);
}

// Zengif Functions

function punch() {
  playSound("zangPunch");
  setTimeout(() => {
    playSound("impact");
  }, 100);
}

// Determines the timeout per Zengief's turn based on GIF animation time
// function determineTO(attackNum) {
//   let time = "";
//   switch (attackNum) {
//     case 1:
//       time = 300;
//       break;
//     case 2:
//       time = 400;
//       break;
//     case 3:
//       time = 450;
//       break;
//     case 4:
//       time = 450;
//       break;
//     case 5:
//       time = 650;
//       break;
//     case 6:
//       time = 800;
//       break;
//     default:
//       time = 500;
//       break;
//   }
//   return time;
// }

function zangiefLoseAnimation(timeout) {
  // disable user actions

  sequenceInAction = true;
  console.log("Sequence in action, line 633");
  $(".start-button").prop("disabled", true);

  // Show Zangief and Ryu End Stance

  $("#zangief-fighter").attr("src", animation("zangief", "lose")[0]);
  $("#ryu-fighter").attr("src", animation("ryu", "win")[0]);

  // Play Zangief Lose Sound

  playSound("zangLose");
  setTimeout(() => {
    playSound("ryuTaunt");
  }, timeout / 2);

  // Return to Idle Animation and restore user functions

  setTimeout(() => {
    $("#zangief-fighter").attr("src", animation("zangief", "idle")[0]);
    $("#ryu-fighter").attr("src", animation("ryu", "idle")[0]);
    sequenceInAction = false;
    console.log("Sequence ended, line 655");
    $(".start-button").prop("disabled", false);
  }, timeout);
}

function ryuLoseAnimation(timeout) {
  // disable user actions

  sequenceInAction = true;
  console.log("Sequence in action, line 662");
  
  $(".start-button").prop("disabled", true);

  // Show Zangief and Ryu End Stance

  let zangiefAttackAnimation = animation("zangief", "attack");
  let ryuLoseAnimation = animation("ryu", "lose");
  $("#zangief-fighter").attr("src", zangiefAttackAnimation[0]);
    if (!zangiefAttackAnimation[2]) {
    $("#zangief-fighter").toggleClass("arena-flip");
    console.log("Flip toggle is set to " + zangiefAttackAnimation[2]);
    } else {
      console.log("Didn't flip. Toggle is " + zangiefAttackAnimation[2]);
    }
  playSound("zangPunch");

  setTimeout(() => {
    $("#ryu-fighter").attr("src", ryuLoseAnimation[0]);
    playSound("impact");
    playSound("ryuLose");
  }, zangiefAttackAnimation[1] / 2);

  setTimeout(() => {
    $("#zangief-fighter").attr("src", animation("zangief", "win")[0]);
    playSound("zangLaugh");
  }, zangiefAttackAnimation[1]);

  // Play Zangief Lose Sound

  // Return to Idle Animation and restore user functions

  setTimeout(() => {
    if (!zangiefAttackAnimation[2]) {
      $("#zangief-fighter").toggleClass("arena-flip");
      console.log("Flip toggle is set to " + zangiefAttackAnimation[2]);
      } else {
        console.log("Didn't flip. Toggle is " + zangiefAttackAnimation[2]);
      }
    $("#zangief-fighter").attr("src", animation("zangief", "idle")[0]);
    $("#ryu-fighter").attr("src", animation("ryu", "idle")[0]);
    sequenceInAction = false;
    console.log("Sequence ended, line 706");
    $(".start-button").prop("disabled", false);
  }, timeout);
}

// function zangiefLaugh(timeout) {
//   sequenceInAction = true;
//   $(".start-button").prop("disabled", true);

//   setTimeout(() => {
//     $(".game-container > img")
//       .attr("src", animation("zangief", "win")[0])
//       .toggleClass("invisible");
//     playSound("zangLaugh");
//   }, timeout);

//   setTimeout(() => {
//     $(".game-container > img").attr("src", "").toggleClass("invisible");
//     sequenceInAction = false;
//     $(".start-button").prop("disabled", false);
//   }, timeout + 3000);
// }

function attack(box) {
  let firstTimeOut = 0;
  let secondTimeOut = 0;
  let gapTime = 500;
  sequenceInAction = true;
  console.log("Sequence in action, line 731");
  $(".start-button").prop("disabled", true);
  $("#zangief-fighter").fadeToggle();

  for (i = 0; i < box.length; i++) {
    let boxID = "#" + box[i];
    let colorID = box[i];
    let attackDetails = animation("zangief", "attack");
    let attackImage = attackDetails[0];
    secondTimeOut = attackDetails[1] + firstTimeOut;

    if (i > 0) {
      firstTimeOut = firstTimeOut + gapTime;
      secondTimeOut = secondTimeOut + gapTime;
    }

    // Zangief becomes visible and attacks

    setTimeout(() => {
      $(boxID + " img").attr("src", attackImage);
      $(boxID + " img").toggleClass("invisible");
      punch();
    }, firstTimeOut);

    // Button reacts to attack

    setTimeout(() => {
      $(boxID)
        .toggleClass("button-up")
        .toggleClass("light-up-" + colorID)
        .toggleClass("shake");
      playSound(colorID);
    }, firstTimeOut + 200);

    // Zangief disappears and buttons return to normal

    setTimeout(() => {
      $(boxID + " img").attr("src", "");
      $(boxID + " img").toggleClass("invisible");
      $(boxID)
        .toggleClass("button-up")
        .toggleClass("light-up-" + colorID)
        .toggleClass("shake");
    }, secondTimeOut);

    firstTimeOut = secondTimeOut;
  }

  // Zangief laugh reaction queued for end of every 5th sequence
  // Buttons are enabled/disabled during sequences

  // Disabled zangiefLaugh

  // if (level % 5 === 0) {
  //   zangiefLaugh(firstTimeOut + gapTime);
  // } else {
  setTimeout(() => {
    sequenceInAction = false;
    console.log("Sequence ended, line 792");
    $(".start-button").prop("disabled", false);
    $("#zangief-fighter").fadeToggle();
  }, firstTimeOut + gapTime);
  // }
}

// Disabled determineOrder to replace with random attack images

// function determineOrder(numOfAttacks, num) {
//   const order = [];
//   for (i = 0; i < numOfAttacks; i++) {
//     order.push(Math.floor(Math.random() * num + 1));
//   }
//   return order;
// }

// Button Functions

function buttonPress(button) {
  let btnClass = "";
  let lightUp = false;
  // sequenceInAction = true;
  // console.log("Sequence in action, line 810");
  if (button.attr("id") === "start") {
    btnClass = "start-button-down";
    lightUp = false;
  } else {
    lightUp = true;
  }
  $(button).toggleClass(btnClass);
  if (lightUp) {
    $(button).toggleClass("light-up-" + button.attr("id"));
  }
  setTimeout(() => {
    $(button).toggleClass(btnClass);
    // sequenceInAction = false;
    // console.log("Sequence ended, line 829");
    if (lightUp) {
      $(button).toggleClass("light-up-" + button.attr("id"));
    }
  }, 200);
}

// Button and Zangief Functions

function beginAttack() {
  let boxOrder = sequenceOrder(4);
  // Changing attack function to remove attackOrder
  // let attackOrder = determineOrder(level, 6);
  // attack(boxOrder, attackOrder);
  attack(boxOrder);
}

// Start Over

function clearSlate() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  updateBanners("reset");
  resetCharacters();
}

// Global Actions

// Enable click listener on GO! button if no sequence in action

$(".start-button").click(function () {
  if (!audioArrayTriggered) {
    triggerAudioArray();
  }
  if (!sequenceInAction) {
    buttonPress($(this));
    if (level === 0) {
      zangReady.play();
      setTimeout(() => {
        beginAttack();
      }, 1000);
    } else {
      clearSlate();
    }
  }
});

// Enable click listener on Simon Says buttons if no sequence in action

$(".button-box").click(function () {
  if (!sequenceInAction && level > 0) {
    buttonPress($(this));
    playSound($(this).attr("id"));
    if (checkAnswer($(this))) {
      performAttackAnimation($(this).attr("id"));
      if (userClickedPattern.length === gamePattern.length) {
        youWin();
      }
    } else {
      youLose();
    }
  }
});

setArenaBackground();
