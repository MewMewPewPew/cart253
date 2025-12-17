/**
 * Do you remember?
 * MEMORY GAMES
 * Ash Oest O'Leary
 * 
 * This is the code for the variation-jam for the CART 253 class. 
 * I chose to start the project from a memory card game, which it's essence is still present in all variation: 
 * 1-"Base" 2- "Tarot" 3- "Sound" 
 * 
 * The first variation plays more the role of the base version of this memory card game than a variation of it. 
 * Still, I made it different by adding my own touch of styling and my art.
 *          Instruction:
 *                      When clicking a faced down card, reveal 1 of 8 symbol on the card.
 *                      Try and match this card with another sharing the same symbol. 
 *                      If the 2 cards revealed don't have the same symbol, they are turned down.
 *                      If a pair of card is found, they stay revealed. 
 *                      To win, one must find the 8 pairs of cards successively.
 * 
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
 * 
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
 * 
 * I started a fourth variation "music", which is a not completed experiment of the third variation.                    
 *             
 * All links & information are in README.MD
 * Made with p5
 * https://p5js.org/
 */

"use strict";

//Start with the menu screen
let state = "menu";

function setup() {
    createCanvas(500, 500);

}
function preload(){
    //in menu (fonts) 
    fontDotTitle =loadFont("assets/images/Codystar-Regular.ttf");
    fontDot = loadFont("assets/images/BitcountPropSingle-Regular.ttf");
    //base memory variation
    imgWinB = loadImage("assets/images/cards/basic/win.PNG");
    backgroundImage = loadImage("assets/images/backgroundBasic.jpg");
    coverCardB =loadImage("assets/images/cards/basic/CaptureSireneEdit.png");
    coverCardBH = loadImage("assets/images/cards/basic/CaptureSireneEditH.png");
    flippedCardB = loadImage("assets/images/cards/basic/flippedCardB.png");
    img1 = loadImage("assets/images/cards/basic/1.png");
    img2 = loadImage("assets/images/cards/basic/triangle.png");
    img3 = loadImage("assets/images/cards/basic/2.png");
    img4 = loadImage("assets/images/cards/basic/3.png");
    img5 = loadImage("assets/images/cards/basic/4.png");
    img6 = loadImage("assets/images/cards/basic/5.png");
    img7 = loadImage("assets/images/cards/basic/spade.png");
    img8 = loadImage("assets/images/cards/basic/6.png");
    //tarot memory variation
    backgroundImageT = loadImage("assets/images/tarot-Aya-T-bg.png");
    instrucionScreen = loadImage("assets/images/cards/tarot/instructionT.png");
    coverCard = loadImage("assets/images/cards/tarot/cover-tarot.png");
    coverCardH = loadImage("assets/images/cards/tarot/cover-tarotH.png");
    sun = loadImage("assets/images/cards/tarot/theSun.png");
    death = loadImage("assets/images/cards/tarot/death.png");
    deadEnd = loadImage("assets/images/cards/tarot/deadEnd.png");
    magician = loadImage("assets/images/cards/tarot/theMagician.png");
    wand = loadImage("assets/images/cards/tarot/wand2.png");
    swordCoin = loadImage("assets/images/cards/tarot/swordCoin.png");
    cup = loadImage("assets/images/cards/tarot/cup.png");
    starsGif = createImg("assets/images/cards/tarot/stars.gif");
    heartsGif = createImg("assets/images/cards/tarot/hearts.gif");
    fortune = loadImage("assets/images/cards/tarot/fortune.png");
    chariot = loadImage("assets/images/cards/tarot/theChariot.png");
    lovers = loadImage("assets/images/cards/tarot/theLovers.png");
    tower = loadImage("assets/images/cards/tarot/theTower.png");
    hermit = loadImage("assets/images/cards/tarot/theHermit.png");
    imgWin = loadImage("assets/images/cards/tarot/win.png");
    imgLose = loadImage("assets/images/cards/tarot/lose.png");
    // sound memory variation
    backgroundImageM = loadImage('assets/images/sound_bg.png');
    soundButtonWin = loadImage("assets/images/button_win.png");
    soundButtonOff = loadImage("assets/images/button_off.PNG");
    soundButtonOffH = loadImage("assets/images/button_offH.png");
    img1M = loadImage("assets/images/button_on.PNG");
    img2M = loadImage("assets/images/button_on.PNG");
    img3M = loadImage("assets/images/button_on.PNG");
    img4M = loadImage("assets/images/button_on.PNG");
    img5M = loadImage("assets/images/button_on.PNG");
    img6M = loadImage("assets/images/button_on.PNG");
    img7M = loadImage("assets/images/button_on.PNG");
    img8M = loadImage("assets/images/button_on.PNG");
    soundWin = loadSound("assets/sounds/youWinPvZ.mp3");
    sound1 = loadSound("assets/sounds/sound1.mp3");
    sound2 = loadSound("assets/sounds/sound2.mp3");
    sound3 = loadSound("assets/sounds/sound3.mp3");
    sound4 = loadSound("assets/sounds/sound4.mp3");
    sound5 = loadSound("assets/sounds/sound5.mp3");
    sound6 = loadSound("assets/sounds/sound6.mp3");
    sound7 = loadSound("assets/sounds/bark.wav");
    sound8 = loadSound("assets/sounds/sound8.mp3");
    // music memory variation
    backgroundImageV = loadImage('assets/sounds/music_bg.png');
    foregroundImageV = loadImage('assets/sounds/music_bgReflet.png');
    sound1M = loadSound("assets/sounds/sound1.m4a");
    sound2M = loadSound("assets/sounds/sound2.m4a");
    sound3M = loadSound("assets/sounds/sound3.m4a");
    sound4M = loadSound("assets/sounds/sound4.m4a");
    sound5M = loadSound("assets/sounds/sound5.m4a");
    sound6M = loadSound("assets/sounds/sound6M.mp3");
    sound7M = loadSound("assets/sounds/sound7.m4a");
    sound8M = loadSound("assets/sounds/sound8.m4a");
}

function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "tarotMemory-variation":
            tarotDraw();
            break
        case "sound-variation":
            soundDraw();
            break; /*
        case "music-variation":
            musicDraw();
            break; */
        case "BaseMemoryGame":
            baseDraw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "tarotMemory-variation":
            tarotMousePressed();
            break
        case "sound-variation":
            soundMousePressed();
            break /*
        case "music-variation":
            musicMousePressed();
            break;*/
        case "BaseMemoryGame":
            baseMousePressed();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "tarotMemory-variation":
            tarotKeyPressed(event);
            break;
        case "sound-variation":
            soundKeyPressed(event);
            break /*
        case "music-variation":
            musicKeyPressed(event);
            break;*/
        case "BaseMemoryGame":
            baseKeyPressed(event);
            break;
    }
}
