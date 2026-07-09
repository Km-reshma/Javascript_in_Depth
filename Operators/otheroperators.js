/*
// ### typeof Operator ########__________________________________________________________
//typeof a returns the data type of the variable a as a string.

let a = "Hello Reshma";
console.log(typeof a);             

// ###### instanceof operator___________________________________________________________
//instanceof is also a type operator in JavaScript. It checks whether an object is an instance of a specific constructor or class.

let arr = [1, 2, 3];

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
console.log(arr instanceof Date);   // false

//array is a specified typed of Object

// ############## Array.isArray() #############____________________________________________________________
//Array.isArray() is a built-in JavaScript method, not an operator. It checks whether a value is an array.

console.log(Array.isArray(arr));   // true

*/
// ############### " in " operator ##############________________________________________________________
//"in" is a relational operator in JavaScript. It checks whether a property exists in an object.

let p1={
    name:"Reshma",
    age:"24"
    
};
console.log(p1);
console.log("name" in p1);
console.log("city" in p1);