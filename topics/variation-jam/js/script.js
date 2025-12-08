/**
 * Variation Project
 * Ash
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Start witht the menu screen
let state = "menu";

//ChessBoard("board", "start");

/**
 * Create the canvas
*/
function setup() {

    createCanvas(500, 500);

}
function preload(){
    //base memory card img
    console.log("hey");
  img1 = loadImage("assets/images/cards/basic/star.png");
  img2 = loadImage("assets/images/cards/basic/triangle.png");
  img3 = loadImage("assets/images/cards/basic/spiral.png");
  img4 = loadImage("assets/images/cards/basic/circle.png");
  img5 = loadImage("assets/images/cards/basic/heart.png");
  img6 = loadImage("assets/images/cards/basic/diamond.png");
  img7 = loadImage("assets/images/cards/basic/spade.png");
  img8 = loadImage("assets/images/cards/basic/trefle.png");
  //tarot memory card img
  sun = loadImage("assets/images/cards/tarot/theSun.png");
  death = loadImage("assets/images/cards/tarot/death.png");
  magician = loadImage("assets/images/cards/tarot/theMagician.png");
  fortune = loadImage("assets/images/cards/tarot/fortune.png");
  chariot = loadImage("assets/images/cards/tarot/theChariot.png");
  lovers = loadImage("assets/images/cards/tarot/theLovers.png");
  tower = loadImage("assets/images/cards/tarot/theTower.png");
  hermit = loadImage("assets/images/cards/tarot/theHermit.png");
    // music memory card img + sound
  backgroundImage = loadImage('assets/images/sound_background.jpg');
  img1M = loadImage("assets/images/music-note.png");
  img2M = loadImage("assets/images/music-note.png");
  img3M = loadImage("assets/images/music-note.png");
  img4M = loadImage("assets/images/music-note.png");
  img5M = loadImage("assets/images/music-note.png");
  img6M = loadImage("assets/images/music-note.png");
  img7M = loadImage("assets/images/music-note.png");
  img8M = loadImage("assets/images/music-note.png");
  sound1 = loadSound("assets/sounds/sound1.mp3");
  sound2 = loadSound("assets/sounds/sound2.mp3");
  sound3 = loadSound("assets/sounds/sound3.mp3");
  sound4 = loadSound("assets/sounds/sound4.mp3");
  sound5 = loadSound("assets/sounds/sound5.mp3");
  sound6 = loadSound("assets/sounds/sound6.mp3");
  sound7 = loadSound("assets/sounds/sound7.mp3");
  sound8 = loadSound("assets/sounds/sound8.mp3");
}
/*
function preload(){
//base preload

    base.preload();
    base.baseSetup();
    base.baseDraw();
   // base.shuffling(array);
    //base.myShuffle();
    base.mouseClicked();
    //base.baseMousePressed();
    //base.baseKeyPressed();
    

//tarot preload
    tarot.preload();
    tarot.tarotSetup();
    tarot.tarotDraw();
   // base.shuffling(array);
    //tarot.myShuffle();
    tarot.mouseClicked();
    tarot.tarotMousePressed();

    
}
*/
/**
 * Display the menu of chess variations
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "tarotMemory-variation":
            tarotDraw();
            break
        case "revolution-variation":
            revolutionDraw();
            break
        case "pandemic-variation":
            pandemicDraw();
            break;
        case "music-variation":
            musicDraw();
            break;
        case "BaseMemoryGame":
            baseDraw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "tarotMemory-variation":
            tarotMousePressed();
            break
        case "revolution-variation":
            revolutionMousePressed();
            break
        case "pandemic-variation":
            pandemicMousePressed();
            break;
        case "music-variation":
            musicMousePressed();
            break;
        case "BaseMemoryGame":
            baseMousePressed();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "tarotMemory-variation":
            tarotKeyPressed(event);
            break
        case "revolution-variation":
            revolutionKeyPressed(event);
            break
        case "pandemic-variation":
            pandemicKeyPressed(event);
            break;
        case "music-variation":
            musicKeyPressed(event);
            break;
        case "BaseMemoryGame":
            baseKeyPressed(event);
            break;
    }
}
