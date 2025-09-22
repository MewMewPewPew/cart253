/**
 * Autoportrait? Art-Jam
 * Ash 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000,);
 
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('#ff94cfff')
   
    push();
    
    pop();
    
    backgroundElements();
    simpleFace();
    mouseElement();

}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function backgroundElements(){
//stylistic choice, I like lines in the background (wondering if there is an easier way with a const to do this)
    push();
    line(0, 20, 999, 20)
    line(0, 40, 999, 40)
    line(0, 60, 999, 60)
    line(0, 80, 999, 80)
    line(0, 100, 999, 100)
    line(0, 120, 999, 120)
    line(0, 140, 999, 140)
    line(0, 160, 999, 160)
    line(0, 180, 999, 180)
    line(0, 200, 999, 200)
    line(0, 220, 999, 220)
    line(0, 240, 999, 240)
    pop();
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function simpleFace (){
    push();
    noStroke();
    fill('#c2ffbcff')
    ellipse(width / 2, height / 2, 400, 500)
    pop();
}

function mouseElement (){
   
    push();
    fill('#000000ff')
    noStroke();
    ellipse(mouseX, mouseY, 40, 500)
    pop();
    
}