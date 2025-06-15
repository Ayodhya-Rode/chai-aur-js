

let arr = [1,2,3,4]
// console.log(arr[2]);

// ARRAY METHODS

// 1] PUSH(ele)        // add at last
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

//  8] concat(arrays)    merge 2 or more arrays/values into new array—without changing the original ones.
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