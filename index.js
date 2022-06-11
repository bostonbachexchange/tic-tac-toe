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

// change innercolor of div click
function updateDiv1() { 
     gamePlay()
     div1.style.backgroundColor = color;
     div1.innerText = emoji
   }
function updateDiv2() { 
    gamePlay()
    div2.style.backgroundColor = color;
    div2.innerText = emoji
  }
function updateDiv3() { 
    gamePlay()
    div3.style.backgroundColor = color;
    div3.innerText = emoji
  }
  function updateDiv4() { 
    gamePlay()
    div4.style.backgroundColor = color;
    div4.innerText = emoji
  }
  function updateDiv5() { 
    gamePlay()
    div5.style.backgroundColor = color;
    div5.innerText = emoji
  } 
  function updateDiv6() { 
    gamePlay()
    div6.style.backgroundColor = color;
    div6.innerText = emoji
  }
  function updateDiv7() { 
    gamePlay()
    div7.style.backgroundColor = color;
    div7.innerText = emoji
  }
  function updateDiv8() { 
    gamePlay()
    div8.style.backgroundColor = color;
    div8.innerText = emoji
  }
  function updateDiv9() { 
    gamePlay()
    div9.style.backgroundColor = color;
    div9.innerText = emoji
  }

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
const gameFlow = ["playX", "playO", "playX", "playO", "playX", "playO", "playX", "playO", "playX"]
let turn = 0
let defaultColor = 'aqua';
console.log(gameFlow[turn])

// * Upon marking of an individual cell, use JavaScript to add an `X` or `O` to the cell, according to whose turn it is.
// * Display a message to indicate which turn is about to be played.
const displayMessage = document.getElementById('message-display')

function gamePlay(){
    //if last move and no winner, then gamestatus is draw
    if (gameFlow[turn] === gameFlow.length && gameStatus != gamestatus) {
        gameStatus = gameStatus[2]
    }
    //change color according to turn
    if (gameFlow[turn] === "playX") {
        console.log(gameFlow[turn])
        color = "green" 
        emoji = "❌"
        // change id message-display to player 2 turn
        displayMessage.innerText = "Player Two's turn"
    } else if (gameFlow[turn]){
        console.log(gameFlow[turn])
        color = "blue"
        emoji = "⭕️"
        // change id message-dispay to player 1 turn
        displayMessage.innerText = "Player One's turn"
    }
    checkIfWinner()
    turn += 1
}

// * Detect winner: Stop game and declare the winner if one player ends up getting three in a row. 
function checkIfWinner() {
    //if row one is same gameState === win
    if (div1.innerText === div2.innerText === div3.innerText ||
    //if row two is same gameState === win
    div4.innerText === div5.innerText === div6.innerText ||
    //if row three is same gameState === win
    div7.innerText === div8.innerText === div3.innerText ||
    //if column one is same gameState === win
    div1.innerText === div4.innerText === div7.innerText ||
    //if column two is same gameState === win
    div2.innerText === div5.innerText === div8.innerText ||
    //if column three is same gameState === win
    div3.innerText === div6.innerText === div9.innerText ||
    //if diagonal one is same gameState === win
    div1.innerText === div5.innerText === div9.innerText ||
    //if diagonal two is same gameState === win
    div7.innerText === div5.innerText === div3.innerText 
    ) {
        console.log("Player One Wins")
    }

    // return? // If X is the game winner. Change inner contents of id "message-display" to "X is the winner"
// same for Y or if game is a draw

//if gameFlow[turn] === "playX", then player one is the winner
//if gameFlow[turn] === "playO", then player two is the winner

}

// * You should not be able to click remaining empty cells after the game is over.

// create variable to track which turn it is
// while gamestatus does not equal win or draw, check if win
const gameStatus = ['play', 'win', 'draw']
//gameStatus = gameStatus[0]
const win = 'win'
// if 
const draw = "draw"
// if draw- change display message

// check if winner 
// if winner remove all can
// if gameFlow is === gameFlow.length -1, then
// if game state is not equal to win 
// * Add a reset button that will clear the contents of the board.



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

// * A cell should not be able to be replayed once marked.

// add class can-play to all of the divs
// select class with selectquery or class selector
// create new element and add inner contents to element
// appenend new elements with inner conents to can-play section
// remove can-play class from div

// * Detect draw conditions (ties/cat's game) 

//   * Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

// check each of the eight winning conditions
// add an event listener that will listen for the DOM to be loaded

// add an event listener to my generate button
const reset = document.querySelector("#reset")
reset.addEventListener('click', resetGame)
// restButton.addEventListener('click', restGame)
function resetGame() {
    turn = 0
    console.log(turn)
    div1.innerText = ''
    div1.style.backgroundColor = defaultColor
    div2.innerText = ''
    div2.style.backgroundColor = defaultColor
    div3.innerText = ''
    div3.style.backgroundColor = defaultColor
    div4.innerText = ''
    div4.style.backgroundColor = defaultColor
    div5.innerText = ''
    div5.style.backgroundColor = defaultColor
    div6.innerText = ''
    div6.style.backgroundColor = defaultColor
    div7.innerText = ''
    div7.style.backgroundColor = defaultColor
    div8.innerText = ''
    div8.style.backgroundColor = defaultColor
    div9.innerText = ''
    div9.style.backgroundColor = defaultColor
    //document.querySelector('.board').remove()
    // remove inner contents
    // changle player turn to player ones turn, turn counter, display message
 }

//document.addEventListener('DOMContentLoaded', () => {
    // call the makePalette function
    //makePalette()
//})