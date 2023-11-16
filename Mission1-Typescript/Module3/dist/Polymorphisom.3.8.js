"use strict";
{
    // Polymorphisom --> same method but using inheritance its work diffrent based on its inside calculation
    class Person {
        constructor() {
            this.name = "Normal Person";
        }
        getSleep() {
            console.log(`${this.name} sleep 8 hours`);
        }
    }
    class Student {
        constructor(time) {
            this.name = "Student";
            this.time = time;
        }
        getSleep() {
            console.log(`${this.name} sleep 8 hours`);
        }
    }
    class Developer {
        constructor(time) {
            this.name = "Developer";
            this.time = time;
        }
        getSleep() {
            console.log(`${this.name} sleep 8 hours`);
        }
    }
    const person1 = new Person();
    const person2 = new Student(7);
    const person3 = new Developer(6);
    console.log(person1);
    console.log(person2);
    console.log(person3);
}
