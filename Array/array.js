// dyanamically size increased or decreased

let arr = [1, 2, 3];
console.log(arr, "and length of the array is :" +arr.length);       //[ 1, 2, 3 ] and length of the array is :3

arr.push(4);                                                        // Array ka size automatically badh gaya
console.log(arr, "and length of the array is :" +arr.length);       //[ 1, 2, 3, 4 ] and length of the array is :4


// store maultiple data types in a single variable 

let data = [10, "Hello", true, {name: "John"}, [1, 2]];
console.log(data);                                                  // [ 10, 'Hello', true, { name: 'John' }, [ 1, 2 ] ]



// Array is a apecial type of object 

let arr1 = [10, 20];
console.log(typeof arr1);                                           // object

console.log(Array.isArray(arr1));                                   // true


//Sparse Arrays Support Karte Hain ------->  JavaScript mein array ke beech mein empty slots (holes) ho sakte hain.

let arr2 = [];
arr2[5] = 50;

console.log(arr2);                                                 //[ <5 empty items>, 50 ]


//Elements Add aur Remove Karna Easy Hai

let arr3 = ["Red", "Blue"];

arr3.push("Green");
console.log(arr3);                                                  //[ 'Red', 'Blue', 'Green' ]

arr3.pop();
console.log(arr3);                                                  //[ 'Red', 'Blue' ]