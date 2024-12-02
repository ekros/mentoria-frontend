
// functions

// the function rollercoasterCase takes a string and uppercases
// only the even letters.
// for example: brilliant! -> BrIlLiAnT!

let rollercoasterCase; // 1. add types for this function

rollercoasterCase = (str) => {
    return str.split("").map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join("")
}

console.log(rollercoasterCase("Hello World"));