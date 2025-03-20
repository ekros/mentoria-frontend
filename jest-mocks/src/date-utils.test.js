/* eslint-env jest */
const dateUtils = require('./date-utils')

describe('Days of the week', () => {
  it('should return Monday', () => {
    // Mock Math.random to always return 0

    // ? leer ejercicio 3

    const day = dateUtils.getRandomDay();
    expect(day).toBe("Monday");

    // Restore the original implementation
    Math.random.mockRestore();
  });

  it('should return Tuesday', () => {
    // Mock Math.random to always return 0.2
    jest.spyOn(Math, 'random').mockImplementation(() => 0.2);

    const day = dateUtils.getRandomDay();
    expect(day).toBe("Tuesday");

    // Restore the original implementation
    Math.random.mockRestore();
  });

  it('should return Wednesday', () => {
    // Mock Math.random to always return 0.3
    jest.spyOn(Math, 'random').mockImplementation(() => 0.3);

    const day = dateUtils.getRandomDay();
    expect(day).toBe("Wednesday");

    // Restore the original implementation
    Math.random.mockRestore();
  });

  it('should return Thurdsay', () => {
    // Mock Math.random to always return 0.5
    jest.spyOn(Math, 'random').mockImplementation(() => 0.5);

    const day = dateUtils.getRandomDay();
    expect(day).toBe("Thursday");

    // Restore the original implementation
    Math.random.mockRestore();
  });

  it('should return Friday', () => {
    // Mock Math.random to always return 0.7
    jest.spyOn(Math, 'random').mockImplementation(() => 0.7);

    const day = dateUtils.getRandomDay();
    expect(day).toBe("Friday");

    // Restore the original implementation
    Math.random.mockRestore();
  });

  it('should return Saturday', () => {
    // Mock Math.random to always return 0.8
    jest.spyOn(Math, 'random').mockImplementation(() => 0.8);

    const day = dateUtils.getRandomDay();
    expect(day).toBe("Saturday");

    // Restore the original implementation
    Math.random.mockRestore();
  });

  it('should return Sunday', () => {
    // Mock Math.random to always return 0.9
    jest.spyOn(Math, 'random').mockImplementation(() => 0.9);

    const day = dateUtils.getRandomDay();
    expect(day).toBe("Sunday");

    // Restore the original implementation
    Math.random.mockRestore();
  });

  it.skip('should call Math.random()', () => {
    // complete this test
  })
});
