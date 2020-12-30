'use strict'

/*
 * Create a function `words` that take a string
 * and return an array of each words using space as a delimiter
 *
 * @next whisper
 */

function words(str){
	// return str.split(' ')

	var result = []
	var temp = ''
	
	for (var i = 0; i < str.length; i++){
		if (str[i] === ' '){
			result.push(temp)
			temp = ''
		}
		else
			temp = temp.concat(str[i])
	}
	result.push(temp)

	return result
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof words, 'function')
assert.strictEqual(words.length, 1)
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ])
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ])
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
