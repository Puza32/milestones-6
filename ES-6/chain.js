//const 

//console.log(user[0].name);

const data = {
    count: 5000,
    data: [
        {id:1, name:'babul', job:'leader'},
        {id:2, name:'bkbul', job:'leader'}
    ]
}

const firstJob = data.data[0].job;

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address:{
        street:{
            first:'34 a lane',
            second:'third floor',
            third:'right side'
        },
        postOffice:'cantonment',
        city:'Dhaka'
    }
}

const userFloor = user.address.street.second;
console.log(userFloor);
