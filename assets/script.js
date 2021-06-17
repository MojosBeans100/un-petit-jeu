
document.addEventListener("DOMContentLoaded", introScreen);

/**
 * This function pulls up the main introduction screen, welcoming the user to the game,
 * a brief summary as to what the game is
 * and the user can input their name
 */
function introScreen() {
    // Un Petit Jeu Francais - title
    // Welcome message - sub-title
    // Let's start with your name - sub-title
    // Text input box (required)
    // Submit button "OK"
    // -> gameOptionsScreen()

    // get the main div
    let mainDiv = document.getElementById("main-div");

    // create introScreen div
    let introScreenDiv = document.createElement("div");
    introScreenDiv.id = "intro-screen-div";

    // create welcome title
    let introScreenHello = document.createElement("h1");
    introScreenHello.id = "intro-screen-hello";
    introScreenHello.innerHTML = "Welcome to Un Petit Jeu Francais";

    // create welcome message
    let introScreenMessage = document.createElement("h2");
    introScreenMessage.id = "intro-screen-message";
    introScreenMessage.innerHTML = "where you can test your French skills while having fun!";

    // create name message
    let introScreenNameMessage = document.createElement("h3");
    introScreenNameMessage.id = "intro-screen-name-message";
    introScreenNameMessage.innerHTML = "OK, let's start with your name..";

    // create text input - if empty = Player 1? Or required
    let introScreenNameInput = document.createElement("input");
    introScreenNameInput.id = "intro-screen-name-input";
    introScreenNameInput.type = "text";

    // create button
    let introScreenButton = document.createElement("button");
    introScreenButton.id = "intro-screen-button";
    introScreenButton.innerHTML = "OK!";
    introScreenButton.addEventListener("click",gameOptionsScreen);

    // append all HTML items
    mainDiv.appendChild(introScreenDiv);
    introScreenDiv.appendChild(introScreenHello);
    introScreenDiv.appendChild(introScreenMessage);
    introScreenDiv.appendChild(introScreenNameMessage);
    introScreenDiv.appendChild(introScreenNameInput);
    introScreenDiv.appendChild(introScreenButton);

}

/**
 * This screen gives the user some game options
 * Easy, Medium, Hard - the difference between these should be obvious so add this detail
 * Game length ie number of questions
 */
function gameOptionsScreen() {
    // Welcome (name) - title
    // Choose game options - sub-title
    // Game difficulty radio buttons easy, medium, hard - clear indication what these different choices mean for the game
    // Game length options - sub-title
    // Game length radio buttons 10, 20, 30, 40, 50
    // Play!  - button
    // Return to Home - button
    // -> instructionsScreen()

    // get info from previous screen
    let mainDiv = document.getElementById("main-div");
    let userName = document.getElementById("intro-screen-name-input").value;

    // create gameOptionsDiv
    let gameOptionsDiv = document.createElement("div");

    // create Welcome message
    let gameOptionsWelcome = document.createElement("h1");
    gameOptionsWelcome.id = "game-options-welcome";
    gameOptionsWelcome.innerHTML = (`Welcome ${userName}!`);

    // create game options message
    let gameOptionsMessage = document.createElement("h2");
    gameOptionsMessage.id = "game-options-message";
    gameOptionsMessage.innerHTML = "Now choose some game options";

    // create difficulty form 
    let gameOptionsDifficultyForm = document.createElement("form");
    gameOptionsDifficultyForm.id = "game-options-difficulty-form";

    // create difficulty message
    let gameOptionsDifficultyMessage = document.createElement("h3");
    gameOptionsDifficultyMessage.id = "game-options-difficulty-message";
    gameOptionsDifficultyMessage.innerHTMl = "Please choose a game difficulty";

    // create difficulty radio buttons
    let difficultyOptions = ["Easy", "Medium", "Hard"];
    


    // append all HTML items
    mainDiv.appendChild(gameOptionsDiv);
    gameOptionsDiv.appendChild(gameOptionsWelcome);
    gameOptionsDiv.appendChild(gameOptionsMessage);
    gameOptionsDiv.appendChild(gameOptionsDifficultyForm);
    gameOptionsDifficultyForm.appendChild(gameOptionsDifficultyMessage);

}

/**
 * This screen gives the user instructions as to how the game will work
 */
function instructionsScreen() {
    
}

/**
 * This screen shows the actual questions and multiple choice answers,
 * score tallies, countdown clock
 */
function playGameScreen() {
    // Title
    // Question - ie What is "jouer" in English? or What is "bread" in French? dependent on difficulty
    // Question 1 out of 20
    // Radio buttons to display answer 4 - 6 depending on difficulty
    // Next question - button
    // Skip question - button
    // Return to homepage button
    // Correct answers tally
    // Timer countdown
    // -> generateQuestion()
}


/**
 * This function will feed into the playGameScreen
 * 4 - 6 multiple choice answers will be randomly generated
 * and the correct question and answer will be calculated here
 */
function generateQuestion() {
    // Words arrays in French and English 
    // Randomly select between 4 and 6 numbers (4 - easy, 5 - medium, 6 - hard)
    // Numbers between 0 and length of selected words arrays
    // Index the words of these numbers from arrays, and put them into the HTMl radio buttons
    // Randomly select 1 number between 4 and 6 to be the chosen question/answer of indexed words
    // Index this number from the 4-6 words to get the question word and answer word
    // -> checkAnswer()
}


/**
 * This function will get the user answer from the radio buttons
 * and check it against the correct answer 
 * it will also increase the score tallies as required
 */
function checkAnswer() {
    // Get the user answers from radio buttons
    // Compare to the actual answer
    // If correct, increment the correct tally and progress tally
    // If incorrect - ? decide what to do
    // If progress tally/number of questions answered = chosen game length - > endGameScreen
    // -> generateQuestion() or endGameScreen()
}


/** This function will allow the user to press the Skip Question button
 * which will move on and regenerate the question
 * it will increment a 'skipped' tally - decide whether this will be displayed or not
 */
function skipQuestion() {
    // If skip question button is clicked, increase skip tally (hidden?)
    // and regenerate question
    // If progress tally/number of questions answered = chosen game length - > endGameScreen
    // -> generateQuestion()
}


/**
 * This screen shows the end score, congrats message,
 * perhaps input email address to send answers to
 */
function endGameScreen() {
    // Congratulations message
    // You scored 8 out of 10 message
    // Return to home button
    // If good score  - ?
    // If bad score - here are some suggested resources
    // -> introScreen()
}


/**
 * This function will reset the whole game and take 
 * the user back to the home screen
 * pop-up message to warn about loss of progress
 */
function resetGame() {
    // Reset button calls this function
    // Alert message - loss of progress
    // Back to intro screen
    // -> introScreen()
}