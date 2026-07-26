/*
// dyanamically size increased or decreased______________________________________________________________-

let arr = [1, 2, 3];
console.log(arr, "and length of the array is :" +arr.length);       //[ 1, 2, 3 ] and length of the array is :3

arr.push(4);                                                        // Array ka size automatically badh gaya
console.log(arr, "and length of the array is :" +arr.length);       //[ 1, 2, 3, 4 ] and length of the array is :4


// store maultiple data types in a single variable __________________________________________________________

let data = [10, "Hello", true, {name: "John"}, [1, 2]];
console.log(data);                                                  // [ 10, 'Hello', true, { name: 'John' }, [ 1, 2 ] ]



// Array is a apecial type of object ________________________________________________________________________

let arr1 = [10, 20];
console.log(typeof arr1);                                           // object

console.log(Array.isArray(arr1));                                   // true


//Sparse Arrays Support Karte Hain______________________________________________________________________ 
// ------->  JavaScript mein array ke beech mein empty slots (holes) ho sakte hain.

let arr2 = [];
arr2[5] = 50;

console.log(arr2);                                                 //[ <5 empty items>, 50 ]


//Elements Add aur Remove Karna Easy Hai___________________________________________________________________

let arr3 = ["Red", "Blue"];

arr3.push("Green");
console.log(arr3);                                                  //[ 'Red', 'Blue', 'Green' ]

arr3.pop();
console.log(arr3);                                                  //[ 'Red', 'Blue' ]
*/


/*
// _________________________  ##########   creating Array    ###############   __________________________________________
   There are three ways to create new array:


1. Create Array using Literal-------------------------------------------------------------------------------

Creating an array using array literal involves using square brackets [] to define and initialize the array.
Square brackets [] use hote hain. Values comma , se separate hoti hain.

//Example :

let arr1 = [];                               // empty array created by using literals 
console.log(arr1);                           //  output is : [ ]

let arr2 = [10,20,30,40];                   // array is created to initailes multiple value into a single value  called this using literals.
console.log(arr2)                           // output is : [ 10, 20, 30, 40 ]


2.Create using new Keyword (Constructor)-----------------------------------------------------------------

Array constructor ka use karke bhi array create kar sakte hain.
The "Array Constructor" refers to a method of creating arrays by invoking the Array constructor function.
This method is created by using "new " keyword ---->     new Array()

//Example :

let arr = new Array(10,20,30,40);
console.log(arr);                                // outpus is : [ 10, 20, 30, 40 ]

let fruits = new Array("Apple", "Banana", "Mango");
console.log(fruits);                                              //[ "Apple", "Banana", "Mango" ]

//Example - if we pass only one value in the constructio  then they print " empty slots of the array  "  like if mention " new Array(5) == > print 5 empty slots array "
                               
let arr = new Array(5);
console.log(arr);                                  // ouput is : [ <5 empty items> ]



3. . Empty Array + Values Add Karna---------------------------------------------------------------------------------------

Pehle empty array banao, phir values add karo.

Example:::::::::::::::::::

let arr = [];

arr.push(10);
arr.push(20);
arr.push(30);

console.log(arr);

Output:  [10, 20, 30]

*/