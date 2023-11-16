"use strict";
{
    // Instance of
    //   Parent class
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`${this.name} making sound`);
        }
    }
    // Dog class/child class
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        MakeBarking() {
            console.log(`${this.name} making barking ${this.species}`);
        }
    }
    //   Cat/child class
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        MakeMeaw() {
            console.log(`${this.name} making Sound ${this.species}`);
        }
    }
    const cat1 = new Cat("Cat vai", "Meaw Meaw");
    const dog1 = new Dog("Dog vai", "Geaw Geaw");
    //smart way to handle this instance
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    //
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            // true --> also TS know that is Dog
            animal.MakeBarking();
        }
        else if (isCat(animal)) {
            animal.MakeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    getAnimal(cat1);
}
