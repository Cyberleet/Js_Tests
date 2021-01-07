'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */
const capitalize = s => {
    for(let letter of s){
       if((/[a-zA-Z]/).test(letter)){
            
           return s.indexOf(letter) === 0 ? 
           s[0].toUpperCase() + s.slice(1) :
           s.slice(0, s.indexOf(letter)) + s[s.indexOf(letter)].toUpperCase() + s.slice(s.indexOf(letter) + 1) 
           
       }
    }
    return s
}
    
// You must write your own tests
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize.length, 1)
assert.strictEqual(capitalize('hello'), 'Hello')
assert.strictEqual(capitalize('hello wd'), 'Hello wd')
assert.strictEqual(capitalize('Hello'), 'Hello')
assert.strictEqual(capitalize('Hello wd'), 'Hello wd')
assert.strictEqual(capitalize('48.*/"é-finally'), '48.*/"é-Finally')
assert.strictEqual(capitalize('48.*/"é-'), '48.*/"é-')
// End of tests */
