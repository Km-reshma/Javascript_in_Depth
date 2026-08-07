/*
//______________________-########## length Property ################ _______________________________________

//length = Returns the number of characters.

let str = "JavaScript";
console.log(str.length);                     //10


//____________________########### charAt(),at ##################____________________________________________________-
//charAt(index) : Returns the character at the given index.
//at(index) : Returns the character at the given index. Supports negative indexes.

let str1 = "Hello";
console.log(str1.charAt(1));                   //e
console.log(str1.at(1));                       //e
console.log(str1.at(-1));                      //o





//_________________________############# charCodeAt(index) #################__________________________________________

//Returns the Unicode(Ascii) value of a character.

let str2 = "ALICEa";
console.log(str2.charCodeAt(0));                           //65
console.log(str2.charCodeAt(3));                           //67
console.log(str2.charCodeAt(4));                           //69
console.log(str2.charCodeAt(5));                           //97
*/




//____________________########### concat() method ####################___________________________________

//concat() is used to join (combine) arrays or strings without changing the original one.

let str1 ="Hello";
let str2 = "Alice";

let str = str1.concat(str2);
console.log(str);                       //HelloAlice, if we write " let str = str1.concat(" ",str2); "

console.log(str1.concat(" ",str2));      //Hello Alice                     if we add the empty string then gives the 1 space 




/*
//______________________ ############ includes() method ###############____________________________
The includes() method checks whether a string contains a specific word or character.

It returns:
true   : if the text is found.
false  : if the text is not found.

Syntax: string.includes(searchString, startPosition);
*/
//Example 1 :
let text = "JavaScript is awesome";
console.log(text.includes("javaScript"));          //false
console.log(text.includes("JavaScript"));          //true
console.log(text.includes("some"));                //true

//Example 2: 
let text1 = "Hello World";
console.log(text1.includes("World", 6));          //true    