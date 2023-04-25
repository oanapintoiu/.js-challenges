const multiply = require('./multiply')

describe('multiply', () => {
    it('multiplies 3 and 5', () => {
        expect(multiply(3, 5)).toBe(15);
    });
});
