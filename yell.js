'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

/// Your code :
function yell(Strg){
    return Strg.toUpperCase()

}



// You must write your own tests
//throw Error('No tests !')

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.strictEqual(yell("hello, how are you"), "HELLO, HOW ARE YOU")
assert.strictEqual(yell("where are you from?"), "WHERE ARE YOU FROM?")

// End of tests */
