// ------------>Problem 01:
// Soln:
interface User {
  name: string;
  id: number;
}
const Users: Array<User> = [
  { name: "sayed", id: 1 },
  { name: "almun", id: 2 },
  { name: "hoque", id: 3 },
];
const getPropertyFromArray = <T, K extends keyof T>(
  users: Array<T>,
  key: K
): T[K][] => {
  return users.map((user) => user[key]); //["sayed","almun","hoque"]:User[K][] = T[K][]
};
console.log(getPropertyFromArray(Users, "name"));
