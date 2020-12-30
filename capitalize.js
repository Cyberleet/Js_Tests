'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */

// You must write your own tests
function capitalize(str){
	return str[0].toUpperCase().concat(str.slice(1))
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize.length, 1)
assert.strictEqual(capitalize("blockair"),"Blockair")
assert.strictEqual(capitalize("i am a bamboo"),"I am a bamboo")
// End of tests */