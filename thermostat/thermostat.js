class Thermostat {
constructor() {
    this.temperature = 20;
}

getTemperature() {
    return this.temperature
}

up(amount = 1) {
this.temperature += amount; // increases temperature by 1
}


};

module.exports = Thermostat;