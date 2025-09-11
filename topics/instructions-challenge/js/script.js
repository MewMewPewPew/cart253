/**
 * Landscape
 * Tasha and Ima 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(640, 480)
}

function draw(){
    
  drawSky();
drawSun();
drawMountain1();
drawMountain2();
drawMountain3();
drawGrass();
drawPond();
drawCloud();
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function drawSky(){
    //the sky
    push();
    background(74, 192, 247)
    pop();
}
function drawSun() {
 //the sun
 push();
 noStroke();
 fill("#ffec7dff")
ellipse(100, 80, 100)
pop();
} 
function drawMountain1(){
    push();
noStroke();
fill("#d8eff7ff")
ellipse(350,350,250,550)
pop();
}
function drawMountain2(){
    push();
noStroke();
fill("#ffffffff")
ellipse(500,450,250,550)
pop();
}
function drawMountain3(){
    push();
noStroke();
fill("#ffffffff");
ellipse(170,500,250,550);
pop();
}
function drawGrass(){
    push();
    stroke("#055e05ff");
    strokeWeight(10);
    fill("#0a7d0aff");
    rect(-20, 350, 680, 480);
    pop();
}
function drawPond(){
    //the Pond
    push();
    stroke(61, 164, 212)
    strokeWeight(5)
    fill(74, 192, 247);
    ellipse(310,420,600,100);
    pop();
}
function drawCloud(){
push();
noStroke();
fill(255);
ellipse(100, 100, 100, 100);
ellipse(180, 80, 100, 100);
ellipse(160, 120, 60, 60);
ellipse(190, 130, 60, 60);
pop();
}