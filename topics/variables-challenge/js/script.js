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
let sky = {

  // Colour
  fill: {
    r: 160,
    g: 180,
    b: 200
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
}


// F(x) = x^2 
// F(2) = 2^2 = 4
function F(x) {
  return x^2
}

F(2) // 4

// function is a name, that takes parameters, those parameters
// are used to compute a result or do an effect on the rest of 
// the world

// background is a function
// background takes parameters
//   - r: the red component of color
//.  - g: the green...
//.  - b: the blue ...