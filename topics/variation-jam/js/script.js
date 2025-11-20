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

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Display the menu of chess variations
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
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