const numbers = [2,34,4,2,,24,23,,1,3,44,2,4,5,2,44,4,4,3,3];
const bigNumbers = numbers.filter(number => number>20);
const tiny = numbers.filter(n=> n <10);
const even = numbers.filter(num)
//console.log()


const products = [
    {id:1, name: 'mobile', price:5000},
    {id:3, name: 'aff', price:5000},
    {id:2, name: 'pen', price:5000},

];

const expensive = products.filter(product => product.price> 100000);
console.log(expensive)