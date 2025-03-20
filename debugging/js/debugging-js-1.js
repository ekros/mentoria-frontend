// spot the bug

// inserts the given string in the position
const insertStringAt = (originalStr, insertedStr, position) => {
    return originalStr.slice(0, position) + originalStr.slice(position) + insertedStr;
}

const str = insertStringAt("Hello John", ",", 5) // expected "Hello, John"

console.log(str);