'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

// Your code :

function jadenCase(Strg){
    let Temp = Strg.split(' ')
    
    for (let i = 0; i < Temp.length; i++) {
        Temp[i] = Temp[i][0].toUpperCase() + Temp[i].substr(1);
    }
    
    return Temp.join(' ')

}

// You must write your own tests
//throw Error('No tests !')

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase("How are you ?"),"How Are You ?")
assert.strictEqual(jadenCase('what is your name ?'), "What Is Your Name ?")
// // End of tests */
