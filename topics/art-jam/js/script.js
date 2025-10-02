/**
 * Mini me 
 * Ash 
 * 
 * For an Art-jam, I decided to represent myself in a comic style with a face a bit like 
 * this ( ͡° ͜ʖ ͡°) and :3 because I use them a lot (especially the :3), cat-like features because I love cats. I also thought that something that kinda reprents me is my love for eyeliner and my creative use of it when I can. - so I made the user able to draw me one or just be creative. 
 */

"use strict";
//background?
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
    x: 710,
    y: 490, 
    size: 280,
    fill : '#c2ffbcff'
}
let catear1 = {
    x1: 200,
    y1: 400,
    x2: 300,
    y2: 250,
    x3: 400,
    y3: 400,
    fill: '#c2ffbcff',
}
let catear2 = {
    x1: 320,
    y1: 600,
    x2: 610,
    y2: 334,
    x3: 650,
    y3: 600,
    fill: '#c2ffbcff',
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
    x: 550,
    y: -490, 
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
// all below is for the eyelid
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
// until here
let mousy = {
    w: 100,
    h: 100,
    fill: '#050101ff',
}



let graphics ={undefined}

/**
 * normal Canvas, but added createGraphics to be able to paint on all elements of the canvas
*/
function setup() {
    createCanvas(1000, 1000,);
   
    background('#ff94cfff');
    graphics =createGraphics(1000,1000,);
    
 
}


/**
 * lil Ash is there chilling
*/
function draw() {
    //frameRate(13);
    strokeWeight(5);
    
    backgroundElements();
    corpse ();
    Face();
    eyes();
    
    push();
    // the star
    translate(mouseX, mouseY);
    rotate(frameCount / -100.0);
    star(0, 0, 10, 25, 5);
    pop();

    //weight of the drawing graphic liner
    graphics.strokeWeight(3);
    graphicLiner();
    
}

function backgroundElements(){
    background('#ff94cfff' )
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
function Face (){
// face and ears
    push();
    noStroke();
    fill(face.fill);
    ellipse(face.x, face.y, face.size, face.height)
    ellipse(ear1.x, ear1.y, ear1.size)
    ellipse(ear2.x, ear2.y, ear2.size)
    pop();
//cat ear1
    push();
    rotate(PI / -20);
    noStroke();
    fill(catear1.fill);
    triangle(catear1.x1, catear1.y1, catear1.x2, catear1.y2, catear1.x3, catear1.y3);
    pop();
//cat ear2
    push();
    rotate(PI / -15); // i realized later I didn't need to do a rotation... oh well
    noStroke();
    fill(catear1.fill);
    triangle(catear2.x1, catear2.y1, catear2.x2, catear2.y2, catear2.x3, catear2.y3);
    pop();
//mouth :3
    push();
    rotate(PI / 2 );
    textSize(100);
    textFont('Verdana');
    text(mouth.str, mouth.x, mouth.y);
    pop();
}
function eyes(){
//eyelid
    push();
    noFill();
    ellipse (eye3.x, eye3.y, eye3.w, eye3.h);
    ellipse (eye4.x, eye4.y, eye4.w, eye4.h);
    pop();
//rectangle to make it only the top eyelid
    push();
    noStroke();
    fill (eyeRect1.fill);
    rect(eyeRect1.x, eyeRect1.y, eyeRect1.w, eyeRect1.h)
    rect(eyeRect2.x, eyeRect2.y, eyeRect2.w, eyeRect2.h)
    pop();
//iris
    push();
    noStroke();
    fill(eye1.fill);
    ellipse(eye1.x, eye1.y, eye1.w);
    ellipse(eye2.x, eye2.y, eye2.w);
    pop();

}
function mouseElement(){
//mouse thing - is not in use ! (star)
    push();
    fill(mousy.fill)
    noStroke();
    
   
 ellipse(mouseX, mouseY, mousy.w, mousy.h);
    pop();
}
//make a STAR YAY !
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
    fill ('red'); 
    
  }
  endShape(CLOSE);
  
} 
//to make the drawing intuitive
function graphicLiner(){
    if (mouseIsPressed === true) {
    image (graphics, 0, 0);
    graphics.line(pmouseX,pmouseY, mouseX, mouseY);
}
    else {
    image (graphics, 0, 0);
}
}