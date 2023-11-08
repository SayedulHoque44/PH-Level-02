{
  const arr: number[] = [1, 3, 6, 7, 8];

  const arr2: number[] = [9, 0];

  arr.push(...arr2); //

  function greetingFrnds(...rest: string[]) {
    console.log(`Hi ${rest.map((frnd) => frnd)}`);
  }
  // greetingFrnds("ablul", "tabul", "hablul");

  // Advance From me:
  type User = { name: string; age: number };
  const dataArray: User[] = [
    { name: "sa", age: 34 },
    { name: "da", age: 78 },
    { name: "yu", age: 88 },
  ];
  // protita data User ke maintain krbe
  function parameterCombineWithSameType(...rest: User[]): User[] {
    return [...rest];
  }
  console.log(
    parameterCombineWithSameType(
      ...dataArray,
      { name: "extra", age: 90 },
      { name: "extra02", age: 76 }
    )
  );
} // for create block scope
