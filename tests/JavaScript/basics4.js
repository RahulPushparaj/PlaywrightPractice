//block of code
//var - global level/functional
//let - global level/block level {}
//const
const great = "Evening"
//great = "night"

if(1==1)
{
    var great = "Afternoon"
}

function add(a,b)
{
    var great = "Morning"
    return a+b
}

let sum = add(2,3)
console.log(sum)
console.log(great)

//do not have name => Anyonymus function -- Function expressions
let sumofInterger = function(c,d)
{
    return c+d
}
console.log("1st Method : " + sumofInterger(3,4))

let sumofNumbers = (c,d) => c+d
console.log("2nd Method : " + sumofInterger(3,8))