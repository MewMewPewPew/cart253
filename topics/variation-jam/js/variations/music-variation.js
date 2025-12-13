/**
 * This file contains the code to run *only* the music variation part of the program.
 * Note how it has its own draw, musicDraw(), and its own keyPressed, musicKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
"use strict";


let cardsM;
let cardM;
var colNumM = 4;
var rowNumM = 4;
let selectedM = [];
let flippedCardsM = [];
let myFontM;
let pickedM;
let shuffledM;
let cardFaceM;
//Images
let backgroundImageM;
let soundButtonOff, soundButtonOffH, soundButtonWin;
let img1M, img2M, img3M, img4M, img5M, img6M, img7M, img8M;
//Sounds
let soundWin;
let sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;
let playOnce = true;
let faceCardsM, faceCardsCopyM;
let randomIndexM;
let hoverM = false;
let numFlippedM = 0;
let timerM = -1;
let matchBoolM;

let delayM = 60;
let setM = 0;
let matchM = false;
let matchedCardsM = [];
let confettiM = [];
/**
 * This will be called just before the music variation starts
 */
function musicSetup() {
    createCanvas(500, 500);
    background(0);
    background(backgroundImageM);
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
  faceCardsCopyM = [];
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

  //for (let i = 0; i < 50; i++) {
    //confettiM[i] = new ConfettiM();
  //}

}

/**
 * This will be called every frame when the music variation is active
 */
function musicDraw() {
    
    
    
    
  // shuffling(selected);
  if (!matchM) {
    if (frameCount - timerM> delayM && timerM != -1) {
      for (let i = 0; i < cardsM.length; i++) {
        if (!cardsM[i].setM) {
          cardsM[i].isFaceUp = false;
        }
        numFlippedM = 0;
        timerM = -1;
        setM = 0;
      }
    }
  }

  if (matchM) {
    for (let i = 0; i < setM; i++) {
      // flippedCards[i].isFaceUp = true;
      console.log("set is " + setM);
      numFlippedM = 0;
      timerM = -1;
      // match=false
      // flippedCardsCopy[i].set=false
      // matchedCards.push(card[i])
      // cards[i].matched()
      // cards[i].isFaceUp = true;
    }
  }

  // checking to see display of card distribution
  for (let i = 0; i < cardsM.length; i++) {
    // cards[i].isFaceUp = true;
    cardsM[i].body();

    cardsM[i].hover();

    cardsM[i].display();
    if (setM == 8){
        cardsM[i].winDisplay();
        
    }
  }

  // if(match){
  //  for(i=0;i<flippedCards.length;i++)
  //  flippedCards[i].display()
  // }

  if (setM == 8 && playOnce === true) {
  musicGameWin();
  
   }
}

class CardM {
  constructor(x, y, w, h, pickedM,pickedSoundM) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.stroke = color(255);
    this.col = color(225);
    this.soundButtonOff = soundButtonOff;
    this.soundButtonOffH = soundButtonOffH;
    this.soundButtonWin =soundButtonWin;
    this.pickedM = pickedM;
    this.pickedSoundM = pickedSoundM;
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
      pickedSoundM.play();
    }
    // else {
    //   stroke("yellow");
    //   rect(this.x, this.y, this.w / 4, this.h / 4, 7);
    // }
  }
  
  winDisplay(){
imageMode(CORNER);
      image(this.soundButtonWin, this.x-25, this.y-25, this.w, this.h);
  }
  matched() {
    if (matchM) {
      this.display();
    }
  }
}




function myShuffleM(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = shuffledM;
        faceCardsCopyM.unshift(pickedM);
    }
    
}


/* old functions
function myShuffle() {
    

  //   faceCards = faceCards.concat(faceCards)
  //   faceCards2=faceCards
  //   // console.log(faceCards)
  // console.log(faceCards2)

 // console.log(faceCardsT);
  for (let i = 0; i < 16; i++) {
    // randomly picking one card from the array of face cards
    randomIndexM= floor(random(0, faceCardsM.image.length));
    pickedM = faceCardsM[randomIndexM];

    // push 2 copies onto array since there are two of each
    selectedM.push(pickedM);
    // selected.push(picked);
    // remove card from faces array so we don't re-pick the same cards
    faceCardsM.splice(randomIndexM, 1);
    faceCardsCopyM.unshift(shuffledM);
  }
  
}
// not being used
function shufflingM(array) {
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
}*/
/**
 * This will be called whenever a key is pressed while the music variation is active
 */
function musicKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}
/*
function mouseClicked(){
if (img2M){
        sound3.play();
        //sound1 = false;
    }
}*/
/*
function soundChecked(){
    console.log("1check");
    if (img1M === mousePressed){
         console.log("2check");
        sound1.play();
        //sound1 = false;
    }
    
}*/
function musicGameWin(){
  //add delay or add silence before in the file
        soundWin.play();
        playOnce = false;
        }
/**
 * This will be called whenever the mouse is pressed while the music variation is active
 */
function musicMousePressed() {
  // console.log("clicked");
        
  for (let i = 0; i < cardsM.length; i++) {
    if (cardsM[i].hoverBool) {
        if (numFlippedM < 2) {
            cardsM[i].isFaceUp = true;
            numFlippedM++;
            
            // console.log(faceCardsCopy[i]);
            flippedCardsM.unshift(faceCardsCopyM[i]);
            // console.log(flippedCards);
            console.log(numFlippedM);
            
            if (flippedCardsM[0] == flippedCardsM[1]) {
                flippedCardsM[0].setM = true;
                flippedCardsM[1].setM = true;
                matchM = true;
                console.log("match");
                matchedCardsM.unshift(faceCardsCopyM[i]);
                
                numFlippedM = 0;
                setM++;
                
                // console.log(set)
            } else {
          matchM = false;
        }
    }
    
    
      if (numFlippedM == 2) {
        timerM = frameCount;
        console.log(flippedCardsM);
        flippedCardsM.pop();
        flippedCardsM.pop();
      }

      if (numFlippedM > 2) {
        if (matchM) {
          // cards[i].isFaceUp = true;
          console.log(" match");
          timerM = frameCount;
          numFlippedM = 0;

          console.log(flippedCardsM);
          cardsM[i].setM = true;
        } else if (!matchM) {
          // cards[i].isFaceUp = false;
          console.log("no match");

          console.log(flippedCardsM);
          cardsM[i].setM = false;
        }
      }
    }
  }

}
