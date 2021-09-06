// Grabbing my HTML Elements

//status for who's turn
const statusDiv = document.querySelector(".status");
//status for win
const winStatus = document.querySelector(".win-status");

//query select all game cells
const cellDivs = document.querySelectorAll(".game-cell");

// game constants
const xSymbol = "x";
const oSymbol = "o";

//game variables
let gameIsLive = true; // game is active
let xIsNext = true; //if true, X is next. If false, O is next
let winner = null;

//functions
//this function will run after every move to check for winner
function checkWinStatus() {
  const topLeft = cellDivs[0].classList[2]; // classList2 checks for x or o
  const topMiddle = cellDivs[1].classList[2];
  const topRight = cellDivs[2].classList[2];
  const middleLeft = cellDivs[3].classList[2];
  const middleMiddle = cellDivs[4].classList[2];
  const middleRight = cellDivs[5].classList[2];
  const bottomLeft = cellDivs[6].classList[2];
  const bottomMiddle = cellDivs[7].classList[2];
  const bottomRight = cellDivs[8].classList[2];
  //check for the winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    gameIsLive = false;
    winner = topLeft;
    statusDiv.innerHTML = `${topLeft} is the winner!`;
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    gameIsLive = false;
    winner = middleLeft;
    statusDiv.innerHTML = `${middleLeft} is the winner!`;
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    gameIsLive = false;
    winner = bottomLeft;
    statusDiv.innerHTML = `${bottomLeft} is winner!`;
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    gameIsLive = false;
    winner = topLeft;
    statusDiv.innerHTML = ` ${topLeft} is the winner!`;
  } else if (
    topMiddle &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    gameIsLive = false;
    winner = topMiddle;
    statusDiv.innerHTML = `${topMiddle} is the winner!`;
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    gameIsLive = false;
    wiinner = topRight;
    statusDiv.innerHTML = `${topRight} is the winner!`;
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    gameIsLive = false;
    winner = topLeft;
    statusDiv.innerHTML = `${topLeft} is the winner!`;
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    gameIsLive = false;
    winner = topRight;
    statusDiv.innerHTML = `${topRight} is the winner!`;
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomMiddle &&
    bottomRight
  ) {
    gameIsLive = false;
    statusDiv.innerHTML = `It's a tie!`;
  }
}

//Event Handlers
//(e) is the short var reference for event object which will be passed into event handlers))

//declare variable to handle reset game
const handleReset = (e) => {
  console.log(e);
};

//declare variable to handle cell click
const handleCellClick = (e) => {
  const classList = e.target.classList; //create a variable to target a cell
  const location = classList[1]; //create a variable to determine location

  if (classList[2] === "x" || classList[2] === "o") {
    return; //returning nothing makes cell not clickable.
  }

  //if x is next, add x
  if (xIsNext === true) {
    classList.add("x");
    statusDiv.innerHTML = `${oSymbol} player is next!`; //has to run before checking win status.
    checkWinStatus();
    //switching turns by stating xIsNext is not true
    xIsNext = !xIsNext;
  } else {
    //when o is next, add o
    classList.add("circle");
    statusDiv.innerHTML = `${xSymbol} player is next!`;
    checkWinStatus();
    //switches turns back to x by saying it's not
    xIsNext = !xIsNext;
  }
};

//Reload page to refresh board

function refreshPage() {
  window.location.reload();
}

//Event Listener
//event listener/function for clicking on cell
for (const cellDiv of cellDivs) {
  //handles a cell of all cells
  cellDiv.addEventListener("click", handleCellClick);
}
