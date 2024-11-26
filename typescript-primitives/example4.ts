// 1. look at those errors.
// 2. Go to tsconfig.json file and set "strict" property to "false". Come here and see how they disappear.
// 3. Undo the last change in tsconfig.json file.
// 4. Add the correct types for str and num parameters.

const compareStrToNum = (str, num): boolean => {
    return Number(str) === num;
}

const isEqual: boolean = compareStrToNum("15", 15);
console.log("isEqual", isEqual);