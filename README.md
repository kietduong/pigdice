# _Pig Dice game_

#### _Takes user sentence input and makes a game of pig dice out of it, 8/24/16_

#### By _**Jackson Meyer, Kiet Duong**_

## Description

_This webapp will incorporate HTML, CSS, Javascript, bootstrap and JQuery to create a game of pig dice for two users._

###### Specs:

###### When the user hits the roll button the app will generate a random number between 1 and 6

* _Example Input: click roll_
* _Example Output: any of 1, 2, 3, 4, 5, 6_

###### the user can choose to 'hold', when the hold button is clicked the score is added to their previous total score
* _Example Input: total score: 50, rolled a 5 and hold_
* _Example Output: total score: 55_

###### When the user hits the roll button again, the app will generate another random number between 1 and 6, and store the first roll.
* _Example Input: roll 1: 5_
* _Example Output: any of 1, 2, 3, 4, 5, 6, + roll 1_

###### all turn rolls are added together and added to main total score_
* _Example Input: user 1: 4, 5, 3, 2, 2, 6, hold_
* _Example Output: user 1: score: 22_

###### If a one is rolled, all logged previous rolls are deleted and their turn is over
* _Example Input: 1_
* _Example Output: it doesn't matter what you rolled before, turn over_

###### when user1 turn is over we will indicate visually via an alert, a show class/toggle button to highlight user 1 and user 2 turn
* _Example Input: user 1 rolls a 1_
* _Example Output: "user 2, it is now your turn"_

###### Log total score underneath main box_
* _Example Input: user 1: 30 user 2: 35_
* _Example Output: user 1: 30 user 2: 35_

###### once a players total score surpasses 100, the game is over and that persons turn is over.
* _Example Input: 97 + a roll of a 4_
* _Example Output: 101 and game is over, you win_


## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Open index.html in the browser of your choosing_

_You must host this webpage locally_

## Known Bugs

_lots of bugs, we are working on it!_

## Support and contact details

* _Jackson Meyer: Jackson.meyer7@gmail.com_
* _Kiet Duong: kd14g@my.fsu.edu_

## Technologies Used

_HTML,
CSS,
JS_

### License

*This webpage is licensed under the GPL license.*

Copyright (c) 2016 **_Jackson Meyer, Kiet Duong_**
