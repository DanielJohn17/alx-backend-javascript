#!/usr/bin/node
const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("sendPaymentRequestToApi uses the calculateNumber method of Utils", () => {
    const spy = sinon.spy(Utils, "calculateNumber");

    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith("SUM", 100, 20)).to.be.true;

    spy.restore();
  });
});
