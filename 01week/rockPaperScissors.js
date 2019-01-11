'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  //scrub whitespace and convert hand1 and hand2 to lowercase
  hand1 = hand1.replace(/\s+/g, '').toLowerCase();
  hand2 = hand2.replace(/\s+/g, '').toLowerCase();
  //create User1 and User2 variables and assign with value 0 for rock, 1 for paper, 2 for scissors
  let User1;
  let User2;
  if (hand1 === 'rock') {
    User1 = 0;
  } else if (hand1 === "paper") {
    User1 = 1;
  } else {
    User1 = 2;
  };
  if (hand2 === 'rock') {
    User2 = 0;
  } else if (hand2 === "paper") {
    User2 = 1;
  } else {
    User2 = 2;
  };

	//if both values equal, announce tie
	if (User1 === User2) {
		return("It's a tie!");
	}
	//use difference of User2 and User1 to determine whether a User2 win occurs
	else if (User2 - User1 === 1 || User2 - User1 === -2) {
		return("Hand two wins!");
	//in all other cases, announce User1 win
	} else {
		return("Hand one wins!");
	};

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}