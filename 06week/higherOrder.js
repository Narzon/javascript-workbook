'use strict';

const assert = require('assert');

//iterate over the array and callback over each element
function forEach(arr, callback) {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    callback(arr[i])
  }
}

//iterate over the array, callback over each element, then push each element to a new array
function map(arr, callback) {
  let newArray = []
  let length = arr.length
  for (let i = 0; i < length; i++) {
    let newItem = callback(arr[i])
    newArray.push(newItem)
  }
  return newArray
}

//iterate over the array, if callback returns true for an element, push it into a new array
function filter(arr, callback) {
  let newArray = []
  let length = arr.length
  for (let i = 0; i < length; i++) {
    if (callback(arr[i])) {
      newArray.push(arr[i])
    }
  }
  return newArray
}

//iterate over the array, returning true if callback returns true, else return false
function some(arr, callback) {
  let newArray = []
  let length = arr.length
  for (let i = 0; i < length; i++) {
    if (callback(arr[i])) {
      return true
    }
  }
  return false
}

//iterate over the array, returning false if callback returns false, else return true
function every(arr, callback) {
  let newArray = []
  let length = arr.length
  for (let i = 0; i < length; i++) {
    if (!callback(arr[i])) {
      return false
    }
  }
  return true
}

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
