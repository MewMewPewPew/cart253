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
let score = 0
let game = false;

// Is the game over? 
let gameOver = false;

//Title screen
let fairyScreen = {
     body:{
        x: 320,
        y: 240,
        size: 280,
        fill: "#f096d9ff",
        
    },
    //light "emenating" from the bodu
    light:{
        x: 320,
        y: 240,
        size: 320,
        fill: "#ffdcef80",
        
    },
    wings:{
        fill: "#aaf39cff",
        stoke: "#ffdcef80",
        weight: 20,
        bigL:{
            x: 170,
            y: 120,
            width: 220,
            height: 90,
        },
        bigR:{
            x: 428,
            y: 335,
            width: 220,
            height: 90,
        },
        smallL:{
            x: 120,
            y: 370,
            width: 120,
            height: 50,
        },
        smallR:{
            x: 507,
            y: 260,
            width: 130,
            height: 50,
            
        },
    },
   text:{
    x: 220,
    y: 240,
    fill:"#000000ff",
    title:{
        x: 30,
        y: 60,
        size: 50,
        str: "Radioactive Fairy Sacrifice",
        fill:"#810202ff",
    } ,
    strs:{
        hey: "Hey! Listen! ",
        instruction:"instruction instruction \ninstruction \ninstruction instruction\ninstruction\ninstruction\ninstruction\ninstruction",
        size: 40,
        x: 220,
        y: 180,

    },
    delay: 2000,
    
   }
}
const mlem ={
soundEffect: undefined
}

//Start button
const button ={
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
    text:{
        
        str: "start",
        fill: "#000000",
        x: 285,
        y: -100,
        size: 35,
        
    },
    delay: 5000,
  soundEffect: undefined

}
//ad a sound for when the frog eats the fly/fairy
function preload() {
    mlem.soundEffect = loadSound("assets/sounds/Yoshi mlem.mp3");
}

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 510,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3,
    buzziness: 4,
    fill: "#f096d9ff",
    line: "#ffdcef80",
    weight: 4,
    wing1:{
        fill: "#aaf39cff",
        line: "#ffdcef80",
        weight: 2,
        x: -10,
        y: 200, 
        size: 5,
    },
    wing2:{
        x: -5,
        y: 200, 
        size: 5,
    },
};
//add two circle shaking as wings 

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);
    setTimeout(changeSpeech, fairyScreen.text.delay);
    setTimeout(startButtonApparition, button.delay);
    // Give the fly its first random position
    resetFly();
}

function draw() {
    angleMode(DEGREES);
    background("#98d2ebff");
    fairyTitleScreen();
    buttonStart();
    startGame();
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
    checkTongueButtonOverlap();
    // Only increase the score if the game is not over
   // scoreTotal();
    displayScore();
    displayGameover();
}
//titlescreen
function fairyTitleScreen (){
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
    ellipse(fairyScreen.wings.bigL.x, fairyScreen.wings.bigL.y, fairyScreen.wings.bigL.width, fairyScreen.wings.bigL.height );
    pop();
    //small-Left
    push();
    stroke(fairyScreen.wings.stoke);
    strokeWeight(fairyScreen.wings.weight);
    rotate(-10);
    fill(fairyScreen.wings.fill);
    ellipse(fairyScreen.wings.smallL.x, fairyScreen.wings.smallL.y, fairyScreen.wings.smallL.width, fairyScreen.wings.smallL.height );
    pop();
    //big-right
    push();
    stroke(fairyScreen.wings.stoke);
    strokeWeight(fairyScreen.wings.weight);
    rotate(-20);
    fill(fairyScreen.wings.fill);
    ellipse(fairyScreen.wings.bigR.x, fairyScreen.wings.bigR.y, fairyScreen.wings.bigR.width, fairyScreen.wings.bigR.height );
    pop();
    //small-right
    push();
    stroke(fairyScreen.wings.stoke);
    strokeWeight(fairyScreen.wings.weight);
    rotate(10);
    fill(fairyScreen.wings.fill);
    ellipse(fairyScreen.wings.smallR.x, fairyScreen.wings.smallR.y, fairyScreen.wings.smallR.width, fairyScreen.wings.smallR.height );
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
    textSize(fairyScreen.text.strs.size);
    text(fairyScreen.text.strs.hey, fairyScreen.text.x, fairyScreen.text.y);   
    pop();
//Title
    push();
    noStroke();
    fill(fairyScreen.text.title.fill);
    textSize(fairyScreen.text.title.size);
    text(fairyScreen.text.title.str, fairyScreen.text.title.x, fairyScreen.text.title.y);
    pop();
    
}
function changeSpeech(){
    fairyScreen.text.strs.hey = fairyScreen.text.strs.instruction;
    fairyScreen.text.strs.size = 20;
    fairyScreen.text.x = fairyScreen.text.strs.x;
    fairyScreen.text.y= fairyScreen.text.strs.y;
    
}
function startButtonApparition (){
    button.y = 110;
    button.text.y = 120;
}
/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    fly.x += random(-fly.buzziness,fly.buzziness);
    fly.y += random(-fly.buzziness,fly.buzziness);
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
    //relate the fly to its wings
    fly.wing1.x = fly.x -2;
    fly.wing1.y = fly.y -5;
    fly.wing2.x = fly.x -5;
    fly.wing2.y = fly.y -5;
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

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
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
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
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

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size/2 + fly.size/2);
    
    if (eaten) {
        //make a mlem sound 
        mlem.soundEffect.play();
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        score += 1;
        
    }
}

function checkTongueButtonOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, button.x, button.y);
    // Check if it's an overlap
    const started = (d < frog.tongue.size/2 + button.w/2);
    
    if (started) {
        game = true;  
        // Bring back the tongue
        frog.tongue.state = "inbound";
        //Start the game
        
    }
   
}


function buttonStart(){
    push();
    strokeWeight(button.outline);
    stroke(button.line);
    fill(button.fill);
    ellipse(button.x, button.y, button.w, button.h)
    //rect(button.x, button.y, button.w, button.h, button.tr)
    pop();

    push();
    noStroke();
    textSize(button.text.size);
    fill(button.text.fill);
    text(button.text.str,button.text.x, button.text.y)
    pop();
}
/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}
/** 
function scoreTotal() {
    score

If gameOver 
    if (!gameOver){
    // Score increases relatively slowly
    score += 1;
  }


}
 */
function startGame(){
//stops flies from flying before the start button is pressed
    if (game === false){
       fly.speed = 0; 
       fly.y = -10 ;
    }
//If start button is pressed, the game starts and the title + Instruction disappears
    else if (game === true){
        fly.speed = 3;
        // gives time between start and first fly   
        button.y = -1000;
        fairyScreen.light.fill = "#00000000";
        fairyScreen.wings.fill = "#00000000";
        fairyScreen.body.fill = "#00000000";
        fairyScreen.wings.stoke = "#00000000";
        fairyScreen.text.fill = "#00000000";
        button.text.fill = "#00000000";
        fairyScreen.text.title.fill ="#00000000";


    }
    
}

//event-challenge*
function lose() {
  
      gameOver = true

}
function displayGameover() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(30);
  textStyle(BOLD);
  fill("#000000");
  text(score, frog.body.x - 10, 475);
  pop();
  /** 
  if(score < 100){
    text(score, frog.body.x - 10, 475) =  text(score, 100, 475) 
    textSize(40);
    fill("#ff6ff3ff");
  }
  */
}
//