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
    str: 3,
    x: 500,
    y: 600, 
}

let eye1 = {
    x: 390,
    y: 490,
    w: 60,
    fill:  '#050101ff',   
}
let eye2 = {
    x: 610,
    y: 490,
    w: 60,
}
let eye3 = {
    x: 400,
    y: 493,
    w: 90,
    h: 70,
}
let eye4 = {
    x: 620,
    y: 493,
    w: 90,
    h: 70,
}
let eyeRect1 = {
    x: 350,
    y: 490, 
    w: 100,
    h: 100,
    fill : '#c2ffbcff',
}
let eyeRect2 = {
    x: 570,
    y: 490, 
    w: 200,
    h: 100,
    fill : '#c2ffbcff',
}

let mousy = {
    w: 100,
    h: 100,
    fill: '#050101ff',
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000,);
    loop();
 
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('#ff94cfff')
    frameRate(13);
   
    backgroundElements();
    corpse ();
    simpleFace();
    eyes();
    mouseElement();

    push();
// the star
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);
    
    pop();
    
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
    
    rotate(PI / 6 );
    textSize(100);
    text(mouth.str, mouth.x, mouth.y);
   
    
    pop();
}
function eyes(){
    push();
    noFill();
    ellipse (eye3.x, eye3.y, eye3.w, eye3.h);
    ellipse (eye4.x, eye4.y, eye4.w, eye4.h);
    pop();

    push();
    noStroke();
    fill (eyeRect1.fill);
    rect(eyeRect1.x, eyeRect1.y, eyeRect1.w, eyeRect1.h)
    rect(eyeRect2.x, eyeRect2.y, eyeRect2.w, eyeRect2.h)
    pop();

    push();
    noStroke();
    fill(eye1.fill);
    ellipse(eye1.x, eye1.y, eye1.w);
    ellipse(eye2.x, eye2.y, eye2.w);
    pop();

}
function mouseElement(){
//mouse thing
    push();
    fill(mousy.fill)
    noStroke();
    
   
 ellipse(mouseX, mouseY, mousy.w, mousy.h);
    pop();
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}