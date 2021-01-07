'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

function yell(str) {
    return str.toUpperCase();
}

// You must write your own tests

const assert = require('assert');

try {
    assert.strictEqual(typeof yell, 'function');
    assert.strictEqual(yell('anthony'), 'ANTHONY')
    assert.strictEqual(yell('hello world!'), 'HELLO WORLD!')
    assert.strictEqual(yell('a'), 'A');
} catch(e) {
    throw Error('No tests !')
}
