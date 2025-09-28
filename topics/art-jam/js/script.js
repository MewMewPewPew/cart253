/**
 * Autoportrait? Art-Jam
 * Ash 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let lines = {
    x1: 0,
    x2: 20,
    y1: 999,
    y2: 20,
}
let face = {
    x: 500,
    y: 500, 
    size: 450,
    height: 500,
    fill : '#c2ffbcff'
}
let ear1 = {
    x: 285,
    y: 490, 
    size: 280,
    fill : '#c2ffbcff'
}
let ear2 = {
    x: 715,
    y: 490, 
    size: 280,
    fill : '#c2ffbcff'
}
let neck ={
    x: 425,
    y: 600, 
    w: 150,
    h: 300,
    fill : '#050101ff',
}
let body = {
    x: 500,
    y: 1100,
    w: 500,
    h: 700,
    fill : '#050101ff',

}
let mouth = {

}
let mousy = {
    x: mouseX,
    y: mouseY,
    w: 100,
    h: 100,
    fill : '#050101ff',
}
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
    corpse ();
    simpleFace();
    mouseElement();

}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function backgroundElements(){
//stylistic choice, I like lines in the background (wondering if there is an easier way with a const to do this)
    push();
    line(lines.x1, lines.x2, lines.y1, lines.y2) 
    
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
function corpse (){
//neck
    push();
    noStroke();
    fill(neck.fill);
    rect( neck.x, neck.y, neck.w, neck.h);
    pop();
//body
    push();
    noStroke();
    fill(body.fill);
    ellipse(body.x, body.y, body.w, body.h);
    pop();
}
function simpleFace (){
// face and ears
    push();
    noStroke();
    fill(face.fill);
    ellipse(face.x, face.y, face.size, face.height)
    ellipse(ear1.x, ear1.y, ear1.size)
    ellipse(ear2.x, ear2.y, ear2.size)
    pop();
//mouth :3
    push();
    textSize(100);
    text(3, 500,600 );
   
    rotate(45);
    pop();
}

function mouseElement (){
//mouse thing
    push();
    fill(mousy.fill)
    noStroke();
    ellipse(mousy.x, mousy.y, mousy.w, mousy.h)
    pop();
    
}