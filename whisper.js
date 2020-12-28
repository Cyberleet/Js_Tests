'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */

const whisper = (str) => {
    return str.toLowerCase();
}
// You must write your own tests

const assert = require('assert');
assert.strictEqual(typeof whisper, 'function', 'whisper must be a function');
assert.strictEqual(whisper('Lorem'), 'lorem');
assert.strictEqual(whisper('Emmanuel'), 'emmanuel');
// throw Error('No tests !')
