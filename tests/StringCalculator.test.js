 
const StringCalculator = require("../src/StringCalculator");

describe("StringCalculator", () => {
  let calc;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test("should return 0 for empty string", () => {
    expect(calc.add("")).toBe(0);
  });
});
