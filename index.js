// select each square
// * A user should be able to click on different squares to make a move.

// creat a variable selector for each div
const div1 = document.getElementById('one')
const div1 = document.getElementById('two')
const div1 = document.getElementById('three')
const div1 = document.getElementById('four')
const div1 = document.getElementById('five')
const div1 = document.getElementById('six')
const div1 = document.getElementById('seven')
const div1 = document.getElementById('eight')
const div1 = document.getElementById('nine')

// change innerText of div click
function makeMove() {
    
}
// * Every click will alternate between marking an `X` and `O`
const gameflow = ["playX", "playO"]
// create variable to track which turn it is
const gameOutcome = ['win', 'draw']
const winner = 'win'
const 
let playersTurn = null;
const player
    // inner content will be while loop
// a 

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
document.addEventListener('DOMContentLoaded', () => {
    // call the makePalette function
    makePalette()
})

// add an event listener to my generate button
generate.addEventListener("click", makePalette)