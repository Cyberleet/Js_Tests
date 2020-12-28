"use strict";

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
const keepFirst = (x) => x.slice(0, 2);
const keepLast = (x) => x.slice(-2);
const keepFirstLast = (x) => x.slice(2, 4);
// You must write your own tests
const assert = require("assert");

assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(typeof keepFirstLast, "function");
assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(keepFirstLast("masterraster"), "st");
assert.strictEqual(keepFirst("masterraster"), "ma");
assert.strictEqual(keepLast("masterraster"), "er");
