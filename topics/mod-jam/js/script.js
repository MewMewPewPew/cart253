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
let flyScore= {
    number:0,
    x: 20,
    y: 40,
    size: 30,
    fill:"#ffffff0c",
}
let fairyScore ={
    number: 0,
    x: 270,
    y: 255,
    size: 12,
    fill:"#ffffff0c",

}
let game = false;

// Is the game over? 
let gameOver = false;

const mlem ={
soundEffect: undefined,
delay: 0,
}
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
        x: 140,
        y: 60,
        size: 50,
        str: "Hero Frog Killer",
        fill:"#000000ff",
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
//Game over screen
let gameOverScreen ={
      body:{
        x: 320,
        y: 240,
        size: 280,
        fill: "#000000ff",
        
    },
    //light "emenating" from the body
    light:{
        x: 320,
        y: 240,
        size: 320,
        fill: "#00000080",
        
    },
    wings:{
        fill: "#ffffffff",
        stoke: "#ffdcdc80",
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
    fill:"#ff7979ff",
    title:{
        x: 190,
        y: 60,
        size: 50,
        str: "Game Over",
        fill:"#000000ff",
    } ,
    title2:{
        str: "You couldn't save the pond \n\n\n\n                Death:",
        size: 20,
        x: 200,
        y: 78,
    },
    flyeaten:{
        str:" Flies: \n Fairies: \n Frog: 1",
        size: 12,
        x: 220,
        y: 240,
    }
    
   }
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
    
}
//ad a sound for when the frog eats the fly/fairy
function preload() {
    mlem.soundEffect = loadSound("assets/sounds/Yoshi mlem.wav");
}
//pollution bar
let pollutionBar = {
    stroke:"#00961902",
    
    fills:{
        empty: "#00961902",
        full: "#00961902",
        text: "#00961902"
    },
    x:250,
    y:10,
    h:8,
    w:40,
    ww:150,
    text:"Pollution:",

}
//health bar
let healthBar = {
    stroke:"#000000",
    
    fills:{
        empty: "#00961902",
        full: "#13e400ff",
    },
    
    y:472,
    h:5,
    w:100,
    ww:100,

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
    text:"x       x ",
        fills: {
            dead:"#ffffff02",
            iris:"#000000ff",
    },
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
    fill:"rgb(82, 135, 233)", 
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
    size: 8,
    speed: 5,
  //?it's somehow not working?  speed: 50,
    buzziness:{
        body: 4,
        wing: 2,
    }, 
    fill: "#000000ff",
    line: "#00000080",
    weight: 4,
    wing1:{
        fill: "#ffffffe7",
        line: "#ffdcef80",
        weight: 2,
        x: -5,
        y: 200, 
        size: 5,
    },
    wing2:{
        x: -5,
        y: 200, 
        size: 5,
    },

};
//fairy 
const fairy={  
    x:0,  
    y:200,   
    size: 10,
    speed:8,
    delay: 5000,
    
    buzziness:{
        body: 4,
        wing: 2,
    }, 
    fill: "#f096d9ff",
    line: "#ffdcef80",
    wing1:{
        fill: "#aaf39cff",
        line: "#ffdcef80",
        x: -5,
        y: 200, 
        size: 5,
    },
    wing2:{
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
    setTimeout(startButtonApparition, button.delay);
    // Give the fly its first random position
    resetFly();
    resetFairy();
}

function draw() {
    
    background("#cbedfbff");
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
    fly.x += fly.speed; //the speed
    fly.x += random(-fly.buzziness.body,fly.buzziness.body);
    fly.y += random(-fly.buzziness.body,fly.buzziness.body);
   // Handle the fly going off the canvas
   if (fly.x > width) {
       resetFly();
       pollutionBar.w += 20;
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
function moveFairy() {
    // Move the fly
    fairy.x += fairy.speed; //the speed
    fairy.x += random(-fairy.buzziness.body,fairy.buzziness.body);
    fairy.y += random(-fairy.buzziness.body,fairy.buzziness.body);
   // Handle the fly going off the canvas
   if (fairy.x > width) {
       resetFairy();
    }
    //relate the fly to its wings
    fairy.wing1.x = fairy.x -2;
    fairy.wing1.y = fairy.y -5;
    fairy.wing2.x = fairy.x -5;
    fairy.wing2.y = fairy.y -5;
    //give the wings even more buzzing 
    fairy.wing1.x += random(-fairy.buzziness.wing,fairy.buzziness.wing);
    fairy.wing1.y += random(-fairy.buzziness.wing,fairy.buzziness.wing);
    fairy.wing2.x += random(-fairy.buzziness.wing,fairy.buzziness.wing);
    fairy.wing2.y += random(-fairy.buzziness.wing,fairy.buzziness.wing);   
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
    fly.y = random(50, 350);
 
}
function resetFairy(){
    fairy.x = -3000;
    fairy.y = random(50, 350);
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
//pollution bar
function drawPollutionBar(){
    //empty box
    push();
    stroke(pollutionBar.stroke);
    fill(pollutionBar.fills.empty);
    rect(pollutionBar.x, pollutionBar.y, pollutionBar.ww, pollutionBar.h, );
    pop();
    //pollution
    push();
    noStroke();
    fill(pollutionBar.fills.text);
    textSize(12)
    text(pollutionBar.text, pollutionBar.x-52, pollutionBar.y+8,);
    pop();
    push();
    noStroke();
    fill(pollutionBar.fills.full);
    rect(pollutionBar.x, pollutionBar.y, pollutionBar.w, pollutionBar.h, );
    pop();
}
//Health bar
function drawHeatlhBar(){
    //empty box
    push();
    stroke(healthBar.stroke);
    fill(healthBar.fills.empty);
    rect(frog.body.x -50, healthBar.y, healthBar.ww, healthBar.h, );
    pop();
    //health
    push();
    noStroke();
    fill(healthBar.fills.full);
    rect(frog.body.x -50, healthBar.y, healthBar.w, healthBar.h, );
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
    fill(frog.eyes.fills.iris);
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
    //iris when dead
    push();
    fill(frog.eyes.fills.dead);
    textSize(16);
    text(frog.eyes.text, frog.body.x-24, frog.eyes.y+2)
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
    rect(water.x, water.y, water.w, water.h,);
    pop();
    //add waterlily
    push();
    stroke(water.lily.stroke);
    fill(water.lily.fill);
    ellipse(frog.body.x, water.lily.y, water.lily.w+15, water.lily.h+10);
    pop();
    //making the water and waterlily change color due to pollution
    if (pollutionBar.w >=70){
        water.fill = "rgba(72, 82, 170, 1)";
        water.lily.fill = "#a0db89ff";
        water.lily.stroke = "#63925dff";
    }
    if (pollutionBar.w >= 115){
        water.fill = "rgba(75, 62, 124, 1)";
        water.lily.fill = "#c9db89ff";
        water.lily.stroke = "#709458ff";
    }
    if (pollutionBar.w >= 150){
        water.fill = "rgba(35, 22, 41, 1)"
        water.lily.fill = "#dbc589ff";
        water.lily.stroke = "#726a3bff";
    }
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
        flyScore.number += 1;
        healthBar.w -= 5;
        pollutionBar.w -= 10;
      }
    
}

function checkTongueFairyOverlap() {
    // Get distance from tongue to fly
    const di = dist(frog.tongue.x, frog.tongue.y, fairy.x, fairy.y);
    // Check if it's an overlap
    const eatenFairy = (di < frog.tongue.size/2 + fairy.size/2);
    
    if (eatenFairy) {
        //make a mlem sound 
        mlem.soundEffect.play();
        // Reset the fly
        resetFairy();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        fairyScore.number += 1;
        healthBar.w += 10;
        //pollutionBar.w += 5;
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

function startGame(){
//stops flies from flying before the start button is pressed
    if (game === false){
       fly.speed = 0; 
       fly.y = -10 ;
       fairy.speed = 0; 
       fairy.y = -10 ;
        
    }
//If start button is pressed, the game starts and the title + Instruction disappears
    else if (game === true){
        // gives time between start and first fly   
        fly.speed = 4;
        fairy.speed = 8;
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
        flyScore.fill= "#000000ff";
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
function noHealth(){
    if (healthBar.w <= 0){
        lose();
        frog.eyes.fills.iris = "#ffffffff";
        frog.eyes.fills.dead = "#000000";
        frog.tongue.y = 400;
        healthBar.fills.full = healthBar.fills.empty;

    };
}
function yesPollution(){
    if(pollutionBar.w >=150){
        lose();
        healthBar.w -=2

    };
}

function displayGameover() {
  if (gameOver === true ) {
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
    ellipse(gameOverScreen.wings.bigL.x, gameOverScreen.wings.bigL.y,gameOverScreen.wings.bigL.width, gameOverScreen.wings.bigL.height );
    pop();
    //small-Left
    push();
    stroke(gameOverScreen.wings.stoke);
    strokeWeight(gameOverScreen.wings.weight);
    rotate(-10);
    fill(gameOverScreen.wings.fill);
    ellipse(gameOverScreen.wings.smallL.x, gameOverScreen.wings.smallL.y, gameOverScreen.wings.smallL.width, gameOverScreen.wings.smallL.height );
    pop();
    //big-right
    push();
    stroke(gameOverScreen.wings.stoke);
    strokeWeight(gameOverScreen.wings.weight);
    rotate(-20);
    fill(gameOverScreen.wings.fill);
    ellipse(gameOverScreen.wings.bigR.x, gameOverScreen.wings.bigR.y, gameOverScreen.wings.bigR.width, gameOverScreen.wings.bigR.height );
    pop();
    //small-right
    push();
    stroke(gameOverScreen.wings.stoke);
    strokeWeight(gameOverScreen.wings.weight);
    rotate(10);
    fill(gameOverScreen.wings.fill);
    ellipse(gameOverScreen.wings.smallR.x, gameOverScreen.wings.smallR.y, gameOverScreen.wings.smallR.width, gameOverScreen.wings.smallR.height );
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
    fill(gameOverScreen.text.fill);
    textSize(gameOverScreen.text.title2.size);
    text(gameOverScreen.text.title2.str, gameOverScreen.text.title2.x, gameOverScreen.text.title2.y);   
    pop();
    push();
    noStroke();
    fill(gameOverScreen.text.fill);
    textSize(gameOverScreen.text.flyeaten.size);
    text(gameOverScreen.text.flyeaten.str, gameOverScreen.text.flyeaten.x, gameOverScreen.text.flyeaten.y);   
    pop();
//Title
    push();
    noStroke();
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
  push();
  textSize(flyScore.size);
  textStyle(BOLD);
  fill(flyScore.fill);
  text(flyScore.number, flyScore.x, flyScore.y);
  pop();
  push()
  textSize(fairyScore.size);
  textStyle(BOLD);
  fill(fairyScore.fill);
  text(fairyScore.number, fairyScore.x, fairyScore.y);
  pop();
 if (gameOver === true ) {
    flyScore.size = 12;
    flyScore.x = 260;
    flyScore.y = 240;
    flyScore.fill = "#ffffffff";
    fairyScore.fill = "#ffffffff";
    
 }
}
//