'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */
// Your code :

function keepFirst(Strg){
    return Strg.substr(0,2)
}
function keepLast(Strg){
    return Strg.substr(Strg.length-2,2)
}
function keepFirstLast(Strg){
    return Strg.substr(2,2)
}

// You must write your own tests
//throw Error('No tests !')

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.strictEqual(keepFirst("Where"), "Wh")
assert.strictEqual(keepLast("Where"), "re")
assert.strictEqual(keepFirstLast("Where"), "er")
assert.strictEqual(keepFirst("Somewhere"), "So")
assert.strictEqual(keepLast("Somewhere"), "re")
assert.strictEqual(keepFirstLast("Somewhere"), "me")
// End of tests */
