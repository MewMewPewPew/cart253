"use strict";
/**Do you remember?
 * MEMORY GAMES - Tarot variation file
 * 
 * [explanation copied from scipt.js]
 * The second variation is the most complex of them all. Instead of a symbol on each pair, I was inspired by 
 * the tarot cards and chose 8 archetypes of the major arcana of the fool's journey to replace it. The Idea was 
 * to combine the two card "games" into one. With my own knowledge and the tarot deck from Aya Takano, I made 
 * each archetypes their own prophecies and outcomes. Therefore, the goal is not to pair them all but to pair 
 * the archetype you wish to make true for yourself. With this game, I unconscioully asked the user the question 
 * if one's fate is determined or not.
 *          Instruction:
 *                      When starting the game, text appears: "Select 2 cards, but be careful when pairing them 
 *                      because they will determine your fate... Double-click to start "
 *                      When clicking a faced down card, it reveals 1 of the 8 archetypes on the card with a 
 *                      bigger one also appearing on the left and a random related prophecy on the right. 
 *                      Try and match this card with another sharing the same archetype. 
 *                      The goal would be to experience all the different outcomes, rather than trying to win.
 *                      To win, one must pair either The sun card or gamble they success with a 50% chance 
 *                      with the Fortune card.
 * 
 *          Below are all the archetypes in order, their outcome in the game and meaning in real life: 
 *                      The magician, The lovers, The chariot, The hermit, Fortune, Death, The Tower & The Sun.
 *                      If "The magician" is paired: 
 *                          4 elements are added as images or gifs: a wand, a cup, a sword & a coin/pentacle.
 *                          They each represent in tarot: fire & action, water & emotion, air & ideas/rational 
 *                          thinking and earth & harverst/material/money... meaning that the magician has all 
 *                          elements required to infinitly create.
 *                      If "The lovers" is paired:
 *                          A gif of 2 hearts spinning are added to the screen. Easy methaphore here: love. The
 *                          lovers aren't necessarely about romance, but rewarding & intimate relashionships. 
 *                      If "The chariot" is paired: 
 *                          The bigger card on the left starts leaving to new horizons (y -= 10). Representing
 *                          mouvement, sometimes impulsive. Saying yes and go running in search of purpose 
 *                          despite anxieties or obstacles.
 *                      If "The hermit" is paired: 
 *                          A new prophecy is revealed. It is the image also used in the starting screen for a 
 *                          reason. Guidance, clearer instructions are showned: "Listen carefully... As you may 
 *                          have experienced, when you match a pair of tarot cards together, your fate becomes 
 *                          determined by it's meaning... Good luck". The hermit represents deep introspection 
 *                          and the knowledge gain by it. They take then the role as guides for others.    
 *                      If "Fortune" is paired: 
 *                          A wheel of fortune appears with instructions on top: "Your fate is in the hands of 
 *                          the Wheel of Fortune", both refering to the original name of this card. Fortune can
 *                          be either good fortune or bad fortune, but it is unstoppable. This gamble of two 
 *                          equal outcomes ends the game either by winning it or losing it. Fortune embraces
 *                          chaos of life by taking action in what you can change. 
 *                      If "Death" is paired: 
 *                          A cropped and + sized image of the card appears with the text: "Dead end, Click to 
 *                          restart". This outcome acts as an anti-pair and restarts the choosing process for 
 *                          the user. The Death card is often miss-judged for it's name. As much as it means 
 *                          the end of a cycle, it also means the begginning of a new one.
 *                      If "The Tower" is paired: 
 *                          A cropped and + sized image of the card appears with the text: "You Lost ! :(". It 
 *                          also takes aways the images & gifs of The lovers & The magician if revealed before. 
 *                          The tower is the losing endgame and is represented it by that because it annonces a 
 *                          bad omen. A cycle of self-fulfilling prophecy of destruction caused by denial. The 
 *                          methaphore here is that no matter how you build or try to fix something (like a 
 *                          tower), it is bound to fall if the foundations are wrong.  
 *                      If "The Sun" is paired: 
 *                          A cropped and + sized image of the card appears with the text: "You Win ! :)". It is
 *                          the winning endgame and is represented by The sun because this card means success,  
 *                          joy, fun & abundance. Comparing oneself to the sun's radiance, strengh and freedom  
 *                          or being blessed by it's warmth as a positive interpretation.
*/

//2 things are to be noted here: 
//  - The program is really slow because I didn't have time to optomize it
//  - There is an unwanted display happening making it so that: 
//        if the first card picked is more to the right and/or down than the second, 
//        the left image "this.pickedT" & the right prophecy "this.outcomes" are somehow not showned 
//        (or showned under the first pick?)

// html body background-color
let backgroundColorT = "#ffffff";

// outcomes variables of cards :
// The sun card 
let gameWin = false;
let winning = {
  //img is contain 
  x:0,
  y:0,
  text:{
    text: "You Win ! :)",
    x: 732,
    y: 220,  
    stroke: "#faf88dff",
    weight: 3,
    fill: "#000000ff",
    size: 50,
  },
}
//The tower card 
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
//The magician card 
let magic = false;
let sorcery = {
  swordCoin:{
    x: 1000,
    y: 490,
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
// The lovers card 
let love = false;
let heart ={
  x: 775,
  y: 50,
  size: 59, 
}
// Death card 
let endCycle = false;
let restart = {
  x:0,
  y:0,
  text:{
    text: "Dead end\nClick to restart",
    x: 732,
    y: 680,  
    stroke: "#ee2842ff",
    weight: 3,
    fill: "#000000ff",
    size: 50,
  },
}
// The hermit card 
let hermitSpeech = false;
let advice = {
  x: 1080,
  y: 250,
  fill: "#312b66ff",
  size: 20,
  text: "Listen carefully... \n      As you may have experienced,\n           when you match a pair of tarot\n                cards together, your fate \n                  becomes determined by it's \n                   meaning... \n\n\n\n                  Good luck",
  color: {
    text: "\n                   The sun will guide you\n                   Stay far from the tower\n                   Fortune isn't always good",
    fill: "#ee2842ff",
    y: 375,
  },
  box:{
    x: 1390,
    y: 120,
    x2: 400,
    y2: 520,
    fill: "#ffffffff",
  },
}
// The chariot outcome
let chariotGo = false;
//The fortune(wheel of fortune)
let gamble = false; 
let textFortune = {
  stroke: "#ffffffff",
  weight: 7,
  size: 50,
  fill: "#56368a", //f3e854ff
  text: "Your fate is in the hands \nof the Wheel of Fortune",
  x: 732,
  y: 160,  
}
let wheel = {
  goodSide:"#7d96ca",
  badSide: "#dd79a8ff",
  stroke: "#f3ead7ff",
  weight: 2,
  //arc in function
  //texts + triangle 
  size: 35,
  textStroke: "#fff7adff",
  textWeight: 1,
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

// Text
let colorProphecy = "#3a6e50ff";
let linkT; 
let artistMention = {
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
// Intruction screen
let instruction = true;
let instructionDisplay = {
  text: "Tarot Memory",
  x: 732,
  y: 105,  
  stroke: "#d32f5bb2",
  weight: 5,
  fill: "#fdf5e8ff",
  size: 55,
  below:{
    text:"Select 2 cards,\nbut be careful when pairing them because they will determine your fate...\n\nDouble-click to start",
    size: 40,
    x: 731,
    y: 480,
    x2: 500,
    y2: 600,
    stroke: "#f1e5d0c2",
    weight: 4,
    fill: "#254238ff", //"#d32f5b" "#1a1438ff"
  },
  img: {
    x:0,
    y:0,
  }
}

// making the images I use global
let instrucionScreen;
let coverCard;
let coverCardH;
let backgroundImageT;
let sun, death, magician, fortune, chariot, lovers, tower, hermit;
let imgWin;
let deadEnd;
let imgLose;
let imgCard;
let bigCard;
let bigCard1;
let bigCard2;
let chariotCard1 = {
  y: 150,
};
let swordCoin;
let cup;
let wand;
let imgheart;

// cards & important variables 
let cardsT = [];
let cardT;
var colNumT = 4;
var rowNumT = 4;
let pickedT;
let outcomes;
let flipAllCardsTimeout = 0; // Flip all cards in "x" frames
let lastCardIdClicked = -1;

function tarotSetup() {
  changeColorT();
  createCanvas(1465, 800);

  //Where the image, outcome & prophecies of each card is determined
  let cardsToShuffle = [
    {
      image: sun,
      outcome: "sunWin",
      prophecies: [
        "Not only is your futur bright, \nyou are light you see reflected",
        "Breathe, \nfeel the sun and warmth around you",
        "You don't need to prove yourself, only to be",
        "How could you forget? \nThe universe intrinsically accept your existences because you are the universe",
        "Existing can be so wonderful",
      ]
    },
    {
      image: death,
      outcome: "deathCycle",
      prophecies: [
        "Start all over again and be reborn with what you now know",
        "See death as a transformation, don't fear change",
        "If you don't take action, nothing will change. Somethimes you have to adapt.",
        "The end of a cycle means the begginning of a new one",
        "Be your own reaper of stagnant evil",
      ]
    },
    {
      image: magician,
      outcome: "magicianMagic",
      prophecies: [
        "Realize you all within and around you to create.",
        "Your power of manifestation is strong \nsince it drives you to act.",
        "Create !!! ",
        "Your futur is something you make yourself", // quote from the tarot website*
        "Try to see the tools you have, \nimagine what you can make out of",
        "Create your reality",
      ]
    },
    {
      image: fortune,
      outcome: "fortuneLuck",
      prophecies: [
        "Everyone has their own life, their own way of living. \nYou are you, and this is okay !", // quote from the tarot website
        "What is good? What is bad? What does it mean to win or lose? We can only observe and do what we can", //*?
        "Embrace chaos, it's what made you",
        "Are you lucky in life?",
        "Our shadow can easily start dictating our light",
        "Maybe",
      ]
    },
    {
      image: chariot,
      outcome: "chariotMove",
      prophecies: [
        "The only way is through",
        "You can do this, push forward",
        "Do what you want no matter the obstacles",
        "Live your life!",
        "Run toward what you care for, and if you don't know your purpose go find it",
        "YOLO!!",
      ]
    },
    {
      image: lovers,
      outcome: "loversHeart",
      prophecies: [
        "Cupid has been looking at you, \ndid you find the lucky one already?",
        "Love is in the air...",
        "First comes self-love, then you can project that into the world",
        "A fragrance of rose with matching glasses, \nwhat could go wrong?",
        "Learning to be vulnerable leads to profound relationships",
      ]
    },
    {
      image: tower,
      outcome: "towerGameOver",
      prophecies: [
        "What was that sound ? A crack?",
        "Denial is a river in Egypt",
        "What happends to a foundation build for ego with avoidance?",
        "Sometimes starting over it the best solution in the long run",
        "Anxious? You should be",
      ]
    },
    {
      image: hermit,
      outcome: "hermitAdvice",
      prophecies: [
        "...",
        "...",
        "...",
        "...",
        "...",
        "We should all do more introspection...",
      ]
    },
  ]
  //make the 8 cards be a pair (16)
  let selectedT = [...cardsToShuffle, ...cardsToShuffle];

  myShuffleT(selectedT);//shuffle all the cards objects
  
  //fortune card outcome (gamble 1/2 chance to win/lose)
  shuffleOptions = shuffle(gambleOptions);

  cardT = [];
  //calling the class card + defining they position
  for (let i = 0; i < colNumT; i++) {
    for (let j = 0; j < rowNumT; j++) {
      var cardX = 510 + i * 150;
      var cardY = j * 180 + 120;
      var cardFaceT = selectedT.pop();
      var cardFaceTP = cardFaceT.prophecies; 
      cardT = new CardT(cardX, cardY, 100, 170, cardFaceT.image,cardFaceT.outcome, cardFaceTP[Math.floor(Math.random()*cardFaceTP.length )]);
      cardsT.push(cardT);
    }
  }
  //function for the artist's link to the tarot detail website
  tanakoLink();
}

/**
 * Drawing the title screen, background, outcomes & ending with images & text
 * CardT class (prophecies, cards) + if they are flipped\hoved
 */
function tarotDraw() {
  background(225);
  background(backgroundImageT);
  
  // When reached "1", flip all cards
  if(flipAllCardsTimeout == 1){
    for (let i = 0; i < cardsT.length; i++) {
      cardsT[i].isFaceUp = false;
    }
  }
  //Each showned imaged, timeout -- until all cards get flipped
  if(flipAllCardsTimeout > 0) flipAllCardsTimeout--;

  // checking to see the display of card distribution
  for (let i = 0; i < cardsT.length; i++) { //is the i++ the cause of the layout img + text display bug when clicked 2nd or +.... ?
    
    cardsT[i].body();

    cardsT[i].hover();

    cardsT[i].displayImg(); //cards + big card on left

    cardsT[i].displayText(); //prophecy text

  }
  cardsOutcomes();
  outcomesEnd();
  instrucionScreenDisplay();

  //text to mention the artist's work I used
  takanoMention();
}

//CardT class acting on each cards and objects in the cardsToShuffle array
class CardT {
  constructor(x, y, w, h, pickedT, outcomes, text) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.pickedT = pickedT;
    this.text = text;
    this.outcomes = outcomes;
    this.stroke = color(255);
    this.col = color(200);
    this.coverCard = coverCard;
    this.coverCardH = coverCardH;
    this.isFaceUp = false;
    this.size = 30;
    this.font = fontDot;
    this.fill = colorProphecy;
    this.tower = tower;
    this.sun = sun;
    this.chariot = chariot;
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
      mouseY > this.y - this.h / 2 && 
      !gameLose && !gameWin && !endCycle && !instruction &&!gamble ) 
    { // if mouse on card & not in starting or ending gameplay (make it playable)
      this.col = color(160);
      this.hoverBool = true;
      image(this.coverCardH, this.x -50, this.y -85, this.w, this.h);
    }  else {
      this.col = color(200);
      this.hoverBool = false;
      image(this.coverCard, this.x -50, this.y -85, this.w, this.h);
    }
  }

  displayImg() {
    if (this.isFaceUp) {
      imageMode(CORNER);
      imgCard = image(this.pickedT, this.x -50, this.y -85, this.w, this.h); // cards
      bigCard = image(this.pickedT, 0, 150, 260, 442); // + size card on left of the cards
        } if (chariotGo){ // outcome of The chariot card (if paired)
          bigCard = image(this.chariot, 0, chariotCard1.y, 260, 442); 
        }
  }
  displayText(){
    if (this.isFaceUp) { //if card is face up
      //making a white box behind the text
      push();
      noStroke();
      fill(this.stroke);
      rect(1390, 300, 400, 1000);
      pop();
      //prophecy text
      noStroke();
      textSize(this.size);
      fill(this.fill);
      text(this.text, 1320, 350, 250, 300);
      textFont(this.font);
    } 
  }
  
}

//shuffle all the cards objects 
function myShuffleT(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }   
}


function tarotMousePressed() {

  // If we wait to flip the cards,
  if (flipAllCardsTimeout != 0) return;

  for (let i = 0; i < cardsT.length; i++) {
    if (cardsT[i].hoverBool) {
    // if we hover on a card
       
    let currentCard = cardsT[i]; // the clicked card
    currentCard.isFaceUp = true; // flip the card up

      if (lastCardIdClicked == -1){ // if user never clicked on a card
      lastCardIdClicked = i; // define "i" as the last card clicked
      } else if (lastCardIdClicked != i){ // If we click on a different card (& not the exact same one)
        if (cardsT[i].pickedT != cardsT[lastCardIdClicked].pickedT){
        // if the card is not the same, flip All cards in xnumber of frames
        flipAllCardsTimeout = 15;
        } else if (cardsT[i].pickedT == cardsT[lastCardIdClicked].pickedT){ // if same card is picked
          // sun card outcome
          if (cardsT[i].outcomes.includes("sunWin")){
            flipAllCardsTimeout = 3;
            gameWin = true; 
            cardsT[i].hoverBool = false;
          } // tower card
          else if (cardsT[i].outcomes.includes("towerGameOver")){ 
            flipAllCardsTimeout = 3;
            gameLose = true; 
            cardsT[i].hoverBool = false;
          } //hermit card
          else if (cardsT[i].outcomes.includes("hermitAdvice")){
            hermitSpeech = true; 
          } //lover card
          else if (cardsT[i].outcomes.includes("loversHeart")){
            love = true; 
          } //magician card
          else if (cardsT[i].outcomes.includes("magicianMagic")){
             magic = true; 
          } //fortune card
          else if (cardsT[i].outcomes.includes("fortuneLuck")){
            flipAllCardsTimeout = 3;
            gamble = true; 
          } //death card
          else if (cardsT[i].outcomes.includes("deathCycle")){ 
            flipAllCardsTimeout = 10;
            endCycle = true;
          } //chariot card
          else if (cardsT[i].outcomes.includes("chariotMove")){
            chariotGo = true; 
          }
        }
      // Reset the last card clicked
      lastCardIdClicked = -1;
      }
    }
    
  }
  //Fortune Card outcome 
  if (!spinning && gamble === true) {
    angle = 0;
    targetAngle = random(PI, 2 * PI) * 5;
    speed = targetAngle / 10; // Initial speed
    spinning = true;
    
  }

}
//escape key event
function tarotKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
        linkT.hide();
        starsGif.hide();
        heartsGif.hide();
    }
}
//Starting screen (image + text)
function instrucionScreenDisplay(){
  if(instruction === true){
    image(instrucionScreen, instructionDisplay.img.x, instructionDisplay.img.y, width, height, 0, 0, instrucionScreen.width, instrucionScreen.height, CONTAIN);
    
    push();
    textAlign(CENTER, CENTER);
    textFont(fontDotTitle);
    stroke(instructionDisplay.stroke);
    strokeWeight(instructionDisplay.weight);
    textSize(instructionDisplay.size);
    fill(instructionDisplay.fill);
    text(instructionDisplay.text, instructionDisplay.x, instructionDisplay.y);
    pop();
    push();
    textAlign(CENTER, CENTER);
    textFont(fontDot);
    stroke(instructionDisplay.below.stroke);
    strokeWeight(instructionDisplay.below.weight);
    textSize(instructionDisplay.below.size);
    fill(instructionDisplay.below.fill);
    text(instructionDisplay.below.text, instructionDisplay.below.x, instructionDisplay.below.y, instructionDisplay.below.x2, instructionDisplay.below.y2);
    pop();
    if (mouseIsPressed){ //program is so slow I had to write double-click...
      instruction = false;
    }
  }
}

//Wining ending
function outcomesEnd(){
  if (gameWin === true){
    //console.log("Win");
    bigCard1 = image(sun, 0, 150, 260, 442); 
    bigCard2 = image(sun, 1205, 150, 260, 442);
    image(imgWin, winning.x, winning.y, width, height, 0, 0, imgWin.width, imgWin.height, CONTAIN);
    push();
    textAlign(CENTER, CENTER);
    textFont(fontDot);
    stroke("#faf88dff");//winning.text.stroke
    strokeWeight(winning.text.weight);
    textSize(winning.text.size);
    fill(winning.text.fill);
    text(winning.text.text, winning.text.x, winning.text.y);
    pop();
    // add restart button?
    }
 
  //Losing ending
  if (gameLose === true){
    //console.log("Lose");
    bigCard1 = image(tower, 0, 150, 260, 442); 
    bigCard2 = image(tower, 1205, 150, 260, 442);
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
    chariotGo = false;
    // add restart button?
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
    image(deadEnd, restart.x, restart.y, width, height, 0, 0, deadEnd.width, deadEnd.height, CONTAIN);
    push();
    textAlign(CENTER, CENTER);
    textFont(fontDot);
    stroke(restart.text.stroke);
    strokeWeight(restart.text.weight);
    textSize(restart.text.size);
    fill(restart.text.fill);
    text(restart.text.text, restart.text.x, restart.text.y);
    pop();
      if (mouseIsPressed){
      endCycle = false;
    }
    //console.log("transformation is real !");

  }
  // The hermit outcome (add-on advice/instruction)
  if(hermitSpeech === true){
    chariotGo = false;
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
    push();
    noStroke();
    textSize(advice.size);
    fill(advice.color.fill);
    textFont(fontDot);  
    text(advice.color.text,advice.x, advice.color.y );
    pop();

    setTimeout(adviceGone,9000);
    
  }
  // The chariot outcome 
  if (chariotGo === true){
    chariotCard1.y -= 10;
  }
  // Now the fortune outcome
  if(gamble === true){
    
    bigCard1 = image(fortune, 0, 150, 260, 442); 
    bigCard2 = image(fortune, 1205, 150, 260, 442);
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
function adviceGone(){ //to make the hermit's advice disappear
  hermitSpeech = false;
}
function wheelOfFortune(){ //to make the wheel of fortune (copied code)
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
    stroke(wheel.textStroke);
    strokeWeight(wheel.textWeight);
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
    //frameRate(60);

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

function changeColorT(){
  // change the background color of the html
document.body.style.background = backgroundColorT;
}

function takanoMention(){
  //placing the credits
  textFont(fontDot);
  textSize(artistMention.size);
  textAlign(LEFT);
  noStroke();
  fill(artistMention.fill);
  text(artistMention.text, artistMention.x, artistMention.y);
  }
function tanakoLink(){
  //created a html element link 
  linkT = createA(artistMention.link.Link, artistMention.link.text, '_blank');
  linkT.position(artistMention.link.x, artistMention.link.y);
  linkT.style('color', artistMention.link.fill);
  linkT.show();
}
