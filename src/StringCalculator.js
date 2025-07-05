class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

add(numbers) {
  this.callCount++;
  if (!numbers) return 0;

  const { delimiterList, cleanedNumbers } = this.extractDelimiters(numbers);
  const splitRegex = this.buildDelimiterRegex(delimiterList);

  const numArray = cleanedNumbers.split(splitRegex).map(Number);

  this.checkForNegatives(numArray);

  const filtered = numArray.filter(n => n <= 1000);
  return filtered.reduce((sum, n) => sum + n, 0);
}

extractDelimiters(numbers) {
  let delimiterList = [",", "\n"];
  let cleanedNumbers = numbers;

  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, delimiterLineEnd);
    cleanedNumbers = numbers.substring(delimiterLineEnd + 1);

    const matches = delimiterSection.match(/\[(.+?)\]/g);
    delimiterList = matches
      ? matches.map(d => d.slice(1, -1)) // remove [ and ]
      : [delimiterSection];
  }

  return { delimiterList, cleanedNumbers };
}

buildDelimiterRegex(delimiters) {
  const escaped = delimiters.map(d =>
    d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  );
  return new RegExp(escaped.join("|"));
}

checkForNegatives(numArray) {
  const negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }
}

  getCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;
