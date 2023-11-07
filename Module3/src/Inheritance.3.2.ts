{
  // Inheritance
  // Parent Class / super class
  class ParentSuperClass {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    // methods
    getSleep(numberOfHours: number) {
      console.log(`${this.name} sleeps ${numberOfHours} Hours in Daily!`);
    }
  }

  // Student (shortcut using public parameter/modifier properties)
  class Student extends ParentSuperClass {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {
      super(name, age, address);
    }
  }
  // Teacher (without using public parameter/modifier properties)
  class Teacher extends ParentSuperClass {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    // methos
    classTime(classTime: string) {
      console.log(
        `${this.name} ${this.designation} class time is ${classTime}.`
      );
    }
  }
  //
  const student1 = new Student("sayed", 22, "Feni");
  const jhankar = new Teacher("jhankar", 40, "Dhaka", "Level 1");
  student1.getSleep(8);
  jhankar.getSleep(6);
  jhankar.classTime("10:00 PM");
}
