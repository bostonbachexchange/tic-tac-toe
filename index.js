//document.addEventListener('DOMContentLoaded', () => {
    // call the makePalette function
    //makePalette()

// select each square
// * A user should be able to click on different squares to make a move.
console.log("Hello World")
// creat a variable selector for each div
const div1 = document.querySelector('#one')
const div2 = document.querySelector('#two')
const div3 = document.querySelector('#three')
const div4 = document.querySelector('#four')
const div5 = document.querySelector('#five')
const div6 = document.querySelector('#six')
const div7 = document.querySelector('#seven')
const div8 = document.querySelector('#eight')
const div9 = document.querySelector('#nine')


// change innerText of div click
 function updateDiv1() { 
     div1.style.backgroundColor = "blue";
   }
const updateDiv2 = () => div2.style.backgroundColor = "blue"//this should be a variable that changes when clicked by iterator // then gameflow iterater += 1
const updateDiv3 = () => div3.style.backgroundColor = "blue"
const updateDiv4 = () => div4.style.backgroundColor = "blue"
const updateDiv5 = () => div5.style.backgroundColor = "blue"
const updateDiv6 = () => div6.style.backgroundColor = "blue"
const updateDiv7 = () => div7.style.backgroundColor = "blue"
const updateDiv8 = () => div8.style.backgroundColor = "blue"
const updateDiv9 = () => div9.style.backgroundColor = "blue"

//   div1.addEventListener('click', function (event) {
//   } ) 
div1.addEventListener('click', updateDiv1)
div2.addEventListener('click', updateDiv2)
div3.addEventListener('click', updateDiv3)
div4.addEventListener('click', updateDiv4)
div5.addEventListener('click', updateDiv5)
div6.addEventListener('click', updateDiv6)
div7.addEventListener('click', updateDiv7)
div8.addEventListener('click', updateDiv8)
div9.addEventListener('click', updateDiv9)

// function makeMove() {
//}

// * Every click will alternate between marking an `X` and `O`
const gameflow = ["playX", "playO","playX", "playO","playX", "playO","playX", "playO","playX"]

function checkIfWinner() {
    //if row one is same === winner
    //if row two is same === winner
    //if row three is same === winner
    //if column one is same === winner
    //if column two is same === winner
    //if column three is same === winner
    //if diagonal one is same === winner
    //if diagonal two is same === winner
}


// create variable to track which turn it is
// while gamestatus does not equal win or draw, check if win
const gameStatus = ['play', 'win', 'draw']
gameStatus = gameStatus[0]

const win = 'win'
const draw = "draw"

let playersTurn = null;
    // inner content will be while loop
// while game is not win, for loop playes turn = gameflow[i]
//   while ( gameStatus !== gameStatus[1] || gameStatus[2]) {
//     checkIfWinner()
//     for (let i = 0; i < gameflow.length; i++) {
//         if (gameflow[i] === "playX") {
//             // change display message to player one's turn
//         } else if (gameflow[i] === "playO") {
//             // change display message to player two's turn
//         }
//     }
//   }

// * Upon marking of an individual cell, use JavaScript to add an `X` or `O` to the cell, according to whose turn it is.

// * A cell should not be able to be replayed once marked.

// * You should not be able to click remaining empty cells after the game is over.

// * Add a reset button that will clear the contents of the board.

// * Display a message to indicate which turn is about to be played.

// * Detect draw conditions (ties/cat's game) 

// * Detect winner: Stop game and declare the winner if one player ends up getting three in a row. 

// Stop game by removing classes from div or breaking function??

// If X is the game winner. Change inner contents of id "message-display" to "X is the winner"
// same for Y or if game is a draw


//   * Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.



// check each of the eight winning conditions
// add an event listener that will listen for the DOM to be loaded


// add an event listener to my generate button
const restButton = document.querySelector("reset-button")
restButton.addEventListener('click', restGame)

function restGame() {
    //changle player turn, turn counter, display message
}

//})