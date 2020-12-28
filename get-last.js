'use strict'

/*
 * Create a getLast function that takes an array or a string
 * and return the last element.
 *
 * @notions Data-Structures, Get
 * @next id
 */

// Your code :
function getLast(AorS){
    var Firts_letter;
    if (typeof AorS === 'string')
    Firts_letter = AorS.charAt(AorS.length-1);
    else
    Firts_letter = AorS[AorS.length-1];
    return Firts_letter;       
}

//short answer :)
// function getLast(AorS){
//     return AorS[AorS.length-1] 
// }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(getLast([ 2, 42 ]), 42)
assert.strictEqual(getLast([ 'pouet', 4, true ]), true)
assert.strictEqual(getLast([ getLast ]), getLast)
assert.strictEqual(getLast('salut'), 't')
assert.strictEqual(getLast([]), undefined)
// End of tests */
