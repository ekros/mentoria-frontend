// tasks

// mock functions: spy
// mock functions: mock
// mock functions: modules

// fix a test that is not repeatable

const getRandomDay = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[Math.floor(Math.random() * 7)]
};

module.exports = {
  getRandomDay
}
