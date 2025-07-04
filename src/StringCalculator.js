 
class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  add(numbers) {
    this.callCount++;
    if (numbers === "") return 0;

    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  }

  getCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;
