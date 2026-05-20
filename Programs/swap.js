"use strict";
function swap(a, b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
    return [a, b];
}
console.log(swap(10, 20));
