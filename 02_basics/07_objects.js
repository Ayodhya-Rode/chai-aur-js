// Singltone - obj using constructor not literals.

// const regularUser = {
//     greet: 'Hi',
//     fullName:{
//         inside:'hi Fullname',
//         userFullName:{
//             name:'Ayodhya',
//             lastName:'Rode'
//         }
//     }
// }
// console.log(regularUser.fullName.userFullName.name);


// const obj1 = {
//     1:'one',2:'two',3:'three'
// }

// const obj2 = {
//     4:'four',5:'five',6:'six'
// }
// const obj4 = {
//     7:'four',8:'five',86:'six'
// }

// const obj3 = {obj1,obj2}     //bad       // creates a new object with two properties, obj1 and obj2

// 1] ****Object.Asign({target}, sourcesss)

// const obj3 = Object.assign({},obj1,obj2,obj4)  //Object.assign() merges all objects into one.
// console.log(obj1);  //if this was target then it will change but {} is target //not changed
// console.log(obj2);  //not changed
// console.log(obj4);  //not changed
// console.log(obj3);  //all obj value into this


// 2] ****...spread****
// does NOT change the original objects — it creates a new object.

// const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);
// console.log(obj1);


const main =[
    {
        1:'one',
        2:'two',
        3:'three'
    },
   {
        4:'four',
        5:'five',
        6:'six',
        mail:'hi'
    },
    {
        7:'four',
        8:'five',
        86:'six'
    }
]
// console.log(main[1].mail)    //if have string on key  //obj[index].key or obj[index]["key"]
// console.log(main[1][6])      //if have interger on key // obj[index][numberKey] 


const obj2 = {
   one: 1,2:'two',three:3
}


// 3] **** Object.keys(obj) *****
// console.log(Object.keys(obj2));      //gives array of keys 

//key order rule - Integer keys come first (ascending), Then string keys in insertion order.


// 4] **** Object.values(obj2) ****
// console.log(Object.values(obj2));        ////gives array of values


// 5] Object.entries(obj)       //Returns an array of an object's own key–value pairs.
// console.log(Object.entries(obj2));  //[ [ '2', 'two' ], [ 'one', 1 ], [ 'three', 3 ] ]


// 6] Object length
// console.log(Object.keys(obj2).length); //Object length = key count ✅--prefered
// console.log(Object.values(obj2).length); 


// 7]  hasOwnProperty()   // Checks if object has this key (its own property — not inherited).
// console.log(obj2.hasOwnProperty(2));    //boolean


// ********** Object Destructuring **********

const person = {
  name: "Ayodhya",
  age: 25,
  city: "Pune"
};

// const { name, age } = person;       // destructuring

// console.log(name); // "Ayodhya"
// console.log(age);  // 25

//*****Renaming *****/
// const { name: userName } = person;      //renaming
// console.log(userName); // "Ayodhya"


// const { country = "India" } = person;       //default value
// console.log(country); // "India"
// console.log(person);    // origianl

// const { age = 2 } = person;
// console.log(age);
// console.log(person);
