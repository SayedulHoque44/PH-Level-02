{
  // Polymorphisom --> same method but using inheritance its work diffrent based on its inside calculation
  class Person {
    name = "Normal Person";
    getSleep() {
      console.log(`${this.name} sleep 8 hours`);
    }
  }
  class Student {
    name = "Student";
    time: number;
    constructor(time: number) {
      this.time = time;
    }
    getSleep() {
      console.log(`${this.name} sleep 8 hours`);
    }
  }
  class Developer {
    name = "Developer";
    time: number;
    constructor(time: number) {
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
