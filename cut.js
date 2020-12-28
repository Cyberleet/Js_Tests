'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

// Your code :
function cutFirst(Strg){
    return Strg.slice(2,Strg.length)

}
function cutLast(Strg){
    return Strg.slice(0,Strg.length-2)
}
function cutFistLast(Strg){
    return Strg.slice(2,Strg.length-2)
}
    



// You must write your own tests
//throw Error('No tests !')

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFistLast, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFistLast.length, 1)
assert.strictEqual(cutFirst('hello'), 'llo')
assert.strictEqual(cutLast('hello'), 'hel')
assert.strictEqual(cutFistLast('hello'), 'l')
assert.strictEqual(cutFirst('worldwide'), 'rldwide')
assert.strictEqual(cutLast('worldwide'), 'worldwi')
assert.strictEqual(cutFistLast('worldwide'), 'rldwi')
// End of tests */

