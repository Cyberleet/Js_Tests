'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */
function keepFirst(str){
  let str2 = str[0]+str[1];
  return str2;
}

function keepLast(str){
  let len = str.length
  let str2 = str[len-2]+str[len-1];
  return str2;
}

function keepFirstLast(str){
  let len = str.length
  let str2 = str[2]+str[3];
  return str2;
}

// You must write your own tests
const assert = require('assert')

assert.strictEqual(keepFirst('hello'), 'he')
assert.strictEqual(keepLast('hello'), 'lo')
assert.strictEqual(keepFirstLast('hello'), 'll')


