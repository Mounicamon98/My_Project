let a:number[]=[12,34,43,23,90,87,98,2,96,-97];
let max=0;
let smax=0;
  for(let i=0;i<a.length;i++)
    {
        if(a[i]>max)
        {
            smax=max;
            max=a[i];
        }
        else if(a[i]>smax && a[i]!==max)
        {
            smax=a[i]
        }
    }
console.log(smax);

