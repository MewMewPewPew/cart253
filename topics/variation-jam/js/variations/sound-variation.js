"use strict";
/**Do you remember?
 * MEMORY GAMES - Sound variation file
 * 
 * [explanation copied from scipt.js]
 * The third variation changes our senses. This time, the visuals are made different with more industrial and 
 * realistic images and styling. The cards are now on & off switch buttons that when clicked instead play 8 
 * various sounds. 
 *          Instruction:
 *                      When clicking a button, hear 1 of 8 sound as the button light up.
 *                      Try and match this same sounds. 
 *                      If 2 buttons revealed don't have the same sound, they are turned off.
 *                      If a pair of sounds is found, they stay on. 
 *                      If one finds the 8 pairs of sounds successively, they win. All buttons turn green and a
 *                      victory sound is heard.
 */

// html body background-color
let backgroundColorS = "#000000ff"; 

//Sounds
let soundWin;
let sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;
let hasPlayed = false;
let hasPlayedW = false;

//Images
let backgroundImageM;
let soundButtonOff, soundButtonOffH, soundButtonWin;
let img1M, img2M, img3M, img4M, img5M, img6M, img7M, img8M;

// cards & important variables 
let faceCardsM;
let cardFaceM;
let cardsM;
let cardM;
var colNumM = 4;
var rowNumM = 4;
let selectedM = [];
let pickedM;
let winningM = false;
let cardsMatchedM = 0;
let flipAllCardsTimeoutM = 0; // Flip all cards in "x" frames
let lastCardIdClickedM = -1;

/**
 * This will be called just before the music variation starts
 */
function soundSetup() {
  changeColorS();
  createCanvas(500, 500);
  background(0);

  //Where the image & sound of each card/button is determined
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
  //make the 8 cards be a pair (16)
  let selectedM = [...faceCardsM, ...faceCardsM];
  
  myShuffleM(selectedM);//shuffle all the cards objects

  cardsM = [];
  //calling the class card + defining they position
  for (let i = 0; i < colNumM; i++) {
    for (let j = 0; j < rowNumM; j++) {
      var cardX = 220 + i * 70;
      var cardY = j * 70 + 110;
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

  // When reached "1", flip all cards
  if(flipAllCardsTimeoutM == 1){
    for (let i = 0; i < cardsM.length; i++) {
      cardsM[i].isFaceUp = false;
    }
  }
  //Each showned imaged, timeout -- until all cards get flipped
  if(flipAllCardsTimeoutM > 0) flipAllCardsTimeoutM--;
  
  // checking to see the display of card distribution
  for (let i = 0; i < cardsM.length; i++) {
    // cards[i].isFaceUp = true;
    cardsM[i].body();

    cardsM[i].hover();

    cardsM[i].display(); // cards/button images
    
    if (cardsMatchedM == 8){
        cardsM[i].winDisplay();
        
    }
  }

  musicGameWin();

}
//CardM class acting on each cards and objects in the faceCardsM array
class CardM {
  constructor(x, y, w, h, pickedM,pickedSoundM) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.pickedM = pickedM;
    this.pickedSoundM = pickedSoundM;
    this.stroke = color(255);
    this.col = color(225);
    this.soundButtonOff = soundButtonOff;
    this.soundButtonOffH = soundButtonOffH;
    this.soundButtonWin =soundButtonWin;
    this.isFaceUp = false;
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
      this.hoverBool = true; //if hover on cards
      image(this.soundButtonOffH, this.x -25 , this.y -25 , this.w, this.h);
    } else {
      this.col = color("#ffffff1a");
      this.stroke = color(255);
      this.hoverBool = false;
      image(this.soundButtonOff, this.x -25, this.y -25, this.w, this.h);
    }
  }

  display() {
    if (this.isFaceUp) { //if card is face up
      imageMode(CORNER);
      image(this.pickedM, this.x-25, this.y-25, this.w, this.h);
    }
  }
  winDisplay(){
    imageMode(CORNER);
    image(this.soundButtonWin, this.x-25, this.y-25, this.w, this.h);
  }
}

//shuffle all the cards objects 
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

  // If we wait to flip the cards,
  if (flipAllCardsTimeoutM != 0) return;
  
  for (let i = 0; i < cardsM.length; i++) {
    if (cardsM[i].hoverBool) {
    // if we hover on a card
       
    let currentCard = cardsM[i]; // the clicked card
    currentCard.isFaceUp = true; // flip the card up
    // play card sound
      if (!currentCard.pickedSoundM.isPlaying()){
      currentCard.pickedSoundM.play();
      hasPlayed = true;
      } else if (currentCard.pickedSoundM.isPlaying && hasPlayed){ 
        currentCard.pickedSoundM.play();
      } else {
        currentCard.pickedSoundM.stop();
        hasPlayed = false;
      }

      if (lastCardIdClickedM == -1){ // if user never clicked on a card
      lastCardIdClickedM = i; // define "i" as the last card clicked
        
      } else if (lastCardIdClickedM!= i){ // If we click on a different card (& not the exact same one)
        if (cardsM[i].pickedM != cardsM[lastCardIdClickedM].pickedM){
        // if the card is not the same, flip All cards in xnumber of frames
        flipAllCardsTimeoutM = 30;
        cardsMatchedM = 0;
        } // if same card is picked
          else if (cardsM[i].pickedM == cardsM[lastCardIdClickedM].pickedM){
          //adding a score for each matched
          cardsMatchedM ++;
          let knownedMatched = cardsM[i];
          knownedMatched = true;
          console.log(cardsMatchedM + " matched sound");
          if(!knownedMatched){
            cardsMatchedM ++;
            console.log(cardsMatchedM + " matched sound");
            if(cardsMatchedM == 8){
              //flipAllCardsTimeoutM = 150; //make the green button stay a while
            }
          }
        }
      // Reset the last card clicked
      lastCardIdClickedM = -1;
      }
    }
    
  }

}

//Win ending
function musicGameWin(){
  if(cardsMatchedM == 8 && !soundWin.isPlaying() && ! hasPlayedW){ 
    //soundWin.setVolume(0.8);
    soundWin.play();
    hasPlayedW = true;
  } 
}
//escape key event
function soundKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

function changeColorS(){
// change the background color of the html
document.body.style.background = backgroundColorS;
}