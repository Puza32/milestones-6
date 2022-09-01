const bottle = {color: 'yellow',price: 50, isCleares:true, capacity:1};
const keys = Object.keys(bottle);
// console.log(keys);

const values = Object.values(bottle);
// console.log(values);

const pair = Object.entries(bottle);
// console.log(pair);

console.log(bottle);
Object.seal(bottle);
delete bottle.isCleares;
bottle.price = 1000;
bottle.heighr = 12;
console.log(bottle);