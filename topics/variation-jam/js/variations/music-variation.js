/**
 * This file contains the code to run *only* the music variation part of the program.
 * Note how it has its own draw, musicDraw(), and its own keyPressed, musicKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the music variation starts
 */
function musicSetup() {

}

/**
 * This will be called every frame when the music variation is active
 */
function musicDraw() {
    background("blue");
}

/**
 * This will be called whenever a key is pressed while the music variation is active
 */
function musicKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the music variation is active
 */
function musicMousePressed() {

}