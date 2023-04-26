const Thermostat = require('./thermostat')

test('test to check there is a class Thermostat', () => {
    const temp = new Thermostat();
});

test('class Thermostat returns temperature as 20', () => {
const temp = new Thermostat();
expect(temp.getTemperature()).toEqual(20)
});