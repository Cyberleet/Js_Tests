'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

//As said above, a little confusing x')
const cutFirst = s => s.slice(0, -2)
const cutLast = s => s.slice(2)
const cutFistLast = s => cutFirst(cutLast(s))

// You must write your own tests
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutFirst('hello'), 'hel')
assert.strictEqual(cutFirst('h'), '')

assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutLast('hello'), 'llo')
assert.strictEqual(cutLast('h'), '')

assert.strictEqual(typeof cutFistLast, 'function')
assert.strictEqual(cutFistLast.length, 1)
assert.strictEqual(cutFistLast('hello'), 'l')
assert.strictEqual(cutFistLast('h'), '')
// End of tests */

