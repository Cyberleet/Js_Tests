'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */

// You must write your own tests
function whisper(str){
    return str.toLowerCase();
}
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper("How are you ?"), "how are you ?")
assert.strictEqual(whisper("how are you ?"), "how are you ?")
assert.strictEqual(whisper("HOW ARE YOU ?"), "how are you ?")
assert.strictEqual(whisper("HoW ARe YoU ?"), "how are you ?")