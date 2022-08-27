const numbers = [2,34,4,2,,24,23,,1,3,44,2,4,5,2,44,4,4,3,3];

const fives = numbers.find(num => num %5===0)

const fiveAll = numbers.filter(num => num %5===0)
console.log(fives);
console.log(fiveAll);

const products = [
    {id:1, name: 'mobile', price:5000},
    {id:3, name: 'aff', price:4000},
    {id:2, name: 'pen', price:3000},

];

const cheap = products