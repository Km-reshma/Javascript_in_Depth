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


/*
__________________########### Creating a string from an Array  ###########___________________________________

 uses the join() method to create a string from the fruits array.

 //Example:

 let  fruits = ["Apple", "Banana", "Mango", "Grapes"];

 let fruitString = fruits.join(',');                             // here we convert the array into the string by using "join()" metho

 console.log(fruitString);                                       // output is : Apple,Banana,Mango,Grapes
*/



/*

//_______________________ ############ Accesing the element from the Array ############_______________________________________

Array ke elements ko access karne ke liye index ka use kiya jata hai.
Note: JavaScript arrays 0-based indexing follow karti hain. Iska matlab pehla element index 0 par hota hai.

let fruits = ["Apple", "Banana", "Mango", "Orange"];

1. First Element Access Karna------------------------------------------------------------------------
console.log(fruits[0]);                           //Output: Apple

2. Second Element Access Karna----------------------------------------------------------------------------
console.log(fruits[1]);                           //Output:Banana

3. Third Element Access Karna------------------------------------------------------------------------------
console.log(fruits[2]);                           //Output:Mango

4. Last Element Access Karna-------------------------------------------------------------------------------

Method 1: Using length---------------------------------------------------------------->

console.log(fruits[fruits.length - 1]);                      // Output:Orange

Explanation:
fruits.length = 4
Last index = 4 - 1 = 3
fruits[3] = "Orange"

Method 2: Using .at()----------------------------------------------------------------->
console.log(fruits.at(-1));                                 //Output:Orange

.at(-1) directly last element return karta hai.

5. Invalid Index--------------------------------------------------------------------------------------------------------------

console.log(fruits[10]);                                    //Output: undefined

Explanation:
Index 10 exist nahi karta, isliye undefined return hota hai.

6. Negative Index----------------------------------------------------------------------------------------------

console.log(fruits[-1]);                                   //Output: undefined

Reason:
Square bracket notation ([]) negative index support nahi karti.

7. Agar last element chahiye, to use:------------------------------------------------------------------------------

console.log(fruits.at(-1));


7. Access Using Variable--------------------------------------------------------------------------------------

let index = 2;
console.log(fruits[index]);                                       //Output: Mango
*/


// _____________ ######## Accesing element by using loop ##############_______________________________


let fruits = ["Apple", "Banana", "Mango", "Orange"];
/*
//for loop :
for(let i =0; i<fruits.length; i++){

console.log(fruits[i]);
}

//output is : Apple
              Banana
              Mango 
              Orange

// while loop :

let i=0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

//output is : Apple
              Banana
              Mango 
              Orange
 

// for loop : ------------------return the index of the array items -- means " key (index )" return karta hai 

for (let fruitsName in  fruits){
   console.log(fruitsName);                    

}

// output is :
0
1
2
3

for (let fruitsName of  fruits){      //eturn the value of the array  -- means " key ki value " return karta hai 
               
   console.log(fruitsName);                    

}


//Agar key (index) aur value dono ek saath print karni ho, to kai tarike hain.:      "for...of + entries()"

for (let [index, value] of fruits.entries()) {
    console.log(index, value);
}

output is :
0 Apple
1 Banana
2 Mango
3 Orange
*/    