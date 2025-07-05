 
# 🧮 String Calculator - TDD Kata (JavaScript + Jest)

This project is a complete solution to the **String Calculator Kata** using **Test-Driven Development (TDD)** in **JavaScript**, with **Jest** as the testing framework.  



## 📌 Problem Statement

Implement a method `add(numbers: string)` that parses a string of numbers and returns their sum. The numbers can be separated by:
- Commas `,`
- Newlines `\n`
- Custom delimiters (e.g. `//;\n1;2`)
- Multiple delimiters (e.g. `//[*][%]\n1*2%3`)
- Delimiters of any length (e.g. `//[***]\n1***2***3`)

### Additional Requirements:
- Empty string returns 0
- Throw an exception on negative numbers (with list)
- Ignore numbers greater than 1000
- Track how many times `add()` was called



## ✅ Features Implemented

| Feature | Status |
|--------|--------|
| Add numbers with comma delimiter | ✅ |
| Support newlines as delimiter | ✅ |
| Handle unknown number of inputs | ✅ |
| Support custom single/multi delimiters | ✅ |
| Throw error for negative numbers | ✅ |
| Ignore numbers > 1000 | ✅ |
| Track method call count | ✅ |
| Handle multiple delimiters of any length | ✅ |



## 🧪 TDD Approach & Jest

This project strictly follows the **TDD cycle**:
1. **Write a failing test**
2. **Write minimum code to pass**
3. **Refactor**
4. Repeat ✅

Jest is used as the unit testing framework.

To run tests:

	
	git clone https://github.com/DrashtiSitapara/string-calculator.git
	cd string-calculator
	npm install
	npm test



## 📁 Project Structure

	string-calculator/
	├── src/
	│   └── StringCalculator.js        # Core logic
	├── tests/
	│   └── StringCalculator.test.js   # Jest test cases
	├── package.json
	└── README.md


### ✅ Test Results

❌ Failing Test: Delimiters of Any Length
This shows a failing test where the input string //[***]\n1**2***3 was expected to return 6,
but returned 3 due to incorrect parsing of the multi-character delimiter.
This test ensures the calculator can handle custom delimiters of any length, like ***.
<p align="center">
  <img src="https://github.com/user-attachments/assets/9babebb0-a1cc-48ac-b82f-6bfc75c64f01" width="500"/>
</p>




✅All 15 unit tests passed successfully using Jest.
This confirms that the add() method in StringCalculator handles all required scenarios like delimiters, negatives, large numbers, and call tracking correctly.
<p align="center">
  <img src="https://github.com/user-attachments/assets/bf654bb3-e8d5-435d-a748-7691b425c577" width="500"/>
</p>


### 🛠️ Tech Stack Used

| Technology               | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| **JavaScript (ES6)**     | Used to implement the `StringCalculator` class logic             |
| **Node.js**              | JavaScript runtime for running the code locally                  |
| **Jest**                 | Testing framework for writing and executing unit tests using TDD |
| **NPM**                  | Manages dependencies and test scripts                            |
                   


### 🙋‍♀️ Author  
**Drashti Sitapara**

📫 GitHub: [DrashtiSitapara](https://github.com/DrashtiSitapara)




 
