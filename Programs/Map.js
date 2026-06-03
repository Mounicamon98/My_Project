"use strict";
const arr = [1, 2, 3, 1, 2, 3];
const map1 = new Map();
for (let i = 0; i < arr.length; i++) {
    if (map1.has(arr[i])) {
        map1.set(arr[i], (map1.get(arr[i]) || 0) + 1);
    }
    else
        map1.set(arr[i], 1);
}
console.log(map1);
