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
const strTonum = assertion("10") as string;
