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
	return str.slice(-2)
}

function keepFirstLast(str){
	return str.slice(2,4)
}

//* Begin of tests

const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.strictEqual(keepFirst("bamboo"),"ba")
assert.strictEqual(keepLast("bamboo"),"oo")
assert.strictEqual(keepFirstLast("bamboo"),"mb")

// End of tests *//
