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


// Real example :------------------------------------------------------------------------------------

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

//Example 1 :  Array ---------------------------------------------------------------------------------

let fruits = ["Banana", "Mango", "Plum", "Apple", "Orange"];

console.log(fruits.at(2));            // Plum

console.log(fruits.at(-1));           // Orange

console.log(fruits.at(-2));           //Apple

console.log(fruits.at(7));                     // no error show only undefined bcz index 7 is not present in the array.

console.log(fruits[12]);                   // undefined bcz index 12 is not present in the array.



//Example 2:  It is applicable on String also------------------------------------------------------------

let str = "Hello World";

console.log(str.at(6));                     // w

console.log(str.at(5));                     // blank space 

console.log(str.at(-1));                   // d

console.log(str.at(-3));                   // r

console.log(str.at(12));                    // undefined bcz index 12 is not present in the string.

"""""" at() is especially useful when you need the last or second-last element
       without writing expressions like array[array.length - 1].                     """""""""

*/     





/*
______________________________ ################ sort() method ############## ________________________________________

The sort() method is used to sort the elements of an array in place and 
returns the reference to the " same array(original array is sorted) ", now sorted. 
By default, it sorts elements as strings (alphabetically) and order is ascending.

Synrax : array.sort();

//Example 1 :  Sort an array of strings----------------------------------------------------------

let fruits = ["Banana", "Mango", "Plum", "Apple", "Orange"];

fruits.sort();

console.log(fruits);         // output is : [ 'Apple', 'Banana', 'Mango', 'Orange', 'Plum' ]   bcz by default sort() method sort elements as strings (alphabetically) and order is ascending.   



//Example 2 :  Sort an array of numbers---------------------------------------------------------------

let numbers = [10, 5, 100, 25];

numbers.sort();

console.log(numbers);           // output is : [ 10, 100, 25, 5 ]   bcz by default sort() method sort elements as strings (alphabetically) and order is ascending.  


❌ This is not correct numeric order!

Why? bcz By default, sort() converts numbers to strings:

"10"
"100"
"25"
"5"

Then it sorts them alphabetically.  like first character of the string is compared, then second character and so on. like 1 0, 1 0 0, 2 5, 5.

*/




/*_______________________ ############ sort() method with compare function ############## _____________________________________________

if you perform sort() on an array of numbers, it will not sort them correctly.
To sort numbers correctly, you will use a compare function with the sort() method.

Syntax : array.sort(compareFunction);

//Example 1 : Sort an array of numbers in ascending order-------------------------------------------

let num1 = [10, 5, 100, 25];

num1.sort((a, b) => a- b);

console.log(num1);                                    // [ 5, 10, 25, 100 ]


//Explanation : given array : [10, 5, 100, 25]

Compare 10 and 5 :
a = 10
b = 5

a - b = 10 - 5 = 5

Result is positive (5).

Rule: Positive means put b before a.

So:  5 comes before 10   

compareFn(a, b) return value	                 sort order
> 0	                                             sort a after b,   e.g., [b, a]
< 0	                                             sort a before b,  e.g., [a, b]
=== 0	                                         keep original order of a and b

//Example 2 : Sort an array of numbers in descending order-----------------------------------

let num2 = [10, 5, 100, 25];

num2.sort((a, b) => b - a);

console.log(num2);                                    // [ 100, 25, 10, 5 ]

*/





/*
______________________############## toString() and join() method ############## 

The toString() method in JavaScript converts a value into a string using comma as a separator. 
It is used to convert an array into a string representation.
It works with arrays, numbers, booleans, and many other data types.



The join() method is used to join the elements of an array into a string, using a specified separator. 
It allows you to customize the separator between the elements.

   """""""""               toString() always uses commas.
                            join() lets you choose the separator.             """"""""""""



//Example 1 : toString() method  with an Array-------------------------------------------------

let fruits1 = ["Banana", "Mango", "Plum", "Apple", "Orange"];

console.log(fruits1.toString());                 // output is : Banana,Mango,Plum,Apple,Orange


//Example 2 : join() method -------------------------------------------------

let fruits = ["Banana", "Mango", "Plum", "Apple", "Orange"];

console.log(fruits.join());                    //Banana,Mango,Plum,Apple,Orange

console.log(fruits.join(""));                  //BananaMangoPlumAppleOrange

console.log(fruits.join("  "));               //Banana  Mango  Plum  Apple  Orange

console.log(fruits.join("_"));                // Banana_Mango_Plum_Apple_Orange

console.log(fruits.join(" @ "));              //Banana @ Mango @ Plum @ Apple @ Orange


//--------------------------------------------------------------------------------

//Example 3 : toString() with a Boolean------------------------------------------------------

let value = true;

console.log(value.toString());                //"true"


//Example 4 : toString() with a Number-------------------------------------------------------

let num = 123;

console.log(num.toString());                 // "123"
*/




/*
_________________________ ######### toLocaleString() method ############### _________________________________

The toLocaleString() method is used to convert a " value "   into a  " string "  according to a specific language and local format.
It is mainly used for numbers, dates, and currencies.

1. toLocaleString() with Numbers----------------------------------------------------------------

let num = 1000000;
console.log(num.toLocaleString());              //Output : 10,00,000 (depends on your system location)

//For India:     10,00,000
//For the USA:   1,000,000

//It automatically adds commas according to the region.

2. Using Indian Number Format------------------------------------------------------------------
You can specify the locale:

let num = 1000000;
console.log(num.toLocaleString("en-IN"));                 //10,00,000
console.log(num.toLocaleString("en-US"));                 //1,000,000
console.log(num.toLocaleString("en-AU"));                 //1,000,000


3. toLocaleString() with Date----------------------------------------------------------------

let date = new Date();
console.log(date.toLocaleString());                     // 5/8/2026, 1:36:34 pm

The format changes based on your location.



************difference between toString() and toLocaleString()**************

toString() → Just convert to values or elements into the string representation.
toLocaleString() → Convert to text or values with local formatting (commas, currency, date format, etc.)
*/






/*
__________________________ ######### values() method ############### _____________________________________

values() method is used to return an iterator object that contains the values of the array.

syntax : array.values();

What is an Iterator?
An iterator is an object that gives you one value at a time.

// Example : of an Iterator object

let arr = [10,20,30];

let iterator = arr.values();

console.log(iterator.next());             // { value: 10, done: false }


//Example 1 : Basic usage of values() metjod-----------------------------------------------

let Animals = ["cow", "dog", "cat", "sheep", "lion" ];

let iterator = Animals.values();

console.log(iterator.next());              //{ value: 'cow', done: false }
console.log(iterator.next());              //{ value: 'dog', done: false }
console.log(iterator.next());              //{ value: 'cat', done: false }
console.log(iterator.next());              // { value: 'sheep', done: false }
console.log(iterator.next());              // { value: 'lion', done: false }
console.log(iterator.next());              // { value: undefined, done: true }  bcz array mein aur koi element nahi hai isliye value undefined and done true show ho raha hai.


Exaplanation : 

value                     Current element.
done : false              More elements are available.
done : true               No more elements.



Example 2: Using for...of (Most Common)----------------------------------------------------------------------

""""    This is the easiest way to use values().   """"


let Animals = ["cow", "dog", "cat", "sheep", "lion" ];

for (let value of Animals.values()){
    console.log(value);   
    
}
//output is : cow
              dog
              cat
              sheep
              lion
*/






/*
_______________________ ######### keys() method ############# ________________________________________________

The keys() method in JavaScript returns an iterator that gives you the indexes (keys) of an array.
like : Give me all the index numbers of this array. similar as the values() meyhpd bt return the only keys not values 

Syntax : array.keys(); 

// Example : 1-----------------------------------------------------

let fruits = ["Apple", "Banana", "Plum", "Peach"];
let iterator = fruits.keys();

console.log(iterator.next());       // { value: 0, done: false }
console.log(iterator.next());       // { value: 1, done: false 
console.log(iterator.next());       // { value: 2, done: false }
console.log(iterator.next());       // { value: 3, done: false }
console.log(iterator.next());       // { value: undefined, done: true }


//Example 2: Using for...of (Most Common)------------------------------------

let fruits = ["apple", "banana", "mango"];

for (let index of fruits.keys()) {
    console.log(index);
}

Output:  0
         1
         2
*/

         



/*
______________________ ########### entries() method ############## ____________________________________

entries() method returns an iterator that gives both the index and the value of each array element.
like :  "Give me both the position and the value."

syntax : array.entries();

//Example : 1 -----------------------------------------------------------------

let fruits = ["apple", "banana", "mango"];

let iterator = fruits.entries();

console.log(iterator.next());             //{ value: [ 0, 'apple' ], done: false }
console.log(iterator.next());             //{ value: [ 1, 'banana' ], done: false }
console.log(iterator.next());             //{ value: [ 2, 'mango' ], done: false }
console.log(iterator.next());             //{ value: undefined, done: true }

//Example 2: Using for...of (Most Common)--------------------------------------------

let fruits1 = ["apple", "banana", "mango"];

for( let [index, values] of fruits1.entries()){

    console.log([index, values]);
}

output is : [ 0, 'apple' ]
            [ 1, 'banana']
            [ 2, 'mango' ]
*/





/*
keys() vs values() vs entries()_______________________________________________________________________________

let fruits = ["apple", "banana", "mango"];
l
Method	Returns: 

keys()	                   0, 1, 2
values()	               "apple", "banana", "mango"
entries()	               [0, "apple"], [1, "banana"], [2, "mango"]            


//Example for difference between values(), keys(), enteries() , and here we used spread operatoe (...)

let fruits = ["apple", "banana"];

console.log([...fruits.keys()]);              //[ 0, 1 ]
console.log([...fruits.values()]);            //[ 'apple', 'banana' ]
console.log([...fruits.entries()]);           //[ [ 0, 'apple' ], [ 1, 'banana' ] ]
*/






/*
______________________ ########### some() method ############## ___________________________________________

The some() method returns true if it finds an element in the array that 
satisfies the provided testing function or testing condition. Otherwise, it returns false.

Syntax: 

                 array.some(function(element) {
                        return condition;
                 });
 
Or using an arrow function:  " array.some((element) => condition);   "" 

//Example 1 : Check if Any Number is Greater Than 10---------------------------------------------

let number = [2,5,8,11];

let result = number.some(num => num > 10);

console.log(result);                    // true , bcz 11 is  greater than 10 and present in array 


//Example 2 : Checks whether an element is even-------------------------------------------------------

let arr = [1,2,3,4,5];

let even_res = arr.some((element)=> element %2 == 0); 

console.log(even_res);                                          // true


// or we also defined as ither way 

let even_res1 =((element)=> element %2 == 0);

console.log(arr.some(even_res1));                             // true 
*/






/*
___________________ ############# with() method #############______________________________________________

with() method is used to , you can update a single element in an array and then apply other array methods.

The with() method is a modern JavaScript array method.

It creates a new array with one element changed, without modifying the original array. original array remains same.

Syntax :  " array.with(index, newValue); "

index → Position of the element to replace.
newValue → New value to put at that position. 

//Example 1 : --------------------------------------------------------------------

let arr = [1,2,3,4,5];

console.log(arr.with(2,6));       // [ 1, 2, 6, 4, 5 ] , 6 is put at the index of 2, this is not modify in origin creates only copy 

console.log(arr.with(4,10));      // [ 1, 2, 3, 4, 10 ] , 4 is put at the index of 10, this is not modify in origin creates only copy 

console.log(arr);                 // [ 1, 2, 3, 4, 5 ]  , no original array changed


//Example 2: Negative Index , Like at(), with() supports negative indexes.--------------------------

let numbers = [10, 20, 30, 40];

let newNumbers = numbers.with(-1, 100);        //[ 10, 20, 30, 100 ]

console.log(newNumbers);

//Here:
//-1  : Last element
//-2  : Second last element


// Difference Between with() and Direct Assignment :
//with() method      = The original array stays the same, and you get a new array with the updated value.
//direct assignemnet = original array is changed.
*/





/*
_______________________ ############ copyWithin() method ################# _________________________________

The copyWithin() method copies existing elements to another position in the same array.
It changes the original array.
"Copy some items from this array and paste them somewhere else in the same array."

Syntax : array.copyWithin(target, start, end);

Parameters :
target → Where to paste the copied elements.
start → Where to start copying from.
end (optional) → Where to stop copying (not included).


//Example 1:------------------------------------------------------------------
const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

console.log(arr.copyWithin(0, 1 , 4));       // ['b', 'c', 'd', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k']

console.log(arr.copyWithin(3, 8 ));         //['b', 'c', 'd', 'i','j', 'k', 'g', 'h', 'i', 'j', 'k']
*/





/*
___________________ ############# fill() method ############### __________________________________________

fill() method is used to fill the full array or some part of the array with the same value.

Syntax : array.fill(value, start, end);

Parameters
value → The value to put in the array.
start (optional) → Index where filling starts (default is 0).
end (optional) → Index where filling stops (not included). Default is the array's length.

//Example 1: Fill the whole array-------------------------------------------------

let arr = [1,2,3,4,5];

console.log(arr.fill(0));                            //[ 0, 0, 0, 0, 0 ]
                                                     //Think of it like replacing every element with 0.

//Example 2: Fill only part of the array

let arr1 = [1,2,3,4,5];

console.log(arr1.fill(9,1,4));                       //[ 1, 9, 9, 9, 5 ]


//Example 3: Create an array with the same value-------------------------------------

let arr2 = new Array(5).fill(10);

console.log(arr2);                                     //[ 10, 10, 10, 10, 10 ]. This is a common way to create an array filled with a default value.
*/




/*
_______________________ ############### every() method ################## ________________________________________________

The every() method returns false if it finds an element in the array that
does not satisfy the provided testing function. Otherwise, it returns true.

The every() method in JavaScript checks whether all elements in an array satisfy a condition.


Like : "Does every item match this condition?"

✅ If all elements match → true
❌ If even one element doesn't match → false

Syntax : Similar as the some() method 

array.every(function(element) {
    return condition;
});

Or using an arrow function:   "" array.every((element) => condition);   ""

//Example :------------------------------------------------------------

let arr = [1,39,39,29,10,13];

let isBelow = arr.some(num => num < 40);

console.log(isBelow);                                // true


//Example 2 :-----------------------------------------------------------

let numbers = [15, 20, 5];

let result = numbers.every(num => num > 10);

console.log(result);                        // false, bcz all number does not satisfy that condition


//Comparison between some() and every() method :

Method	            Returns                         
some()	            true if at least one matches	   
every()	            true only if all match	            
*/





/*
_____________________ ############## flat() method ################## ____________________________________

The flat() method is used to convert a nested array (array inside an array) into a single, flatter array.
""" flat() removes one or more levels of nested arrays and returns a new flat array. """"

Syntax: array.flat();   

flat()               : Opens 1 inside nested array.
flat(2)              : Opens 2 inside nested array.
flat(Infinity)       : Opens all inside nested array.

Important Points :

Works on arrays.
Returns a new array.
Does not change the original array.
Removes nested array levels.

//Example 1: Flatten one level

let arr1 = [[1, 2], [3, 4]];
let result = arr1.flat();
console.log(result);                                     // [ 1, 2, 3, 4 ]

//Example 2: Nested arrays

let arr2 = [1, [2, 3], 4];
console.log(arr2.flat());                                // [ 1, 2, 3, 4 ]

//Example 3: Flatten two levels

let arr3 = [1, [2, [3, 4]]];
console.log(arr3.flat(2));                                //[ 1, 2, 3, 4 ]

//Example 4: Flatten all levels

let arr4 = [1, [2, [3, [4, 5]]]];
console.log(arr4.flat(Infinity));                        // [ 1, 2, 3, 4, 5 ]
*/






/*
________________________ ########## reduce() method ##############__________________________________

The reduce() method is used to combine all the elements of an array into a single value.
"""" reduce() takes all the array elements and reduces them to one final value. """"

That single value can be:

A sum
A product
A string
An object
Another array
------------------------------------------------------------------------
Real-Life Example:  Imagine you have money:   ₹100 + ₹200 + ₹300 + ₹400

Instead of adding them manually:    100 + 200 + 300 + 400 = 1000

You can use reduce() to get the total.

Syntax :-----------------------------------------

arr.reduce((accumulator, cuurentValue) =>{

    return accumulator + cuurentVlue;

    }, initialValue);

Parameters:----------------------------------

accumulator → Stores the running result means data store like sum of array.
currentValue → Current element of the array.
initialValue → Starting value of the accumulator (initial value of sum =0).   



//Example 1 :----------------------------------------------------
let arr = [10,20,30,40];

let sum = arr.reduce((accumulator, currentValue) => {
     
    return accumulator + currentValue ;

}, 0);

console.log(sum);                                    // 100;


//Exaplanation : -------------------------------------------------------

What is initialValue?
}, 0);                Here, 0 is the initialValue.

It means:   accumulator = 0

The calculation starts from 0.
--------------------------------------------------------------

First Iteration : The first element is 10.

accumulator = 0
currentValue = 10

Calculation: 0 + 10 = 10

Now:accumulator = 10
-----------------------------------------------------------------

Second Iteration :The next element is 20.

accumulator = 10
currentValue = 20

Calculation: 10 + 20 = 30

Now:accumulator = 30
-------------------------------------------------------------------

Third Iteration : The next element is 30.

accumulator = 30
currentValue = 30

Calculation: 30 + 30 = 60

Now: accumulator = 60
--------------------------------------------------------------------

Fourth Iteration : The next element is 40.

accumulator = 60
currentValue = 40

Calculation: 60 + 40 = 100

Now:accumulator = 100


//Example 2 :-------------------------------------------------------------------------------------------

let arr1 = [1,2,3,4,5];

let product = arr1.reduce((accumulator, currentValue) => {

    return accumulator * currentValue;

}, 1);

console.log(product);                                   //120


//Example 3 : Find the largest number---------------------------------------------
let arr = [10, 50, 20, 80];

let max = arr.reduce((larget, num) => {

    return num > larget ? num : larget ;
});

console.log(max);                                       // 80
*/






/*
____________________ ############## map() method ################## _______________________________

The map() method is used to create a new array by changing each element of an existing array based on applying a  function/ callback function.

map() is an Array method that creates a new array by applying a callback function to each element of the original array.
It does not modify the original array.

"""" map() goes through every element of an array, applies a function to it, and returns a new array. """"""

Synatax: 

arr.map((currentValue, index, array) => {

    return newValue;
    
    })

Parameters : 
currentValue  :                The current element being processed.
index         :                The index of the current element (optional).
array         :                The original array (optional).   */

//Example 1 : Multiply each element by 2 in the array

let arr = [1,2,3,4,5];

let twoMul = arr.map((num) => {

    return num*2;
});
console.log(twoMul);                                //[ 2, 4, 6, 8, 10 ]


//EXample 2 : Square each number

let arr1 = [1,2,3,4,5];

let square = arr1.map((num) => {

    return num * num;
});
console.log(square);                           //[ 1, 4, 9, 16, 25 ]

console.log(arr1);                             //[ 1, 2, 3, 4, 5 ]


//Example 3: Convert names to uppercase

let names = ["alice", "bob", "john", "ram", "sita"];

let upperNames = names.map((names) => {      //or names.map((names => names.toUpperCase());
    return names.toUpperCase();
});

console.log(upperNames);             //[ 'ALICE', 'BOB', 'JOHN', 'RAM', 'SITA' ]


//Example 4: teacher add extra 5 marks to each student's marks

let marks= [40,50,60,70,80];

let updateMarks = marks.map((mark) => mark + 5);

console.log(updateMarks);                       //[ 45, 55, 65, 75, 85 ]