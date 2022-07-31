function Vehicle (model, year) {
    this.start = () => "The engine has been started";
    this.end = () => "Engine was off";
    this.toString = () => `The model is ${model}. Release year ${year}`;
};

function Car (model, year) {
    Vehicle.call(this, model, year);
    this.model = model;
    this.year = year;
    this.numWheels = 4;
};

function Motorcycle (model, year) {
    Vehicle.call(this, model, year);
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}

const car = new Car('Tesla', 2020);
console.log(car.model); // Tesla
console.log(car.year); // 2020
console.log(car.numWheels); // 4
console.log(car.start()); // The engine has been started
console.log(car.end()); // Engine was off
console.log(car.toString()); // The model is Tesla. Release year 2020


const motorcycle = new Motorcycle('Suzuki', 2006);
console.log(motorcycle.model); // Suzuki
console.log(motorcycle.year); // 2006
console.log(motorcycle.numWheels); // 2
console.log(motorcycle.start()); // The engine has been started
console.log(motorcycle.end()); // Engine was off
console.log(motorcycle.toString()); // The model is Suzuki. Release year 2006 