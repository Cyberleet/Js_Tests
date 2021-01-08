'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

function cutFirst(string){
    return string.substr(0,string.length-2);
}
function cutLast(string){
    return string.substr(2,string.length-1);
}
function cutFirstLast(string){
    return cutLast(cutFirst(string));
}


const assert = require('assert')

assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutFirstLast("How are you ?"), "w are you");
assert.strictEqual(cutFirst("How are you ?"), "How are you");
assert.strictEqual(cutLast("How are you ?"), "w are you ?");
