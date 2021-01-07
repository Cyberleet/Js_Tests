'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

 function cutFirst(str) {
    if(str.length <= 2) {
        return ''
    } else {
        return str.substring(0, str.length-2);
    }
    
 }

 function cutLast(str) {
    if(str.length <= 2) {
        return ''
    } else {
        return str.substring(2, str.length);
    }
     
 }

 function cutFirstLast(str) {
    if(str.length <= 4) {
        return ''
    } else {
        return str.substring(2, str.length-2);
    }
     
 }

// You must write your own tests

try {
    const assert = require('assert');

    assert.strictEqual(typeof cutFirst, 'function');
    assert.strictEqual(cutFirst('Anthony'), 'Antho');
    assert.strictEqual(cutFirst('Hello world!'), 'Hello worl');
    assert.strictEqual(cutFirst('ab'), '');

    assert.strictEqual(typeof cutLast, 'function');
    assert.strictEqual(cutLast('Anthony'), 'thony');
    assert.strictEqual(cutLast('Hello world!'), 'llo world!');
    assert.strictEqual(cutFirst('ab'), '');

    assert.strictEqual(typeof cutFirstLast, 'function');
    assert.strictEqual(cutFirstLast('Anthony'), 'tho');
    assert.strictEqual(cutFirstLast('Hello world!'), 'llo worl');
    assert.strictEqual(cutFirst('ab'), '');
} catch(e) {
    throw Error('No tests !')
}


