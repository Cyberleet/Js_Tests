'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

function jadenCase(str) {
  let arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  return arr.join(' ');
}

// You must write your own tests
// throw Error('No tests !')
const assert = require('assert')
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?")
