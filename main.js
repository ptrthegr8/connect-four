// Display a red or black disc.
var currentPlayer = "Black"; /*2*/
var nextPlayer = "Red"; /*1*/
//click counter variables

let columnCount = [5,5,5,5,5,5,5];


// Variables and Arrays that will be filled
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
        if (currentPlayer === "Black") {
            filledCells += 1;
            playerSelections = playerBlackSelections;
            column.insertAdjacentHTML('beforeend', "<img src='black_circle.png'>");
            currentPlayer = "Red";
            nextPlayer = "Black";

        } else if (currentPlayer === "Red") {
            filledCells += 1;
            playerSelections = playerRedSelections;
            column.insertAdjacentHTML('beforeend', "<img src='red_circle.png'>");
            currentPlayer = "Black";
            nextPlayer = "Red";
        }
        playerSelections.push(column.id);


        console.log(column.id);

        // if (filledCells > 42) {
        //     alert("draw!");
        //     resetGame();
        // }


        if (filledCells > 42) {
            alert("draw!");
            resetGame();
        }



        //code that changes number values in nested array
        for (let x = 0; x < 7; x++) {
            if (column.id === 'column-' + (x + 1)) {
                if (currentPlayer === "Black") {
                    board[columnCount[x]][x] = 1;
                } else if (currentPlayer === "Red") {
                    board[columnCount[x]][x] = 2;
                }
                columnCount[x] = columnCount[x] - 1;
            }
        }

        //Vertical Check
        for (let i = 0; i < edgeY; i++) {
            for (let j = 0; j < board[0].length; j++) {
                let item = board[i][j];
                if (item !== 0) {
                    if (item === board[i + 1][j] && item === board[i + 2][j] && item === board[i + 3][j]) {
                        console.log("Four in a row: Vertical");
                        alert(nextPlayer + " wins! Sick moves, guy.");
                        resetGame();
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
                        alert(nextPlayer + " wins! Great style, buddy.")
                        resetGame();
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
                        alert(nextPlayer + " wins! You're lit, fam.")
                        resetGame();
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
                        alert(nextPlayer + " wins! Awesome-o, friend.")
                        resetGame();
                    }
                }
            }
        }

        // //Diagonal-Up-Right

        // for (let i = 2; i < board.length; i++) {
        //     for (let j = 0; j < edgeX; j++) {
        //         item = board[i][j];
        //         if (item !== 0) {
        //             if (item === board[i - 1][j + 1] && item === board[i - 2][j + 2] && item === board[i - 3][j + 3]) {
        //                 console.log("Four in a row: Diagonal-Up-Right")
        //             }
        //         }
        //     }
        // }

        // //Diagonal-Up-Left

        // for (let i = 0; i < edgeY; i++) {
        //     for (let j = 0; j < edgeX; j++) {
        //         item = board[i][j];
        //         if (item !== 0) {
        //             if (item === board[i + 1][j + 1] && item === board[i + 2][j + 2] && item === board[i + 3][j + 3]) {
        //                 console.log("Four in a row: Diagonal-Up-Left");
        //             }
        //         }
        //     }
        // }



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

    columnCount = [5,5,5,5,5,5,5]

    playerSelections = new Array();
    playerRedSelections = new Array();
    playerBlackSelections = new Array();
    for (let i = 0; i < columns.length; i++) {
        columns[i].innerHTML = (i + 1);
    }
    filledCells = 0;
}