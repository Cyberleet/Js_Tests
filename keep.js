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
function keepFirst(string){
    return string.substr(0,2);
}
function keepLast(string){
    return string.substr(-2,2);
}
function keepFirstLast(string){
    return string.substr(3,2);
}

const assert = require('assert')

assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepFirstLast("How are you ?"), " a");
assert.strictEqual(keepFirst("How are you ?"), "Ho");
assert.strictEqual(keepLast("How are you ?"), " ?");
