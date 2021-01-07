'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */

function whisper(str) {
    return str.toLowerCase();
}

// You must write your own tests
const assert = require('assert');

try {
    assert.strictEqual(typeof whisper, 'function');
    assert.strictEqual(whisper('Anthony'), 'anthony')
    assert.strictEqual(whisper('HELLO WORLD!'), 'hello world!')
    assert.strictEqual(whisper('a'), 'a');
} catch(e) {
    throw Error('No tests !')
}
