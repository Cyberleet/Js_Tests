'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */
function jadenCase (str){
    const words = str.split(" ");
    
      return  words.map((word) => { 
            return word[0].toUpperCase() + word.substring(1); 
        }).join(" ");
    }

// You must write your own tests

const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("How are you"), "How Are You")
assert.strictEqual(jadenCase("i am fine"), "I Am Fine")
assert.strictEqual(jadenCase("hello i am mehdi"), "Hello I Am Mehdi ")
