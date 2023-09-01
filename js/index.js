// Game Settings

var level = 1;
var buttonColors = ["blue","red","green","yellow"];
var gamePattern = [];
var sequenceInAction = false;

// Game Functions

function sequenceOrder(num) {
  let randomNumber = Math.floor(Math.random() * num);
  gamePattern.push(buttonColors[randomNumber]);
  return gamePattern;
}

// Zengif Functions

function punch() {
  const punchSound = new Audio("./sounds/punch-sound.mp3");
  const gruntSound = new Audio("./sounds/zangief-grunt.mp3");

  gruntSound.play();
  setTimeout(() => {
    punchSound.play();
  }, 100);
}

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
            time = 450
          break;
        case 5:
            time = 650
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

function zangiefLaugh (timeout) {
    const laugh = new Audio("./sounds/zangief-laugh.mp3");
    setTimeout(() => {
        $(".game-container > img").attr("src","./images/zangief.celebrate.gif").toggleClass("invisible");
        laugh.play();
    }, timeout);

    setTimeout(() => {
        $(".game-container > img").attr("src","").toggleClass("invisible");
        sequenceInAction = false;
        $(".start-button").prop("disabled",false);
    }, timeout + 3000);
}

function attack (box,attack) {
    let firstTimeOut = 0;
    let secondTimeOut = 0;
    let gapTime = 500;
    sequenceInAction = true;
    $(".start-button").prop("disabled",true);

    for (i=0;i<box.length;i++) {
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
            $(boxID).toggleClass("button-up").toggleClass("light-up-" + colorID).toggleClass("shake");
            buttonSound(colorID);
        }, firstTimeOut + 200);

        // Zangief disappears and buttons return to normal

        setTimeout(() => {
            $(boxID + " img").attr("src", "");
            $(boxID + " img").toggleClass("invisible");
            $(boxID).toggleClass("button-up").toggleClass("light-up-" + colorID).toggleClass("shake");
        }, secondTimeOut);

        firstTimeOut = secondTimeOut;
        
    }

    // Zangief laugh reaction queued for end of sequence which enables buttons
    zangiefLaugh(firstTimeOut + gapTime);
}

function determineOrder(numOfAttacks,num) {
    const order = [];
    for (i=0;i<numOfAttacks;i++) {
        order.push(Math.floor((Math.random() * num) + 1));
    }
    return order;
}

// Button Functions

function buttonSound(ID) {
  let audioPath = "";
  switch (ID) {
    case "blue":
      audioPath = "./sounds/button-blue.mp3";
      break;
    case "red":
      audioPath = "./sounds/button-red.mp3";
      break;
    case "green":
      audioPath = "./sounds/button-green.mp3";
      break;
    case "yellow":
      audioPath = "./sounds/button-yellow.mp3"; 
      break;
    default:
      console.log(ID);
      break;
  }
  let buttonSound = new Audio(audioPath);
  buttonSound.cloneNode().play();
}

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
    let attackOrder = determineOrder(level,6);
    attack(boxOrder,attackOrder);
}

// Start Over

function clearSlate() {
  level = 1;
  gamePattern = [];
}

// Global Actions

  // Enable click listener on GO! button if no sequence in action

$(".start-button").click( function() {
 if (!sequenceInAction) {
    buttonPress($(this));
    beginAttack()
    // temporary
    clearSlate();
  }
});

  // Enable click listener on Simon Says buttons if no sequence in action

$(".button-box").click( function() {
  if (!sequenceInAction) {
    buttonPress($(this));
    buttonSound($(this).attr("id"));
  }
});