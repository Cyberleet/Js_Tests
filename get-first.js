'use strict'

/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 * @next get-last
 */

// Your code :
function getFirst(a){
    'use strict'
    let result = "not a string or array"
    if(typeof a === 'string'){
        result = a.charAt(0) 
    }
    else if(Array.isArray(a)){
        result = a[0]
    }
    return result
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(getFirst([ 2, 42 ]), 2)
assert.strictEqual(getFirst([ 'pouet', 4, true ]), 'pouet')
assert.strictEqual(getFirst([ getFirst ]), getFirst)
assert.strictEqual(getFirst('salut'), 's')
assert.strictEqual(getFirst([]), undefined)
// End of tests */
