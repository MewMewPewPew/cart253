# Planning !
## memory card game variations 


## general planning

1. add 4 pairs of imgs in basic memory game
    realized THERE IS 8 pairs ! 
    - resise the triangle
- added escape in varition possible

- make a fun win end 
- add instruction in keyPressed (if keycode I)
- fix the images (corners)

## Starting with the Tarot variation
- create the variation file
1. Add the tarot json for inspo (and futur telling stuff that could be added)
2. Start by deciding what card should be use, then choose temporary pictures to represent them
3. look at the base code, make variable of each pair if not already done
4. attribute proprieties to each like "gameWin" or "gameOver"
5. make a restart button ?
6. add futur telling text when one pair is revealed with json
7. make starting screen... 

    2. deciding what card should be use, then choose temporary pictures to represent them:
        ## CARD BY BELOVED AYA TAKANO <3 
        + background : image_2025_07_03_aya-takano-perrotin-los-angeles-how-deep-how-far-we-can-go-exhibition-announcement 

            with Shinto & tarot(christianism/paganism) Symbolism
            full story here : https://en.gallery-kaikaikiki.com/2021/08/aya-takano-tarot-card/
        - i should add a lil note to say the art is hers !
    - The sun(19*) = winning, 
    - The magician(1) = The game does not end,
            Gaining 4 objects (sword, wand, cup, coin/pentacle)... why not? The game does not end
    - The hermit(9) = The game does not end,
            Chooses to be alone, maybe disappears on a pelrinage after beging pick up and gives advice to user
    - Death(13)= losing or True restart ! anew cycles beggings
    
    - Wheel of fortune(10) = randomly either win or lose 
            OR MORE ?
    - The Chariot(7) = win, OR you just leave the game, with style !
    - The lovers(6) = loves win ! 
            once paired they are finally reunited ! YAY
    - The Tower(16) = losing, everything crashes because the foundation where never safe & sound to begin with

            Ideas :
    - instead of having 1 pair of hermits, have 1 hermit + 1 Wheel of fortune(10) = randomly either win or lose s

                The Chariot = winning fast ! go go go
                Tower = losing - magician objects if there
                Strengh = gain the power to :hover and see the card? or smt else ?
                The lovers = ? 
                The Devil = ? temptation
                The Moon = ? anxious, because you only see one side of the moon, gain the power to see 1 card?

    *number represent where they are situated in the major arcana

        If matched (in cardShuffle.outcome:)
                sun - sunWin
                        Win: happy img (with text "you win"), flips all cards up + restart button ? 
                death - deathCycle
                        fake restart: flips all cards down (ex: setT = 0)?
                magician - magicianMagic
                        fun: add 4 images (wand,coin/pentacle, sword, cup) + sparkles(gif)?
                fortune - fortuneLuck
                        Ending: random,floor 1/2 to either win or lose (ideally with a spinning wheel visual)
                lovers -loversHeart
                        fun: add 1 image of a heart (or gif of heart pumping) ?
                tower - towerGameOver
                        Lose: sad img (with text "you lost"), flips all card down + restart button ? 
                hermit - hermitAdvice
                        prophecy: gives the most important rule of the game * no real instruction needed then :3
                chariot - chariotMove 
                        move: make the cards gain += y speed ?

     
     ## music variation 

     add same image for all cards
     add different sound for each pairs (8)
        sound 7- https://www.youtube.com/watch?v=HfrOSJRCsfM&t=46s 
        !! 
     Yay! 
     dark theme - with instruction to listen & use memory
     add resonance interactive with sound thing ??

## basic variation 
        make the card appear for like 3 second, 
        then player has to play normaly or has like 3 chances or smt ? (maybe too hard)