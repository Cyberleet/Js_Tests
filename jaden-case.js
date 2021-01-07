'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

 function jadenCase(str) {
     if(str === null || typeof str !== 'string') {
         return '';
     } else {
        str = str.toLowerCase();
        str = str.split(' ');
        for(let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
     }
 }


// You must write your own tests
try {
    const assert = require('assert');

    assert.strictEqual(typeof jadenCase, 'function');
    assert.strictEqual(jadenCase('anthony prabowo'), 'Anthony Prabowo');
    assert.strictEqual(jadenCase('Hello world!'), 'Hello World!');
    assert.strictEqual(jadenCase(0), '');
    assert.strictEqual(jadenCase(true), '');
    assert.strictEqual(jadenCase("true"), 'True');
} catch {
    throw Error('No tests !');
}

