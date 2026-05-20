// function swap(a:number,b:number)
// {
// let temp:number;
// temp=a;
// a=b;
// b=temp
// return [a,b]
// }
// console.log(swap(10,20));
//without using third variable
function swap(a:number,b:number)
{

a=a+b
b=a-b
a=a-b

return [a,b]
}
console.log(swap(10,20));

