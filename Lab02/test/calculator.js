import { assert } from "chai";
import { add, sub, mul, div } from "../app/calculator.js";

describe("Calculator Tests", function () {
  describe("add", function () {
    it("should return 7 when adding 5 and 2", function () {
      assert.equal(add(5, 2), 7);
    });

    it("should return 8 when adding 5 and 2 (FAIL)", function () {
      assert.equal(add(5, 2), 8);
    });
  });
  describe("sub", function () {
    it("should return 3 when subtracting 2 from 5", function () {
      assert.equal(sub(5, 2), 3);
    });
    it("should return 5 when subtracting 2 from 5 (FAIL)", function () {
      assert.equal(sub(5, 2), 5);
    });
  });
  describe("mul", function () {
    it("should return 10 when multiplying 5 and 2", function () {
      assert.equal(mul(5, 2), 10);
    });

    it("should return 12 when multiplying 5 and 2 (FAIL)", function () {
      assert.equal(mul(5, 2), 12);
    });
  });
  describe("div", function () {
    it("should return 5 when dividing 10 by 2", function () {
      assert.equal(div(10, 2), 5);
    });
    it("should return 2 when dividing 10 by 2 (FAIL)", function () {
      assert.equal(div(10, 2), 2);
    });
  });
});
