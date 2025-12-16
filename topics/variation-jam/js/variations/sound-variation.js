/**
 * This file contains the code to run *only* the music variation part of the program.
 * Note how it has its own draw, musicDraw(), and its own keyPressed, musicKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
"use strict";



//Sounds
let soundWin;
let sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;
let hasPlayed = false;
let hasPlayedW = false;
//Images
let backgroundImageM;
let soundButtonOff, soundButtonOffH, soundButtonWin;
let img1M, img2M, img3M, img4M, img5M, img6M, img7M, img8M;

let backgroundColorS = "#000000ff"; //"#4e4c49"
let faceCardsM;
let cardFaceM;
let cardsM;
let cardM;


var colNumM = 4;
var rowNumM = 4;
let selectedM = [];
let flippedCardsM = [];
let pickedM;
let shuffledM;
let winningM = false;
let cardsMatchedM = 0;


// Flip toutes les cartes dans X frames
let flipAllCardsTimeoutM = 0;
let lastCardIdClickedM = -1;


let numFlippedM = 0;
let timerM = -1;
let matchBoolM;

let delayM = 60;
let setM = 0;
let matchM = false;



/**
 * This will be called just before the music variation starts
 */
function soundSetup() {
  changeColorS();
    createCanvas(500, 500);
    background(0);
//soundChecked();
  // background(220)
  // rectMode(CENTER)

  faceCardsM = [
    {
      image: img1M,
      sound: sound1,
    },
    {
      image: img2M,
      sound: sound2,
    },
    {
      image: img3M,
      sound: sound3,
    },
    {
      image: img4M,
      sound: sound4,
    },
    {
      image: img5M,
      sound: sound5,
    },
    {
      image: img6M,
      sound: sound6,
    },
    {
      image: img7M,
      sound: sound7,
    },
    {
      image: img8M,
      sound: sound8,
    },    
  ]

 let selectedM = [...faceCardsM, ...faceCardsM];
  
  myShuffleM(selectedM);
  cardsM = [];
  //   calling class card + position of row
  for (let i = 0; i < colNumM; i++) {
    for (let j = 0; j < rowNumM; j++) {
      var cardX = 220 + i * 70;
      var cardY = j * 70 + 110;
      // cards.push(new Card(cardX, cardY,50,50));
      var cardFaceM = selectedM.pop();
      cardM = new CardM(cardX, cardY, 50, 50, cardFaceM.image, cardFaceM.sound);
      cardsM.push(cardM);
    }
  }
  
}


/**
 * This will be called every frame when the music variation is active
 */
function soundDraw() {
 background(backgroundImageM);
  // Quand on atteint "1", on flip toutes les cartes.
  if(flipAllCardsTimeoutM == 1){
    for (let i = 0; i < cardsM.length; i++) {
      cardsM[i].isFaceUp = false;
    }
  }
   // À chaque image affiché, on reduit de 1 le timeout,
  // en attendant qu'il flip toutes les cartes
  if(flipAllCardsTimeoutM > 0) flipAllCardsTimeoutM--;
  // checking to see display of card distribution
  for (let i = 0; i < cardsM.length; i++) {
    // cards[i].isFaceUp = true;
    cardsM[i].body();

    cardsM[i].hover();

    cardsM[i].display();

    //cardsM[i].displaySound();
    
    if (cardsMatchedM == 8){
        //cardsM[i].winDisplay();
        
    }
  }

  // if(match){
  //  for(i=0;i<flippedCards.length;i++)
  //  flippedCards[i].display()
  // }


  musicGameWin();

}

class CardM {
  constructor(x, y, w, h, pickedM,pickedSoundM) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.pickedM = pickedM;
    this.pickedSoundM = pickedSoundM;
    //this.playOnce = true;
    this.stroke = color(255);
    this.col = color(225);
    this.soundButtonOff = soundButtonOff;
    this.soundButtonOffH = soundButtonOffH;
    this.soundButtonWin =soundButtonWin;
    this.isFaceUp = false;
    this.set = false;
  }

  body() {
    rectMode(CENTER);
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
      this.col = color(255);
      this.stroke = color(255);
      // rect(this.x,this.y,this.w,this.h,10)
      this.hoverBool = true;
      image(this.soundButtonOffH, this.x -25 , this.y -25 , this.w, this.h);
    } else {
      this.col = color("#ffffff1a");
      this.stroke = color(255);
      this.hoverBool = false;
      image(this.soundButtonOff, this.x -25, this.y -25, this.w, this.h);
    }
  }

  display() {
    // rectMode(CENTER)
    if (this.isFaceUp) {
      imageMode(CORNER);
      image(this.pickedM, this.x-25, this.y-25, this.w, this.h);
    }
  }
  winDisplay(){
imageMode(CORNER);
      image(this.soundButtonWin, this.x-25, this.y-25, this.w, this.h);
  }/*
  matched() {
    if (matchM) {
      this.display();
    }
  }*/
}

function myShuffleM(array) {
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
function soundMousePressed() {
  
  // console.log("clicked");
   // Si on attend pour flipper les cartes,
  // on ignore la sourie
  if (flipAllCardsTimeoutM != 0) return;
  
for (let i = 0; i < cardsM.length; i++) {
    if (cardsM[i].hoverBool) {
      // si on "hover" par dessus la carte...
       
      let currentCard = cardsM[i]; // la carte qu'on click
       currentCard.isFaceUp = true; // flip the card up!
        // play card sound
        if (!currentCard.pickedSoundM.isPlaying()){
          currentCard.pickedSoundM.play();
          hasPlayed = true;
        } else if (currentCard.pickedSoundM.isPlaying && hasPlayed){ //!hasPlayed && 
          currentCard.pickedSoundM.play();
          //hasPlayed = true;
        } else {
          currentCard.pickedSoundM.stop();
          hasPlayed = false;
        }

       if (lastCardIdClickedM == -1){ // Si on a jamais clicker sur une carte...
        lastCardIdClickedM = i; // On la definit comme la dernière carte clicker
        
      } else if (lastCardIdClickedM!= i){ // si on click sur une carte différente...
        // si on click pas deux fois sur la même carte...
        // flip the card up! 

        if (cardsM[i].pickedM != cardsM[lastCardIdClickedM].pickedM){
          // si les cartes ne sont pas pareil, on flip toutes les cartes
          // dans 100 frames (or wayy less)
          flipAllCardsTimeoutM = 30;
          cardsMatchedM = 0;
        } // same card is picked
        else if (cardsM[i].pickedM == cardsM[lastCardIdClickedM].pickedM){
  
          //adding a score for each matched
        cardsMatchedM ++;
        let knownedMatched = cardsM[i];
        knownedMatched = true;
          console.log(cardsMatchedM + " matched sound");
          if(!knownedMatched){
            cardsMatchedM ++;
            console.log(cardsMatchedM + " matched sound");
          }
        }
        // On "reset" la dernière carte clické
        lastCardIdClickedM = -1;
        
      }
    }
    
  }

}

function musicGameWin(){
  //add delay or add silence before in the file
  if(cardsMatchedM == 8 && !soundWin.isPlaying() && ! hasPlayedW){ //cardsMatchedM == 8
    //soundWin.setVolume(0.8);
    soundWin.play();
    hasPlayedW = true;
  } 
  
}

function soundKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

function changeColorS(){
// change the background color of the html
document.body.style.background = backgroundColorS;
}