'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  //create a simple function to check whether a letter s is a vowel
  function vowelTest(s) {
    return (/[aeiou]/).test(s);
  }
  //strip whitespace and convert input to lowercase
  word = word.replace(/\s+/g, '').toLowerCase();
  
  //create a new empty string to append the new word to
  let newString = ""
  //if the first letter of the word is a vowel, append the whole word and "yay", then return
  if (vowelTest(word[0])) {
  	newString = newString + word + "yay"
  	return newString
  //otherwise, create an empty string as the new suffix to append
  } else {
  	let i = 0
  	let newSuffix = ""
  //iterate through the word until reaching a vowel, and append every consonant to newSuffix
  	while (!vowelTest(word[i])) {
  		newSuffix = newSuffix + word[i]
  		i++
  	}
  //iterate through the remaining string to add it to newString
  	while (i !== word.length) {
  		newString = newString + word[i]
      i++
  	}
  //append the newSuffix, add "ay", the return
  	newString = newString + newSuffix + "ay"
  	return newString
  }
}



function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
