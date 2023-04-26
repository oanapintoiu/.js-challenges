class Thermostat {
constructor() {
    this.temperature = 20;
    this.minTemp = 10;
    this.maxTemp = 25;
}

getTemperature() {
    return this.temperature;
}

up() {
    if (this.temperature < this.maxTemp) {
return this.temperature ++; // increases temperature by 1
    }
}

down() {
    if (this.temperature > this.minTemp) {
    this.temperature --; // decreses temperature by 1
}
}

setPowerMode(mode) {
    if (mode) {
        this.maxTemp = 25;
      } else {
        this.maxTemp = 30;
      }
    }
  

reset() {
    this.temperature = 20;
};

};

module.exports = Thermostat;