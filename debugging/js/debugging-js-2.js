// spot the bug

// says hello with a delayed response
const delayedHello = (name) => {
    setTimeout(console.log(`Hello, ${name}`), 2000)
}

delayedHello("John");