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
const multiply = (a, b) => {
    let result
    if(a === 0 || b === 0){
        return 0
    }
    else if((a>0 && b>0) || (a<0 && b>0)){
        result = a
        while(b > 1){
            result += a
            b--
        }
    }
    else if((a>0 && b<0)){
        result = b 
        while(a > 1){
            result += b
            a--
        }
    }
    else if((a<0 && b<0)){
        let posA = Math.abs(a)
        let posB = Math.abs(b)
        result = posA
        while(posB > 1){
            result += posA
            posB--
        }
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
