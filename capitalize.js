"use strict";

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */

const capitalize = (x) => x.replace(/^[a-z]/, x[0].toUpperCase());

// You must write your own tests
const assert = require("assert");

assert.strictEqual(typeof capitalize, "function");
assert.strictEqual(capitalize("fgvhgvhgv"), "Fgvhgvhgv");
assert.strictEqual(capitalize("10tacles"), "10tacles");
assert.strictEqual(capitalize("Limerick"), "Limerick");
