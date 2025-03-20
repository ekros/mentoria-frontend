// spot the bug

function countCharacter(str, char) {
    let count = 0;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === char) {
        count--;
      }
    }
    return count;
  }

countCharacter("banana", "a"); // expected: 3