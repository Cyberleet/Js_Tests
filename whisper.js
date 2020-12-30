'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */

function whisper(str){
	return str.toLowerCase()

	// var result = ''
	// for (var i = 0; i < str.length; i++){
	// 	result = result.concat(str[i].toLowerCase())
	// }
	// return result
}

//* Begin of tests

const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper("BAMBOO"),"bamboo")

// End of tests *//