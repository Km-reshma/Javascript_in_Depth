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


//let fruits = ["Apple", "Banana", "Mango", "Orange"];


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




/*
// _______________ ############# Find the index of an item in an array ############ ____________________________

indexOf() method is used to find the index of an item in the array.

This example uses the   ""   indexOf()   ""   method to find the position (index).

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.indexOf("Banana"));    */                                 // 1




/*
// _____________############ "" includes()  "" ############# _______________________________________

includes() method : Check if an array contains a certain item.

# includes() value ko search karta hai.
# Agar value mil jaye to true return karta hai.
# Agar na mile to false return karta hai.
# Arrays aur strings dono ke saath use kiya ja sakta hai.
#Ye case-sensitive hota hai.

JavaScript mein includes() method ka use check karne ke liye hota hai ki koi value array ya string mein present hai ya nahi.

Ye true ya false return karta hai.


1. Array ke saath includes() :
syntax: array.includes(valueToFind)

//Example
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.includes("Mango"));                          //true


2. Starting Index ke saath includes(): 
Aap search kis index se start karni hai, wo bhi de sakte hain.
syntax: array.includes(value,index);

//example :
let fruit = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruit.includes("Mango",1));                          //true
                                    |
                                    |_____________ ye index batata hai ki kis index se search start karna hai 




3. String ke saath includes():

let message = "Hello JavaScript";

console.log(message.includes("Java")); // true
console.log(message.includes("Python")); // false
console.log(message.includes("o JavaS")); // true;
*/




/*
// ___________________________ ########## Modify Array ################# ____________________________________


In JavaScript, you can modify an array by adding, removing, or updating its elements.
Here are the most common ways:

1. Update an Element : Change the value at a specific index.

//Example :

let a = [10, 20, 30, 40, 50];
console.log(a);                                    // [ 10, 20, 30, 40, 50 ]
 
a[1] = 15;
console.log(a);                                   // [ 10, 15, 30, 40, 50 ]

//*************** By Using Loop ***********************

let a = [10, 20, 30, 40, 50];

for( let num of a){
   num = num +5;                                  // to sirf num badalta hai: a array mein change nahi hot hai 
   console.log(num);                             // output is : [ 15, 25, 35, 45, 55 ]                                                       
   
}

console.log(a);                                    // out is : [ 10, 20, 30, 40, 50 ]*/
                         
// "for...of gives you a copy of each element's value, not the actual array element. bcz Yahan num sirf ek temporary variable hai."
// not modifued in array(actual array "a")

/*
//----------if we modufued or cahnge the actual array so we use nornal for loop or " for in ";----------------------------------


let a = [10, 20, 30, 40, 50];

for(let i =0; i< a.length; i++){

   a[i] = a[i] + 5;
}

console.log(a);                       // [ 15, 25, 35, 45, 55 ]


 //##############   num = num + 5 → Variable change hota hai.    ##############
 //##############   a[i] = a[i] + 5 → Array change hoti hai.     #############3
 //############## "for in" , "normmal for loop " se modify ho jata hai bcz index ko denote krte hai 
 //############## " fir of " se nahi hota bcz ye vlue return krta hau copy of tha index .



let b = [10, 20, 30, 40, 50];

for(let num1 in b ){

   b[num1] = b[num1] + 5;

}

console.log(b);                                //[ 15, 25, 35, 45, 55 ]
*/






