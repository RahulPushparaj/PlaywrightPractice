const flag = true

if(!flag)
{
    console.log("Condition Statified")
}
else
{
    console.log(flag)
    console.log("Condition Not Statified")
}
let i = 0
while(i>10)
{
    i++
    console.log(i)
}

do
{
    i++
} while(i>10)
    console.log(i)
// 2 and 5
// from 1 to 100 give me comman multiple values of 2 and 5
console.log("****************************")
let n = 0
for(let k = 1; k <= 100;k++)
{
    if(k%2 == 0 && k%5 ==0)
    {
        n++
        console.log(k)
        if(n == 3)
        break
    }
}

let required = true
while(required)
{
    console.log(required)
    required = false
}