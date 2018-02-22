// Display a red or black disc.

var currentPlayer = "red";
var nextPlayer = "black";

// Stack red and black discs in a column using a flex box layout.

// Display a full board consisting of 7 columns.
let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

// Set a click handler function for each column that adds an additional disc.
handleClick = function (event) {
    var column = event.target;
    if (currentPlayer === "black") {
        column.innerHTML = "<img src='black_circle.png'>";
        nextPlayer = "red";
    } else { 
        column.innerHTML = "<img src='red_circle.png'>"
        nextPlayer = "black";
    }
    currentPlayer = nextPlayer;
}

var columns = document.querySelectorAll("div.column-class");

for (var i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', handleClick)
}

// Take turns! Toggle the color of each successive disc added.

// Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.

// Once a column is full (has 6 discs), don't allow any more discs to be added.
// noMore () {

// }
// Check whether the last disc added completed a four-in-a-row within the column (vertically).
// checkVertical() {
// }
// Check whether the last disc added completed four-in-a-row horizontally.
// checkHorizonal () {

// }
// Check whether the last disc added completed four-in-a-row on either an upward- or downward-sloping diagonal.
// checkDiagonal () {

// }