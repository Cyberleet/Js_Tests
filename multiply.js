'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 * @next multiply-recursive
 */

// Your code :

function multiply(num1,num2){
	if (num1 == 0 || num2 == 0)
		return 0
	
	var s1 = Math.sign(num1)
	var s2 = Math.sign(num2)

	var result = 0
	if (s1 == s2){
		var temp1,temp2
		if (s1 < 0){
			temp1 = Math.abs(Math.max(num1,num2))
			temp2 = Math.abs(Math.min(num1,num2))
		}
		else{
			temp1 = Math.min(num1,num2)
			temp2 = Math.max(num1,num2)
		}

		for (var i = 0; i < temp1; i++){
			result += temp2
		}
		return result
	}
	else{
		var result = 0
		if (s1 < 0){
			for (var i = 0; i < num2; i++){
				result += num1
			}
		}
		else {
			for (var i = 0; i < num1; i++){
				result += num2
			}
		}
		return result
	}
	
	return result
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
