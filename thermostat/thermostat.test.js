const Thermostat = require("./thermostat");

test("test to check there is a class Thermostat", () => {
  const temp = new Thermostat();
});

test("class Thermostat returns temperature as 20", () => {
  const temp = new Thermostat();
  expect(temp.getTemperature()).toEqual(20);
});

test("class Thermostat returns increased temperature", () => {
  const temp = new Thermostat();
  temp.up();
  temp.up();
  expect(temp.getTemperature()).toEqual(22);
});

test("class Thermostat returns increased temperature", () => {
  const temp = new Thermostat();
  temp.up();
  temp.up();
  temp.down();
  expect(temp.getTemperature()).toEqual(21);
});

test('Power saving mode is on', () => {
    const temp = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
        temp.up();
      }
      expect(temp.getTemperature()).toBe(25);
});

test('Power saving mode is off', () => {
  const temp = new Thermostat();
  for (let i = 0 ; i < 10 ; i++) {
      temp.up();
    }
    expect(temp.getTemperature()).toBe(25);
    temp.setPowerMode(false);
    temp.up();
    expect(temp.getTemperature()).toBe(26);
});

test('Power saving mode is off', () => {
  const temp = new Thermostat();
  for (let i = 0 ; i < 10 ; i++) {
      temp.up();
    }
    expect(temp.getTemperature()).toBe(25);
    temp.setPowerMode(false);
    temp.up();
    temp.up();
    expect(temp.getTemperature()).toBe(27);
});

test('Power saving mode is off', () => {
  const temp = new Thermostat();
  for (let i = 0 ; i < 10 ; i++) {
      temp.up();
    }
    expect(temp.getTemperature()).toBe(25);
    temp.setPowerMode(false);
    temp.up();
    temp.up();
    expect(temp.getTemperature()).toBe(27);
    temp.reset();
    expect(temp.getTemperature()).toBe(20);
});


