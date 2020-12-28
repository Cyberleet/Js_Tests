'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

 const jadenCase = str => {
         let stringArr = str.split(' ')
        for (let i = 0; i < stringArr.length; i++) {
            stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].substring(1);
        }

        return stringArr.join(' ')
 }

 const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function', 'jadenCase must be a function');
assert.strictEqual(jadenCase('How are you'), 'How Are You');

// You must write your own tests
// throw Error('No tests !')
