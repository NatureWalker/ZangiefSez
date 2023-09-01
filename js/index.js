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

$(".start-button").click(() => {

determineAttack()
});

function zangiefLaugh (timeout) {
    console.log(timeout);
    const laugh = new Audio("./sounds/zangief-laugh.mp3");
    setTimeout(() => {
        $(".game-container > img").attr("src","./images/zangief.celebrate.gif").toggleClass("invisible");
        laugh.play();
    }, timeout);

    setTimeout(() => {
        $(".game-container > img").attr("src","").toggleClass("invisible");
    }, timeout + 3000);
}

function attack (box,attack) {
    let firstTimeOut = 0;
    let secondTimeOut = 0;
    let gapTime = 500;

    for (i=0;i<box.length;i++) {
        let boxID = "#box-" + box[i];
        let attackImage = "./images/zangief.attack." + attack[i] + ".stop.gif";
        secondTimeOut = determineTO(attack[i]) + firstTimeOut;

        if (i > 0) {
            firstTimeOut = firstTimeOut + gapTime;
            secondTimeOut = secondTimeOut + gapTime;
        }

        setTimeout(() => {
            $(boxID + " img").attr("src", attackImage);
            $(boxID + " img").toggleClass("invisible");
            punch(); 
        }, firstTimeOut);

        setTimeout(() => {
            $(boxID).toggleClass("button-up");
            $(boxID).toggleClass("button-down"); 
        }, firstTimeOut + 200);

        setTimeout(() => {
            $(boxID + " img").attr("src", "");
            $(boxID + " img").toggleClass("invisible");
            $(boxID).toggleClass("button-up");
            $(boxID).toggleClass("button-down");
        }, secondTimeOut);

        // console.log("Attack #" + i + " in box " + boxID + " with " + attackImage + " intervals: " + firstTimeOut + " ending at " + secondTimeOut);

        firstTimeOut = secondTimeOut;

        
    }
    zangiefLaugh(firstTimeOut + gapTime);
}

function determineOrder(numOfAttacks,num) {
    const order = [];
    for (i=0;i<numOfAttacks;i++) {
        order.push(Math.floor((Math.random() * num) + 1));
    }
    return order;
}

function determineAttack() {
    let numberOfAttacks = Math.floor((Math.random() * 10) + 1);
    let boxOrder = determineOrder(numberOfAttacks,4);
    let attackOrder = determineOrder(numberOfAttacks,6);
    attack(boxOrder,attackOrder);
}