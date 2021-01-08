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
function abs(number){
   var str =  number.toString();
   if(str[0]==='-'){
   str = str.substr(1,str.length)
   }
   return parseInt(str);
}
function multiply(number1,number2){
        var temp = 0;
    if(number1==0 || number2==0){
            return 0 ; 
    }else if(number1<0 || number2<0){
        if(number1<0 && number2<0){
            number1 = abs(number1);
            number2 = abs(number2);
            for(let i = 0 ; i<number2;i++){
            temp+=number1;
            }
         }else {
            number1 = abs(number1);
            number2 = abs(number2);
            for(let i = 0 ; i<number2;i++){
            temp+=number1;
            } temp = -temp ;           
     }

    }else{
        for(let i = 0 ; i<number2;i++){
            temp+=number1;
        }
    }
    return temp ; 
    
}
console.log(multiply(21.2,42.2))
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
