'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//pop the last item off of the starting stack and push it on to the ending stack
function movePiece(startStack, endStack) {
  let piece = stacks[startStack].pop()
  stacks[endStack].push(piece)
}

//check for legality of move
function isLegal(startStack, endStack) {
  let state = false
  if (stacks[startStack] == undefined || stacks[endStack] == undefined) {
  	console.log("Error! Stacks do not exist. Please use a, b, or c as valid inputs.")
  	return state
  }
  //initiate variables startLength and endLength to find the value of the last element in each stack, startLast and endLast
  let startLength = stacks[startStack].length
  let endLength = stacks[endStack].length
  let startLast = stacks[startStack][startLength - 1]
  //if the destination stack is empty, give it a value of 5 to make all moves to it legal
  let endLast = stacks[endStack][endLength - 1]
  if (endLast == undefined) {
    endLast = 5
  }
  //if the starting stack is empty, declare an illegal move and return
  if (startLast == undefined) {
    console.log("Error! Starting stack is empty! Illegal move.")
    return state
  }
  //if piece to be moved is a larger value than the last piece in the destination stack, declare an illegal move and return
  if (startLast > endLast) {
    console.log("Error! Cannot move a piece on top of a smaller piece!")
    return state
  }
  //if all conditions so far met, return true for a legal move
  if (startLast < endLast) {
    state = true
  }
  return state
}

//check for a win state by seeing whether either of the other stacks are filled, i.e. at length 4
function checkForWin() {
  let state = false
  if (stacks["b"].length == 4 || stacks["c"].length == 4) {
    console.log("Success, full stack has been moved! Congratulations!")
    printStacks()
    state = true
  }
  return state
}

//given a starting and ending stack, check if a move is legal, and if so, proceed to move pieces
function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
  }
  //check for a win, and reset the board if conditions are met
  if (checkForWin()) {
    resetBoard()
    return
  }
}

//reset the board
function resetBoard() {
stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
}
console.log("Resetting Board.")
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}


// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#resetBoard()', () => {
  	it('should reset the board to starting positions', () => {
  		stacks = {
  			a: [2, 1],
  			b: [4],
  			c: [3]
  		};
  		resetBoard()
  		assert.deepEqual(stacks, { a: [4, 3, 2, 1], b: [], c: [] });
  	});
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
    it('should not allow illegal inputs', () => {
      stacks = {
        a: [4],
        b: [3, 2],
        c: [1]
      };
      assert.equal(isLegal('Elf', 12345), false);
    });
  });
  
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
