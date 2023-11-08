{
  // generic type

  type GenericType<T> = T | Array<T>; // dynamic type change
  const rollNumbers: GenericType<number> = [2, 34, 4];
  const names: GenericType<string> = ["sa", "fe"];
  const info: GenericType<object> = [{}, {}, {}];
  const condition: GenericType<boolean> = [true, false, false, true];

  //Generic Tuple
  type GenericTuple<x, y, z> = [x, y, z];
  const user: GenericTuple<number, object, object> = [50, {}, {}];
  //
  type Obj1 = { name: string };
  type Obj2 = { age: number };
  interface Obj3 {
    admin: boolean;
  }

  const user2: GenericTuple<Obj1, Obj2, Obj3> = [
    { name: "df" },
    { age: 22 },
    { admin: true },
  ];
}
