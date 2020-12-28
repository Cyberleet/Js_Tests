"use strict";

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

const yell = (x) => x.toUpperCase();
// You must write your own tests
const assert = require("assert");

assert.strictEqual(typeof yell, "function");
assert.strictEqual(yell.length, 1);
assert.deepStrictEqual(yell("GFFhbhGV"), "GFFHBHGV");
