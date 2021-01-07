'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */
const whisper = s => s.toLowerCase();
// You must write your own tests
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper('HELLO'), 'hello')
assert.strictEqual(whisper('HellO WD'), 'hello wd')
assert.strictEqual(whisper('48.*/"é-FiNally'), '48.*/"é-finally')
assert.strictEqual(whisper('48.*/"é-'), '48.*/"é-')
// End of tests */
