// Screens
let inputNameDiv = document.getElementsByClassName("name-input-div")[0];
let gameOptionsDiv = document.getElementById("game-options-div");
let introScreenDiv = document.getElementById("intro-screen-div");
let playGameDiv = document.getElementById("play-game-screen");


// Buttons
let introScreenBtn = document.getElementById("intro-screen-btn");
let nameInputScreenBtn = document.getElementById("name-input-btn");
let playBtn = document.getElementById("play-btn");
let homeBtn = document.getElementsByClassName("home-btn");

// Global variables
let gameDifficulty;
let gameLength;

document.addEventListener("DOMContentLoaded", introScreen);


/**
 * This function pulls up the main introduction screen, welcoming the user to the game,
 * a brief summary as to what the game is
 * and the user can input their name
 */
function introScreen() {

    // Add event listener to button in this page to link to next screen (nameInput)
    introScreenBtn.addEventListener("click", function (event) {
        event.preventDefault();
        nameInput();
    });

}

function nameInput() {

    // let Name Input screen be visible
    inputNameDiv.classList.add("active-div");

    // let Intro screen be NOT visible
    introScreenDiv.classList.remove("active-div");

    // Add event listener to button in this page to link to next screen (gameOptions)
    nameInputScreenBtn.addEventListener("click", function (event) {
        event.preventDefault();
        gameOptions();
    });


}


/**
 * This screen gives the user some game options
 * Easy, Medium, Hard - the difference between these should be obvious so add this detail
 * Game length ie number of questions
 */
function gameOptions() {

    // Let Game Options screen be visible
    gameOptionsDiv.classList.add("active-div");

    // Let Input Name screen NOT be visible
    inputNameDiv.classList.remove("active-div");

    playBtn.addEventListener("click", function (event) {
        event.preventDefault();
        playGame();

        

    });

}

function playGame() {

    // Let Play Game screen be visible
    playGameDiv.classList.add("active-div");

    // Let Input Name screen NOT be visible
    gameOptionsDiv.classList.remove("active-div");

    generateQuestion();

}


function generateQuestion() {

    // Get user's choice for game difficulty
    for (i = 0; i < 3; i++) {
        if (document.getElementById("game-options-form")[i].checked) {
            gameDifficulty = toLowerCase(document.getElementsByTagName("label")[i].innerText);
            console.log(gameDifficulty)
            break;
        }
    }

    // Get user's choice for game length
    for (i = 3; i < 7; i++) {
        if (document.getElementById("game-options-form")[i].checked) {
            gameLength = document.getElementsByTagName("label")[i].innerText;
            console.log(gameLength)
            break;
        }
    }

    if (gameDifficulty = "easy") {
        numOfChoices = 4;
        timeLimit = 1500;
        questionLanguage = "French";
        answerLanguage = "English";
   } else if (gameDifficulty = "medium") {
        numOfChoices = 5;
        timeLimit = 1000;
        questionLanguage = "French";
        answerLanguage = "English";
   } else {
        numOfChoices = 6;
        timeLimit = 500;
        questionLanguage = "English";
        answerLanguage = "French";
   }

   

}



// /**
//  * This screen gives the user instructions as to how the game will work
//  */
// function instructionsScreen() {

// }

// /**
//  * This screen shows the actual questions and multiple choice answers,
//  * score tallies, countdown clock
//  */
// function playGameScreen() {
//     // Title
//     // Question - ie What is "jouer" in English? or What is "bread" in French? dependent on difficulty
//     // Question 1 out of 20
//     // Radio buttons to display answer 4 - 6 depending on difficulty
//     // Next question - button
//     // Skip question - button
//     // Return to homepage button
//     // Correct answers tally
//     // Timer countdown
//     // -> generateQuestion()
// }


// /**
//  * This function will feed into the playGameScreen
//  * 4 - 6 multiple choice answers will be randomly generated
//  * and the correct question and answer will be calculated here
//  */
// function generateQuestion() {
//     // Words arrays in French and English 
//     // Randomly select between 4 and 6 numbers (4 - easy, 5 - medium, 6 - hard)
//     // Numbers between 0 and length of selected words arrays
//     // Index the words of these numbers from arrays, and put them into the HTMl radio buttons
//     // Randomly select 1 number between 4 and 6 to be the chosen question/answer of indexed words
//     // Index this number from the 4-6 words to get the question word and answer word
//     // -> checkAnswer()
// }


// /**
//  * This function will get the user answer from the radio buttons
//  * and check it against the correct answer 
//  * it will also increase the score tallies as required
//  */
// function checkAnswer() {
//     // Get the user answers from radio buttons
//     // Compare to the actual answer
//     // If correct, increment the correct tally and progress tally
//     // If incorrect - ? decide what to do
//     // If progress tally/number of questions answered = chosen game length - > endGameScreen
//     // -> generateQuestion() or endGameScreen()
// }


// /** This function will allow the user to press the Skip Question button
//  * which will move on and regenerate the question
//  * it will increment a 'skipped' tally - decide whether this will be displayed or not
//  */
// function skipQuestion() {
//     // If skip question button is clicked, increase skip tally (hidden?)
//     // and regenerate question
//     // If progress tally/number of questions answered = chosen game length - > endGameScreen
//     // -> generateQuestion()
// }


// /**
//  * This screen shows the end score, congrats message,
//  * perhaps input email address to send answers to
//  */
// function endGameScreen() {
//     // Congratulations message
//     // You scored 8 out of 10 message
//     // Return to home button
//     // If good score  - ?
//     // If bad score - here are some suggested resources
//     // -> introScreen()
// }


// /**
//  * This function will reset the whole game and take 
//  * the user back to the home screen
//  * pop-up message to warn about loss of progress
//  */
// function resetGame() {
//     // Reset button calls this function
//     // Alert message - loss of progress
//     // Back to intro screen
//     // -> introScreen()
// }