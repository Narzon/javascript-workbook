if (typeof describe === 'function') {

//tests for various scenarios

  describe('#rockPaperScissors()', () => {
    it('should result in hand one winning', () => {
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
    });
    it('should result in hand two winning', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
    });
    it('should return undefined when input(s) are invalid', () => {
      assert.equal(rockPaperScissors('rock', 'pineapple'), undefined);
      assert.equal(rockPaperScissors('Paper', 233), undefined);
      assert.equal(rockPaperScissors(false, 'sCiSsOrs'), undefined);
    });
    it('should return tie when inputs are same', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('Paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'sCiSsOrs'), "It's a tie!");
    });

  });
} else {

  getPrompt();

}