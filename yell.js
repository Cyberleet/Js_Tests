'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

 const yell = (str) => {
    return str.toUpperCase();
}

// You must write your own tests

const assert = require('assert');
assert.strictEqual(typeof yell, 'function', 'yell must be a function');
assert.strictEqual(yell('Lorem'), 'LOREM');
assert.strictEqual(yell('Emmanuel'), 'EMMANUEL');

// throw Error('No tests !')
