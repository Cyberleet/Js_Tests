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

function keepFirst(str) {
    return str.slice(0,2)
}

function keepLast(str) {
    return str.slice(-2);
}

function keepFirstLast(str) {
    return str.slice(2,4);
}

// You must write your own tests
const assert = require('assert')

try {
    assert.strictEqual(typeof keepFirst, 'function');
    assert.strictEqual(keepFirst.length, 1);
    assert.strictEqual(keepFirst('Anthony'), 'An')
    assert.strictEqual(keepFirst('hello world!'), 'he')
    assert.strictEqual(keepFirst('a'), 'a');
    assert.strictEqual(keepFirst(''), '');

    assert.strictEqual(typeof keepLast, 'function');
    assert.strictEqual(keepLast.length, 1);
    assert.strictEqual(keepLast('Anthony'), 'ny')
    assert.strictEqual(keepLast('hello world!'), 'd!')
    assert.strictEqual(keepLast('a'), 'a');
    assert.strictEqual(keepLast(''), '');

    assert.strictEqual(typeof keepFirstLast, 'function');
    assert.strictEqual(keepFirstLast.length, 1);
    assert.strictEqual(keepFirstLast('Hello'), 'll')
    assert.strictEqual(keepFirstLast('a'), '')
    assert.strictEqual(keepFirstLast(''), '');
} catch(e) {
    throw Error('No tests !')
}
