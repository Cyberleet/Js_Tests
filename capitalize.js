'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
// console.log(capitalize('test'))

// You must write your own tests
const assert = require('assert');
assert.strictEqual(typeof capitalize, 'function', 'capitalize must be a function');
assert.strictEqual(capitalize('lorem'), 'Lorem');
assert.strictEqual(capitalize('emmanuel'), 'Emmanuel');
// throw Error('No tests !')
