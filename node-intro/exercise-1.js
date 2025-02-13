// Create a Node application that reads a name from the command line
// and prints a personalized greeting to the console.
// To complete this exercise follow the steps below (1, 2, 3)

// we "import" the modules we need
const readline = require('node:readline');
// ? const fs = .......

// configure the readline interface to read from standard input and
// write to standard output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, name => {
  // 1. Print "Hi, <name>!" to the console.
  // 2. If the name is blank say "What a short name!" (modify last code)
  // 3. Write the name to a file called "name.txt" (read https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/)
    
  rl.close();
});
