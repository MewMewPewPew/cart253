/**
 * Snowy Sunset
 * Ash and Ima 
 * 
 * Beautiful sunset at the pond near the snowy mountain! So relaxing and fun and exciting :D
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(640, 480);
}

function draw(){
    
  drawSky();
drawSun();
drawMountain1();
drawMountain2();
drawMountain3();
drawGrass();
drawPond();
drawCloudSun();
drawCloud();

}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function drawSky(){
    //the sunset
    push();
    background(74, 192, 247);
    noStroke(); 
    fill("#b2b2ffff");
    rect(0, 100, 680, 480);
    fill("#d8b2ffff");
    rect(0, 170, 680, 480);
    fill("#ffb2f9ff");
    rect(0, 230, 680, 480);
    fill("#ffa2b8ff");
    rect(0, 280, 680, 480);
    fill("#fa8686ff");
    rect(0, 320, 680, 480);
    fill("#f9785bff");
    rect(0, 340, 680, 480);
    //we added different hues of the sunset
    pop();
}
function drawSun() {
 //the sun
 push();
 stroke("#f8b45aff");
 strokeWeight(20);
 fill("#eef066ff");
ellipse(210, 220, 180);
pop();
} 
function drawMountain1(){ 
    //the big middle snowy mountain
    push();
noStroke();
fill("#d8eff7ff");
ellipse(350,350,250,550);
pop();
}
function drawMountain2(){
    // the right mountain
    push();
noStroke();
fill("#f2f4f9ff");
ellipse(500,450,250,550);
pop();
}
function drawMountain3(){
    // the left mountain
    push();
noStroke();
fill("#ecf4f5ff");
ellipse(170,500,250,550);
pop();
}
function drawGrass(){
    // the grass
    push();
    stroke("#0d750dff");
    strokeWeight(4);
    fill("#0a7d0aff");
    rect(-20, 350, 680, 480);
    pop();
}
function drawPond(){
    //the Pond
    push();
    stroke(61, 164, 212);
    strokeWeight(5);
    fill(74, 192, 247);
    ellipse(310,420,600,100);
    pop();
}
function drawCloudSun(){
    // the reflection of the sunset on the clouds
push();
noStroke();
 fill("#fa86baa5");
ellipse(550, 125, 400, 60);

noStroke();
 fill("#fa86865e");
ellipse(100, 275, 600, 60);

noStroke();
 fill("#eeabf390");
ellipse(150, 55, 250, 50);


pop();
}
function drawCloud(){
    //the clouds
    
push();
noStroke();
fill(255);
ellipse(550, 120, 400, 50);
// the right one
noStroke();
fill(255);
ellipse(100, 270, 600, 50);
// the left one
noStroke();
fill(255);
ellipse(150, 50, 250, 40);
//the small one 

pop();
}
