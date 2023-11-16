"use strict";
{
    // Static
    class Counter {
        increment() {
            return (Counter.count = Counter.count + 1); //this not work
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0; // static make premioum property
    const instance1 = new Counter();
    const instance2 = new Counter();
    const instance3 = new Counter();
    console.log(instance1.increment());
    console.log(instance2.increment());
    console.log(instance3.increment());
    //   console.log(instance3.decrement()); // when static is call , you cannt able to call or use it with instance, you have call it with Class name directly cz its behavel like global
    //   console.log(instance3.count);
    console.log(Counter.count); // so static let us to call class property from outside and direclty with class name
    console.log(Counter.decrement());
}
