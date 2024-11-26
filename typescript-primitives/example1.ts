// Let's start by adding annotations for variables

// 1. add the following types:
// num1 is a number
// num2 is a number
// result is a number

// 2. check errors given by vscode and try to correct them...

const num1 = 1;
const num2 = 2;
const result = num1 + num2;
console.log("sum:", result);


// functions
const sum = (n1: number, n2: number): number => {
    return n1 + n2;
}

sum(num1, num2);