'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//check each row element for win conditions, return true if met
function horizontalWin() {
  let result = false
  board.forEach(function(element){
    if (element[0] === 'X' && element[1] === 'X' && element[2] === 'X') {
      result = true
    } 
    if (element[0] === 'O' && element[1] === 'O' && element[2] === 'O') {
      result = true
    }
  })
  return result
}

//iterate two-dimensionally to determine if vertical win conditions are met, then return true if they are
function verticalWin() {
  let result = false
  for (let i = 0; i !== 3; i++) {
    let counterX = 0
    let counterO = 0
    for (let j = 0; j !== 3; j++) {
      if (board[j][i] === 'X'){
        counterX = counterX + 1
      } else if (board[j][i] === 'O'){
        counterO = counterO + 1
      }
    if (counterX === 3 || counterO === 3){
      result = true
    }  
    }
  }
  return result
}

//check for diagonal win conditions, return true if met
function diagonalWin() {
  let result = false
  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
    result = true
  } else if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X'){
    result = true
  }
  if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
    result = true
  } else if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O'){
    result = true
  }
  return result  
}

//check for all types of win conditions, and return true if any are met
function checkForWin() {
  let result = false
  if (horizontalWin() || verticalWin() || diagonalWin()){
    console.log()
    console.log("Win!")
    result = true
  }
  return result
}

//using playerTurn to determine which marker to use, place a marker in the appropriate part of the grid
function ticTacToe(row, column) {
  if (playerTurn === "X") {
    board[row][column] = "X"
    playerTurn = "O"
  } else if (playerTurn === "O") {
    board[row][column] = "O"
    playerTurn = "X"
  }
  checkForWin()
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}

