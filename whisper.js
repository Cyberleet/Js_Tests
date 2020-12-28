'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */

// Your code :
function whisper(Strg){
    return Strg.toLowerCase()
}



// You must write your own tests
//throw Error('No tests !')

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper("HELLO, HOW ARE YOU"), "hello, how are you")
assert.strictEqual(whisper("WHERE ARE YOU FROM?"), "where are you from?")

// End of tests */

