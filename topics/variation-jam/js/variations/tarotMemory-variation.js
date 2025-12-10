"use strict";


let cardsT;
let cardT;
var colNumT = 4;
var rowNumT = 4;
let selectedT = [];
let flippedCardsT = [];
let pickedT;
let fontDot;
//images 
let coverCard;
let coverCardH;
let backgroundImageT;
let sun, death, magician, fortune, chariot, lovers, tower, hermit;
let bigCard;

let faceCardsT, faceCardsCopyT;
let randomIndexT;
let hoverT = false;
let numFlippedT = 0;
let timerT = -1;
let matchBoolT;

let delayT = 60;
let setT = 0;
let matchT = false;
let matchedCardsT = [];
let confettiT = [];

/* -put in script js preload
function preload() {
  sun = loadImage("assets/images/cards/tarot/theSun.png");
  death = loadImage("assets/images/cards/tarot/death.png");
  magician = loadImage("assets/images/cards/tarot/theMagician.png");
  fortune = loadImage("assets/images/cards/tarot/fortune.png");
  chariot = loadImage("assets/images/cards/tarot/theChariot.png");
  lovers = loadImage("assets/images/cards/tarot/theLovers.png");
  tower = loadImage("assets/images/cards/tarot/theTower.png");
  hermit = loadImage("assets/images/cards/tarot/theHermit.png");
  // faceCards = [img1, img2, img3, img4, img5, img6, img7, img8];
}
  */ 


function tarotSetup() {
  
  createCanvas(1465, 800);
  background(225);
  background(backgroundImageT);
  // background(220)
  // rectMode(CENTER)

  faceCardsT = [
    sun,
    death,
    magician,
    fortune,
    chariot,
    lovers,
    tower,
    hermit,
    sun,
    death,
    magician,
    fortune,
    chariot,
    lovers,
    tower,
    hermit,
  ];

  faceCardsCopyT = [];

  myShuffleT();

  cardsT = [];

  //   calling class card + position of row
  for (let i = 0; i < colNumT; i++) {
    for (let j = 0; j < rowNumT; j++) {
      var cardX = 510 + i * 150;
      var cardY = j * 180 + 120;
      // cards.push(new Card(cardX, cardY,50,50));

      var cardFaceT = selectedT.pop();
      cardT = new CardT(cardX, cardY, 100, 170, cardFaceT);
      cardsT.push(cardT);
    }
  }

}
/**
 * This will be called every frame when the music variation is active
 */
function tarotDraw() {
  
  // shuffling(selected);
  if (!matchT) {
    if (frameCount - timerT > delayT && timerT != -1) {
      for (let i = 0; i < cardsT.length; i++) {
        if (!cardsT[i].setT) {
          cardsT[i].isFaceUp = false;
        }
        numFlippedT = 0;
        timerT = -1;
        setT = 0;
      }
    }
  }

  if (matchT) {
    for (let i = 0; i < setT; i++) {
      // flippedCards[i].isFaceUp = true;
      console.log("set is " + setT);
      numFlippedT = 0;
      timerT = -1;
      // match=false
      // flippedCardsCopy[i].set=false
      // matchedCards.push(card[i])
      // cards[i].matched()
      // cards[i].isFaceUp = true;
    }
  }

  // checking to see display of card distribution
  for (let i = 0; i < cardsT.length; i++) {
    // cards[i].isFaceUp = true;
    cardsT[i].body();

    cardsT[i].hover();

    cardsT[i].display();
  }

  // if(match){
  //  for(i=0;i<flippedCards.length;i++)
  //  flippedCards[i].display()
  // }

  if (setT == 8) {
    console.log("hello");
    
      
      
   }
}


class CardT {
  constructor(x, y, w, h, pickedT) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.stroke =color(255);
    this.col = color(200);
    this.coverCard = coverCard;
    this.coverCardH = coverCardH;
    this.pickedT = pickedT;
    this.isFaceUp = false;
    this.setT = false;
  }

  body() {
    rectMode(CENTER);
    stroke(this.stroke);
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
      this.col = color(160);
      // rect(this.x,this.y,this.w,this.h,10)
      this.hoverBool = true;
      image(this.coverCardH, this.x -50, this.y -85, this.w, this.h);
    } else {
      this.col = color(200);
      this.hoverBool = false;
      image(this.coverCard, this.x -50, this.y -85, this.w, this.h);
    }
  }

  display() {
    // rectMode(CENTER)
    if (this.isFaceUp) {
      imageMode(CORNER);
      
      image(this.pickedT, this.x -50, this.y -85, this.w, this.h);
      //making a replica of the card (to give a fortune)
      bigCard = image(this.pickedT, 0, 150, 260, 442);
      bigCard + 2;
      //if (this.pickedT[0]){
      //  console.log("hey<3")
      //}
      }
      else if (bigCard == 2){
      bigCard = image(this.pickedT, 500, 150, 260, 442);
    
    }
    
    // else {
    //   stroke("yellow");
    //   rect(this.x, this.y, this.w / 4, this.h / 4, 7);
    // }
  }

  matched() {
    if (matchT) {
      this.display();
    }
  }
}

// fisher yates shuffle as a function
function shufflingT(array) {
  let counter = array.length;

  // while there are still elements in the array
  while (counter > 0) {
    // picks a random index number of the array
    var randomIndex = Math.floor(Math.random() * counter);
    // decreases counter by 1
    counter--;
    // swaps the last element with the counter
    var tempSwap = array[counter];
    array[counter] = array[randomIndex];
    array[randomIndex] = tempSwap;
  }
}

function myShuffleT() {
  // console.log(faceCards)

  //   faceCards = faceCards.concat(faceCards)
  //   faceCards2=faceCards
  //   // console.log(faceCards)
  // console.log(faceCards2)

 // console.log(faceCardsT);
  for (let i = 0; i < 16; i++) {
    // randomly picking one card from the array of face cards
    randomIndexT = floor(random(0, faceCardsT.length));
    pickedT = faceCardsT[randomIndexT];

    // push 2 copies onto array since there are two of each
    selectedT.push(pickedT);
    // selected.push(picked);
    // remove card from faces array so we don't re-pick the same cards
    faceCardsT.splice(randomIndexT, 1);
    faceCardsCopyT.unshift(pickedT);
  }
}
/* - copied in mousePressedtarot
function mouseClickedT() {
  // console.log("clicked");
  for (let i = 0; i < cardsT.length; i++) {
    if (cardsT[i].hoverBool) {
      if (numFlippedT < 2) {
        cardsT[i].isFaceUp = true;
        numFlippedT++;

        // console.log(faceCardsCopy[i]);
        flippedCardsT.unshift(faceCardsCopyT[i]);
        // console.log(flippedCards);
        console.log(numFlippedT);

        if (flippedCardsT[0] == flippedCardsT[1]) {
          flippedCardsT[0].setT = true;
          flippedCardsT[1].setT = true;
          matchT = true;
          console.log("match");
          matchedCardsT.unshift(faceCardsCopyT[i]);

          numFlippedT = 0;
          setT++;

          // console.log(set)
        } else {
          matchT = false;
        }
      }
      if (numFlippedT == 2) {
        timerT = frameCount;
        console.log(flippedCardsT);
        flippedCardsT.pop();
        flippedCardsT.pop();
      }

      if (numFlippedT > 2) {
        if (matchT) {
          // cards[i].isFaceUp = true;
          console.log(" match");
          timerT = frameCount;
          numFlippedT = 0;

          console.log(flippedCardsT);
          cardsT[i].setT = true;
        } else if (!matchT) {
          // cards[i].isFaceUp = false;
          console.log("no match");

          console.log(flippedCardsT);
          cardsT[i].setT = false;
        }
      }
    }
  }
  // }
}
*/


function tarotMousePressed() {
  // console.log("clicked");
  for (let i = 0; i < cardsT.length; i++) {
    if (cardsT[i].hoverBool) {
      if (numFlippedT < 2) {
        cardsT[i].isFaceUp = true;
        numFlippedT++;

        // console.log(faceCardsCopy[i]);
        flippedCardsT.unshift(faceCardsCopyT[i]);
        // console.log(flippedCards);
        console.log(numFlippedT);

        if (flippedCardsT[0] == flippedCardsT[1]) {
          flippedCardsT[0].setT = true;
          flippedCardsT[1].setT = true;
          matchT = true;
          console.log("match");
          matchedCardsT.unshift(faceCardsCopyT[i]);

          numFlippedT = 0;
          setT++;

          // console.log(set)
        } else {
          matchT = false;
        }
      }
      if (numFlippedT == 2) {
        timerT = frameCount;
        console.log(flippedCardsT);
        flippedCardsT.pop();
        flippedCardsT.pop();
      }

      if (numFlippedT > 2) {
        if (matchT) {
          // cards[i].isFaceUp = true;
          console.log(" match");
          timerT = frameCount;
          numFlippedT = 0;

          console.log(flippedCardsT);
          cardsT[i].setT = true;
        } else if (!matchT) {
          // cards[i].isFaceUp = false;
          console.log("no match");

          console.log(flippedCardsT);
          cardsT[i].setT = false;
        }
      }
    }
  }

}

function tarotKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}