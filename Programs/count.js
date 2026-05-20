"use strict";
let x = [22, 32, 42, 59, 3, 2, 1, 1];
let c = {};
for (let i = 0; i < x.length; i++) {
    if (c[x[i]]) {
        c[x[i]]++;
    }
    else
        c[x[i]] = 1;
}
console.log(c);
