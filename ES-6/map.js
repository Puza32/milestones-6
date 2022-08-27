const numbers = [2,3,6,8,4,];

function getDoubles(numbers){
    const output = [];
for (const number of numbers){
    const doubles = doubleIt(number);
    output.push(doubles);
}
return output;
}
function doubleIt(number){
    return number*2;
}

const doubleIt = num=>num*2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleIt = numbers.map(num =>num*2)
const makeDouble2 = numbers.map(x => x*2);
console.log(makeDouble);

const result = getDoubles(numbers);
console.log(result);
