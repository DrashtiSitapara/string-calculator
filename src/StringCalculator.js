 
class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  add(numbers) {
    this.callCount++;
    if (numbers === "") return 0;
  }

  getCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;
