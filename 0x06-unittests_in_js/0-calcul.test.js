#!/usr/bin/node
const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("CalculateNumber", () => {
  it("", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("", () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it("", () => {
    assert.strictEqual(calculateNumber(3.1, 2.1), 5);
  });

  it("", () => {
    assert.strictEqual(calculateNumber(3.49999, 2.4999), 5);
  });

  it("", () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });
});
