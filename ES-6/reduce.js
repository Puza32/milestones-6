const numbers = [1,2,3,4,5,6];
const total = numbers.reduce((previous, current) => 
{
    console.log(previous, current);
    return previous + current
}
, 0)

