 
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

});
