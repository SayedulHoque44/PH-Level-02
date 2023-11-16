"use strict";
{
    const add = (par1, par2) => {
        if (typeof par1 === "number" && typeof par2 === "number") {
            return par1 + par2;
        }
        else {
            return par1.toString() + par1.toString();
        }
    };
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`I am ${user.role}`);
        }
        else {
            console.log(`I am normal user`);
        }
    };
    getUser({ name: "sayed", role: "admin" });
}
