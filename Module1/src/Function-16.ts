function add(num1: number, num2: number): string {
  const a = num1 + num2;
  return "check";
}

add(34, 56);
//
const addArrow = (num1: number, num2: number): number => num1 + num2;
//
const coustomer = {
  name: "sayed",
  currentbalance: 0,
  addBalance(newBalance: number): number {
    return this.currentbalance + newBalance;
  },
};

coustomer.addBalance(10);
//
const arr2: number[] = [1, 3, 4];
const newArray = arr2.map((ele: number): number => ele * ele);
