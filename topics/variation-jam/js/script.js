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
    //menu
    fontDotTitle =loadFont("assets/images/Codystar-Regular.ttf");
    fontDot = loadFont("assets/images/BitcountPropSingle-Regular.ttf");
    //base memory card img
    img1 = loadImage("assets/images/cards/basic/star.png");
    img2 = loadImage("assets/images/cards/basic/triangle.png");
    img3 = loadImage("assets/images/cards/basic/spiral.png");
    img4 = loadImage("assets/images/cards/basic/circle.png");
    img5 = loadImage("assets/images/cards/basic/heart.png");
    img6 = loadImage("assets/images/cards/basic/diamond.png");
    img7 = loadImage("assets/images/cards/basic/spade.png");
    img8 = loadImage("assets/images/cards/basic/trefle.png");
    //tarot memory card img + font
    instrucionScreen = loadImage("assets/images/cards/tarot/instructionT.png");
    backgroundImageT = loadImage("assets/images/tarot-Aya-T-bg.png");
  coverCard = loadImage("assets/images/cards/tarot/cover-tarot.png");
  coverCardH = loadImage("assets/images/cards/tarot/cover-tarotH.png");
  sun = loadImage("assets/images/cards/tarot/theSun.png");
  death = loadImage("assets/images/cards/tarot/death.png");
  deadEnd = loadImage("assets/images/cards/tarot/deadEnd.png");
  magician = loadImage("assets/images/cards/tarot/theMagician.png");
  wand = loadImage("assets/images/cards/tarot/wand2.png");
  swordCoin = loadImage("assets/images/cards/tarot/swordCoin.png");
  cup = loadImage("assets/images/cards/tarot/cup.png");
  starsGif = createImg("assets/images/cards/tarot/stars.gif");
  heartsGif = createImg("assets/images/cards/tarot/hearts.gif");
  fortune = loadImage("assets/images/cards/tarot/fortune.png");
  chariot = loadImage("assets/images/cards/tarot/theChariot.png");
  lovers = loadImage("assets/images/cards/tarot/theLovers.png");
  tower = loadImage("assets/images/cards/tarot/theTower.png");
  hermit = loadImage("assets/images/cards/tarot/theHermit.png");
  imgWin = loadImage("assets/images/cards/tarot/win.png");
  imgLose = loadImage("assets/images/cards/tarot/lose.png");
    // sound memory game img + sound
    //backgroundImageS = loadImage('assets/images/sound_bg.png');
    soundButtonWin = loadImage("assets/images/button_win.png");
    soundButtonOff = loadImage("assets/images/button_off.PNG");
    soundButtonOffH = loadImage("assets/images/button_offH.png");
    img1M = loadImage("assets/images/button_on.PNG");
    img2M = loadImage("assets/images/button_on.PNG");
    img3M = loadImage("assets/images/button_on.PNG");
    img4M = loadImage("assets/images/button_on.PNG");
    img5M = loadImage("assets/images/button_on.PNG");
    img6M = loadImage("assets/images/button_on.PNG");
    img7M = loadImage("assets/images/button_on.PNG");
    img8M = loadImage("assets/images/button_on.PNG");
    soundWin = loadSound("assets/sounds/youWin_pvz.mp3");
    sound1 = loadSound("assets/sounds/sound1.mp3");
    sound2 = loadSound("assets/sounds/sound2.mp3");
    sound3 = loadSound("assets/sounds/sound3.mp3");
    sound4 = loadSound("assets/sounds/sound4.mp3");
    sound5 = loadSound("assets/sounds/sound5.mp3");
    sound6 = loadSound("assets/sounds/sound6.mp3");
    sound7 = loadSound("assets/sounds/sound7.mp3");
    sound8 = loadSound("assets/sounds/sound8.mp3");
    // music memory game img + sound 
    backgroundImageM = loadImage('assets/images/sound_bg.png');
    //sound1M = loadSound("assets/sounds/sound1.m4a");
    //sound2M = loadSound("assets/sounds/sound2.m4a");
    //sound3M = loadSound("assets/sounds/sound3.m4a");
    //sound4M = loadSound("assets/sounds/sound4.m4a");
    //sound5M = loadSound("assets/sounds/sound5.m4a");
    //sound6M = loadSound("assets/sounds/sound6.m4a");
    //sound7M = loadSound("assets/sounds/sound7.m4a");
    //sound8M = loadSound("assets/sounds/sound8.m4a");
}

function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "tarotMemory-variation":
            tarotDraw();
            break
        case "sound-variation":
            soundDraw();
            break;/*
        case "music-variation":
            musicDraw();
            break;*/
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
        case "sound-variation":
            soundMousePressed();
            break/*
        case "music-variation":
            musicMousePressed();
            break;*/
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
            break;
        case "sound-variation":
            soundKeyPressed(event);
            break/*
        case "music-variation":
            musicKeyPressed(event);
            break;*/
        case "BaseMemoryGame":
            baseKeyPressed(event);
            break;
    }
}
