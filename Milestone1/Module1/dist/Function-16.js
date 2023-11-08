"use strict";
function add(num1, num2) {
    const a = num1 + num2;
    return "check";
}
add(34, 56);
//
const addArrow = (num1, num2) => num1 + num2;
//
const coustomer = {
    name: "sayed",
    currentbalance: 0,
    addBalance(newBalance) {
        return this.currentbalance + newBalance;
    },
};
coustomer.addBalance(10);
//
const arr2 = [1, 3, 4];
const newArray = arr2.map((ele) => ele * ele);
