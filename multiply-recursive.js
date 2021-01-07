'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops, do it using recursion
 *
 * @notions Primitive and Operators, Functions, Recursion
 * @next
 */

// Your code :
function multiply(a, b) {
    
    if(a === 0 || b === 0){
        return 0
    }

    else if((a>0 && b>0) || (a<0 && b>0)){
        if(b === 1){
            return a
        }
        else{
            return a + multiply(a, b-1)
        }
    }
    
    else if((a<0 && b<0)){
        let posA = Math.abs(a)
        let posB = Math.abs(b)
        if(b === 1){
            return posA
        }
        else{
            return posA + multiply(posA, posB-1)
        }
    }
    else if((a>0 && b<0)){
        
        if(a === 1){
            return a
        }
        else{
            return b + multiply(b, a-1)
        }
    }
       
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
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
