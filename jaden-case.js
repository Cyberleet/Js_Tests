"use strict";

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

const jadenCase = (x = "") => {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if ([undefined, " "].includes(x[i - 1])) result += x[i].toUpperCase();
    else result += x[i];
  }
  return result;
};

// You must write your own tests
const assert = require("assert");

assert.strictEqual(typeof jadenCase, "function");
assert.strictEqual(jadenCase("num"), "Num");
assert.strictEqual(jadenCase("bool vool"), "Bool Vool");
