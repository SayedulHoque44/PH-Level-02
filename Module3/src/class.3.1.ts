{
  // OOP - class
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // constructor e parameter properties/modifier use krle tkn ebabei krlei hy, compiler call and intialize sob kore dey
      // Initilizing
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    // Method
    makeSound() {
      console.log(`This ${this.name} is sayes ${this.sound}`);
    }
  }
  //
  const dog = new Animal("shepard", "Dog", "Gew Gew");
  const cat = new Animal("Parsian", "Cat", "Meaw Meaw");
  dog.makeSound();
  cat.makeSound();
}
