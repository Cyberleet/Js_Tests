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

const keepFirst = s => s.slice(0, 2)
const keepLast = s => s.slice(-2)
const keepFirstLast = s => s.slice(2, 4)

// You must write your own tests
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepFirst('hello'), 'he')
assert.strictEqual(keepFirst('h'), 'h')
assert.strictEqual(keepFirst(''), '')

assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepLast('hello'), 'lo')
assert.strictEqual(keepLast('h'), 'h')
assert.strictEqual(keepFirst(''), '')

assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.strictEqual(keepFirstLast('hello'), 'll')
assert.strictEqual(keepFirstLast('h'), '')
assert.strictEqual(keepFirst(''), '')
// End of tests */