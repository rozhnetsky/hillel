const Animal = function(options) {
    this.name = options.name;
    this.color = options.color;
}

Animal.prototype.voice = function () {
    console.log("Base voice from", this.name);
}

const Cat = function(...args) {
    Animal.apply(this, args);
    this.hasTail = args[0].hasTail;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const cat = new Cat({name: "Alisa", color: "black", hasTail: true});

console.log(cat.voice());

Animal.prototype.voice = function () {
    console.log("Base voice from", this.color);
}

const Dog = function(...args) {
    Animal.apply(this, args);
    this.hasTail = args[0].hasTail;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog({name: "Rex", color: "white", hasTail: true});

console.log(dog.voice());