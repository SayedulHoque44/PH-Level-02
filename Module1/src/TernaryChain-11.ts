{
  // ternary operator || optional Cahining || nullish coalesching operator

  const age: number = 19;

  if (18 <= age) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  //
  const isAuthenticated = null; // "" ata hole atai dibe karon ata ke value mone krbe
  const result1 = isAuthenticated ?? "Guest"; // ?? and || same -- nullish coalesching kaj krbe sudu null and undefined
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });
}
// npm i -g ts-node-dev
//ts-node-dev --respawn --transpile-only ./src/TernaryChain-11.ts
