'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */
function yell (str){
    return str.toUpperCase();
}

// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.deepStrictEqual(yell('hello world'), 'HELLO WORLD')
assert.deepStrictEqual(yell('cyberleet'), 'CYBERLEET')
assert.deepStrictEqual(yell('mehdi'), 'MEHDI')