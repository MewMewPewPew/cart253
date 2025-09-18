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

  push();
  noStroke();
  fill("#aeb31aff");
  ellipse(birdy.x, birdy.y, birdy.size);
  pop();

  const speed = frameNumber / 4 % 60
  birdy.x += speed
  if (frameNumber % 2 === 0) {
    birdy.y -= 5
  } else {
    birdy.y += 5
  }
}
