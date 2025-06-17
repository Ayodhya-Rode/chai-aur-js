

let arr = [1,2,3,4]
// console.log(arr[2]);

// ARRAY METHODS

// 1] PUSH(ele)        // add at last // modify original    // purn array la 1 index madhe add karat
arr.push(5)
// console.log(arr);

//  2] POP()        // remove last
arr.pop()
// console.log(arr);

//  3] UNSHIFT(ele)
arr.unshift(9)          // add 1st
// console.log(arr);

// 4] SHIFT()           // remove 1st
arr.shift()
// console.log(arr);

//  5] includes(ele)    // T/F
// console.log(arr.includes(4));

// 6] indexOf(ele)      
// console.log(arr.indexOf(3));

// 7] join()        //combine all elements of array into a single string. type change to string
// let newArr = arr.join()
// console.log(newArr);
// console.log(arr);

//  8] concat(arrays) //spreads elements individually // merge arrays into new array— without changing the original ones.
// let arr2 = [7,8,8]
// let w = [9,9,9]
// let newArray = arr.concat(arr2,w)
// console.log(newArray);

//  9] slice()    returns shallow copy of a portion of array into new array, without modifying the original.
// let names = ['a','b','c','d','e']
// console.log('before ' + names);
// console.log(names.slice(1,3));
// console.log('after ' + names);

// 10] splice()          modifies array by adding, removing, or replacing elements at a specific index
// let names = ['a','b','c','d','e']
// console.log('before ' + names);
// console.log(names.splice(1,3));
// console.log('after ' + names);

// 11] spread(...)  //expand elements of array or object into individual elements. //shallow copy

// 12] flat  // returns new array by removing nested array layers up to the given depth.
// Does not change the original.

// let a = [1,2,3,[9,7,6],[5,6,[7,8,9]],[0,0]]
// let b = a.flat(1)
// console.log(b);
// console.log(a);

// array.flat(1),array.flat(2), array.flat(infinity)


// 13] Array.isArray()  //checks whether a value is an array.  //bool
// let a = [1,2,3,[9,7,6],[5,6,[7,8,9]],[0,0]]              //true
// console.log(Array.isArray(a));

// let a ={1:1}                         //false
// console.log(Array.isArray(a));


// 14] Array.from(val)  // converts array-like or iterable object into array. // transforming something INTO an array
// console.log(Array.from(['small']));   //just creates a shallow copy  //['small']
// console.log(Array.from('small'));     //convert string to array //[ 's', 'm', 'a', 'l', 'l' ]
// console.log(Array.from({name:'Ayodhya'}));  //[]

// 15] Array.of(val)    //Creates an array from given values //simply MAKES an array from given values
// console.log(Array.of('hi'));    //[ 'hi' ]
// console.log(Array.from('hi'));  //[ 'h', 'i' ]

// console.log(Array.of('hi','ui','ji'));  //[ 'hi', 'ui', 'ji' ]
// console.log(Array.from('hiii','ui','ji'));  //eroor


// Think of Array.from() as transforming something INTO an array, while Array.of() simply MAKES an array from given values.

