'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


function Checker(symbol, location) {
	// define a constructor function Checker with parameters to determine each piece's symbol and location on the board
	this.symbol = symbol
	this.location = location
	//by default, a piece is not kinged
	this.isKing = false
}

class Board {
	constructor() {
		this.grid = []
		// create an empty array to keep track of how many checkers remain on the board
		this.checkers = []
	}
	// method that creates an 8x8 array, filled with null values
	createGrid() {
		// loop to create the 8 rows
		for (let row = 0; row < 8; row++) {
			this.grid[row] = [];
			// push in 8 columns of nulls
			for (let column = 0; column < 8; column++) {
				this.grid[row].push(null);
			}
		}
	}
	viewGrid() {
		// add our column numbers
		let string = "  0 1 2 3 4 5 6 7\n";
		for (let row = 0; row < 8; row++) {
			// we start with our row number in our array
			const rowOfCheckers = [row];
			// a loop within a loop
			for (let column = 0; column < 8; column++) {
				// if the location is "truthy" (contains a checker piece, in this case)
				if (this.grid[row][column]) {
					// push the symbol of the check in that location into the array
					rowOfCheckers.push(this.grid[row][column].symbol);
				} else {
					// just push in a blank space
					rowOfCheckers.push(' ');
				}
			}
			// join the rowOfCheckers array to a string, separated by a space
			string += rowOfCheckers.join(' ');
			// add a 'new line'
			string += "\n";
		}
		console.log(string);
	}

	// define method populateCheckers to populate the board
	populateCheckers() {
		// create checkers for one player with Xs and another with Os
		for(let i = 0; i < 3; i++) {
			for(let j = 0; j < 8; j++) {
				if (i == 0 || i == 2) {
					if (j % 2 !== 0) {
						let newChecker = new Checker("X", "" + i + j)
						this.checkers.push(newChecker)
						this.grid[i][j] = newChecker
					}
				}
				if (i == 1) {
					if (j % 2 == 0) {
						let newChecker = new Checker("X", "" + i + j)
						this.checkers.push(newChecker)
						this.grid[i][j] = newChecker
					}
				}
			}
		}
		for(let i = 5; i < 8; i++) {
			for(let j = 0; j < 8; j++) {
				if (i == 5 || i == 7) {
					if (j % 2 == 0) {
						let newChecker = new Checker("O", "" + i + j)
						this.checkers.push(newChecker)
						this.grid[i][j] = newChecker
					}
				}
				if (i == 6) {
					if (j % 2 !== 0) {
						let newChecker = new Checker("O", "" + i + j)
						this.checkers.push(newChecker)
						this.grid[i][j] = newChecker
					}
				}
			}
		}
	}
}

class Game {
	constructor() {
		this.board = new Board;
	}
	start() {
		this.board.createGrid();
		// call a method to populate the board at the start of a game
		this.board.populateCheckers();
	}
	moveChecker(whichPiece, toWhere) {
		// make sure to catch empty or invalid inputs
		if (!whichPiece || !toWhere || whichPiece.length !== 2 || toWhere.length !== 2) {
			console.log("Error! Illegal input, please try two digit coordinates.")
			return
		}
		// determine coordinates i,j for whichPiece and x,y for toWhere
		let i = parseInt(whichPiece[0])
		let j = parseInt(whichPiece[1])
		let x = parseInt(toWhere[0])
		let y = parseInt(toWhere[1]) 
		// make sure a piece exists in the origin space
		if (!game.board.grid[i][j]) {
			console.log("Error! Illegal move; no piece exists in that space.")
			return
		}
		// check to see if piece is X, or a O that is kinged (can move in either direction)
		if (game.board.grid[i][j] && (game.board.grid[i][j].symbol == "X" || game.board.grid[i][j].isKing == true )) {
			// check to see if toWhere is a single space jump that is empty
			if (x - i == 1 && (y - j == 1  || j - y == 1) && (!game.board.grid[x][y])) {
				// find the initial piece in checkers, change its location property, and change the board to reflect results
				let arrayLength = game.board.checkers.length
				for (let index = 0; index < arrayLength; index++) {
					if (game.board.checkers[index] && game.board.checkers[index].location == "" + i + j) {
						game.board.checkers[index].location = "" + x + y
						game.board.grid[x][y] = game.board.checkers[index]
						game.board.grid[i][j] = null
					}
				}
			}
			// check to see if toWhere is a legal double space jump over an enemy piece
			if (x - i == 2 && (y - j == 2 || j - y == 2)) {
				let k = i + 1
				let l
				if (y > j) {
					l = j + 1
				}
				if (j > y) {
					l = j - 1
				}
				if (game.board.grid[k][l] && (game.board.grid[k][l].symbol !== game.board.grid[i][j].symbol)) {
					// change the location property of the original piece, change the board to reflect this
					let arrayLength = game.board.checkers.length
					for (let index = 0; index < arrayLength; index++) {
						if (game.board.checkers[index] && game.board.checkers[index].location == "" + i + j) {
							game.board.checkers[index].location = "" + x + y
							game.board.grid[x][y] = game.board.checkers[index]
							game.board.grid[i][j] = null
						}
					}
					// splice the taken piece from checkers, and change the board to reflect that
					let arrayLength2 = game.board.checkers.length
					for (let index = 0; index < arrayLength2; index++) {
						if (game.board.checkers[index] && game.board.checkers[index].location == "" + k + l) {
							game.board.checkers.splice(index, 1)
							game.board.grid[k][l] = null
						}
					}
				}
			}
			// check to see if piece should become king
			if (game.board.grid[x][y] && game.board.grid[x][y].isKing == false && game.board.grid[x][y].location[0] == "7") {
				game.board.grid[x][y].isKing = true
			}
		}
		// repeat the process for O (or kinged X) checkers
		if (game.board.grid[i][j] && (game.board.grid[i][j].symbol == "O" || game.board.grid[i][j].isKing == true)) {
			if (i - x == 1 && (y - j == 1  || j - y == 1) && (!game.board.grid[x][y])) {
				let arrayLength = game.board.checkers.length
				for (let index = 0; index < arrayLength; index++) {
					if (game.board.checkers[index] && game.board.checkers[index].location == "" + i + j) {
						game.board.checkers[index].location = "" + x + y
						game.board.grid[x][y] = game.board.checkers[index]
						game.board.grid[i][j] = null
					}
				}
			}
			if (i - x == 2 && (y - j == 2 || j - y == 2)) {
				let k = i - 1
				let l
				if (y > j) {
					l = j + 1
				}
				if (j > y) {
					l = j - 1
				}
				if (game.board.grid[k][l] && (game.board.grid[k][l].symbol !== game.board.grid[i][j].symbol)) {
					let arrayLength = game.board.checkers.length
					for (let index = 0; index < arrayLength; index++) {
						if (game.board.checkers[index] && game.board.checkers[index].location == "" + i + j) {
							game.board.checkers[index].location = "" + x + y
							game.board.grid[x][y] = game.board.checkers[index]
							game.board.grid[i][j] = null
						}
					}
					let arrayLength2 = game.board.checkers.length
					for (let index = 0; index < arrayLength2; index++) {
						if (game.board.checkers[index] && game.board.checkers[index].location == "" + k + l) {
							game.board.checkers.splice(index, 1)
							game.board.grid[k][l] = null
						}
					}
				}
			}
			// check to see if piece should become king
			if (game.board.grid[x][y] && game.board.grid[x][y].isKing == false && game.board.grid[x][y].location[0] == "0") {
				game.board.grid[x][y].isKing = true
			} 
		}   
	}
}

function getPrompt() {
	game.board.viewGrid();
	rl.question('which piece?: ', (whichPiece) => {
		rl.question('to where?: ', (toWhere) => {
			game.moveChecker(whichPiece, toWhere);
			if (checkForWin()) {
				getPrompt();
			}
		});
	});
}

// define a function to check for wins when all of one checker symbol is completely gone
let checkForWin = function() {
	let xCounter = 0
	let oCounter = 0
	let returnState = true
	let arrayLength = game.board.checkers.length
		for (let index = 0; index < arrayLength; index++) {
			if (game.board.checkers[index].symbol == "X") {
				xCounter++
			}
			if (game.board.checkers[index].symbol == "O") {
				oCounter++
			}
		}
	if (xCounter == 0) {
		console.log("Congratulations! Bottom player (O) wins!")
		returnState = false
	}
	if (oCounter == 0) {
		console.log("Congratulations! Top player (X) wins!")
		returnState = false
	}
	return returnState
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
	describe('Game', () => {
		it('should have a board', () => {
			assert.equal(game.board.constructor.name, 'Board');
		});
		it('board should have 24 checkers', () => {
			assert.equal(game.board.checkers.length, 24);
		});
	});

	describe('Game.moveChecker()', () => {
		it('should move a checker', () => {
			assert(!game.board.grid[4][1]);
			game.moveChecker('50', '41');
			assert(game.board.grid[4][1]);
			game.moveChecker('21', '30');
			assert(game.board.grid[3][0]);
			game.moveChecker('52', '43');
			assert(game.board.grid[4][3]);
		});
		it('should be able to jump over and kill another checker', () => {
			game.moveChecker('30', '52');
			assert(game.board.grid[5][2]);
			assert(!game.board.grid[4][1]);
			assert.equal(game.board.checkers.length, 23);
		});
	});
} else {
	getPrompt();
}
