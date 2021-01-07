'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */
function capitalize(str) {
    if(typeof str !== 'string') {
        return ''
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
}

// You must write your own tests
const assert = require('assert');

try {
    assert.strictEqual(typeof capitalize, 'function');
    assert.strictEqual(capitalize('anthony'), 'Anthony')
    assert.strictEqual(capitalize('hello world!'), 'Hello world!')
    assert.strictEqual(capitalize('a'), 'A');
    assert.strictEqual(capitalize(0), '');
} catch(e) {
    throw Error('No tests !')
}


