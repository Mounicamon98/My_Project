"use strict";
const arr1 = [55, 12, 32, 12];
const obj = {};
for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
        obj[arr1[i]]++;
    }
    else {
        obj[arr1[i]] = 1;
    }
}
console.log(obj);
