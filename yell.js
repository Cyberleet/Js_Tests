'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

 function yell(str){
 	return str.toUpperCase()

 	// var result = ''
 	// for (var i = 0; i < str.length; i++){
 	// 	result = result.concat(str[i].toUpperCase())
 	// }
 	// return result
 }

//* Begin of tests

const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.strictEqual(yell("bamboo"),"BAMBOO")

// End of tests *//