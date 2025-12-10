/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuText = `
Do you remember games ? \n
press specific key to start\n \n
(T)Tarot memory
(S)Sound memory
(B)Basic memory` 
// add author + context text



/**
 * Display the main menu
 */
function menuDraw() {
    createCanvas(500, 500);
    background(0);

    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, height / 2);
    pop();
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
        case 82:
            state = "revolution-variation";
            revolutionSetup();
            break;

        case 80:
            state = "pandemic-variation";
            pandemicSetup();
            break;

        case 83:
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