// * A user should be able to click on different squares to make a move.
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

// change inner text of div on click
function updateDiv1() { 
     gamePlay()
     div1.style.backgroundColor = color;
     div1.innerText = emoji
     checkIfWinner()
   }
function updateDiv2() { 
    gamePlay()
    div2.style.backgroundColor = color;
    div2.innerText = emoji
    checkIfWinner()
  }
function updateDiv3() { 
    gamePlay()
    div3.style.backgroundColor = color;
    div3.innerText = emoji
    checkIfWinner()
  }
  function updateDiv4() { 
    gamePlay()
    div4.style.backgroundColor = color;
    div4.innerText = emoji
    checkIfWinner()
  }
  function updateDiv5() { 
    gamePlay()
    div5.style.backgroundColor = color;
    div5.innerText = emoji
    checkIfWinner()
  } 
  function updateDiv6() { 
    gamePlay()
    div6.style.backgroundColor = color;
    div6.innerText = emoji
    checkIfWinner()
  }
  function updateDiv7() { 
    gamePlay()
    div7.style.backgroundColor = color;
    div7.innerText = emoji
    checkIfWinner()
  }
  function updateDiv8() { 
    gamePlay()
    div8.style.backgroundColor = color;
    div8.innerText = emoji
    checkIfWinner()
  }
  function updateDiv9() { 
    gamePlay()
    div9.style.backgroundColor = color;
    div9.innerText = emoji
    checkIfWinner()
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
    console.log(`game turn is number ${turn}`)
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
    turn += 1
}

// * Detect winner: Stop game and declare the winner if one player ends up getting three in a row. 
function checkIfWinner() {
    //if row one is same gameState === win
    // if (div1.innerText === div2.innerText === div3.innerText === div1.innerHTML) {
    //     console.log("winner")
    // }
    if (div1.innerText != "" && div1.innerText === div2.innerText && div1.innerText === div3.innerText || div4.innerText != "" && div4.innerText === div5.innerText && div4.innerText === div6.innerText || div7.innerText != "" && div7.innerText === div8.innerText && div7.innerText === div9.innerText || div1.innerText != "" && div1.innerText === div4.innerText && div1.innerText === div7.innerText || div2.innerText != "" && div2.innerText === div5.innerText && div2.innerText === div8.innerText || div3.innerText != "" && div3.innerText === div6.innerText && div3.innerText === div9.innerText || div1.innerText != "" && div1.innerText === div5.innerText && div1.innerText === div9.innerText || div3.innerText != "" && div3.innerText === div5.innerText && div3.innerText === div7.innerText) {
            let gameStat = gameStatus[1] // "win"
            if (gameFlow[turn] === "playX") {
                displayMessage.innerText = "Player Two WINS!"
            } else if (gameFlow[turn] === "playO") {
                displayMessage.innerText = "Player One WINS!"
        }
    }
    // * Detect draw conditions (ties/cat's game) 
    if (turn === 9 && gameStat === gameStatus[0]) {
        displayMessage.innerHTML = "DRAW"
    }
    // //if row two is same gameState === win
    // (div4.innerText === div5.innerText === div6.innerText ||
    // //if row three is same gameState === win
    // div7.innerText === div8.innerText === div3.innerText ||
    // //if column one is same gameState === win
    // div1.innerText === div4.innerText === div7.innerText ||
    // //if column two is same gameState === win
    // div2.innerText === div5.innerText === div8.innerText ||
    // //if column three is same gameState === win
    // div3.innerText === div6.innerText === div9.innerText ||
    // //if diagonal one is same gameState === win
    // div1.innerText === div5.innerText === div9.innerText ||
    // //if diagonal two is same gameState === win
    // div7.innerText === div5.innerText === div3.innerText 
    // ) {
    //     console.log("Player One Wins")
    // }

    // return? // If X is the game winner. Change inner contents of id "message-display" to "X is the winner"
// same for Y or if game is a draw

//if gameFlow[turn] === "playX", then player one is the winner
//if gameFlow[turn] === "playO", then player two is the winner

}

// * You should not be able to click remaining empty cells after the game is over.

// create variable to track which turn it is
// while gamestatus does not equal win or draw, check if win
const gameStatus = ['play', 'win', 'draw']
let gameStat = gameStatus[0]
const win = 'win'
const draw = "draw"
// if draw- change display message

// * A cell should not be able to be replayed once marked.

// add class can-play to all of the divs
// select class with selectquery or class selector
// create new element and add inner contents to element
// appenend new elements with inner conents to can-play section
// remove can-play class from div



//   * Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

// check each of the eight winning conditions
// add an event listener that will listen for the DOM to be loaded

// * Add a reset button that will clear the contents of the board.
const reset = document.querySelector("#reset")
reset.addEventListener('click', resetGame)
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