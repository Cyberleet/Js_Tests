'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */

function capitalize(string){
      return string.replace(string[0],string[0].toUpperCase()); 
}






// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize.length, 1)
assert.strictEqual(capitalize("how are you ?"), "How are you ?")
assert.strictEqual(capitalize("How are you ?"), "How are you ?")
assert.strictEqual(capitalize("hOW ARE YOU ?"), "HOW ARE YOU ?")
assert.strictEqual(capitalize("HoW ARe YoU ?"), "HoW ARe YoU ?")