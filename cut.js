'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

// my code:

function cutFirst(str){
	// return str.slice(0,-2)

	var result = ''
	for (var i = 0; i < str.length-2;i++)
		result = result.concat(str[i])
	return result
}

function cutLast(str){
	// return str.slice(2)

	var result = ''
	for (var i = 2; i < str.length;i++)
		result = result.concat(str[i])
	return result
}

function cutFirstLast(str){
	// return cutLast(cutFirst(str))

	var result = ''
	for (var i = 2; i < str.length-2;i++)
		result = result.concat(str[i])
	return result
}

//* Begin of tests

const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.strictEqual(cutFirst("bamboo"),"bamb")
assert.strictEqual(cutLast("bamboo"),"mboo")
assert.strictEqual(cutFirstLast("bamboo"),"mb")

// End of tests *//

