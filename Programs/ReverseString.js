let name ="mounica";
let arr = name.split("");//["m","o","u","n","i","c","a"]
let left=0;
let right=arr.length-1;
while(left<right)
{
    let temp=arr[left];//temp = m
    arr[left]=arr[right];//m=a
    arr[right]=temp//a=m
    left++;
    right--;
}
console.log(arr.join(""));





