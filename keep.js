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
function keepFirst(str){
    return str.slice(0,2)
}
function keepLast(str){
    return str.slice(str.length-2)
}
function  keepFirstLast (str){
    return str.slice(2,4)


}

// You must write your own tests

const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')

assert.strictEqual(cutFirst("hello"), "he")
assert.strictEqual(cutLast("hello"), "lo")
assert.strictEqual(capitalize("hello"), "ll")
assert.strictEqual(cutFirst("Cyberleet"), "Cy")
assert.strictEqual(cutLast("Cyberleet"), "et")
assert.strictEqual(capitalize("Cyberleet"), "be")
assert.strictEqual(cutFirst("mehdi"), "me")
assert.strictEqual(cutLast("mehdi"), "di")
assert.strictEqual(capitalize("mehdi"), "hd")