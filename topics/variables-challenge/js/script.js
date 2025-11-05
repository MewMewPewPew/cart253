/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

let frameNumber = 0
// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};
let sky = {

  // Colour
  fill: {
    r: 160,
    g: 180,
    b: 200
  }
};
let birdy = {
  x: -25,
  y: 50,
  size: 50



}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
  frameRate(30)
}
/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  frameNumber += 1

  background(sky.fill.r, sky.fill.g, sky.fill.b);
  sky.fill.r -= 2
  sky.fill.g -= 2
  sky.fill.b -= 2

  mrFurious.fill.g -= 2
  mrFurious.fill.b -= 2

  let g = constrain(mrFurious.fill.g, 0, 255)
  let b = constrain(mrFurious.fill.b, 0, 255)

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, g, b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  // Math.min: We want the max value to be no larger
  // than 20; otherwise the circle just leaves the screen
  const rage = Math.min(frameNumber / 4, 20)
  // If we are on every fourth frame, we want
  // to adjust the position of mrFurius
  if (frameNumber % 4 === 0) {
    // Every second time we adjust the position, we adjust to
    // the left
    if (frameNumber % 8 === 0) {
      mrFurious.x += rage
    } else {
      mrFurious.x -= rage
    }
  }

  push();
  noStroke();
  fill("#aeb31aff");
  ellipse(birdy.x, birdy.y, birdy.size);
  pop();
  //increased the speed over time, and reset every 2 seconds
  const speed = frameNumber / 4 % 60
  birdy.x += speed
  //Every odd frame moves down 5 and even frame moves up 5 
  if (frameNumber % 2 === 0) {
    birdy.y -= 5
  } else {
    birdy.y += 5
  }
}
