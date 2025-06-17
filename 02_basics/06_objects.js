

//Object.create


//2] object literals

// const user ={
//     name:'Ayodhya',
//     mail:'abc@gmail.com',
//     age:78,
//     "city name":'india',
// }

// ✔ Dot (.) → Use for simple keys without space
// ✔ Brackets ([]) → For dynamic keys, spaces, special characters, or variables.

// console.log((user.name));            //to access value  //Ayodhya
// console.log(user["name"]);      //to access value with special chars //Ayodhya
// console.log(user[name]);             // error
// console.log(user["city name"]);      //india

// *********Adding new value**********

// user.age = 22;  // ✅ Adding a new key-value pair
// user["mail"] = "ayodhya@example.com";    // ✅ Adding a new key-value pair

// const mySym = Symbol('hi')
// console.log(typeof mySym);

// const user ={
//     name:'Ayodhya',
//     mail:'abc@gmail.com',
//     age:78,
//     // mySym : 'hi'            //treat like string
//     [mySym] : 'hi'
    
// }

// console.log(typeof user.mySym);         //string
// console.log(typeof user[mySym]);    // string -> check type of value not key
// console.log(typeof mySym);          // symbol -> check type of key 
      
const user ={
    name:'Ayodhya',
    mail:'abc@gmail.com',
    age:78,
    "city name":'india',
}
// console.log(user);
// user.age = 45               // change / override value

// ✅ Adding a new key-value pair
// user.phone= 987676043;
// console.log(user);           // change original obj

// user.greet = function(){
//     return('hello');  
// }

// console.log(user);
// console.log(user.greet());      //Calls the function        //"hello"
// console.log(user.greet);	//Refers to the function	//[Function]

user.greet = function(){
    return(`hi ${this.name}`);  
}
console.log(user.greet());




// user.greet = function() {}	[Function (anonymous)]
// user.greet = function greetUser() {}	[Function: greetUser]

// ******METHODS****

// 1] Object.freeze() // It makes object immutable — can’t add, delete, or change its properties.
// Object.freeze(user)
// user.age = 45 
// console.log(user);





