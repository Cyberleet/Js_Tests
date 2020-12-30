'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */


function jadenCase(str){
	var temp = str.split(' ')
	for (var i = 0; i < temp.length; i++){
		temp[i] = temp[i][0].toUpperCase().concat(temp[i].slice(1))
	}
	return temp.join(' ')
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase("who are you ?"),"Who Are You ?")
assert.strictEqual(jadenCase("I am you !"),"I Am You !")
// End of tests */

