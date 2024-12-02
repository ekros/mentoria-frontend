// arrays

const arrNum: number = [1, 2, 3, 4]; // 1. fix this error

const arrNum2 = arrNum.map(n => n * 2); // 2. fix the implicit any by adding a type

// extra!! This is a bit hard :D
// read about reduce function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// 3. Add the missing types in this declaration
const sumAll = (arrayOfNumbers) => arrayOfNumbers.reduce((acc, n) => acc + n, 0);

// the result printed should be 20
console.log("sumAll", sumAll);