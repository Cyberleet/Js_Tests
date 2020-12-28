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
 const keepFirst = str => str.substring(0, 2);
 const keepLast = str => str.slice(-2);
 
 const keepFirstLast = str => str.slice(3, 5);


// You must write your own tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function', 'cutFirst must be a function');
assert.strictEqual(keepFirst('lorem'), 'lo');
assert.strictEqual(keepFirst('emmanuel'), 'em');

assert.strictEqual(typeof keepLast, 'function', 'cutLast must be a function');
assert.strictEqual(keepLast('emmanuel'), 'el');

assert.strictEqual(typeof keepFirstLast, 'function', 'cutFirstLast must be a function');
assert.strictEqual(keepFirstLast('lorem'), 'em');
assert.strictEqual(keepFirstLast('emmanuel'), 'an');
// throw Error('No tests !')
