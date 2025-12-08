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
