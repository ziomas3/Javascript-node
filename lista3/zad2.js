function* dzielniki (liczba)
{
   
    for(var x= 1; x <= liczba; x++)
    {
        if (liczba % x == 0)
        yield (x);
    }
}
for (let x of dzielniki(6))
console.log(x);

function* pierwsze (liczba)
{
    for  (var i = 2; i <= liczba;i++ )  
    {
        var czy = 0;
        for(var x= 2; x < i; x++)
        {
            if (i % x == 0)
            czy = 1;
        }
        if (czy == 0)
        yield (i);
    }
}

for (let x of pierwsze(100))
console.log(x);

