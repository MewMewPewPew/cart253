/**
 * This file contains the code to run *only* the pandemic variation part of the program.
 * Note how it has its own draw, pandemicDraw(), and its own keyPressed, greenKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the pandemic variation starts
 */
function pandemicSetup() {

}

/**
 * This will be called every frame when the pandemic variation is active
 */
function pandemicDraw() {
    background("green");
}

/**
 * This will be called whenever a key is pressed while the pandemic variation is active
 */
function pandemicKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the pandemic variation is active
 */
function pandemicMousePressed() {

}