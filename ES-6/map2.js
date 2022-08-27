const numbers = [12,56,87,44];
const half = numbers.map(n => n/2)
const thirds  = numbers.map(x=> x/3);
// console.log(half);
// console.log(thirds);

const products = [
    {id:1, name: 'mobile', price:5000},
    {id:3, name: 'aff', price:5000},
    {id:2, name: 'pen', price:5000},

];

const items = products.map(product => product.name);
console.log(items)