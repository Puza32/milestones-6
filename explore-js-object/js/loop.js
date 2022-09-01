const numbers = [12,43,5,244,55,,25];
// for (const number of numbers){
//     console.log(number);
// }

const bottle = {color: 'yellow',price: 50, isCleares:true, capacity:1};

const keys = Object.keys(bottle);
// console.log(keys);

for(const key of keys){
    //console.log(key);
}

for (const key in bottle){
    const value = bottle[key];
    console.log(key, bottle[key]);
}