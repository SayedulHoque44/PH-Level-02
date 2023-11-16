"use strict";
{
    //   const vehicle: Vehicle1 = { name: "toyota", model: 2000 };
    // Real implemantion
    class Car1 {
        // using interface type in class
        startEngine() {
            console.log("Starting Car Engine");
        }
        stopEngine() {
            console.log("Stoping Car Engine");
        }
        move() {
            console.log("Car moving");
        }
        test() {
            console.log("Extra method can use");
        }
    }
    // ---------> 2.abstract class
    class Car2 {
        test() {
            console.log("Extra method can use");
        }
    }
    //   const hondaCar = new Car2(); cannot create instance you can only follow for to create other class using extend in follwer child classes
    class Toyota extends Car2 {
        startEngine() {
            console.log("Starting Car Engine");
        }
        stopEngine() {
            console.log("Stoping Car Engine");
        }
        move() {
            console.log("Car moving");
        }
        // if you also use of parent method test then it will work as polymorphism
        test() {
            console.log("I am changed in child class cz i am able to polymorphisom");
        }
    }
    const toyota1 = new Toyota();
    toyota1.test();
}
