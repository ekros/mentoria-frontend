// spot the bug

// multiply all elements of the array by a number
const multiplyArray = (arr, num) => {
    return arr.forEach(x => x * num);
}

multiplyArray([1,2,3], 2); // expected: [2,4,6]