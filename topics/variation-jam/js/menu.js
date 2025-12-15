/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
let fontDotTitle;
const menuTitle =`Memory games`
const menuText = `
press any following key to start\n
B - Basic memory 
T - Tarot memory
S - Sound memory
M - Music memory`
const menuContext =`made by Ash as a project for the CART 253 class at Concordia`
// add author + context text



/**
 * Display the main menu
 */
function menuDraw() {
    createCanvas(500, 500);
    background(0);
    
    menuDrawText();
    
    //easiest debbuging solution
    hiddingTarotElements();
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 84 :
            state = "tarotMemory-variation";
            tarotSetup();
            break;
        case 83:
            state = "sound-variation";
            soundSetup();
            break;

        case 77:
            state = "music-variation";
            musicSetup();
            break;

        case 66:
            state = "BaseMemoryGame";
            baseSetup();
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}

// drawing the text on the menu canvas
function menuDrawText(){
    push();
    fill(255);
    textFont(fontDotTitle)
    textSize(50);
    textAlign(CENTER, CENTER);
    text(menuTitle, width / 2, 140);
    pop();
    push();
    fill(200);
    textFont(fontDot)
    textSize(30);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, 280);
    pop();
    push();
    fill(100);
    textFont(fontDot)
    textSize(15);
    textAlign(CENTER, CENTER);
    text(menuContext, width / 2, 475);
    pop();

}
// hidding elements from the tarot variation code
function hiddingTarotElements(){
    if(magic === false || love === false){
        starsGif.hide();
        heartsGif.hide();
    }
    
}