/**
 * This file contains the code to run *only* the red variation part of the program.
 * Note how it has its own draw, redDraw(), and its own keyPressed, redKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the revolution variation starts
 */
function revolutionSetup() {

}

/**
 * This will be called every frame when the revolution variation is active
 */
function revolutionDraw() {
    background("red");
}

/**
 * This will be called whenever a key is pressed while the revolution variation is active
 */
function revolutionKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the revolution variation is active
 */
function revolutionMousePressed() {

}