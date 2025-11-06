/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// event-challenge reference*
// Current score
/** s
 */
let flyPopulation = {
    x: 10,
    y: 20,
    size: 12,
    text: "Fly's population:",
    fill:"#a1e1faff",
}
let flyScore = {
    number: 0,
    x: 100,
    y: 20,
    size: 15,
    fill: "#ffffff0c",
}
let fairyScore = {
    number: 0,
    x: 300,
    y: 265,
    size: 20,
    fill: "#ffffff0c",

}
let game = false;

// Is the game over? 
let gameOver = false;

//make the sounds undefined
const mlem = {
    soundEffect: undefined,
}
const owow = {
    soundEffect: undefined,
}
const heyListen = {
    soundEffect: undefined,
}
const music = {
    soundEffect: undefined,
}

//Title screen, is a fairy like in zelda
let fairyScreen = {
    body: {
        x: 320,
        y: 240,
        size: 280,
        fill: "#f096d9ff",

    },
    
    light: {
        x: 320,
        y: 240,
        size: 320,
        fill: "#ffdcef80",

    },
    wings: {
        fill: "#daffd3ff",
        stoke: "#ffdcef80",
        weight: 20,
        bigL: {
            x: 170,
            y: 120,
            width: 220,
            height: 90,
        },
        bigR: {
            x: 428,
            y: 335,
            width: 220,
            height: 90,
        },
        smallL: {
            x: 120,
            y: 370,
            width: 120,
            height: 50,
        },
        smallR: {
            x: 507,
            y: 260,
            width: 130,
            height: 50,

        },
    },
    text: {
        x: 215,
        y: 240,
        fill: "#000000ff",
        title: {
            x: 60,
            y: 65,
            size: 70,
            str: "Save the pond, Frog",
            fill: "#5f9715ff",
        },
        strs: {
            hey: " Hey! Listen! ",
            instruction1: "\n   Invasive toxic \n flies are invading \n    the pond ! ...",
            instruction2: "       Eat flies to save \n    the pond from pollution. \n\n    But don't forget about \n    your health, flies are \n     killing you slowly...",
            instruction3: "\n  Eat fairies to gain health.\n\n     But doing so pollutes \n       the pond slowly.",
            size: 40,
            x: 200,
            y: 180,
            delay: 5000,

        },
        delay: 2000,

    }
}
//Game over screen
let gameOverScreen = {
    body: {
        x: 320,
        y: 240,
        size: 280,
        fill: "#000000ff",

    },
    //light "emenating" from the body
    light: {
        x: 320,
        y: 240,
        size: 320,
        fill: "#00000080",

    },
    wings: {
        fill: "#ffffffff",
        stoke: "#ffdcdc80",
        weight: 20,
        bigL: {
            x: 170,
            y: 120,
            width: 220,
            height: 90,
        },
        bigR: {
            x: 428,
            y: 335,
            width: 220,
            height: 90,
        },
        smallL: {
            x: 120,
            y: 370,
            width: 120,
            height: 50,
        },
        smallR: {
            x: 507,
            y: 260,
            width: 130,
            height: 50,

        },
    },
    text: {
        x: 220,
        y: 240,
        fill: "#ff7979ff",
        title: {
            x: 190,
            y: 60,
            size: 60,
            str: "Game Over",
            fill: "#000000ff",
        },
        title2: {
            str: "You couldn't save the pond \n\n\n\n          Death:",
            size: 25,
            x: 190,
            y: 78,
        },
        flyeaten: {
            str: " Flies: \n Fairies: \n Frog: 1",
            size: 20,
            x: 220,
            y: 240,
        }

    }
}
//Start button
const button = {
    fill: "#ffffffe5",
    line: "#ffffff3a",
    x: 320,
    y: -200,
    w: 115,
    h: 80,
    outline: 10,
    //tr: 10,
    fills: {
        unpressed: "#ffffff",
        pressed: "#dd878eff"

    },
    text: {

        str: "start",
        fill: "#000000",
        x: 275,
        y: -100,
        size: 48,

    },
    delay: 10000,
}
//Button to be able to eat on mobile 
const buttonSlurp = {
    fill: "#ffffff98",
    line: "#ffffff3a",
    x: 50,
    y: 430,
    w: 60,
    h: 40,
    outline: 10,
    //tr: 10,
    fills: {
        unpressed: "#ffffff",
        pressed: "#dd878eff"

    },
    text: {

        str: "eat",
        fill: "#5f9715ff",
        x: 36,
        y: 435,
        size: 20,

    },
}
//ad a sound for when the frog eats the fly/fairy
let fontFancy;
let fontNormal;
function preload() {
    //Fonts
    fontFancy = loadFont("assets/fonts/Jacquard12-Regular.otf");
    fontNormal = loadFont("assets/fonts/VT323-Regular.otf");
    //Sound Effects
    mlem.soundEffect = loadSound("assets/sounds/Yoshi mlem.wav");
    owow.soundEffect = loadSound("assets/sounds/Yoshi Owowow.mp3");
    heyListen.soundEffect = loadSound("assets/sounds/Navi _Hey listen_.mp3");
    //Music
    music.soundEffect = loadSound("assets/sounds/touch the sky.mp3");
}
//pollution bar
let pollutionBar = {
    stroke: "#00961902",

    fills: {
        empty: "#00961902",
        full: "#00961902",
        text: "#00961902"
    },
    x: 250,
    y: 10,
    h: 8,
    w: 40,
    ww: 150,
    text: "Pollution:",

}
//health bar
let healthBar = {
    stroke: "#000000",

    fills: {
        empty: "#00961902",
        full: "#5f9715ff",
    },

    y: 472,
    h: 5,
    w: 100,
    ww: 100,

}
// Our frog
let frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 440,
        size: 40,
    },
    fingers: {
        y: 435,
        h: 4,
        w: 7,
    },
    legs: {
        y: 450,
        h: 20,
        w: 25,
    },
    toes: {
        y: 461,
        h: 8,
        w: 4,
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 430,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },
    face: {

        y: 414,
        h: 40,
        w: 46,
        tl: 10,
    },
    eyes: {
        y: 415,
        text: "x       x ",
        fills: {
            dead: "#ffffff02",
            iris: "#000000ff",
        },
        l: {
            size: 15,
        },
        r: {
            size: 15,
        },
        irisL: {
            size: 6,
        },
        irisR: {
            size: 6,
        },

    },


};

let water = {
    fill: "rgb(82, 135, 233)",
    x: 0,
    y: 460,
    h: 40,
    w: 640,
    lily: {
        fill: "#99db89ff",
        stroke: "#64a778ff",
        y: 460,
        h: 10,
        w: 100,
    }
}

// Our fly
// Has a position, size, and speed of horizontal movement

const fly = {
    x: 0,
    y: 200, // Will be random
    size: 8,
    speed: 5,
    //?it's somehow not working?  speed: 50,
    buzziness: {
        body: 4,
        wing: 2,
    },
    fill: "#000000ff",
    line: "#00000080",
    weight: 4,
    wing1: {
        fill: "#ffffffe7",
        line: "#ffdcef80",
        weight: 2,
        x: -5,
        y: 200,
        size: 5,
    },
    wing2: {
        x: -5,
        y: 200,
        size: 5,
    },

};
//fairy 
const fairy = {
    x: 0,
    y: 200,
    size: 10,
    speed: 8,
    delay: 5000,

    buzziness: {
        body: 4,
        wing: 2,
    },
    fill: "#f096d9ff",
    line: "#ffdcef80",
    wing1: {
        fill: "#aaf39cff",
        line: "#ffdcef80",
        x: -5,
        y: 200,
        size: 5,
    },
    wing2: {
        x: -5,
        y: 200,
        size: 5,
    },

}

//add two circle shaking as wings 

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);
    angleMode(DEGREES);
    setTimeout(changeSpeech, fairyScreen.text.delay);
    setTimeout(changeSpeech2, fairyScreen.text.strs.delay);
    setTimeout(changeSpeech3, fairyScreen.text.strs.delay + 6000);
    setTimeout(startButtonApparition, button.delay + 5000);
    // Give the fly its first random position
    resetFly();
    resetFairy();
    sound();
    
    //
}

function draw() {

    background("#a1e1faff");
    fairyTitleScreen();
    buttonStart();
    startGame();
    drawFly();
    drawFairy();
    moveFly();
    moveFairy();
    moveFrog();
    moveTongue();
    drawPond();
    buttonEat();
    drawFrog();
    frog.tongue.y = constrain(frog.tongue.y, 0, 430),
        drawHeatlhBar();
    healthBar.w = constrain(healthBar.w, 0, 100),
        drawPollutionBar();
    pollutionBar.w = constrain(pollutionBar.w, 0, 150),
        noHealth();
    yesPollution();
    checkTongueFlyOverlap();
    checkTongueFairyOverlap();
    checkTongueButtonOverlap();
    

    // Only increase the score if the game is not over
    // scoreTotal();
    displayGameover();
    displayScore();
    //deadSound();
    
}
//Hey, Listen Sound at the beggining 
function sound(){
    heyListen.soundEffect.play();
    userStartAudio();
    
}

    
//titlescreen
function fairyTitleScreen() {
    //fairy light
    push();
    noStroke();
    fill(fairyScreen.light.fill);
    ellipse(fairyScreen.light.x, fairyScreen.light.y, fairyScreen.light.size);
    pop();
    //wings 
    //big-left
    push();
    stroke(fairyScreen.wings.stoke);
    strokeWeight(fairyScreen.wings.weight);
    rotate(20);
    fill(fairyScreen.wings.fill);
    ellipse(fairyScreen.wings.bigL.x, fairyScreen.wings.bigL.y, fairyScreen.wings.bigL.width, fairyScreen.wings.bigL.height);
    pop();
    //small-Left
    push();
    stroke(fairyScreen.wings.stoke);
    strokeWeight(fairyScreen.wings.weight);
    rotate(-10);
    fill(fairyScreen.wings.fill);
    ellipse(fairyScreen.wings.smallL.x, fairyScreen.wings.smallL.y, fairyScreen.wings.smallL.width, fairyScreen.wings.smallL.height);
    pop();
    //big-right
    push();
    stroke(fairyScreen.wings.stoke);
    strokeWeight(fairyScreen.wings.weight);
    rotate(-20);
    fill(fairyScreen.wings.fill);
    ellipse(fairyScreen.wings.bigR.x, fairyScreen.wings.bigR.y, fairyScreen.wings.bigR.width, fairyScreen.wings.bigR.height);
    pop();
    //small-right
    push();
    stroke(fairyScreen.wings.stoke);
    strokeWeight(fairyScreen.wings.weight);
    rotate(10);
    fill(fairyScreen.wings.fill);
    ellipse(fairyScreen.wings.smallR.x, fairyScreen.wings.smallR.y, fairyScreen.wings.smallR.width, fairyScreen.wings.smallR.height);
    pop();

    //fairy body
    push();
    noStroke();
    fill(fairyScreen.body.fill);
    ellipse(fairyScreen.body.x, fairyScreen.body.y, fairyScreen.body.size);
    pop();
    //Instruction text
    push();
    noStroke();
    fill(fairyScreen.text.fill);
    textFont(fontNormal);
    textSize(fairyScreen.text.strs.size);
    text(fairyScreen.text.strs.hey, fairyScreen.text.x, fairyScreen.text.y);
    pop();
    //Title
    push();
    noStroke();
    fill(fairyScreen.text.title.fill);
    textSize(fairyScreen.text.title.size);
    textFont(fontFancy);
    text(fairyScreen.text.title.str, fairyScreen.text.title.x, fairyScreen.text.title.y);
    pop();

}

function changeSpeech() {
    fairyScreen.text.strs.hey = fairyScreen.text.strs.instruction1;
    fairyScreen.text.strs.size = 30;
    fairyScreen.text.x = fairyScreen.text.strs.x;
    fairyScreen.text.y = fairyScreen.text.strs.y;
}

function changeSpeech2() {
    if (fairyScreen.text.strs.hey = fairyScreen.text.strs.instruction1) {
        fairyScreen.text.strs.hey = fairyScreen.text.strs.instruction2;
        fairyScreen.text.strs.size = 20;
    }
}
function changeSpeech3() {
    if (fairyScreen.text.strs.hey = fairyScreen.text.strs.instruction2) {
        fairyScreen.text.strs.hey = fairyScreen.text.strs.instruction3;
    }
}

function startButtonApparition() {
    button.y = 110;
    button.text.y = 120;
}
/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed; //the speed
    fly.x += random(-fly.buzziness.body, fly.buzziness.body);
    fly.y += random(-fly.buzziness.body, fly.buzziness.body);
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
        pollutionBar.w += 20;
    }
    //relate the fly to its wings
    fly.wing1.x = fly.x - 2;
    fly.wing1.y = fly.y - 5;
    fly.wing2.x = fly.x - 5;
    fly.wing2.y = fly.y - 5;
    //give the wings even more buzzing 
    fly.wing1.x += random(-fly.buzziness.wing, fly.buzziness.wing);
    fly.wing1.y += random(-fly.buzziness.wing, fly.buzziness.wing);
    fly.wing2.x += random(-fly.buzziness.wing, fly.buzziness.wing);
    fly.wing2.y += random(-fly.buzziness.wing, fly.buzziness.wing);
}
function moveFairy() {
    // Move the fly
    fairy.x += fairy.speed; //the speed
    fairy.x += random(-fairy.buzziness.body, fairy.buzziness.body);
    fairy.y += random(-fairy.buzziness.body, fairy.buzziness.body);
    // Handle the fly going off the canvas
    if (fairy.x > width) {
        resetFairy();
    }
    //relate the fly to its wings
    fairy.wing1.x = fairy.x - 2;
    fairy.wing1.y = fairy.y - 5;
    fairy.wing2.x = fairy.x - 5;
    fairy.wing2.y = fairy.y - 5;
    //give the wings even more buzzing 
    fairy.wing1.x += random(-fairy.buzziness.wing, fairy.buzziness.wing);
    fairy.wing1.y += random(-fairy.buzziness.wing, fairy.buzziness.wing);
    fairy.wing2.x += random(-fairy.buzziness.wing, fairy.buzziness.wing);
    fairy.wing2.y += random(-fairy.buzziness.wing, fairy.buzziness.wing);
}

/**function MoveWings(){
    //make the wings shake and follow the fly position
    position([fly.x], [fly.y])

}
*/
/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    stroke(fly.line);
    strokeWeight(fly.weight);
    fill(fly.fill);
    ellipse(fly.x, fly.y, fly.size);
    pop();
    //wings of the fly attributes
    push();
    noStroke(fly.wing1.line);
    fill(fly.wing1.fill);
    ellipse(fly.wing1.x, fly.wing1.y, fly.wing1.size);
    pop();
    push();
    stroke(fly.wing1.line);
    strokeWeight(fly.wing1.weight);
    fill(fly.wing1.fill);
    ellipse(fly.wing2.x, fly.wing2.y, fly.wing2.size);
    pop();

}
function drawFairy() {
    push();
    stroke(fairy.line);
    strokeWeight(fly.weight);
    fill(fairy.fill);
    ellipse(fairy.x, fairy.y, fairy.size);
    pop();
    //wings of the fly attributes
    push();
    noStroke(fairy.wing1.line);
    fill(fairy.wing1.fill);
    ellipse(fairy.wing1.x, fairy.wing1.y, fairy.wing1.size);
    pop();
    push();
    stroke(fairy.wing1.line);
    strokeWeight(fairy.wing1.weight);
    fill(fairy.wing1.fill);
    ellipse(fairy.wing2.x, fairy.wing2.y, fairy.wing2.size);
    pop();

}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(30, 380);

}
function resetFairy() {
    fairy.x = -2000;
    fairy.y = random(30, 380);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;

        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= 430) {
            frog.tongue.state = "idle";
        }
    }
}
//Adding a control ! adding a button for phones -jump
function buttonEat(){
    push();
    strokeWeight(buttonSlurp.outline);
    stroke(buttonSlurp.line);
    fill(buttonSlurp.fill);
    ellipse(buttonSlurp.x, buttonSlurp.y, buttonSlurp.w, buttonSlurp.h)
    
    pop();
    //text
    push();
    noStroke();
    textSize(buttonSlurp.text.size);
    fill(buttonSlurp.text.fill);
    textFont(fontFancy);
    text(buttonSlurp.text.str, buttonSlurp.text.x, buttonSlurp.text.y)
    pop();
}
        
   


//pollution bar
function drawPollutionBar() {
    //empty box
    push();
    stroke(pollutionBar.stroke);
    fill(pollutionBar.fills.empty);
    rect(pollutionBar.x, pollutionBar.y, pollutionBar.ww, pollutionBar.h,);
    pop();
    //pollution text & elements
    push();
    noStroke();
    fill(pollutionBar.fills.text);
    textFont(fontNormal);
    textSize(12)
    text(pollutionBar.text, pollutionBar.x - 52, pollutionBar.y + 8,);
    pop();
    push();
    noStroke();
    fill(pollutionBar.fills.full);
    rect(pollutionBar.x, pollutionBar.y, pollutionBar.w, pollutionBar.h,);
    pop();
}
//Health bar
function drawHeatlhBar() {
    //empty box
    push();
    stroke(healthBar.stroke);
    fill(healthBar.fills.empty);
    rect(frog.body.x - 50, healthBar.y, healthBar.ww, healthBar.h,);
    pop();
    //health
    push();
    noStroke();
    fill(healthBar.fills.full);
    rect(frog.body.x - 50, healthBar.y, healthBar.w, healthBar.h,);
    pop();
}
/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the frog
    //eyes
    //eyelids
    push();
    fill("#5f9715ff");
    noStroke();
    ellipse(frog.body.x - 20, frog.eyes.y, frog.eyes.l.size + 3);
    ellipse(frog.body.x + 20, frog.eyes.y, frog.eyes.r.size + 3);
    pop();
    //white eye
    push();
    fill("#ffffffff");
    noStroke();
    ellipse(frog.body.x - 20, frog.eyes.y, frog.eyes.l.size);
    ellipse(frog.body.x + 20, frog.eyes.y, frog.eyes.r.size);
    pop();
    //iris
    push();
    fill(frog.eyes.fills.iris);
    noStroke();
    //left
    ellipse(frog.body.x - 20, frog.eyes.y - 2, frog.eyes.irisL.size + 1);
    ellipse(frog.body.x - 23, frog.eyes.y - 3, frog.eyes.irisL.size);
    ellipse(frog.body.x - 17, frog.eyes.y - 3, frog.eyes.irisL.size);
    //right
    ellipse(frog.body.x + 20, frog.eyes.y - 2, frog.eyes.irisR.size + 1);
    ellipse(frog.body.x + 23, frog.eyes.y - 3, frog.eyes.irisR.size);
    ellipse(frog.body.x + 17, frog.eyes.y - 3, frog.eyes.irisR.size);
    pop();
    //iris when dead
    push();
    fill(frog.eyes.fills.dead);
    textSize(16);
    text(frog.eyes.text, frog.body.x - 24, frog.eyes.y + 2)
    pop();
    //legs
    push();
    fill("#5f9715ff");
    noStroke();
    ellipse(frog.body.x - 25, frog.legs.y, frog.legs.w, frog.legs.h)
    ellipse(frog.body.x + 25, frog.legs.y, frog.legs.w, frog.legs.h)
    pop();
    //toes
    push();
    fill("#5f9715ff");
    noStroke();
    //left
    ellipse(frog.body.x - 20, frog.toes.y - 1, frog.toes.w, frog.toes.h)
    ellipse(frog.body.x - 25, frog.toes.y, frog.toes.w, frog.toes.h)
    ellipse(frog.body.x - 30, frog.toes.y, frog.toes.w, frog.toes.h)
    //right
    ellipse(frog.body.x + 20, frog.toes.y - 1, frog.toes.w, frog.toes.h)
    ellipse(frog.body.x + 25, frog.toes.y, frog.toes.w, frog.toes.h)
    ellipse(frog.body.x + 30, frog.toes.y, frog.toes.w, frog.toes.h)
    pop();
    //face 
    push();
    fill("#5f9715ff");
    noStroke();
    rect(frog.body.x - 23, frog.face.y, frog.face.w, frog.face.h, frog.face.tl);
    pop();
    //tongue
    // Draw the tongue tip

    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);

    pop();
    //mouth
    push();
    fill("#cef081ff");
    noStroke();
    rect(frog.body.x - 20, frog.face.y + 3, frog.face.w - 6, frog.face.h, frog.face.tl);
    pop();
    //body
    //belly
    push();
    fill("#cef081ff");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
    //fingers
    push();
    fill("#5f9715ff");
    noStroke();
    //left
    ellipse(frog.body.x - 19, frog.fingers.y, frog.fingers.w, frog.fingers.h)
    ellipse(frog.body.x - 18, frog.fingers.y + 5, frog.fingers.w, frog.fingers.h)
    ellipse(frog.body.x - 19, frog.fingers.y + 10, frog.fingers.w, frog.fingers.h)
    //right
    ellipse(frog.body.x + 19, frog.fingers.y, frog.fingers.w, frog.fingers.h)
    ellipse(frog.body.x + 19, frog.fingers.y + 10, frog.fingers.w, frog.fingers.h)
    ellipse(frog.body.x + 18, frog.fingers.y + 5, frog.fingers.w, frog.fingers.h)
    pop();

}
function drawPond() {
    //add water (pond)
    push();
    noStroke();
    fill(water.fill);
    rect(water.x, water.y, water.w, water.h,);
    pop();
    //add waterlily
    push();
    stroke(water.lily.stroke);
    fill(water.lily.fill);
    ellipse(frog.body.x, water.lily.y, water.lily.w + 15, water.lily.h + 10);
    pop();
    //making the water and waterlily change color due to pollution
    if (pollutionBar.w <= 70) {
        water.fill = "rgb(82, 135, 233)";
        water.lily.fill = "#99db89ff";
        water.lily.stroke = "#64a778ff";
    }
    /* water purple 
    if (pollutionBar.w >= 70) {
        water.fill = "rgba(72, 82, 170, 1)";
        water.lily.fill = "#a0db89ff";
        water.lily.stroke = "#63925dff";
    }
    if (pollutionBar.w >= 115) {
        water.fill = "rgba(75, 62, 124, 1)";
        water.lily.fill = "#c9db89ff";
        water.lily.stroke = "#709458ff";
    }
    if (pollutionBar.w >= 150) {
        water.fill = "rgba(35, 22, 41, 1)"
        water.lily.fill = "#dbc589ff";
        water.lily.stroke = "#726a3bff";
    }
}*/ // water green !
    if (pollutionBar.w >= 70) {
        water.fill = "rgba(54, 196, 130, 1)";
        water.lily.fill = "#a0db89ff";
        water.lily.stroke = "#63925dff";
    }
    if (pollutionBar.w >= 110) {
        water.fill = "rgba(35, 160, 58, 1)";
        water.lily.fill = "#c9db89ff";
        water.lily.stroke = "#709458ff";
    }
    if (pollutionBar.w >= 130) {
        water.fill = "rgba(48, 107, 32, 1)";
        water.lily.fill = "#dbc589ff";
        water.lily.stroke = "#726a3bff";
    }
    if (pollutionBar.w >= 140) {
        water.fill = "rgba(50, 62, 29, 1)";
        water.lily.fill = "#dbc589ff";
        water.lily.stroke = "#726a3bff";
    }
    if (pollutionBar.w >= 150) {
        water.fill = "rgba(27, 27, 19, 1)"
        water.lily.fill = "#a69770ff";
        water.lily.stroke = "#4d421fff";
    }
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);

    if (eaten) {
        //make a mlem sound 
        mlem.soundEffect.play();
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        flyScore.number += 1;
        healthBar.w -= 10;
        pollutionBar.w -= 10;
    }

}

function checkTongueFairyOverlap() {
    // Get distance from tongue to fly
    const di = dist(frog.tongue.x, frog.tongue.y, fairy.x, fairy.y);
    // Check if it's an overlap
    const eatenFairy = (di < frog.tongue.size / 2 + fairy.size / 2);

    if (eatenFairy) {
        //make a mlem sound 
        mlem.soundEffect.play();
        // Reset the fly
        resetFairy();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        fairyScore.number += 1;
        healthBar.w += 25;
        pollutionBar.w += 5;
    }
}

function checkTongueButtonOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, button.x, button.y);
    // Check if it's an overlap
    const started = (d < frog.tongue.size / 2 + button.w / 2);

    if (started) {
        //make a mlem sound 
        mlem.soundEffect.play();
        music.soundEffect.play();
        music.soundEffect.loop();
        music.soundEffect.setVolume(0.4);
        game = true;
        // Bring back the tongue
        frog.tongue.state = "inbound";
        //Start the game

    }

}


function buttonStart() {
    push();
    strokeWeight(button.outline);
    stroke(button.line);
    fill(button.fill);
    ellipse(button.x, button.y, button.w, button.h)
    //rect(button.x, button.y, button.w, button.h, button.tr)
    pop();
    //text
    push();
    noStroke();
    textSize(button.text.size);
    fill(button.text.fill);
    textFont(fontFancy);
    text(button.text.str, button.text.x, button.text.y)
    pop();
}
/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    const dd = dist(mouseX, mouseY, buttonSlurp.x, buttonSlurp.y);
  const overlapped = (dd < buttonSlurp.size/2);
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    } else if (overlapped && frog.tongue.state === "idle") {
    
        frog.tongue.state = "outbound";
  }
}


function startGame() {
    //stops flies from flying before the start button is pressed
    if (game === false) {
        fly.speed = 0;
        fly.y = -10;
        fairy.speed = 0;
        fairy.y = -10;
        //owow.soundEffect.play();
    }
    //If start button is pressed, the game starts and the title + Instruction disappears
    else if (game === true) {
        // gives time between start and first fly   
        fly.speed = 4;
        fairy.speed = 6;
        // make the instruction screen disappear
        button.y = -1000;
        fairyScreen.light.fill = "#00000000";
        fairyScreen.wings.fill = "#00000000";
        fairyScreen.body.fill = "#00000000";
        fairyScreen.wings.stoke = "#00000000";
        fairyScreen.text.fill = "#00000000";
        button.text.fill = "#00000000";
        fairyScreen.text.title.fill = "#00000000";
        //make the score appear
  //    flyScore.fill = "#000000ff";
        flyPopulation.fill = "#000000ff";
        pollutionBar.stroke = "#000000ff";
        pollutionBar.fills.full = "#000000ff";
        pollutionBar.fills.text = "#000000ff";

    }

}
//event-challenge*
function lose() {
    gameOver = true
    game = false

}

//ways to lose
function noHealth() {
    if (healthBar.w >= 40) {
        healthBar.fills.full = "#5f9715ff";
    };
    if (healthBar.w <= 40) {
        healthBar.fills.full = "#f9ed4eff";
    };
    if (healthBar.w <= 15) {
        healthBar.fills.full = "#f94e4eff";
    };
    if (healthBar.w <= 0) {
        lose();
        frog.eyes.fills.iris = "#ffffffff";
        frog.eyes.fills.dead = "#000000";
        frog.tongue.y = 400;
        healthBar.fills.full = healthBar.fills.empty;
        //owow.soundEffect.play();
        //owow.soundEffect.setLoop(false);
        
        

    };
}
/* - really tried to make the owowow sound when dying :( It keeps looping ? 
function deathSound(){
    if (healthBar.w <= 0){
        owow.soundEffect.play();
        //userStartAudio();
    };
}

function deadSound(){
    const deathSound = (healthBar.w<=0);
    if (deathSound){
        owow.soundEffect.play();
        cycleSounds.setLoop(false);
    }
}*/
function yesPollution() {
    if (pollutionBar.w >= 150) {
        lose();
        healthBar.w -= 3;

    };
}

function displayGameover() {
    if (gameOver === true) {
        // owow.soundEffect.play(); I wanted to add sound when dying but it does it every second which is terrible, i need to do it only once.
        //gameover screen 
        //fairy light
        push();
        noStroke();
        fill(gameOverScreen.light.fill);
        ellipse(gameOverScreen.light.x, gameOverScreen.light.y, gameOverScreen.light.size);
        pop();
        //wings 
        //big-left
        push();
        stroke(gameOverScreen.wings.stoke);
        strokeWeight(gameOverScreen.wings.weight);
        rotate(20);
        fill(gameOverScreen.wings.fill);
        ellipse(gameOverScreen.wings.bigL.x, gameOverScreen.wings.bigL.y, gameOverScreen.wings.bigL.width, gameOverScreen.wings.bigL.height);
        pop();
        //small-Left
        push();
        stroke(gameOverScreen.wings.stoke);
        strokeWeight(gameOverScreen.wings.weight);
        rotate(-10);
        fill(gameOverScreen.wings.fill);
        ellipse(gameOverScreen.wings.smallL.x, gameOverScreen.wings.smallL.y, gameOverScreen.wings.smallL.width, gameOverScreen.wings.smallL.height);
        pop();
        //big-right
        push();
        stroke(gameOverScreen.wings.stoke);
        strokeWeight(gameOverScreen.wings.weight);
        rotate(-20);
        fill(gameOverScreen.wings.fill);
        ellipse(gameOverScreen.wings.bigR.x, gameOverScreen.wings.bigR.y, gameOverScreen.wings.bigR.width, gameOverScreen.wings.bigR.height);
        pop();
        //small-right
        push();
        stroke(gameOverScreen.wings.stoke);
        strokeWeight(gameOverScreen.wings.weight);
        rotate(10);
        fill(gameOverScreen.wings.fill);
        ellipse(gameOverScreen.wings.smallR.x, gameOverScreen.wings.smallR.y, gameOverScreen.wings.smallR.width, gameOverScreen.wings.smallR.height);
        pop();

        //fairy body
        push();
        noStroke();
        fill(gameOverScreen.body.fill);
        ellipse(gameOverScreen.body.x, gameOverScreen.body.y, gameOverScreen.body.size);
        pop();
        //title 2 and number of death text
        push();
        noStroke();
        textFont(fontNormal);
        fill(gameOverScreen.text.fill);
        textSize(gameOverScreen.text.title2.size);
        text(gameOverScreen.text.title2.str, gameOverScreen.text.title2.x, gameOverScreen.text.title2.y);
        pop();
        push();
        noStroke();
        textFont(fontNormal);
        fill(gameOverScreen.text.fill);
        textSize(gameOverScreen.text.flyeaten.size);
        text(gameOverScreen.text.flyeaten.str, gameOverScreen.text.flyeaten.x, gameOverScreen.text.flyeaten.y);
        pop();
        //Title
        push();
        noStroke();
        textFont(fontFancy);
        fill(gameOverScreen.text.title.fill);
        textSize(gameOverScreen.text.title.size);
        text(gameOverScreen.text.title.str, gameOverScreen.text.title.x, gameOverScreen.text.title.y);
        pop();

    }
}


/**
 * Display the score
 */
function displayScore() {
    //fly's population score
    const flyPopulationOutcome = (1000000 - flyScore.number);
    push();
    textSize(flyPopulation.size);
    textFont(fontNormal);
    textStyle(BOLD);
    fill(flyPopulation.fill);
    text(flyPopulation.text, flyPopulation.x, flyPopulation.y);
    pop();
    push();
    textSize(flyScore.size);
    textFont(fontNormal);
    textStyle(BOLD);
    fill(flyPopulation.fill);
    text(flyPopulationOutcome, flyScore.x, flyScore.y);
    pop();
    //fly score (end)
    push();
    textSize(flyScore.size);
    textFont(fontNormal);
    textStyle(BOLD);
    fill(flyScore.fill);
    text(flyScore.number, flyScore.x, flyScore.y);
    pop();
    //fairy score (end)
    push()
    textSize(fairyScore.size);
    textFont(fontNormal);
    textStyle(BOLD);
    fill(fairyScore.fill);
    text(fairyScore.number, fairyScore.x, fairyScore.y);
    pop();
    if (gameOver === true) {
        flyScore.size = 20;
        flyScore.x = 285;
        flyScore.y = 240;
        flyScore.fill = "#ffffffff";
        fairyScore.fill = "#ff7979ff";
        flyPopulation.fill = "rgba(0,0,0,0)";

    }
}
//Background Music !]
/*function backgroundMusic() {
    if (started){
        music.soundEffect.play();
    };

}*/