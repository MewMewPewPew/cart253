"use strict";
let fontDot;
//making the images I use undefined
let coverCard;
let coverCardH;
let backgroundImageT;
let sun, death, magician, fortune, chariot, lovers, tower, hermit;
let bigCard1;
// let bigCard2;
let imgCard;
let imgWin;
let imgLose;
let swordCoin;
let cup;
let wand;
let starsGif;
let heartsGif;
let imgheart;
// outcomes when true at cardsOutcomes function
let sunWin, deathCycle, magicianMagic, fortuneLuck, chariotMove, loversHeart, towerGameOver, hermitAdvice;
// The sun card outcome variables
let gameWin = false;
let winning = {
  //img is contain 
  x:0,
  y:0,
  text:{
    text: "You Won ! :)",
    x: 732,
    y: 220,  
    stroke: "#faf88dff",
    weight: 3,
    fill: "#000000ff",
    size: 50,
  },
}
//The tower card outcome variables
let gameLose = false;
let losing = {
  //img is contain 
  x:0,
  y:0,
  text:{
    text: "You Lost ! :(",
    x: 732,
    y: 220,  
    stroke: "#faf88dff",
    weight: 3,
    fill: "#000000ff",
    size: 50,
  },
}
//The magician card outcome variables
let magic = false;
let sorcery = {
  swordCoin:{
    x: 1100,
    y: 400,
    w: 200,
    h: 342,
  },
  wand: {
    x: 638,
    y: 160,
    w: 200,
    h: 342,
  },
  cup:{
    x: 240,
    y: 7,
    w: 200,
    h: 342,
  },
  stars:{
    x: 638,
    y: 170,
  },
}
// The lovers card outcome variables
let love = false;
let heart ={
  x: 775,
  y: 50,
  size: 59, 
}
// Death card outcome variables (fake restart) ?
let endCycle = false;
// The hermit card outcome variables 
let hermitSpeech = false;
let advice = {
  x: 1080,
  y: 250,
  fill: "#1e3c5fff",
  size: 20,
  text: "Listen carefully... \n      As you may have experienced,\n           when you match a pair of tarot\n                cards together, your fate \n                  becomes determined by it's \n                   meaning... The sun will\n                   guide you away from\n                    the terrible tower.",
  //idk if a box is needed yet...
  box:{
    x: 1390,
    y: 120,
    x2: 400,
    y2: 520,
    fill: "#ffffffff",
  },
}
// The chariot outcome... 
let chariotGo = false;

//Now the fortune outcome variables (wheel of fortune)... 
let gamble = false; 
let textFortune = {
  stroke: "#56368a",
  weight: 2,
  size: 40,
  fill: "#f3e854ff", //f3e854ff
  text: "Click and let your fate in the hands \n of the Wheel of Fortune ",
  x: 732,
  y: 180,  
}
let wheel = {
  goodSide:"#7d96ca",
  badSide: "#dd79a8ff",
  stroke: "#f3ead7ff",
  weight: 2,
  //arc in function
  //texts + triangle 
  size: 35,
  fill: "#56368a",
  x1: 10,
  y1: -151,
  x2: 0,
  y2: -130,
  x3: -10,
  y3: -151,
}
let gambleOptions = [
  "Bad luck",
  "Good luck",
]
let numGamble = gambleOptions.length;
let angle = 0; 

let targetAngle = 0;
let spinning = false;
let speed = 0;
let deceleration = 0.90; // Slow down factor
let shuffleOptions;
let textToShow;
 
let artistMention ={
  text: "Most of the art used in this project \nwere made by Aya Takano. The symbolism & spirituality \nin her tarot cards was researched with Reika Akatsuki.",
  x: 0,
  y: 680,
  size: 15,
  fill: "#1e3c5fff",
  link:{
    text:"Click here to read more about it",
    Link: "https://en.gallery-kaikaikiki.com/2021/08/aya-takano-tarot-card/",
    x: 70,
    y: 710,
    fill:"#1e3c5fff"
  },
}
// most of these variables are from the original game I copied (: )
let cardsT = [];
let cardT;
var colNumT = 4;
var rowNumT = 4;
let flippedCardsT = [];
let pickedT;
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



function tarotSetup() {
  
  createCanvas(1465, 800);
  
  // background(220)
  // rectMode(CENTER)

  let cardsToShuffle = [
    {
      image: sun,
      outcome: sunWin,
      prophecies: [
        "Not only is your futur bright, \nyou are light you see reflected",
        "Breathe, \nfeel the sun and warmht around you",
        "You don't need to prove yourself, only to be",
        "How could you forget? \nThe universe intrinsicallty accept your existences. \nYou are the universe",
        "Existing can be so wonderful",
      ]
    },
    {
      image: death,
      outcome: deathCycle,
      prophecies: [
        "Start all over again and be reborn with what you now know",
        "See death as a transformation, don't fear change",
        "If you don't take action, nothing will change. Somethimes you have to adapt.",
        "The end of a cycle means the begginning of a new",
        "Be your own reaper of stagnant evil",
      ]
    },
    {
      image: magician,
      outcome: magicianMagic,
      prophecies: [
        "Realize you all within and around you to create.",
        "Your power of manifestation is strong \nsince it drices you to act.",
        "Create !!! ",
        "Your futur is something you make yourself", // quote from the tarot website*
        "Try to see the tools you have, \nimagine what you can make out of",
        "Create your reality",
      ]
    },
    {
      image: fortune,
      outcome: fortuneLuck,
      prophecies: [
        "Everyone has their own life, their own way of living. \nI am I and this is okay !", // quote from the tarot website
        "Is objectivity real?", //*?
        "Embrace chaos, it's what made you",
        "Are you lucky in life?",
        "Our shadow can easily start dictating our light",
        "Maybe",
      ]
    },
    {
      image: chariot,
      outcome: chariotMove,
      prophecies: [
        "The only way is through",
        "You can do this, push forward",
        "Do what you want no matter the obstacles",
        "Live your life!",
        "Run toward what you care for, \nand if you don't know discover it",
        "YOLO !",
      ]
    },
    {
      image: lovers,
      outcome: loversHeart,
      prophecies: [
        "Cupid has been looking at you, \nwho will be the lucky one?",
        "Love is in the air...",
        "First comes self-love, then you can project that into the world",
        "A fragrance of rose with assorted glasses, \nwhat could go wrong?",
        "Learning to be vulnerable leads to profound relationships",
      ]
    },
    {
      image: tower,
      outcome: towerGameOver,
      prophecies: [
        "What was that sound ? A crack?",
        "Denial is a river in Egypt",
        "What happends to a foundation build from eggshells?",
        "Sometimes starting over it the best solution",
        "Anxious? You should be",
      ]
    },
    {
      image: hermit,
      outcome: hermitAdvice,
      prophecies: [
        "...",
        "...",
        "...",
        "...",
        "hum...",
      ]
    },
  ]
  let selectedT = [...cardsToShuffle, ...cardsToShuffle];
  

  myShuffleT(selectedT);
  faceCardsCopyT = [];
  cardT = [];
  //   calling class card + position of row
  for (let i = 0; i < colNumT; i++) {
    for (let j = 0; j < rowNumT; j++) {
      var cardX = 510 + i * 150;
      var cardY = j * 180 + 120;
      // cards.push(new Card(cardX, cardY,50,50));

      var cardFaceT = selectedT.pop();
      var cardFaceTP = cardFaceT.prophecies; 
      cardT = new CardT(cardX, cardY, 100, 170, cardFaceT.image, cardFaceTP[Math.floor(Math.random()*cardFaceTP.length)]);
      cardsT.push(cardT);
      
    }
  }
  //fortune card outcome (gamble 1/2 chance to win/lose)
  shuffleOptions = shuffle(gambleOptions);
}

// Flip toutes les cartes dans X frames
let flipAllCardsTimeout = 0;

/**
 * This will be called every frame when the music variation is active
 */
function tarotDraw() {
  background(225);
  background(backgroundImageT);
  
  // Quand on atteint "1", on flip toutes les cartes.
  if(flipAllCardsTimeout == 1){
    for (let i = 0; i < cardsT.length; i++) {
      cardsT[i].isFaceUp = false;
    }
  }
   // À chaque image affiché, on reduit de 1 le timeout,
  // en attendant qu'il flip toutes les cartes
  if(flipAllCardsTimeout > 0) flipAllCardsTimeout--;

  //function to mention the artist's work I used
  takanoMention();

  // shuffling(selected);
  if (!matchT ) { // && gamble === false
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

    cardsT[i].displayImg();

    cardsT[i].displayText();

    if (matchT) {
      cardsT[i].matched();
    }
  }

  // if(match){
  //  for(i=0;i<flippedCards.length;i++)
  //  flippedCards[i].display()
  // }

  //if (setT == 8) {
  // console.log("hello");
  cardsOutcomes();
  outcomesEnd();
}


class CardT {
  constructor(x, y, w, h, pickedT, text, outcome) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.pickedT = pickedT;
    this.text = text;
    this.outcome = outcome;
    this.stroke = color(255);
    this.col = color(200);
    this.coverCard = coverCard;
    this.coverCardH = coverCardH;
    this.isFaceUp = false;
    this.setT = false;
    this.size = 30;
    this.font = fontDot;
    this.fill = color(0);
  }

  body() {
    rectMode(CENTER);
    stroke(this.stroke);
    fill(this.col);
    rect(this.x, this.y, this.w, this.h, 4);
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

  displayImg() {
    // rectMode(CENTER)
    if (this.isFaceUp) {
      imageMode(CORNER);
      imgCard = image(this.pickedT, this.x -50, this.y -85, this.w, this.h);
      bigCard1 = image(this.pickedT, 0, 150, 260, 442); 
      //this.isFaceUp = false;
    }
  }
  displayText(){
    if (this.isFaceUp) {
      push();
      noStroke();
      fill(this.stroke);
      rect(1390, 200, 400, 1000);
      pop();
      //imageMode(CORNER);
      //console.log(this.text);
      noStroke();
      textSize(this.size);
      fill(this.fill);
      text(this.text, 1320, 310, 260, 300);
      textFont(this.font);
    }
    
  }
  matched() {
    if (this.outcome == sunWin){
      gameWin = true;
    }
    // The chariot outcome (put in Card class ?)
    if(chariotGo === true){
    this.x = this.x +1
    }
    //else if (chariot === false){
    //}
  }
  /*
  bigDisplay(){
    //if (this.isFaceUp && numFlippedT<= 1) {
      //imageMode(CORNER);
      //console.log("heyheyehey");
    //making a replica of the card (to give a fortune)
      //bigCard1 = image(this.pickedT, 0, 150, 260, 442);  

    //}
    //else 
      if  (this.isFaceUp && numFlippedT>=2) {
      console.log("yoyoyo");
      imageMode(CORNER);
    //making a replica of the card (to give a fortune)
      //bigCard1 = hide();
      //bigCard1 = image(this.pickedT, -100, 150, 260, 442); 
      //hiddingCard1();
      //bigCard1 = image(this.pickedT, 500, 150, 260, 442); 
      //bigCard2 = image(this.pickedT, 0, 150, 260, 442);  
      
    }else if (this.isFaceUp ) {
      imageMode(CORNER);
      console.log("heyheyehey");
    //making a replica of the card (to give a fortune)
      bigCard1 = image(this.pickedT, 0, 150, 260, 442);  

    }
  }
*/
  
}
//is it being used ?
function hiddingCard1(){
  bigCard1.hide();
}
// copied from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
function myShuffleT(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        //pickedT = array[j];
        //faceCardsCopyT.unshift(cardT);
      }   
}
//not using this function anymore
function myShuffleT0ld() {
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

// not using this function anymore
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

let lastCardIdClicked = -1;

function tarotMousePressed() {

  // Si on attend pour flipper les cartes,
  // on ignore la sourie
  if (flipAllCardsTimeout != 0) return;

  // console.log("clicked");
  for (let i = 0; i < cardsT.length; i++) {
    if (cardsT[i].hoverBool) {
      // si on "hover" par dessus la carte...
       
      let currentCard = cardsT[i]; // la carte qu'on click
       currentCard.isFaceUp = true; // flip the card up!

       if (lastCardIdClicked == -1){ // Si on a jamais clicker sur une carte...
        lastCardIdClicked = i; // On la definit comme la dernière carte clicker
      } else if (lastCardIdClicked != i){ // si on click sur une carte différente...
        // si on click pas deux fois sur la même carte...
        if (cardsT[i].pickedT != cardsT[lastCardIdClicked].pickedT){
          // si les cartes ne sont pas pareil, on flip toutes les cartes
          // dans 45 frames
          flipAllCardsTimeout = 45;
        }

        // On "reset" la dernière carte clické
        lastCardIdClicked = -1;
      }

      //if (numFlippedT < 2 ) { //|| numFlippedT == 2 >
      //  cardsT[i].isFaceUp = true;
      //  numFlippedT++;

      //  // console.log(faceCardsCopy[i]);
      //  flippedCardsT.unshift(faceCardsCopyT[i]);
      //  // console.log(flippedCards);
      //  console.log(numFlippedT);

      //  if (flippedCardsT[0] == flippedCardsT[1]) {
      //    flippedCardsT[0].setT = true;
      //    flippedCardsT[1].setT = true;
      //    matchT = true;
      //    console.log("match");
      //    matchedCardsT.unshift(faceCardsCopyT[i]);

      //    numFlippedT = 0;
      //    setT++;

      //    // console.log(set)
      //  } else {
      //    matchT = false;
      //  }
      //}
      //if (numFlippedT == 2) {
      //  cardsT[i].isFaceUp = true;
      //  timerT = frameCount;
      //  console.log(flippedCardsT);
      //  flippedCardsT.pop();
      //  flippedCardsT.pop();
      //}

      //if (numFlippedT > 2) {
      //  if (matchT) {
      //    //cards[i].isFaceUp = true;
      //    console.log(" match");
      //    timerT = frameCount;
      //    numFlippedT = 0;

      //    console.log(flippedCardsT);
      //    cardsT[i].setT = true;
      //  } else if (!matchT) {
      //    //cards[i].isFaceUp = false;
      //    console.log("no match");

      //    console.log(flippedCardsT);
      //    cardsT[i].setT = false;
      //  }
      //}
    }
  }
  //Fortune Card outcome :3 
  if (!spinning && gamble === true) {
    angle = 0;
    targetAngle = random(PI, 2 * PI) * 5;
    speed = targetAngle / 10; // Initial speed
    spinning = true;
    
  }

}
//escape key
function tarotKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}
//restart key (either if one knows about it or ?)
//function tarotKeyPressed(event) {
//    if (event.keyCode === 27) {
//        state = "menu";
//    }
//}

function outcomesEnd(){
//Wining ending
  if (gameWin === true){
    //console.log("Win");
    image(imgWin, winning.x, winning.y, width, height, 0, 0, imgWin.width, imgWin.height, CONTAIN);
    
    push();
    textAlign(CENTER, CENTER);
    textFont(fontDot);
    stroke(winning.text.stroke);
    strokeWeight(winning.text.weight);
    textSize(winning.text.size);
    fill(winning.text.fill);
    text(winning.text.text, winning.text.x, winning.text.y);
    pop();
    //make all the cards flip down + unflippable ! 
    //restart button?
  } 
  //Losing ending
  if (gameLose === true){
    //console.log("Lose");
    image(imgLose, winning.x, winning.y, width, height, 0, 0, imgLose.width, imgLose.height, CONTAIN);
    
    push();
    textAlign(CENTER, CENTER);
    textFont(fontDot);
    stroke(losing.text.stroke);
    strokeWeight(losing.text.weight);
    textSize(losing.text.size);
    fill(losing.text.fill);
    text(losing.text.text, losing.text.x, losing.text.y);
    pop();
    love = false;
    magic = false;

    //make all the cards flip down + unflippable ! 
    //restart button?
  }
}
function cardsOutcomes(){
  
  //The magician outcome (add-on)
  if (magic === true){
    //console.log("magic is real !");
    image(swordCoin, sorcery.swordCoin.x, sorcery.swordCoin.y, sorcery.swordCoin.w, sorcery.swordCoin.h);
    image(wand, sorcery.wand.x, sorcery.wand.y, sorcery.wand.w, sorcery.wand.h);
    image(cup, sorcery.cup.x, sorcery.cup.y,sorcery.cup.w, sorcery.cup.h);
    starsGif.show();
    starsGif.position(sorcery.stars.x, sorcery.stars.y, sorcery.stars.w, sorcery.stars.h);
  }  
  else if (magic === false){
    starsGif.hide();
  }
  // The lovers outcome (add-on)
  if(love === true){
    //console.log("love is real !");
    heartsGif.show();
    heartsGif.position(heart.x, heart.y);
    heartsGif.size(heart.size, AUTO);
  }
  else if (love === false){
    heartsGif.hide();
  }
  // Death outcome (fake restart)
  if(endCycle === true){
    //console.log("transformation is real !");
    // add transition like a black flash or lil gif/animation ? 
    //matchT = false; // doesn't work cuz of setT*
  }
  // The hermit outcome (add-on advice/instruction)
  if(hermitSpeech === true){
    push();
    fill(advice.box.fill);
    rect(advice.box.x, advice.box.y,advice.box.x2,advice.box.y2);
    pop();
    push();
    noStroke();
    textSize(advice.size);
    fill(advice.fill);
    textFont(fontDot); 
    text(advice.text,advice.x, advice.y );
    pop();
    
    for (let i = 0; i < cardsT.length; i++) {
      // if a card is flipped after a pair, the advice dissapear
        if (numFlippedT == 3 || numFlippedT == 5 || numFlippedT == 7 || numFlippedT == 9 || numFlippedT == 11 || numFlippedT == 13 || numFlippedT == 15) {
          hermitSpeech = false;
        }
    }
  }
  // The chariot outcome (put in Card class ?)
  // Now the fortune outcome...
  if(gamble === true){
    // draw the text ?
    
    textAlign(CENTER, CENTER);
    textFont(fontDot);
    stroke(textFortune.stroke);
    strokeWeight(textFortune.weight);
    textSize(textFortune.size);
    fill(textFortune.fill);
    text(textFortune.text, textFortune.x, textFortune.y);
    
    wheelOfFortune();
    starsGif.show();
    starsGif.position(sorcery.stars.x, sorcery.stars.y, sorcery.stars.w, sorcery.stars.h);
  }
}
function wheelOfFortune(){
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 2);

  let sliceAngle = TWO_PI / numGamble;
  
    
  // Draw the wheel
  for (let i = 0; i < numGamble; i++) {
    let startAngle = i * sliceAngle + angle;
    let endAngle = (i + 1) * sliceAngle + angle;
    fill(i % 2 === 0 ? wheel.badSide : wheel.goodSide);
    stroke(wheel.stroke);
    strokeWeight(wheel.weight);
    arc(0, 0, 300, 300, startAngle, endAngle, PIE);

    // Draw the name
    fill(0);
    let midAngle = (startAngle + endAngle) / 2;
    let nameX = cos(midAngle) * 110; // Moved closer to the center
    let nameY = sin(midAngle) * 110; // Moved closer to the center
    push();
    translate(nameX, nameY);
    rotate(midAngle + HALF_PI); // Rotate 90 degrees to align with the segment
    noStroke();
    // Adjust text size to fit within the arc
    textSize(wheel.size); // Use a fixed size for larger text
    textFont(fontDot);  
    fill(wheel.fill);
    textToShow = gambleOptions[i];
    // Ensure the text fits within the segment
    //while (textWidth(textToShow) > 70) {
    //  textSize(textSize() - 1);
    //}
    text(textToShow, 0, 0);
    pop();
  }

  // Draw the pointer on the **TOP side
  fill(wheel.fill);
  noStroke();
  triangle(wheel.x1, wheel.y1, wheel.x2, wheel.y2, wheel.x3, wheel.y3);

  // Spin the wheel if spinning is true
  if (spinning) {
    frameRate(60);

    angle += speed;
    speed *= deceleration; // Slow down over time

    if (speed < 0.001) {
      spinning = false;
      speed = 0;

      let normalizedAngle = (angle % TWO_PI + TWO_PI) % TWO_PI;
      let selectedIndex = Math.floor((normalizedAngle + sliceAngle / 2) / sliceAngle) % numGamble;
      //alert("Selected: " + gambleOptions[selectedIndex]);
      if(gambleOptions[selectedIndex] == gambleOptions[0]){
        gameWin = true;
        gamble = false;
      }
      else if(gambleOptions[selectedIndex] == gambleOptions[1]){
        gameLose = true;
        gamble = false;
      }
    }
  }

}

function takanoMention(){
  //placing the credits
  textFont(fontDot);
  textSize(artistMention.size);
  textAlign(LEFT);
  noStroke();
  fill(artistMention.fill);
  text(artistMention.text, artistMention.x, artistMention.y);
  //created a html element link 
  let a = createA(artistMention.link.Link, artistMention.link.text, '_blank');
  a.position(artistMention.link.x, artistMention.link.y);
  a.style('color', artistMention.link.fill);
}