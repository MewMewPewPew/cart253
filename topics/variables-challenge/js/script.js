/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

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
  background(160, 180, 200);

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
}
