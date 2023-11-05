"use strict";
{
    const arr = [1, 3, 6, 7, 8];
    const arr2 = [9, 0];
    arr.push(...arr2); //
    function greetingFrnds(...rest) {
        console.log(`Hi ${rest.map((frnd) => frnd)}`);
    }
    greetingFrnds("ablul", "tabul", "hablul");
} // for create block scope
