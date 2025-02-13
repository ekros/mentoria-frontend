// tasks

// mock functions: spy
// mock functions: mock
// mock functions: modules

// fix a test that is not repeatable

const getRandomDay = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[Math.floor(Math.random() * 7)]
};

module.exports = {
  getRandomDay
}


// TODO-ING: add another function that uses an installed dependency we can mock
// make clear the difference between mock and spy
// write exercise wording