'use strict'

/*
 * Create a getLast function that takes an array or a string
 * and return the last element.
 *
 * @notions Data-Structures, Get
 * @next id
 */

// Your code :
function getLast(a){
    'use strict'
    let result = "not a string or array"
    if(typeof a === 'string'){
        result = a.charAt(a.length - 1) 
    }
    else if(Array.isArray(a)){
        result = a[a.length - 1]
    }
    return result
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(getLast([ 2, 42 ]), 42)
assert.strictEqual(getLast([ 'pouet', 4, true ]), true)
assert.strictEqual(getLast([ getLast ]), getLast)
assert.strictEqual(getLast('salut'), 't')
assert.strictEqual(getLast([]), undefined)
// End of tests */
