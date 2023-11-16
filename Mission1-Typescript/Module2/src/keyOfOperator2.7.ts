{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; //manual
  type Owner2 = keyof Vehicle; // using keyof operator

  const sayedHas: Owner = "car"; // same
  const sayedHas2: Owner2 = "ship"; // same
  //
  type User = {
    name: string;
    roll: number;
  };
  const user: User = {
    name: "sayed",
    roll: 56,
  };
  // 2 way
  const userFn = (userObj: User, key: keyof User): string | number => {
    return userObj[key];
  };
  const userFn2 = <X, Y extends keyof X>(userObj: X, key: Y) => {
    return userObj[key];
  };
  userFn(user, "name");
  userFn2(user, "name");
}
