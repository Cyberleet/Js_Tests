'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */
function jadenCase(string){
     var capital = [];
     var ar =  string.split(' ');
     for(let word of ar ){
        let char  =  word.toLowerCase();
        capital.push(char.replace(char[0],char[0].toUpperCase()));
     }
     return capital.join(' ');
}

// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?")
assert.strictEqual(jadenCase("how are you ?"), "How Are You ?")
assert.strictEqual(jadenCase("HOW ARE YOU ?"), "How Are You ?")
assert.strictEqual(jadenCase("HoW ARe YoU ?"), "How Are You ?")