"use strict";
/**Do you remember?
 * MEMORY GAMES - Music variation file
 * 
 * [explanation copied from scipt.js]
 * The fourth variation is a not completed experiment of the third variation.  
 * 
 */

// Using the "V"letter in variables/function for practicality, differenciating from other "V"ariations
// "M" letter for music (but since it derives from the now changed music variation to sound variation, letter was been used)...

// html body background-color
let backgroundColorV = "#000000ff"; 

//Sounds
let soundWinV;
let sound1M, sound2M, sound3M, sound4M, sound5M, sound6M, sound7M, sound8M;

let hasPlayedV = false;
let hasPlayedWV = false;
let allSounds;
let amp;
let volHistory;

//Images *some elements are already declared in other variations
let backgroundImageV; 
let foregroundImageV;
//let soundButtonOff, soundButtonOffH, soundButtonWin;
//let img1M, img2M, img3M, img4M, img5M, img6M, img7M, img8M;

// cards & important variables 
let faceCardsV;
let cardFaceV;
let cardsV;
let cardV;
var colNumV = 4;
var rowNumV = 4;
let selectedV = [];
let pickedV;
let winningV = false;
let cardsMatchedV = 0;
let flipAllCardsTimeoutV = 0; // Flip all cards in "x" frames
let lastCardIdClickedV = -1;

/**
 * This will be called just before the music variation starts
 */
function musicSetup() {
  changeColorV();
  createCanvas(700, 500);
  background(backgroundImageV);

  //Where the image & sound of each card/button is determined
  faceCardsV = [
    {
      image: img1M,
      sound: sound1M,
    },
    {
      image: img2M,
      sound: sound2M,
    },
    {
      image: img3M,
      sound: sound3M,
    },
    {
      image: img4M,
      sound: sound4M,
    },
    {
      image: img5M,
      sound: sound5M,
    },
    {
      image: img6M,
      sound: sound6M,
    },
    {
      image: img7M,
      sound: sound7M,
    },
    {
      image: img8M,
      sound: sound8M,
    },    
  ]
  //make the 8 cards be a pair (16)
  let selectedV = [...faceCardsV, ...faceCardsV];
  
  myShuffleV(selectedV);//shuffle all the cards objects

  cardsV = [];
  //calling the class card + defining they position
  for (let i = 0; i < colNumV; i++) {
    for (let j = 0; j < rowNumV; j++) {
      var cardX = 80 + i * 70;
      var cardY = j * 70 + 137;
      var cardFaceV = selectedV.pop();
      cardV = new CardV(cardX, cardY, 50, 50, cardFaceV.image, cardFaceV.sound);
      cardsV.push(cardV);
    }
  }
  //musicPlayVolumeSetup();
}

/**
 * This will be called every frame when the music variation is active
 */
function musicDraw() {
  

  // When reached "1", flip all cards
  if(flipAllCardsTimeoutV == 1){
    for (let i = 0; i < cardsV.length; i++) {
      cardsV[i].isFaceUp = false;
    }
  }
  //Each showned imaged, timeout -- until all cards get flipped
  if(flipAllCardsTimeoutV > 0) flipAllCardsTimeoutV--;
  
  // checking to see the display of card distribution
  for (let i = 0; i < cardsV.length; i++) {
    // cards[i].isFaceUp = true;
    cardsV[i].body();

    cardsV[i].hover();

    cardsV[i].display(); // cards/button images
    
    if (cardsMatchedV == 8){
        //cardsM[i].winDisplay();
        
    }
  }
  //musicPlayVolumeDraw();
  musicGameWinV();
  image(foregroundImageV, 0, 0, width, height, 0, 0, foregroundImageV.width, foregroundImageV.height, CONTAIN);
}
//CardM class acting on each cards and objects in the faceCardsV array
class CardV {
  constructor(x, y, w, h, pickedV,pickedSoundV) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.pickedV = pickedV;
    this.pickedSoundV = pickedSoundV;
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
      image(this.pickedV, this.x-25, this.y-25, this.w, this.h);
    }
  }
  winDisplay(){
    imageMode(CORNER);
    image(this.soundButtonWin, this.x-25, this.y-25, this.w, this.h);
  }
}

//shuffle all the cards objects 
function myShuffleV(array) {
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
function musicMousePressed() {

  // If we wait to flip the cards,
  if (flipAllCardsTimeoutV != 0) return;
  
  for (let i = 0; i < cardsV.length; i++) {
    if (cardsV[i].hoverBool) {
    // if we hover on a card
       
    let currentCard = cardsV[i]; // the clicked card
    currentCard.isFaceUp = true; // flip the card up
    // play card sound
      if (!currentCard.pickedSoundV.isPlaying()){
      currentCard.pickedSoundV.play();
      hasPlayedV = true;
      } else if (currentCard.pickedSoundV.isPlaying && hasPlayedV){ 
        currentCard.pickedSoundV.play();
      } else {
        currentCard.pickedSoundV.stop();
        hasPlayedV = false;
      }

      if (lastCardIdClickedV == -1){ // if user never clicked on a card
      lastCardIdClickedV = i; // define "i" as the last card clicked
        
      } else if (lastCardIdClickedM!= i){ // If we click on a different card (& not the exact same one)
        if (cardsV[i].pickedV != cardsV[lastCardIdClickedV].pickedV){
        // if the card is not the same, flip All cards in xnumber of frames
        flipAllCardsTimeoutV = 30;
        cardsMatchedV = 0;
        } // if same card is picked
          else if (cardsV[i].pickedV == cardsV[lastCardIdClickedV].pickedV){
          //adding a score for each matched
          cardsMatchedV ++;
          let knownedMatched = cardsV[i];
          knownedMatched = true;
          console.log(cardsMatchedV + " matched sound");
          if(!knownedMatched){
            cardsMatchedV ++;
            console.log(cardsMatchedV + " matched sound");
          }
        }
      // Reset the last card clicked
      lastCardIdClickedV = -1;
      }
    }
    
  }

}
//Starting all the song, to only change the volume later (so they all match)
function musicPlayVolumeSetup(){
  
  for (let i = 0; i < cardsV.length; i++) {
  allSounds = cardsV[cardsV.length].pickedSoundV;
  amp = new p5.Amplitude()
  allSounds.playMode('restart'); //?
  allSounds.play();
  }
  
}
function musicPlayVolumeDraw(){
  //Drawing the "screen" sound display

  //Drawing the sound vizualizer
  let vol = amp.getLevel(); //for all
  volHistory.push(vol);
  stroke(255); //color?
  noFill();
  push();
  //let currentY =map(vol, 0, 1, height,0);
  //translate(0, height / 2 - currentY);
  beginShape();
  for (let i = 0; i < volhistory.length; i++) {
    let y = map(volhistory[i], 0, 1, height / 2, 0);
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }
  // "reading" line bar
  stroke(255, 0, 0);
  line(volhistory.length, 0, volhistory.length, height);
}
//Win ending
function musicGameWinV(){
  if(cardsMatchedV == 8 && !soundWinV.isPlaying() && ! hasPlayedWV){ 
    //soundWinV.setVolume(0.8);
    soundWinV.play();
    hasPlayedWV = true;
  } 
}
//escape key event
function musicKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

function changeColorV(){
// change the background color of the html
document.body.style.background = backgroundColorV;
}
