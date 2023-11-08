"use strict";
{
    // Polymorphisom
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
}
