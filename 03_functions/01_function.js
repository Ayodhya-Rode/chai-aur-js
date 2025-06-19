
// function UserDetail(username){
//     return(`${username} just logged in!`)
// }
// console.log(UserDetail('Ayodhya'))      // Ayodhya just logged in!
// console.log(UserDetail(''));            //  just logged in!
// console.log(UserDetail());              // undefined just logged in!
// console.log(UserDetail(8));             // 8 just logged in!




// function UserDetail(username='joy'){        // default value
//     return(`${username} just logged in!`)
// }
// console.log(UserDetail('Ayodhya'))      // Ayodhya just logged in!
// console.log(UserDetail());              // joy just logged in!



// function cartItem(item1){
//     return item1
// }
// console.log(cartItem(200));             // 200
// console.log(cartItem(200,400,44,89));             // 200


// function cartItem(...item1){
//     return item1
// }
// console.log(cartItem(200));             // [ 200 ]
// console.log(cartItem(200,400,44,89));   // [ 200, 400, 44, 89 ]


function cartItem(item1, item2, ...items){
    return (`${item1} ${item2}, ${items}`)
}
// console.log(cartItem(200));         // 200 undefined, // no rest parameter so, items have no val
// console.log(cartItem(200,400,44,89));   // 200 400, 44,89

// const user ={
//     username:'rode',
//     price:98
// }
// function Obj(object){
//     console.log(`username is ${object.username} and price is ${object.price}`); 
// }
// Obj(user)
// Obj({username:'rode',price:98})          // direct pass object into argument

//***destructures obj */

// function Obj({username,price}){             
//     console.log(`username is ${username} and price is ${price}`); 
// }
// Obj(user)


const array = [1,2,3,4]
// function secondValue(getVal){
//     return getVal[1]
// }
// console.log(secondValue(array));
// console.log(secondValue([1,2,3,4]));

function secondValue([one, two]){
    return (`${one}`)
}
console.log(secondValue(array));
