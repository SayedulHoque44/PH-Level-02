function assertion(value: string | number): string | number {
  if (typeof value === "string") {
    return parseInt(value) * 10;
  }
  if (typeof value === "number") {
    return "num";
  }

  return value;
}

const numTostr = assertion(10) as number; // though its returing string but we are forcefully making it number useing as
const strTonum = assertion("10") as string; // typescript er kace ata akn string type jodio atar value ta number e ache

if (typeof strTonum === "string") {
  console.log(`strTonum Is String`); // Not printed cz orginally strTonum akta number but Typescript er kace ata string cz amra assertion kore Typescript ke bolci ata akta string hbe, So becarefull to use it
}
// Summary :
// Assertion function tate typscript jane je return hbe hoy string | number, to amra typescript ke er agei akta janan dite pari je ata string/number asbe, onno kicu as korte parbo na karon return e to dewai ache ata hoy string return krbe nahy number, jodi amra | object di tahole typescript bujbe ay Fn object o return krte pare tkn amra object ke o as korte parbo, Muloto assertion er maddome amra typescript e janaite pari asole amder return value ta ki aste pare and typescript sei value ke oita te conver korar try korbe , tai ata sabdane use krte hbe, karon tkn typecipt amder chok bondo kore bissas kre.
