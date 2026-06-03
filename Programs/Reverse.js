"use strict";
let a = 12345;
let lastdigit;
let rev = 0;
while (a > 0) {
    lastdigit = a % 10;
    rev = rev * 10 + lastdigit;
    a = Math.floor(a / 10);
}
console.log(rev);
