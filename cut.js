"use strict";

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

const cutFirst = (x = "") => x.slice(0, -2);
const cutLast = (x = "") => x.slice(2);
const cutFirstLast = (x = "") => x.slice(2, -2);

// You must write your own tests
const assert = require("assert");

assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(cutFirst("cviiix"), "cvii");
assert.strictEqual(typeof cutFirstLast, "function");
assert.strictEqual(cutFirstLast("cviiix"), "ii");
assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(cutLast("cviiix"), "iiix");
