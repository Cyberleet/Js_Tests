'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */
function capitalize(s) { 
          
          
    return s[0].toUpperCase() +  
      s.slice(1); 
       
  } 


// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize("hello"), "Hello")
assert.strictEqual(capitalize("yes"), "Yes")
assert.strictEqual(capitalize("no"), "No")