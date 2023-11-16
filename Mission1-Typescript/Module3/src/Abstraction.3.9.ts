{
  // Abstraction --> 1.interface 2.abstract

  //   ---------> 1.Interface
  //   Idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   const vehicle: Vehicle1 = { name: "toyota", model: 2000 };
  // Real implemantion
  class Car1 implements Vehicle1 {
    // using interface type in class

    startEngine(): void {
      console.log("Starting Car Engine");
    }
    stopEngine(): void {
      console.log("Stoping Car Engine");
    }
    move(): void {
      console.log("Car moving");
    }
    test() {
      console.log("Extra method can use");
    }
  }
  // ---------> 2.abstract class
  abstract class Car2 {
    abstract startEngine(): void; // to create abstract u can create only idea not implemantation
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("Extra method can use");
    }
  }
  //   const hondaCar = new Car2(); cannot create instance you can only follow for to create other class using extend in follwer child classes
  class Toyota extends Car2 {
    startEngine(): void {
      console.log("Starting Car Engine");
    }
    stopEngine(): void {
      console.log("Stoping Car Engine");
    }
    move(): void {
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
