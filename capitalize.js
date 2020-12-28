'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */

 // Your code :

 function capitalize(Strg){
    
    return Strg.charAt(0).toUpperCase() + Strg.substr(1);

 }

// You must write your own tests
//throw Error('No tests !')
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize.length, 1)
assert.strictEqual(capitalize('hello'), 'Hello')
assert.strictEqual(capitalize('world'), 'World')
assert.strictEqual(capitalize('morocco'), 'Morocco')

// End of tests */
