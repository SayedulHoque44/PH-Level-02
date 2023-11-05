{
  const arr: number[] = [1, 3, 6, 7, 8];

  const arr2: number[] = [9, 0];

  arr.push(...arr2); //

  function greetingFrnds(...rest: string[]) {
    console.log(`Hi ${rest.map((frnd) => frnd)}`);
  }
  greetingFrnds("ablul", "tabul", "hablul");
} // for create block scope
