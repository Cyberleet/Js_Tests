'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

 function yell(str){
     return str.toUpperCase();
 }

// You must write your own tests

const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.strictEqual(yell("How are you ?"), "HOW ARE YOU ?")
assert.strictEqual(yell("how are you ?"), "HOW ARE YOU ?")
assert.strictEqual(yell("HOW ArE YOU ?"), "HOW ARE YOU ?")
assert.strictEqual(yell("HoW ARe YoU ?"), "HOW ARE YOU ?")