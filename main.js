// Display a red or black disc.

var currentPlayer = "red";
var nextPlayer = "black";
//click counter variables
var columnOne = 5;
var columnTwo = 5;
var columnThree = 5;
var columnFour = 5;
var columnFive = 5;
var columnSix = 5;
var columnSeven = 5;
// Arrays that store playerSelections
var playerRedSelections = new Array();
var playerBlackSelections = new Array();

// Display a full board consisting of 7 columns.
let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
//variables to account for 'null pointer error'
const edgeX = board[0].length - 2;
const edgeY = board.length - 2;

// for (let y = 0; y < board.length; y++) {
//     let row = board[y];
//     for (x = 0; x < row.length; x++) {
//         let cell = row[x];
//     }
// }

// Set a click handler function for each column that adds an additional disc.
// Take turns! Toggle the color of each successive disc added.
handleClick = function (event) {
    var column = event.target;

    if (currentPlayer === "black") {
        column.insertAdjacentHTML('beforeend', "<img src='black_circle.png'>");
        nextPlayer = "red";
    } else {
        column.insertAdjacentHTML('beforeend', "<img src='red_circle.png'>");
        nextPlayer = "black";
    }

    if (currentPlayer === "black") {
        playerSelctions = playerBlackSelections;
        nextPlayer = "red";
    } else {
        playerSelctions = playerRedSelections;
        nextPlayer = "black";
    }
    playerSelctions.push(column.id);
    currentPlayer = nextPlayer;


    console.log(column.id);

    if (column.id === 'column-1') {
        if (currentPlayer === "black") {
            board[columnOne][0] = 1
        }
        if (currentPlayer === "red") {
            board[columnOne][0] = 2
        }

        columnOne = columnOne - 1;
        // console.log(board);
    }

    if (column.id === 'column-2') {
        if (currentPlayer === "black") {
            board[columnTwo][1] = 1
        }
        if (currentPlayer === "red") {
            board[columnTwo][1] = 2
        }

        columnTwo = columnTwo - 1;
        // console.log(board);
    }

    if (column.id === 'column-3') {
        if (currentPlayer === "black") {
            board[columnThree][2] = 1
        }
        if (currentPlayer === "red") {
            board[columnThree][2] = 2
        }

        columnThree = columnThree - 1;
        // console.log(board);
    }


    if (column.id === 'column-4') {
        if (currentPlayer === "black") {
            board[columnFour][3] = 1
        }
        if (currentPlayer === "red") {
            board[columnFour][3] = 2
        }

        columnFour = columnFour - 1;
        // console.log(board);
    }

    if (column.id === 'column-5') {
        if (currentPlayer === "black") {
            board[columnFive][4] = 1
        }
        if (currentPlayer === "red") {
            board[columnFive][4] = 2
        }

        columnFive = columnFive - 1;
        // console.log(board);
    }

    if (column.id === 'column-6') {
        if (currentPlayer === "black") {
            board[columnSix][5] = 1
        }
        if (currentPlayer === "red") {
            board[columnSix][5] = 2
        }
        columnSix = columnSix - 1;
        // console.log(board);
    }

    if (column.id === 'column-7') {
        if (currentPlayer === "black") {
            board[columnSeven][5] = 1
        }
        if (currentPlayer === "red") {
            board[columnSeven][5] = 2
        }
        columnSeven = columnSeven - 1;
        // console.log(board);
    }
    //Vertical Check
    // for (let i = 0; i < board.length; i++) {
    //     for (let j = 0; j < board[i].length; j++) {
    //         let item = board[i][j];
    //         if (item !== 0) {
    //             if (item === 2) {
    //                 for (let k = 1; k < 4; k++) {
    //                     board[i + k][j] === 2;
    //                 }
    //             }
    //         }
    //     }
    // }

    //Horizontal Check
    for (let i = 0; i < board.length; i++) {
        for(let j = 0; j < edgeX; j++) {
            let item = board[i][j];
            if(item !== 0) {
                if (item === board[i][j+1] && item === board[i][j+2] && item === board[i][j+3]) {
                    alert("4 in row");
                }
                }
            }
        }


}
//adds event listeners to divs for columns
var columns = document.querySelectorAll("div.column-class");

for (var i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', handleClick)
}



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