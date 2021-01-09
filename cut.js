'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */
function cutFirst (str){
    return str.slice(0,str.length-2);
}
function cutLast(str){
    return str.slice(2);
}
function cutFistLast(str){
    return str.slice(2,str.length-2)
}  

console.log(cutFirst("helooo"))
console.log(cutLast("helooo"))
console.log(cutFistLast("helooo"))
// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFistLast, 'function')

assert.strictEqual(cutFirst("hello"), "hel")
assert.strictEqual(cutLast("hello"), "llo")
assert.strictEqual(capitalize("hello"), "l")
assert.strictEqual(cutFirst("Cyberleet"), "Cyberle")
assert.strictEqual(cutLast("Cyberleet"), "berleet")
assert.strictEqual(capitalize("Cyberleet"), "berle")
assert.strictEqual(cutFirst("mehdi"), "meh")
assert.strictEqual(cutLast("mehdi"), "hdi")
assert.strictEqual(capitalize("mehdi"), "h")
