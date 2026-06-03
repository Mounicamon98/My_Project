let num="12345"
let rev=0;
let lastdigit;


while(num>0)
{
    lastdigit = num%10;
    rev = rev*10+lastdigit;
    num=Math.floor(num/10);
}
console.log(rev);