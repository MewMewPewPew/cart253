/**
 * Interesting Dinosaurs
 * Ima & Ash
 * 
 * A program to generate new interesting dinosaurs names with emoji.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 * & Chalda Pnuzig's repository
 * https://github.com/chalda-pnuzig/emojis.json/blob/dc21ce13ee03c26e0f51cedd995bbd22bfc199b6/dist/array.min.json
 * 
 */

"use strict";

let descriptionsData = undefined;
let dinosaurData = undefined;
let emojiData = undefined;

let langData = undefined;


// Starts with the instruction

let dinosaurName = undefined;
let descriptionsName = undefined;
let emoji = undefined;


/**
 * Load the description and dinosaur data
 */
function preload() {
descriptionsData = loadJSON("assets/data/descriptions.json");
dinosaurData = loadJSON("assets/data/dinosaurs.json");
emojiData = loadJSON("assets/data/emoji.json");
langData = loadJSON("assets/data/lang.json");
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
    //instruction
const lang = (langData.instruction[1]);
    push();
    fill("pink");
    textAlign(CENTER, BOTTOM);
    textSize(22);
    text(lang, width / 2, 100);
    pop();
    //description
    push();
    fill("pink");
    textAlign(CENTER, BOTTOM);
    textSize(32);
    text(descriptionsName, width / 2, 190);
    pop();
    //dino name
    push();
    fill("pink");
    textAlign(CENTER, TOP);
    textSize(32);
    text(dinosaurName, width / 2, height / 2);
    pop();
    //emoji
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