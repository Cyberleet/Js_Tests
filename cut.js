'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

// You must write your own tests
// const word = 'word'
// console.log(word.substring(0, word.length - 1))

const cutFirst = str => str.substring(2);
const cutLast = str => str.substring(0, str.length - 2);
const cutFirstLast = str => {
    str = str.substring(2)
    return str.substring(0, str.length - 2)
};


const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function', 'cutFirst must be a function');
assert.strictEqual(cutFirst('lorem'), 'rem');
assert.strictEqual(cutFirst('emmanuel'), 'manuel');

assert.strictEqual(typeof cutLast, 'function', 'cutLast must be a function');
assert.strictEqual(cutLast('lorem'), 'lor');
assert.strictEqual(cutLast('emmanuel'), 'emmanu');

assert.strictEqual(typeof cutFirstLast, 'function', 'cutFirstLast must be a function');
assert.strictEqual(cutFirstLast('lorem'), 'r');
assert.strictEqual(cutFirstLast('emmanuel'), 'manu');
// // throw Error('No tests !')

