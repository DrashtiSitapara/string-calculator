 
class StringCalculator {
  constructor() {
    this.callCount = 0;
  }


  add(numbers) {
  this.callCount++;
  if (numbers === "") return 0;

  let delimiters = [",", "\n"];

  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, delimiterLineEnd);
    
    const delimiterMatches = delimiterSection.match(/\[(.+?)\]/g);

    if (delimiterMatches) {
      delimiters = delimiterMatches.map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterSection];
    }

    numbers = numbers.substring(delimiterLineEnd + 1);
  }

  const splitRegex = new RegExp(delimiters.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join("|"));

  const numArray = numbers.split(splitRegex).map(Number);

  const negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  const filtered = numArray.filter(n => n <= 1000);
  return filtered.reduce((sum, n) => sum + n, 0);
}

  getCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;
