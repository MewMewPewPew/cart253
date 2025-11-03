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
let score = {
    number:0,
    x: 20,
    y: 40,
    fill:"#ffffff0c",
}
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
        fill: "#daffd3ff",
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
soundEffect: undefined,
delay: 0,
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
  

}
//ad a sound for when the frog eats the fly/fairy
function preload() {
    mlem.soundEffect = loadSound("assets/sounds/Yoshi mlem.wav");
}

// Our frog
let frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 440,
        size: 40,
    },
    fingers:{
        y:435,
        h:4,
        w:7,
    },
    legs:{
        y:450,
        h:20,
        w:25,
    },
    toes:{
        y:461,
        h:8,
        w:4,
    },
     // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y:430,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },
    face:{
        
        y:414,
        h:40,
        w:46,
        tl: 10,
    },
    eyes:{
    y: 415,
        l:{
            size:15,
        },
        r:{   
            size:15,
        },
        irisL:{ 
            size:6,
        },
        irisR:{
            size:6,
        },
      
    },
    
   
};
let water ={
    fill: "#5287e9ff",
    x: 0,
    y: 460,
    h: 40,
    w: 640,
    lily:{
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
    size: 10,
    speed: 3,
    buzziness:{
        body: 4,
        wing: 2,
    }, 
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
    angleMode(DEGREES);
    setTimeout(changeSpeech, fairyScreen.text.delay);
    setTimeout(startButtonApparition, button.delay);
    setTimeout(checkTongueButtonOverlap, mlem.delay);
    // Give the fly its first random position
    resetFly();
}

function draw() {
    
    background("#cbedfbff");
    fairyTitleScreen();
    buttonStart();
    startGame();
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawPond();
    drawFrog();
    frog.tongue.y = constrain(frog.tongue.y, 0, 430),

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
    fly.x += random(-fly.buzziness.body,fly.buzziness.body);
    fly.y += random(-fly.buzziness.body,fly.buzziness.body);
   // Handle the fly going off the canvas
   if (fly.x > width) {
       resetFly();
    }
    //relate the fly to its wings
    fly.wing1.x = fly.x -2;
    fly.wing1.y = fly.y -5;
    fly.wing2.x = fly.x -5;
    fly.wing2.y = fly.y -5;
    //give the wings even more buzzing 
    fly.wing1.x += random(-fly.buzziness.wing,fly.buzziness.wing);
    fly.wing1.y += random(-fly.buzziness.wing,fly.buzziness.wing);
    fly.wing2.x += random(-fly.buzziness.wing,fly.buzziness.wing);
    fly.wing2.y += random(-fly.buzziness.wing,fly.buzziness.wing);
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
        if (frog.tongue.y >= 430) {
            frog.tongue.state = "idle";
        }
    }
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
    ellipse(frog.body.x-20, frog.eyes.y, frog.eyes.l.size +3);
    ellipse(frog.body.x+20, frog.eyes.y, frog.eyes.r.size +3);
    pop();
    //white eye
    push();
    fill("#ffffffff");
    noStroke();
    ellipse(frog.body.x-20, frog.eyes.y, frog.eyes.l.size);
    ellipse(frog.body.x+20, frog.eyes.y, frog.eyes.r.size);
    pop();
    //iris
    push();
    fill("#000000ff");
    noStroke();
        //left
    ellipse(frog.body.x-20, frog.eyes.y -2, frog.eyes.irisL.size+1);
    ellipse(frog.body.x-23, frog.eyes.y -3, frog.eyes.irisL.size);
    ellipse(frog.body.x-17, frog.eyes.y -3, frog.eyes.irisL.size);
        //right
    ellipse(frog.body.x+20, frog.eyes.y -2, frog.eyes.irisR.size+1);
    ellipse(frog.body.x+23, frog.eyes.y -3, frog.eyes.irisR.size);
    ellipse(frog.body.x+17, frog.eyes.y -3, frog.eyes.irisR.size);
    pop();
//legs
    push();
    fill("#5f9715ff");
    noStroke();
    ellipse(frog.body.x-25,frog.legs.y,frog.legs.w, frog.legs.h)
    ellipse(frog.body.x+25,frog.legs.y,frog.legs.w, frog.legs.h)
    pop();
    //toes
    push();
    fill("#5f9715ff");
    noStroke();
        //left
    ellipse(frog.body.x-20,frog.toes.y-1,frog.toes.w, frog.toes.h)
    ellipse(frog.body.x-25,frog.toes.y,frog.toes.w, frog.toes.h)
    ellipse(frog.body.x-30,frog.toes.y,frog.toes.w, frog.toes.h)
        //right
    ellipse(frog.body.x+20,frog.toes.y-1,frog.toes.w, frog.toes.h)
    ellipse(frog.body.x+25,frog.toes.y,frog.toes.w, frog.toes.h)
    ellipse(frog.body.x+30,frog.toes.y,frog.toes.w, frog.toes.h)
    pop();
//face 
    push();
    fill("#5f9715ff");
    noStroke();
    rect(frog.body.x-23, frog.face.y, frog.face.w, frog.face.h, frog.face.tl);
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
    rect(frog.body.x-20, frog.face.y+3, frog.face.w-6, frog.face.h, frog.face.tl);
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
    ellipse(frog.body.x-19,frog.fingers.y,frog.fingers.w, frog.fingers.h)
    ellipse(frog.body.x-18,frog.fingers.y+5,frog.fingers.w, frog.fingers.h)
    ellipse(frog.body.x-19,frog.fingers.y+10,frog.fingers.w, frog.fingers.h)
        //right
    ellipse(frog.body.x+19,frog.fingers.y,frog.fingers.w, frog.fingers.h)
    ellipse(frog.body.x+21,frog.fingers.y+10,frog.fingers.w, frog.fingers.h)
    ellipse(frog.body.x+20,frog.fingers.y+5,frog.fingers.w, frog.fingers.h)
    pop();

}
function drawPond(){
    //add water (pond)
    push();
    noStroke();
    fill(water.fill);
    rect(water.x, water.y, water.w, water.h,)
    pop();
    //add waterlily
    push();
    stroke(water.lily.stroke);
    fill(water.lily.fill);
    ellipse(frog.body.x, water.lily.y, water.lily.w+15, water.lily.h+10)
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
        score.number += 1;
        
    }
}

function checkTongueButtonOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, button.x, button.y);
    // Check if it's an overlap
    const started = (d < frog.tongue.size/2 + button.w/2);
    
    if (started) {
        //make a mlem sound 
        mlem.soundEffect.play();
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
        // gives time between start and first fly   
        fly.speed = 3;
        // make the instruction screen disappear
        button.y = -1000;
        fairyScreen.light.fill = "#00000000";
        fairyScreen.wings.fill = "#00000000";
        fairyScreen.body.fill = "#00000000";
        fairyScreen.wings.stoke = "#00000000";
        fairyScreen.text.fill = "#00000000";
        button.text.fill = "#00000000";
        fairyScreen.text.title.fill ="#00000000";
        //make the score appear
        score.fill= "#000000ff";

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
  fill(score.fill);
  text(score.number, score.x, score.y);
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