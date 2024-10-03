#!/usr/bin/node
const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("CalculateNumber with type", () => {
  it("", () => {
    assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
  });

  it("", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
  });

  it("", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });

  it("", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });

  it("", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0.4), "Error");
  });

  it("", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0.9), 1);
  });
});
