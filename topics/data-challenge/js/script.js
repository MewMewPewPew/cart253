/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let descriptionsData = undefined;
let dinosaurData = undefined;
let emojiData = undefined;

let langData = undefined;
let lang = "fr";

// Starts with the instruction
let dinosaurName = "Click to generate a dinosaur name";
let descriptionsName = undefined;
let emoji = undefined;


/**
 * Load the description and dinosaur data
 */
function preload() {
descriptionsData = loadJSON("assets/data/descriptions.json");
dinosaurData = loadJSON("assets/data/dinosaurs.json");
emojiData = loadJSON("assets/data/emoji.json");
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);
    
    push();
    fill("pink");
    textAlign(CENTER, BOTTOM);
    textSize(32);
    text(descriptionsName, width / 2, 190);
    pop();
    push();
    fill("pink");
    textAlign(CENTER, TOP);
    textSize(32);
    text(dinosaurName, width / 2, height / 2);
    pop();
    push();
    fill("pink");
    textAlign(CENTER, TOP);
    textSize(32);
    text(emoji, width / 2, 120);
    pop();
    
    
}

/**
 * Generate a new description name
*/
function mousePressed() {
    dinosaurName = random (dinosaurData.dinosaurs);
    descriptionsName = random (descriptionsData.descriptions);
    emoji = random (emojiData.emojis);
}