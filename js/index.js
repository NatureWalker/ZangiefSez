// Game Settings

var level = 0;
var buttonColors = ["blue", "red", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var sequenceInAction = false;

// Sounds

var loseSound = new Audio("./sounds/button-wrong.mp3");
var readySound = new Audio("./sounds/zangief-ready.mp3");
var punchSound = new Audio("./sounds/punch-sound.mp3");
var gruntSound = new Audio("./sounds/zangief-grunt.mp3");
var painSound = new Audio("./sounds/zangief-pain.mp3");
var blueSound = new Audio("./sounds/button-blue.mp3");
var redSound = new Audio("./sounds/button-red.mp3");
var greenSound = new Audio("./sounds/button-green.mp3");
var yellowSound = new Audio("./sounds/button-yellow.mp3");
var laughSound = new Audio("./sounds/zangief-laugh.mp3");

function playSound(sound) {
  switch (sound) {
    case "lose":
      loseSound.play();
      break;
    case "ready":
      readySound.play();
      break;
    case "grunt":
      gruntSound.play();
      break;
    case "punch":
      punchSound.play();
      break;
    case "pain":
      painSound.play();
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
    case "laugh":
      laughSound.play();
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
    zangiefLose(2000);
  }, 1000);

  setTimeout(() => {
    beginAttack();
  }, 4000);
}

function youLose() {
  $("h1").text("You lose!");
  playSound("lose");
  $("body").toggleClass("lose");
  $("h1").toggleClass("banner-lose");
  zangiefLaugh(0);
  setTimeout(() => {
    $("body").toggleClass("lose");
    $("h1").toggleClass("banner-lose");
    clearSlate();
  }, 4000);
}

// Zengif Functions

function punch() {
  playSound("grunt");
  setTimeout(() => {
    playSound("punch");
  }, 100);
}

// Determines the timeout per Zengief's turn based on GIF animation time
function determineTO(attackNum) {
  let time = "";
  switch (attackNum) {
    case 1:
      time = 300;
      break;
    case 2:
      time = 400;
      break;
    case 3:
      time = 450;
      break;
    case 4:
      time = 450;
      break;
    case 5:
      time = 650;
      break;
    case 6:
      time = 800;
      break;
    default:
      time = 500;
      break;
  }
  return time;
}

function zangiefLose(timeout) {
  // disable user actions

  sequenceInAction = true;
  $(".start-button").prop("disabled", true);

  // Show Zangief

  $(".game-container > img").hide();
  $(".game-container > img")
    .attr("src", "./images/zangief.lose.gif")
    .toggleClass("invisible");
  $(".game-container > img").fadeIn();
  playSound("pain");

  setTimeout(() => {
    $(".game-container > img").attr("src", "").toggleClass("invisible");
    sequenceInAction = false;
    $(".start-button").prop("disabled", false);
  }, timeout);
}

function zangiefLaugh(timeout) {
  sequenceInAction = true;
  $(".start-button").prop("disabled", true);

  setTimeout(() => {
    $(".game-container > img")
      .attr("src", "./images/zangief.celebrate.gif")
      .toggleClass("invisible");
    playSound("laugh");
  }, timeout);

  setTimeout(() => {
    $(".game-container > img").attr("src", "").toggleClass("invisible");
    sequenceInAction = false;
    $(".start-button").prop("disabled", false);
  }, timeout + 3000);
}

function attack(box, attack) {
  let firstTimeOut = 0;
  let secondTimeOut = 0;
  let gapTime = 500;
  sequenceInAction = true;
  $(".start-button").prop("disabled", true);

  for (i = 0; i < box.length; i++) {
    let boxID = "#" + box[i];
    let colorID = box[i];
    let attackImage = "./images/zangief.attack." + attack[i] + ".stop.gif";
    secondTimeOut = determineTO(attack[i]) + firstTimeOut;

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

  if (level % 5 === 0) {
    zangiefLaugh(firstTimeOut + gapTime);
  } else {
    setTimeout(() => {
      sequenceInAction = false;
      $(".start-button").prop("disabled", false);
    }, firstTimeOut + gapTime);
  }
}

function determineOrder(numOfAttacks, num) {
  const order = [];
  for (i = 0; i < numOfAttacks; i++) {
    order.push(Math.floor(Math.random() * num + 1));
  }
  return order;
}

// Button Functions

function buttonPress(button) {
  let btnClass = "";
  let lightUp = false;
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
    if (lightUp) {
      $(button).toggleClass("light-up-" + button.attr("id"));
    }
  }, 200);
}

// Button and Zangief Functions

function beginAttack() {
  let boxOrder = sequenceOrder(4);
  let attackOrder = determineOrder(level, 6);
  attack(boxOrder, attackOrder);
}

// Start Over

function clearSlate() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  updateBanners("reset");
}

// Global Actions

// Enable click listener on GO! button if no sequence in action

$(".start-button").click(function () {
  if (!sequenceInAction) {
    buttonPress($(this));
    if (level === 0) {
      readySound.play();
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
      if (userClickedPattern.length === gamePattern.length) {
        youWin();
      }
    } else {
      youLose();
    }
  }
});
