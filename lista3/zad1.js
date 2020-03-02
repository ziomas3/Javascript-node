function sum () 
{
    let res=0;
    for (let x of arguments)
        res +=x;
    return res;
}
console.log (sum (1,2,3));
console.log (sum (1,2,3,4,5));