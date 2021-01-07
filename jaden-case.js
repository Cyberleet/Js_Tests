'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */
const jadenCase = s => {
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
    const arr = s.split(' ')
    const majArr = arr.map(word => capitalize(word))
    return majArr.join(" ")
}

// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('hello'), 'Hello')
assert.strictEqual(jadenCase('Hello every one!'), 'Hello Every One!')
assert.strictEqual(jadenCase('48.*/"é-finally working'), '48.*/"é-Finally Working')
assert.strictEqual(jadenCase('48.*/"é-'), '48.*/"é-')
