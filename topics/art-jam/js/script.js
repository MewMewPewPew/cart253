/**
 * Mini me 
 * Ash 
 * 
 * For an Art-jam, I decided to represent myself in a comic style with a face a bit like 
 * this ( ͡° ͜ʖ ͡°) and :3 because I use them a lot (especially the :3), cat-like features because I love cats. 
 * I also thought that something that kinda reprents me is my love for eyeliner and my creative use of it when I can. - so I made the user able to draw me one or just be creative. 
 */

"use strict";
//background?
let lines = {
    x1: 0,
    x2: 20,
    y1: 999,
    y2: 20,
}
//background star position
let starP = {
    x: 500,
    y: 600,
    fill: '#c2ffbcff',
}
let face = {
    x: 500,
    y: 500, 
    size: 450,
    height: 500,
    fill : '#ffffffff'
}
let ear1 = {
    x: 285,
    y: 490, 
    size: 280,
    fill : '#ffffffff'
}
let ear2 = {
    x: 710,
    y: 490, 
    size: 280,
    fill : '#ffffffff'
}
let catear1 = {
    x1: 200,
    y1: 400,
    x2: 300,
    y2: 250,
    x3: 400,
    y3: 400,
    fill: '#ffffffff',
}
let catear1Inner = {
    x1: 250,
    y1: 380,
    x2: 300,
    y2: 300,
    x3: 342,
    y3: 370,
    fill: '#ff94cfff',
}
let catear2 = {
    x1: 320,
    y1: 600,
    x2: 610,
    y2: 334,
    x3: 650,
    y3: 600,
    fill: '#ffffffff',
}
let catear2Inner = {
    x1: 525,
    y1: 450,
    x2: 595,
    y2: 383,
    x3: 605,
    y3: 480,
    fill: '#ff94cfff',
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
    fill: '#050101ff'
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
    fill : '#ffffffff',
}
let eyeRect2 = {
    x: 570,
    y: 490, 
    w: 200,
    h: 100,
    fill : '#ffffffff',
}
// until here
let mousy = {
//is not in use (for now?)
    w: 100,
    h: 100,
    fill: '#050101ff',
}
//all the piercings (wish i had more :D)
let piercing1Right = {
    x: 270, 
    y: 600,
    size: 15,
    fill: '#000000ff',

}
let piercing2Right = {
    x: 230, 
    y: 585,
    size: 15,
    fill: '#000000ff',

}
let piercing3Right = {
    x: 195, 
    y: 555,
    size: 15,
    fill: '#000000ff',

}
let piercing1Left = {
    x: 720, 
    y: 600,
    size: 15,
    fill: '#000000ff',

}
let piercing2Left = {
    x: 770, 
    y: 585,
    size: 15,
    fill: '#000000ff',

}
let piercing3Left = {
    x: 805, 
    y: 555,
    size: 15,
    fill: '#000000ff',

}
let piercing1SnakesBites = {
    x: 548, 
    y: 600,
    size: 1,
    h:  25,
    fill: '#000000ff',

}
let piercing2SnakesBites = {
    x: 510, 
    y: 600,
    size: 1,
    h:25,
    fill: '#000000ff',

}
//eyeliner to draw
let eyeLinerObject1 = {
    x: 700,
    y: 100,
    w: 200,
    h: 20, 
    fill: '#000000ff',
}
let eyeLinerObject2 = {
    x1: 700,
    y1: 120,
    x2: 660,
    y2: 109,
    x3: 700,
    y3: 100, 
    fill: '#000000ff',
}
let eyeLinerText ={
    x: 720,
    y: 114,
    str: 'eyeliner?',
    fillText:'#ffd000ff',
}

//speech bubble
const speechAlt ={
    x: 540,
    y: 770,
    x2: 580,
    y2: 790,
    fill: '#c2ffbcff',
    size: 100,
   //make the guy (me) say two things over time
    strs:{
        hey: 'Hello!!',
        text: 'I have no arm but still seak new\n makeup and hair or anything cool \n if you would be so kind to draw it \n   on me ♡ :3 ',
        
    } ,
    delay:  4000,
    
}
let speechBox ={
    x:530,
    y:760,
    w:355,
    h: 115,
    fill: '#000000d5',
    fillStroke:'#c2ffbcff',
}

let graphics ={undefined}
let button ={undefined}

/**
 * normal Canvas, but added createGraphics to be able to paint on all elements of the canvas
*/
function setup() {
    createCanvas(1000, 1000,);
   
    background('#ff94cfff');
// Tried to add a button to make the "eyeliner"/drawing = true ... didn't figured it out yet
//  button = createButton('Eyeliner ?', 'button_');
//   button.position(820, 254);
//   button.mousePressed(button_);
    
    graphics =createGraphics(1000,1000,);
    //set the Time for the 2 lines of speech
    setTimeout(changeSpeech, speechAlt.delay);
    
 
}


/**
 * lil Ash is there chilling
*/
function draw() {
    //frameRate(20);
    strokeWeight(5);
    
    backgroundElements();
// starBackground
 
    
    push();
    //rotate(frameCount / -100.0);
    
    translate(500, 540);
    starBackground(0, 0, 270, 520, 5);
    //translate(starP.x, starP.y);
    pop();

    corpse ();
    catEars();
    Face();
    eyes();
    piercings();
    //eyeLinerObject();
    



// the star
    push();
    translate(mouseX, mouseY);
    rotate(frameCount / -100.0);
    star(0, 0, 10, 25, 5);
    stroke('#000000ff');
    pop();

//weight of the drawing graphic liner
    graphics.strokeWeight(5);
    graphicLiner ();
    talking();
   
}

function backgroundElements(){
    background('#ff94cfff' )
    push();
    stroke('#4e2f40ff');
    strokeWeight(20);
    line(0, 0, 999, 0);
    line(0, 40, 999, 40);
    line(0, 80, 999, 80);
    line(0, 120, 999, 120);
    line(0, 160, 999, 160); 
    line(0, 200, 999, 200);
    line(0, 240, 999, 240);
    line(0, 280, 999, 280);
    line(0, 320, 999, 320);
    line(0, 360, 999, 360);
    line(0, 400, 999, 400);
    line(0, 440, 999, 440);
    line(0, 480, 999, 480);
    line(0, 520, 999, 520);
    line(0, 560, 999, 560);
    line(0, 600, 999, 600);
    line(0, 640, 999, 640);
    line(0, 680, 999, 680);
    line(0, 720, 999, 720);
    line(0, 760, 999, 760);
    line(0, 800, 999, 800);
    line(0, 840, 999, 840);
    line(0, 880, 999, 880);
    line(0, 920, 999, 920);
    line(0, 960, 999, 960);
    line(0, 1000, 999, 1000);
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
function catEars(){
    //cat ear2
    push();
    rotate(PI / -15); 
    noStroke();
    fill(catear1.fill);
    triangle(catear2.x1, catear2.y1, catear2.x2, catear2.y2, catear2.x3, catear2.y3);
    pop();
    //inner Cat Ear
    push ();
    rotate(PI / -15);
    noStroke();
    fill(catear2Inner.fill);
    triangle(catear2Inner.x1, catear2Inner.y1, catear2Inner.x2, catear2Inner.y2, catear2Inner.x3, catear2Inner.y3);
    pop ();
    
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
    //mouth :3
    push();
    rotate(PI / 2 );
    textSize(100);
    textFont('Verdana');
    fill(mouth.fill)
    text(mouth.str, mouth.x, mouth.y);
    pop();
    //cat ear1
        push();
        rotate(PI / -20);
        noStroke();
       fill(catear1.fill);
      triangle(catear1.x1, catear1.y1, catear1.x2, catear1.y2, catear1.x3, catear1.y3);
        pop();
       //inner Cat Ear
        push ();
       rotate(PI / -20);
       noStroke();
        fill(catear1Inner.fill);
        triangle(catear1Inner.x1, catear1Inner.y1, catear1Inner.x2, catear1Inner.y2, catear1Inner.x3, catear1Inner.y3);
        pop ();
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
function piercings(){ 
//piercing ear right
    push();
    fill(piercing1Right.fill);
    ellipse(piercing1Right.x, piercing1Right.y, piercing1Right.size)
    pop();
    push();
    fill(piercing2Right.fill);
    ellipse(piercing2Right.x, piercing2Right.y, piercing2Right.size)
    pop();
    push();
    fill(piercing3Right.fill);
    ellipse(piercing3Right.x, piercing3Right.y, piercing3Right.size)
    pop();
//piercing ear left
    push();
    fill(piercing1Left.fill);
    ellipse(piercing1Left.x, piercing1Left.y, piercing1Left.size)
    pop();
    push();
    fill(piercing2Left.fill);
    ellipse(piercing2Left.x, piercing2Left.y, piercing2Left.size)
    pop();
    push();
    fill(piercing3Left.fill);
    ellipse(piercing3Left.x, piercing3Left.y, piercing3Left.size)
    pop();
//I just realized I messed up my left and right (unless i'm positioned as the caracther)

//Snakes bites piercings (it's the actual name)
    push();
    fill(piercing1SnakesBites.fill);
    ellipse(piercing1SnakesBites.x, piercing1SnakesBites.y, piercing1SnakesBites.size, piercing1SnakesBites.h)
    pop();
    push();
    fill(piercing2SnakesBites.fill);
    ellipse(piercing2SnakesBites.x, piercing2SnakesBites.y, piercing2SnakesBites.size, piercing2SnakesBites.h)
    pop();
}
//Tried to add a button to make the "eyeliner"/drawing = true ... didn't figured it out yet
//function eyeLinerObject(){
    //rectangle of eyeliner
//    push();
//    strokeWeight(3);
//    stroke('#c2ffbcff');
//    fill(eyeLinerObject1.fill);
//    rect(eyeLinerObject1.x, eyeLinerObject1.y, eyeLinerObject1.w, eyeLinerObject1.h,)
//    pop();
    //rectangle of eyeliner
//    push();
//    strokeWeight(3);
//    stroke('#c2ffbcff');
//    fill(eyeLinerObject1.fill);
//   triangle(eyeLinerObject2.x1, eyeLinerObject2.y1, eyeLinerObject2.x2, eyeLinerObject2.y2, eyeLinerObject2.x3, eyeLinerObject2.y3)   
//    pop();
    //text
//       push();
//        noStroke();
//        fill(eyeLinerText.fillText);
//        text(eyeLinerText.str, eyeLinerText.x, eyeLinerText.y)
//        pop();
//}
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
// make the background star
function starBackground(x, y, radius1, radius2, npoints){
    push();
    rotate(PI / -10);
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
        fill (starP.fill); 
    }
    stroke('#81ac7dff');
endShape(CLOSE);
pop();
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
// Tried to add a button to make the "eyeliner"/drawing = true ... didn't figured it out yet
//function button_(){
//    if (mouseIsPressed) {
        //graphicLiner = true
//    }
//    else {
        //graphicLiner = false
//    }
//} 

function talking(){ 
// box behind text 
    push();
    strokeWeight(3);
    stroke(speechBox.fillStroke);
    fill(speechBox.fill);
    rect(speechBox.x, speechBox.y, speechBox.w, speechBox.h,)
    pop();
    push();
// text
    textSize(speechAlt.size);
    textFont('Verdana');
    fill(speechAlt.fill);
    textWrap(WORD);
    text(speechAlt.strs.hey, speechAlt.x, speechAlt.y, speechAlt.x2, speechAlt.y2);
    pop();
}
// make the speech change with time 
function changeSpeech(){
    speechAlt.strs.hey = speechAlt.strs.text;
    speechAlt.size = 20;
}

