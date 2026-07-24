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