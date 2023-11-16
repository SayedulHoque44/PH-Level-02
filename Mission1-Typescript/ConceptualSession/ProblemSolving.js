"use strict";
const Users = [
    { name: "sayed", id: 1 },
    { name: "almun", id: 2 },
    { name: "hoque", id: 3 },
];
const getPropertyFromArray = (users, key) => {
    return users.map((user) => user[key]); //["sayed","almun","hoque"]:User[K][] = T[K][]
};
console.log(getPropertyFromArray(Users, "name"));
