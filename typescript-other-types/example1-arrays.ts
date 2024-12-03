// arrays

const arrNum: number = [1, 2, 3, 4]; // 1. fix this error

const arrNum2 = arrNum.map(n => n * 2); // 2. once the above error is fixed we don't have more errors in this line. Why? And why we don't need to explicitly define a type for arrNum2?

// 3. Add the missing types in this declaration
// read about reduce function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const sumAll = (arrayOfNumbers) => arrayOfNumbers.reduce((acc, n) => acc + n, 0);

// Now compile and run this to check if everything is ok
// the result printed should be 20
console.log("sumAll", sumAll(arrNum2));