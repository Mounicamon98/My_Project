let arr:number[] = [1,2,3,3,2,1,3,2,1,0,2]
let freqmap = new Map<number,number>()

for(let num of arr)
{
    if(freqmap.has(num))
    {
    freqmap.set(num, (freqmap.get(num)||0)+1)
    }
    else
    {
        freqmap.set(num,1)
    }

}
console.log(freqmap);