'use strict'

/*
 * Create a function `sentence` that takes an array of strings
 * and return a strings of all the element separated by spaces
 *
 * @next words
 */

function sentence(arr) {
    let str = '';
    for(let i = 0; i < arr.length - 1; i++) { // get until the second last letter
        str += arr[i] + ' ';
    }
    str += arr[arr.length - 1] // add the last letter without space
    return str;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof sentence, 'function')
assert.strictEqual(sentence.length, 1)
assert.deepStrictEqual(sentence([ 'a', 'b', 'c' ]), 'a b c')
assert.deepStrictEqual(sentence([ 'a', '1', 'c' ]), 'a 1 c')
assert.deepStrictEqual(sentence([ 'a', '1', 'c', 'd', 'e', 'f' ]), 'a 1 c d e f')
assert.deepStrictEqual(sentence([ 'wol.lol', 'lo,lol']), 'wol.lol lo,lol')
// End of tests */
