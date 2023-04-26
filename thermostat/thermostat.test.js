const Thermostat = require("./thermostat");

test("test to check there is a class Thermostat", () => {
  const thermostat = new Thermostat();
});

test("class Thermostat returns thermostaterature as 20", () => {
  const thermostat = new Thermostat();
  expect(thermostat.getTemperature()).toEqual(20);
});

test("class Thermostat returns increased thermostaterature", () => {
  const thermostat = new Thermostat();
  thermostat.up();
  thermostat.up();
  expect(thermostat.getTemperature()).toEqual(22);
});

test("class Thermostat returns increased thermostaterature", () => {
  const thermostat = new Thermostat();
  thermostat.up();
  thermostat.up();
  thermostat.down();
  expect(thermostat.getTemperature()).toEqual(21);
});

test("Power saving mode is on", () => {
  const thermostat = new Thermostat();
  for (let i = 0; i < 10; i++) {
    thermostat.up();
  }
  expect(thermostat.getTemperature()).toBe(25);
});

test("Power saving mode is off", () => {
  const thermostat = new Thermostat();
  for (let i = 0; i < 10; i++) {
    thermostat.up();
  }
  expect(thermostat.getTemperature()).toBe(25);
  thermostat.setPowerMode(false);
  thermostat.up();
  expect(thermostat.getTemperature()).toBe(26);
});

test("Power saving mode is off", () => {
  const thermostat = new Thermostat();
  for (let i = 0; i < 10; i++) {
    thermostat.up();
  }
  expect(thermostat.getTemperature()).toBe(25);
  thermostat.setPowerMode(false);
  thermostat.up();
  thermostat.up();
  expect(thermostat.getTemperature()).toBe(27);
});

test("Power saving mode is off", () => {
  const thermostat = new Thermostat();
  for (let i = 0; i < 10; i++) {
    thermostat.up();
  }
  expect(thermostat.getTemperature()).toBe(25);
  thermostat.setPowerMode(false);
  thermostat.up();
  thermostat.up();
  expect(thermostat.getTemperature()).toBe(27);
  thermostat.reset();
  expect(thermostat.getTemperature()).toBe(20);
});
