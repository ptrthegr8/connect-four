// Display a red or black disc.
var currentPlayer = "black"; /*2*/ 
var nextPlayer = "red"; /*1*/
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
var filledCells = 0;
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
const edgeX = board[0].length - 3;
const edgeY = board.length - 3;

// Set a click handler function for each column that adds an additional disc.
// Take turns! Toggle the color of each successive disc added.
handleClick = function (event) {
    var column = event.target;
    if (column.childElementCount < 6) {
        if (currentPlayer === "black") {
            filledCells += 1;
            playerSelections = playerBlackSelections;
            column.insertAdjacentHTML('beforeend', "<img src='black_circle.png'>");
            currentPlayer = "red";
            nextPlayer = "black";

        } else if (currentPlayer === "red") {
            filledCells += 1;
            playerSelections = playerRedSelections;
            column.insertAdjacentHTML('beforeend', "<img src='red_circle.png'>");
            currentPlayer = "black";
            nextPlayer = "red";
        }
        playerSelections.push(column.id);


        console.log(column.id);

        if (filledCells > 42) {
            alert("draw!");
            resetGame();
        }


        //code that changes number values in nested array
        if (column.id === 'column-1') {
            if (currentPlayer === "black") {
                board[columnOne][0] = 1;
            } else if (currentPlayer === "red") {
                board[columnOne][0] = 2;
            }

            columnOne = columnOne - 1;
        }

        if (column.id === 'column-2') {
            if (currentPlayer === "black") {
                board[columnTwo][1] = 1
            }
            if (currentPlayer === "red") {
                board[columnTwo][1] = 2
            }

            columnTwo = columnTwo - 1;
        }

        if (column.id === 'column-3') {
            if (currentPlayer === "black") {
                board[columnThree][2] = 1
            }
            if (currentPlayer === "red") {
                board[columnThree][2] = 2
            }

            columnThree = columnThree - 1;
        }


        if (column.id === 'column-4') {
            if (currentPlayer === "black") {
                board[columnFour][3] = 1
            }
            if (currentPlayer === "red") {
                board[columnFour][3] = 2
            }

            columnFour = columnFour - 1;
        }

        if (column.id === 'column-5') {
            if (currentPlayer === "black") {
                board[columnFive][4] = 1
            }
            if (currentPlayer === "red") {
                board[columnFive][4] = 2
            }

            columnFive = columnFive - 1;
        }

        if (column.id === 'column-6') {
            if (currentPlayer === "black") {
                board[columnSix][5] = 1
            }
            if (currentPlayer === "red") {
                board[columnSix][5] = 2
            }
            columnSix = columnSix - 1;
        }

        if (column.id === 'column-7') {
            if (currentPlayer === "black") {
                board[columnSeven][6] = 1
            }
            if (currentPlayer === "red") {
                board[columnSeven][6] = 2
            }
            columnSeven = columnSeven - 1;
        }

        //Vertical Check
        for (let i = 0; i < edgeY; i++) {
            for (let j = 0; j < board[0].length; j++) {
                let item = board[i][j];
                if (item !== 0) {
                    if (item === board[i + 1][j] && item === board[i + 2][j] && item === board[i + 3][j]) {
                        console.log("Four in a row: Vertical");
                        alert(nextPlayer + " wins!");
                    }
                }
            }
        }


        //Horizontal Check
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < edgeX; j++) {
                let item = board[i][j];
                if (item !== 0) {
                    if (item === board[i][j + 1] && item === board[i][j + 2] && item === board[i][j + 3]) {
                        console.log("Four in row: Horizontal");
                        alert(nextPlayer + " wins!");
                    }
                }
            }
        }

        //Diagonal-Down-Right
        for (let i = 0; i < edgeY; i++) {
            for (let j = 0; j < edgeX; j++) {
                item = board[i][j];
                if (item !== 0) {
                    if (item === board[i + 1][j + 1] && item === board[i + 2][j + 2] && item === board[i + 3][j + 3]) {
                        console.log("Four in a row: Diagonal-Down-Right");
                    }
                }
            }
        }

        //Diagonal-Down-Left

        for (let i = 2; i < board.length; i++) {
            for (let j = 0; j < edgeX; j++) {
                item = board[i][j];
                if (item !== 0) {
                    if (item === board[i - 1][j + 1] && item === board[i - 2][j + 2] && item === board[i - 3][j + 3]) {
                        console.log("Four in a row: Diagonal-Down-Left");
                    }
                }
            }
        }

        // //Diagonal-Up-Right

        for (let i = 2; i < board.length; i++) {
            for (let j = 0; j < edgeX; j++) {
                item = board[i][j];
                if (item !== 0) {
                    if (item === board[i - 1][j + 1] && item === board[i - 2][j + 2] && item === board[i - 3][j + 3]) {
                        console.log("Four in a row: Diagonal-Up-Right");
                    }
                }
            }
        }

        // //Diagonal-Up-Left

        for (let i = 0; i < edgeY; i++) {
            for (let j = 0; j < edgeX; j++) {
                item = board[i][j];
                if (item !== 0) {
                    if (item === board[i + 1][j + 1] && item === board[i + 2][j + 2] && item === board[i + 3][j + 3]) {
                        console.log("Four in a row: Diagonal-Up-Left")
                    }
                }
            }
        }



    }
}

//END OF CLICK EVENT

//adds event listeners to divs for columns
var columns = document.querySelectorAll("div.column-class");

for (var i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', handleClick);
}

//resets game
function resetGame() {
    board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    columnOne = 5;
    columnTwo = 5;
    columnThree = 5;
    columnFour = 5;
    columnFive = 5;
    columnSix = 5;
    columnSeven = 5;

    playerSelections = new Array();
    playerRedSelections = new Array();
    playerBlackSelections = new Array();
    for (let i = 0; i < columns.length; i++) {
        columns[i].innerHTML = (i + 1);
    }
    filledCells = 0;
}
// Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.

// Once a column is full (has 6 discs), don't allow any more discs to be added.