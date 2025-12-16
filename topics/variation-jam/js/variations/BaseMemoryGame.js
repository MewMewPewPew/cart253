"use strict";

//Images
let backgroundImage;
let coverCardB;    
let coverCardBH;
let flippedCardB;
let img1, img2, img3, img4, img5, img6, img7, img8;
let imgWinB;
let faceCards;

let backgroundColorB = "#2f2f2f"; 
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
  text: "you Won !",
  x:325,
  y: 250,
}

function baseSetup() {
  changeColorB();
  createCanvas(650, 750);
  // background(220)
  // rectMode(CENTER)

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

 let selectedB = [...faceCards, ...faceCards];

  myShuffleB(selectedB);

  cards = [];
  
  //   calling class card + position of row
  for (let i = 0; i < colNumT; i++) {
    for (let j = 0; j < rowNumT; j++) {
      var cardX = 145 + i * 120;
      var cardY = j * 180 + 105;
      // cards.push(new Card(cardX, cardY,50,50));

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
  // add img or smt? 

  // Quand on atteint "1", on flip toutes les cartes.
  if(flipAllCardsTimeoutB == 1){
    for (let i = 0; i < cards.length; i++) {
      cards[i].isFaceUp = false;
    }
  }
   // À chaque image affiché, on reduit de 1 le timeout,
  // en attendant qu'il flip toutes les cartes
  if(flipAllCardsTimeoutB > 0) flipAllCardsTimeoutB--;

  // checking to see display of card distribution
  for (let i = 0; i < cards.length; i++) {
    // cards[i].isFaceUp = true;
    cards[i].body();

    cards[i].hover();

    cards[i].display();

  }
  if(cardsMatchedB == 8){
    gameWinB();
  }

  //strokeWeight(5); // weird way to do a stroke I know...
}
/**
 * This will be called whenever a key is pressed while the music variation is active
 */
function baseKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}
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
      //this.col = color(160);
      // rect(this.x,this.y,this.w,this.h,10)
      this.hoverBool = true;
      
      this.stroke = this.blue; 
      image(this.coverCardBH, this.x -45, this.y -82, this.w, this.h);
    } else {
      //this.col = color(200);
      this.hoverBool = false;
      
      this.stroke = this.darkBlue; 
      //this.stroke = color(0); //"#181a26"
      image(this.coverCardB, this.x -45, this.y -82, this.w, this.h);
    }
  }

  display() {

    if (this.isFaceUp) {
      push();
      imageMode(CENTER);
      //this.stroke = color("#181a26"); //"#181a26"
      //this.stroke = color(0); //"#181a26"
      //strokeWeight(cardStrokeWeight);
      image(this.flippedCardB, this.x, this.y, this.w, this.h);
      pop();
      push();
      imageMode(CENTER);
      //strokeWeight(cardStrokeWeight);
      image(this.pickedB, this.x, this.y, this.w, this.h);
      pop();
    }
  }
}

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
 // Si on attend pour flipper les cartes,
  // on ignore la sourie
  if (flipAllCardsTimeoutB != 0) return;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].hoverBool) {
      // si on "hover" par dessus la carte...

      let currentCard = cards[i]; // la carte qu'on click
       currentCard.isFaceUp = true; // flip the card up!

       if (lastCardIdClickedB == -1){ // Si on a jamais clicker sur une carte...
        lastCardIdClickedB = i; // On la definit comme la dernière carte clicker
      
      } else if (lastCardIdClickedB!= i){ // si on click sur une carte différente...
        // si on click pas deux fois sur la même carte...
        if (cards[i].pickedB != cards[lastCardIdClickedB].pickedB){
          flipAllCardsTimeoutB = 50;
          cardsMatchedB = 0;
        } // same card is picked
        else if (cards[i].pickedB == cards[lastCardIdClickedB].pickedB){
        cardsMatchedB ++;
        let knownedMatched = cards[i];
        knownedMatched = true;
          console.log(cardsMatchedB + " matched sound");
          if(!knownedMatched){
            cardsMatchedB ++;
            console.log(cardsMatchedB + " matched sound");
          }
        }
        // On "reset" la dernière carte clické
        lastCardIdClickedB = -1;
        
      }
    }
    
  }
}

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
 */
  function baseKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}


function changeColorB(){
// change the background color of the html
document.body.style.background = backgroundColorB;
}