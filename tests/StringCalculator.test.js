 
const StringCalculator = require("../src/StringCalculator");

describe("StringCalculator", () => {
  let calc;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test("should return 0 for empty string", () => {
    expect(calc.add("")).toBe(0);
  });

  test("should return number if only one number is provided", () => {
  expect(calc.add("1")).toBe(1);
});

test("should return sum if two numbers are provided", () => {
  expect(calc.add("1,2")).toBe(3);
});

test("should return sum for multiple comma-separated numbers", () => {
  expect(calc.add("1,2,3,4")).toBe(10);
});

test("should handle new line between numbers", () => {
  expect(calc.add("1\n2,3")).toBe(6);
});

test("should support custom single-character delimiter", () => {
  expect(calc.add("//;\n1;2")).toBe(3);
});

test("should support custom delimiter with dash", () => {
  expect(calc.add("//-\n3-4-5")).toBe(12);
});

test("should throw exception for single negative number", () => {
  expect(() => {
    calc.add("-1");
  }).toThrow("negatives not allowed: -1");
});

test("should throw exception for multiple negative numbers", () => {
  expect(() => {
    calc.add("2,-4,3,-5");
  }).toThrow("negatives not allowed: -4, -5");
});

test("should track how many times add() was called", () => {
  calc.add("1,2");
  calc.add("3");
  expect(calc.getCalledCount()).toBe(2);
});

test("should ignore number greater than 1000",()=>{
    expect(calc.add("2,1001")).toBe(2);
});

test("should include 1000 in sum",()=>{
    expect(calc.add("2,1000")).toBe(1002);
});

});
