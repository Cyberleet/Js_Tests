'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */
const yell = s => s.toUpperCase();
// You must write your own tests
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.strictEqual(yell('hello'), 'HELLO')
assert.strictEqual(yell('HeLlo wD'), 'HELLO WD')
assert.strictEqual(yell('48.*/"é-fInALly'), '48.*/"É-FINALLY')
assert.strictEqual(yell('48.*/"é-'), '48.*/"É-')
// End of tests */
