 
class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  add(numbers) {
    this.callCount++;
    if (numbers === "") return 0;
    let delimiter=[",","\n"];
    if(numbers.startsWith("//")){
        const delimiterLineEnd=numbers.indexOf("\n");
        const delimiterPart = numbers.substring(2, delimiterLineEnd);
        delimiter = [delimiterPart];
        numbers = numbers.substring(delimiterLineEnd + 1);
    }

   const splitRegex=new RegExp(`[${delimiter.join("")}]`);
   const numArray=numbers.split(splitRegex).map(Number);

   const negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  const filtered=numArray.filter(n=>n<=1000);
    return filtered.reduce((sum, num) => sum + num, 0);
  }

  getCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;
