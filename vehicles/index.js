function Vehicle(model, year) {
    this.model = model;
    this.year = year;
}

Vehicle.prototype.start = () => "The engine has been started";
Vehicle.prototype.end = () => "Engine was off";
Vehicle.prototype.toString = function() {
    return `The model is ${this.model}. Release year ${this.year}`;
}

function Car (...args) {
    Vehicle.apply(this, args);
    this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle (...args) {
    Vehicle.apply(this, args);
    this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

const car = new Car('Tesla', 2020);
console.log(car);
console.log(car.model); // Tesla
console.log(car.year); // 2020
console.log(car.numWheels); // 4
console.log(car.start()); // The engine has been started
console.log(car.end()); // Engine was off
console.log(car.toString()); // The model is Tesla. Release year 2020


const motorcycle = new Motorcycle('Suzuki', 2006);
console.log(motorcycle);
console.log(motorcycle.model); // Suzuki
console.log(motorcycle.year); // 2006
console.log(motorcycle.numWheels); // 2
console.log(motorcycle.start()); // The engine has been started
console.log(motorcycle.end()); // Engine was off
console.log(motorcycle.toString()); // The model is Suzuki. Release year 2006

Vehicle.prototype.start = () => "This is bike engine start";
Vehicle.prototype.end = () => "This is bike engine end";
Vehicle.prototype.toString = function() {
    return `The Bike brand is ${this.model}. Bike released in ${this.year}`;
}

function Bike (...args) {
    Vehicle.apply(this, args);
    this.numWheels = 2;
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

const bike = new Bike('BMX', 2002);
console.log(bike);
console.log(bike.model); // Suzuki
console.log(bike.year); // 2006
console.log(bike.numWheels); // 2
console.log(bike.start()); // The engine has been started
console.log(bike.end()); // Engine was off
console.log(bike.toString()); // The model is Suzuki. Release year 2006
