'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */
function whisper(str){
    return str.toLowerCase();
}
// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.deepStrictEqual(whisper('HELLO WORLD'), "hello word")
assert.deepStrictEqual(whisper('CYBERLEET'), "cyberleet")
assert.deepStrictEqual(whisper('MEHDI'), "mehdi")