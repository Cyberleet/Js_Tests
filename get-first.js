'use strict'

/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 * @next get-last
 */

// Your code :

function getFirst(AorS){
    var Firts_letter;
    if (typeof AorS === 'string')
    Firts_letter = AorS.charAt(0);
    else
    Firts_letter = AorS[0];
    return Firts_letter;       
}

// short answer :)
// function getFirst(AorS){
//     return AorS[0] 
// }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(getFirst([ 2, 42 ]), 2)
assert.strictEqual(getFirst([ 'pouet', 4, true ]), 'pouet')
assert.strictEqual(getFirst([ getFirst ]), getFirst)
assert.strictEqual(getFirst('salut'), 's')
assert.strictEqual(getFirst([]), undefined)
// End of tests */
