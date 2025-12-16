"use strict";
/**Do you remember?
 * MEMORY GAMES - Sound variation file
 * 
 * [explanation copied from scipt.js]
 * The first variation plays more the role of the base version of this memory card game than a variation of it. 
 * Still, I made it different by adding my own touch of styling and my art.
 *          Instruction:
 *                      When clicking a faced down card, reveal 1 of 8 symbol on the card.
 *                      Try and match this card with another sharing the same symbol. 
 *                      If the 2 cards revealed don't have the same symbol, they are turned down.
 *                      If a pair of card is found, they stay revealed. 
 *                      To win, one must find the 8 pairs of cards successively.
*/

// html body background-color
let backgroundColorB = "#2f2f2f"; 

//Images
let backgroundImage;
let coverCardB;    
let coverCardBH;
let flippedCardB;
let img1, img2, img3, img4, img5, img6, img7, img8;
let imgWinB;
let faceCards;

// cards & important variables
let cards;
let card;
var colNum = 4;
var rowNum = 4;
let selectedB = [];
let pickedB;
let hover = false;
let flipAllCardsTimeoutB = 0;
let lastCardIdClickedB = -1;
let cardsMatchedB = 0;

//Win ending variables
let winDisplayB = {
  yimg: -120,
  size: 100,
  fill: "#f03860ff",
  stroke: "#1f222bff",
  weight: 5, 
  fill2: "#ffffff00",
  stroke2: "#39435e96",
  weight2: 8,
  stroke3: "#e0e5f173",
  weight3: 14,
  text: "you Win !",
  x:325,
  y: 250,
}

function baseSetup() {
  changeColorB(); //HTML backgroundColor
  createCanvas(650, 750);

  faceCards = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
    {
      image: img8,
    },    
  ];
  //make the 8 cards be a pair (16)
  let selectedB = [...faceCards, ...faceCards];

  myShuffleB(selectedB);//shuffle all the cards objects

  cards = [];
  
  //calling the class card + defining they position
  for (let i = 0; i < colNumT; i++) {
    for (let j = 0; j < rowNumT; j++) {
      var cardX = 145 + i * 120;
      var cardY = j * 180 + 105;
      var cardFace = selectedB.pop();
      card = new Card(cardX, cardY, 90, 164, cardFace.image);
      cards.push(card);
    }
  }
}

/**
 * This will be called every frame when the music variation is active
 */

function baseDraw() {
  background(225);
  background(backgroundImage);

  // When reached "1", flip all cards
  if(flipAllCardsTimeoutB == 1){
    for (let i = 0; i < cards.length; i++) {
      cards[i].isFaceUp = false;
    }
  }
  //Each showned imaged, timeout -- until all cards get flipped
  if(flipAllCardsTimeoutB > 0) flipAllCardsTimeoutB--;

  // checking to see display of card distribution
  for (let i = 0; i < cards.length; i++) {

    cards[i].body();

    cards[i].hover();

    cards[i].display();

  }
  if(cardsMatchedB == 8){
    gameWinB();
  }

}

//Card class acting on each cards and objects in the faceCards array
class Card {
  constructor(x, y, w, h, pickedB) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = color(200);
    this.pickedB = pickedB;
    this.isFaceUp = false;
    this.coverCardB = coverCardB;
    this.coverCardBH = coverCardBH;
    this.flippedCardB = flippedCardB;
    this.stroke = "#151821";
    this.darkBlue = "#151821";
    this.blue = "#7d8497";

  }
  body() {

    rectMode(CENTER);
    stroke(this.stroke);
    strokeWeight(5);
    fill(this.col);
    rect(this.x, this.y, this.w, this.h);
  }
  hover() {

    if (
      mouseX > this.x - this.w / 2 &&
      mouseX < this.x + this.w / 2 &&
      mouseY < this.y + this.h / 2 &&
      mouseY > this.y - this.h / 2
    ) {
      this.hoverBool = true;//if hover on cards
      this.stroke = this.blue; 
      image(this.coverCardBH, this.x -45, this.y -82, this.w, this.h);
    } else {
      this.hoverBool = false;
      
      this.stroke = this.darkBlue; 
      image(this.coverCardB, this.x -45, this.y -82, this.w, this.h);
    }
  }

  display() {

    if (this.isFaceUp) {//if card is face up
      push();
      imageMode(CENTER);
      image(this.flippedCardB, this.x, this.y, this.w, this.h);
      pop();
      push();
      imageMode(CENTER);
      image(this.pickedB, this.x, this.y, this.w, this.h);
      pop();
    }
  }
}
//shuffle all the cards objects
function myShuffleB(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
}
/**
 * This will be called whenever the mouse is pressed while the music variation is active
 */
function baseMousePressed() {

  // If we wait to flip the cards,
  if (flipAllCardsTimeoutB != 0) return;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].hoverBool) {
    // if we hover on a card

    let currentCard = cards[i]; // the clicked card
    currentCard.isFaceUp = true; // flip the card up

      if (lastCardIdClickedB == -1){ // if user never clicked on a card
      lastCardIdClickedB = i; // define "i" as the last card clicked
      
      } else if (lastCardIdClickedB!= i){ // If we click on a different card (& not the exact same one)
        if (cards[i].pickedB != cards[lastCardIdClickedB].pickedB){
        // if the card is not the same, flip All cards in xnumber of frames
        flipAllCardsTimeoutB = 50;
        cardsMatchedB = 0;
        } // if same card is picked
          else if (cards[i].pickedB == cards[lastCardIdClickedB].pickedB){
          //adding a score for each matched
          cardsMatchedB ++;
          let knownedMatched = cards[i];
          knownedMatched = true;
          console.log(cardsMatchedB + " matched sound");
          if(!knownedMatched){
            cardsMatchedB ++;
            console.log(cardsMatchedB + " matched sound");
          }
        }
      // Reset the last card clicked
      lastCardIdClickedB = -1;
      }
    }
    
  }
}
//Win ending
function gameWinB(){
textAlign(CENTER, CENTER);
image(imgWinB, 0, winDisplayB.yimg, width, height, 0, 0, imgWinB.width, imgWinB.height, CONTAIN);
//Text drawing (I wanted many stoke)
push();
textAlign(CENTER, CENTER);
textFont(fontDotTitle);
stroke(winDisplayB.stroke3);
strokeWeight(winDisplayB.weight3);
textSize(winDisplayB.size);
fill(winDisplayB.fill2);
text(winDisplayB.text, winDisplayB.x, winDisplayB.y);
pop();
push();
textAlign(CENTER, CENTER);
textFont(fontDotTitle);
stroke(winDisplayB.stroke2);
strokeWeight(winDisplayB.weight2);
textSize(winDisplayB.size);
fill(winDisplayB.fill2);
text(winDisplayB.text, winDisplayB.x, winDisplayB.y);
pop();
push();
textAlign(CENTER, CENTER);
textFont(fontDotTitle);
stroke(winDisplayB.stroke);
strokeWeight(winDisplayB.weight);
textSize(winDisplayB.size);
fill(winDisplayB.fill);
text(winDisplayB.text, winDisplayB.x, winDisplayB.y);
pop();
}

/**
 * This will be called whenever a key is pressed while the music variation is active
 */ //escape key event
  function baseKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}


function changeColorB(){
// change the background color of the html
document.body.style.background = backgroundColorB;
}