/*
1. push() method _______________________________________________________________________________________

Push() method is used for Append an item to an array to the end.
push() JavaScript ka ek array method hai jo array ke end (last) mein ek ya ek se zyada elements add karta hai.

Syntax : "    array.push(element1, element2, ...);    "     
let a = [10, 20];
a.push(20);
a.push(30);
a.push(40,50,60)
console.log(a, "length of the Array is :" + a.length);         // output is : [10,20,20,30,40,50,60]  length of the Array is :7


1. pop() Method ______________________________________________________________________________________

pop() method is used for Remove the last item from an array.
pop() array ke last (end) se ek element remove karta hai.

Saath hi, pop() jo element remove hua hai, usko return bhi karta hai. 


let animal = ["cow", "horse", "dog", "cat", "Lion", "tiger"];
console.log(animal.pop());                                      // output is : tiger , bcz jo element remove hua hai usko bhi return krta hai dikhata hai ki konsa element pop hua hai 
animal.pop();
console.log(animal);                                           //[ 'cow', 'horse', 'dog', 'cat' ]


//Is line mein do kaam ek saath ho rahe hain.
//1. Ye array ke end mein "sheep" add karega. 
//2. new array ki length return karega 
console.log(animal.push("sheep"));                             // 5 */


/*
3. splice() method _______________________________________________________________________________________________________

splice() method is used for Remove multiple items from the end of an array.

splice() JavaScript ka sabse powerful array method hai.
The splice() method removes or replaces the element from the array.

Iska use 3 kaam ke liye hota hai: all in one method.

✅ Element replace karna
✅ Element  remove karna
✅ Element add karna

Aur ye original array ko modify karta hai.

syntax : array.splice(startIndex, deleteCount, item1, item2, ...);

startIndex → Kahan se operation start karna hai.
deleteCount → Kitne elements remove karne hain.
item1, item2... → Jo naye elements add karne hain (optional).

 ######### 1. Remove element by using splice() method  #############------------------------------------------------

 let a =[10,20,30,40,50];
 console.log(a);                                              //[ 10, 20, 30, 40, 50 ]

 a.splice(2,2);                                               // [ 10, 20, 50 ]
 console.log(a);                                              


 Explanation :

Index : 0   1   2   3   4
Value : 10  20  30  40  50

iska mtlb :   a.splice(2,2);

Start index = 2         // 30   start                             (start from index 2)           
Remove = 2 elements     // 30, 40 remove                          (remove 2 element from start index)
 

########## 2. Add Element using splice() method  ------------------------------------------------------


let a = [10,20,50];
console.log(a);                                             //[ 10, 20, 50]

a.splice(2, 0, 30, 40);
console.log(a);                                            // [ 10, 20, 30, 40, 50 ]

Explanation: 

splice(2,0,30,40):   

-> Index 2 se start karo.
-> 0 elements delete karo.
-> 30 aur 40 insert kar do.



//################# Replace element by using splice() method----------------------------------------------------

let a =[10,20,30,40,50];
console.log(a);                            //[ 10, 20, 30, 40, 50 ] 

a.splice(1,1,100);                         // [ 10, 100, 30, 40, 50 ]
console.log(a);

a.splice(2,1,200);                         // [ 10, 100, 200, 40, 50 ]
console.log(a);

Exaplanation:

a.splice(1,1,100);

index 1 par value hai:    20

Usko remove kiya aur usi jagah   100   add kar diya.

*/




/*
____________________ ###########  unshift() method ################________________________________________

unshift() method is used to add elements to the front of an Array.

let a = [10,20,30,40];

a.unshift(5);
console.log(a);                                // [ 5, 10, 20, 30, 40 ]
*/



/*
_____________________ ############# shift() method ###############_________________________________________________

The shift() method is used to remove elements from the beginning of an array 

let a = [10,20,30,40];

a.shift();
console.log(a);                             // [ 20, 30, 40 ]

*/



/*

________________ ######### slice() method #################__________________________________________

The slice() method returns a new array containing a portion of the original array,
based on the start and end index provided as arguments

slice () method  array ka ek portion copy karke naya array banata hai.
Important: slice() original array ko modify nahi karta.

Syntax : array.slice(startIndex, endIndex);

startIndex → Kis index se copy shuru karni hai.
endIndex → Kis index tak copy karni hai (ye include nahi hota).

// Example :


let a = [1,2,3,4,5,6,7,8,9];

console.log(a.slice(2));                   //[ 3, 4, 5, 6, 7, 8, 9]

console.log(a.slice(4,8));                 //[ 5, 6, 7, 8]        bcz last index is "n-1"

console.log(a.slice(2,6));                 //[3, 4, 5, 6]

// Negative index in slice() method : --------------------------------------------

let a = [10,20,30,40,50];

console.log(a.slice(-2));               // [40,50]
                                        // -2 ka mtlb hai : End se 2nd element se start karo.*/




/*_____________________________ ######### Length property ############### ____________________________________________

length : Ye array mein kitne elements hain, wo batata hai.

let a = [10, 20, 30];

console.log(a.length);           // 3


//Array ko bada (increase ) karna 

let a = [10, 20];

a.length = 5;
console.log(a);                   // [10, 20, <3 empty items>]   */




/*
_________________ ############## concat() method ################ __________________________________________

The concat() method is used to concatenate two or more arrays and it gives the merged array.

concat() ka used  do ya usse zyada arrays ko jod (combine) karne ke liye use hota hai.

mportant: concat() original array ko modify nahi karta. Ye ek naya array return karta hai.

Syntax : array1.concat(array2, array3, ...); 

//Example : 

let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [17, 18, 19];

let newArr = a1.concat(a2, a3);
console.log(newArr);                //[11, 12, 13, 14, 15, 16, 17, 18, 19] */





/*
__________________- ########### indexOf() method ###########____________________________________________________

indexOf() method is used to find the first index of a specific element. Kisi specific value ka pehla index return karta hai.
(if element is repeated so firdt elemet jo milega uska index return karega)


let a = [10, 20, 30, 20, 40];

console.log(a.indexOf(20));              // 1

console.log(a.indexOf(40));              // 4

// if element doest not exit then return " -1 "

console.log(a.indexOf(100));              //-1    */





/*
__________________ ############ findIndex() method ################ __________________________________

findIndex() method of Array  returns the index of the first element in an array 
that satisfies the provided testing condition function. 
If no elements satisfy the testing function, -1 is returned.

findIndex is used for - condition ke basis par jo pehla matching element condition 
satisfied karta hai uska index return karta hai.

Syntax: array.findIndex(callback);

//Example :

let a =[10, 20, 30, 40, 50];

let b = a.findIndex(a => a > 25);
console.log(b);                                 // output is : 2
                                                //Kyuki 30 pehla number hai jo 25 se bada hai isliye 30 ka index return kiya 

let c = a.findIndex(a => a>50); 
console.log(c);                                 //output : -1,       if condistion not satisfed(or not match ) 
*/





/*
______________________ ########### findLast() method ############# _________________________________________________

findLast() method Condition ke basis par last matching element ki " value return  " karta hai.


//Example : 

let a = [10,20,30,40,50];

let b = a.findLast(a => a < 50);       // output : 40 , bcz Ye last element hai jo 50 se chhota hai.
console.log(b);

***********  Important ***************

findLast()         :  value return karta hai.
findLastIndex()    :  index return karta hai.

*/





/*
_________________________ ######### findLastIndex ##############_______________________________

findLastIndex() method Condition ke basis par last matching element ka index return karta hai.


//Example :

let a = [10,20,30,20,40,50];

let b = a.findLastIndex(a => a == 20);                 //3            bcz last se 20 pahle jiska index 3
console.log(b);

let c = a.findLastIndex(a => a < 35);                  // 3         bcz last se a ki pahle 35 se chotti is 20 jik index 3
console.log(c);

let d = a.findFirstIndex(a => a == 20);                       // it is not a function 
console.log(d);

*/




/*
__________________________ ######### reverse() method ##############_______________________________

The reverse() method in JavaScript is used to reverse the order of elements in an array.

reverse() method is used to reverses an array in place and returns the reference to the same array,
the first array element now becoming the last, and the last array element becoming the first.

Syntax : array.reverse();

//Example. 1 :

let fruits = ["Banana", "Mango", "Plum", "Apple", "Orange"];

console.log(fruits);                          // [ 'Banana', 'Mango', 'Plum', 'Apple', 'Orange' ]

console.log(fruits.reverse());                // [ 'Orange', 'Apple', 'Plum', 'Mango', 'Banana' ]


// Example. 2 :

let arr = [10,20,30,40,50];

arr.reverse();

console.log(arr);                             // [ 50, 40, 30, 20, 10 ]


//*********** important *************   
// reverse() changes the original array. The original array is reversed.



2. Reverse a String---------------------------------------------------------------------

Strings don't have a reverse() method. 
(a). Convert the string to an array, 
(b). reverse it, 
(c). then join it back together.


//Example :

let str = "Hello";

let reversed_Str = str.split("").reverse().join("");

console.log(reversed_Str);                                    // output is : olleH


//How does it works :-----------------------------------

let str = "hello";
                  
console.log(str.split(""));                          // ["h", "e", "l", "l", "o"]
console.log(str.split("").reverse());                // ["o", "l", "l", "e", "h"]
console.log(str.split("").reverse().join(""));       // "olleh"
*/




/*
_____________________ ######### toReversed() method ############## ________________________________________

toReversed() ➜ does not change the original array. It returns a new reversed array.
reverse() ➜ changes the original array.

Syntax : array.toReversed();

let arr =[10,20,30,40,50];

let new_reversed_array = arr.toReversed();

console.log(new_reversed_array);                     //[ 50, 40, 30, 20, 10 ]

console.log(arr);                                    //[ 10, 20, 30, 40, 50 ]
*/





/*
______________________ ######### includes() method ############## _____________________________________

The includes() method in JavaScript is used to check if something exists in a string or an array.

1. includes() with a String--------------------> It checks if a word or letter is present in a string.

Syntax : string.includes("text");

//Example :

let message = "Hello World";

console.log(message.includes("Hello"));           //true

console.log(message.includes("llo Wo"));          //true

console.log(message.includes("hello"));           //false, bcz "h" is small letter and "H" is capital letter so it is case sensitive.


2. includes() with an Array--------------------> It checks if a specific element(means value ) is present in an array.

//Example :

let arr = [10,20,30,40,50];

console.log(arr.includes(60));           // false

console.log(arr.includes(30));          // true


// Real example :

let email = "user@gmail.com";

if (email.includes("@")) {
    console.log("Valid email format");
} else {
    console.log("Invalid email format");
}

*/




/*
_______________________########### at() method ############## _____________________________________________

at() method is used to acces(get) the element  at a specific index from an array or a String.

It also supports negative indexes (-ve), so you can easily access elements from the end.

Syntax : array.at(index);

Easy way to remember:

 0   → First item
 1   → Second item
-1   → Last item
-2   → Second last item   

//Example 1 :  Array 

let fruits = ["Banana", "Mango", "Plum", "Apple", "Orange"];

console.log(fruits.at(2));            // Plum

console.log(fruits.at(-1));           // Orange

console.log(fruits.at(-2));           //Apple

console.log(fruits.at(7));                     // no error show only undefined bcz index 7 is not present in the array.

console.log(fruits[12]);                   // undefined bcz index 12 is not present in the array.



//Example 2:  It is applicable on String also

let str = "Hello World";

console.log(str.at(6));                     // w

console.log(str.at(5));                     // blank space 

console.log(str.at(-1));                   // d

console.log(str.at(-3));                   // r

console.log(str.at(12));                    // undefined bcz index 12 is not present in the string.

"""""" at() is especially useful when you need the last or second-last element
       without writing expressions like array[array.length - 1].                     """""""""

*/     

