//Step 1 comparision

// const first = {a:2};
// const second = {};
// const third = second;
// if(first ===second){
//     console.log('they are some')
// }
// else{
//     console.log('different');
// }


//Step 2 comparision
// const first = {a:2, b:2, c:5};
// const second = {a:5, c:5,b:2};
// const third = second;
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// console.log(firstString,secondString);
// if(firstString === secondString){
//     console.log('Same')
// }
// else{
//     console.log('different')
// }

//Step 3 comparision

const first = {a:2, b:2, c:5};
const second = {a:5, c:5,b:2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

function compareObject (first,second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                
            }
        }
    }
    else{
        return false;
    }
}