function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = () => {
    console.log("Woof!");
  }

let beagle = new Dog();
console.log(beagle instanceof Animal );
console.log(beagle.constructor);
beagle.bark();
beagle.eat();
