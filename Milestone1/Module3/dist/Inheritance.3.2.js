"use strict";
{
    // Inheritance
    // Parent Class / super class
    class ParentSuperClass {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        // methods
        getSleep(numberOfHours) {
            console.log(`${this.name} sleeps ${numberOfHours} Hours in Daily!`);
        }
    }
    // Student (shortcut using public parameter/modifier properties)
    class Student extends ParentSuperClass {
        constructor(name, age, address) {
            super(name, age, address);
            this.name = name;
            this.age = age;
            this.address = address;
        }
    }
    // Teacher (without using public parameter/modifier properties)
    class Teacher extends ParentSuperClass {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        // methos
        classTime(classTime) {
            console.log(`${this.name} ${this.designation} class time is ${classTime}.`);
        }
    }
    //
    const student1 = new Student("sayed", 22, "Feni");
    const jhankar = new Teacher("jhankar", 40, "Dhaka", "Level 1");
    student1.getSleep(8);
    jhankar.getSleep(6);
    jhankar.classTime("10:00 PM");
}
