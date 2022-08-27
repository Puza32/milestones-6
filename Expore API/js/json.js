const user ={id: 1, name:'puja', job: 'actor'};

const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop ={
    ower:'puja',
    address:{
        street: 'bitac',
        city:'chittagong',
        country:"bd"
    },
    product: ['laptop', 'mic', 'monitor', 'keybpard'],
    revenue:45000,
    isOpen:true,
    isNew:false
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson)
const shopObj = JSON.parse(shopJson);
console.log(shopObj);