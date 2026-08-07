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



/*
//____________________########### concat() method ####################___________________________________

//concat() is used to join (combine) arrays or strings without changing the original one.

let str1 ="Hello";
let str2 = "Alice";

let str = str1.concat(str2);
console.log(str);                       //HelloAlice, if we write " let str = str1.concat(" ",str2); "

console.log(str1.concat(" ",str2));      //Hello Alice                     if we add the empty string then gives the 1 space 
*/



/*
//______________________ ############ includes() method ###############____________________________
The includes() method checks whether a string contains a specific word or character.

It returns:
true   : if the text is found.
false  : if the text is not found.

Syntax: string.includes(searchString, startPosition);

//Example 1 :
let text = "JavaScript is awesome";
console.log(text.includes("javaScript"));          //false
console.log(text.includes("JavaScript"));          //true
console.log(text.includes("some"));                //true

//Example 2: 
let text1 = "Hello World";
console.log(text1.includes("World", 6));          //true  
*/



/*
//_____________________ ############ startsWith()and endsWith() method #############____________________________________________
startsWith()   :   Checks if a string starts with specific text.
endsWith()     :   Checks if a string ends with specific text.

Both return:
true    :  if the condition is true.
false   :  otherwise.

Synyax :
string.startsWith(searchString)
string.endsWith(searchString)

//Example :

let text3 = "JavaScript";

console.log(text3.startsWith("Java"));                 //true
console.log(text3.startsWith("java"));                 //false
console.log(text3.startsWith("J"));                    //true

console.log(text3.endsWith("Script"));                   //true
console.log(text3.endsWith("ccript"));                   //false
console.log(text3.endsWith("pt"));                       //true
console.log(text3.endsWith("t"));                        //true

console.log(text3.startsWith("Script", 4));              //true
console.log(text3.startsWith("r",6));                    //true
*/




/*
//_________________________ ######### indexOf() and lastIndexOf() ############## ________________________________________

These methods help you find the position (index) of text in a string.
indexOf()     : Finds the first occurrence.
lastIndexOf() : Finds the last occurrence

If the text is not found, both return -1.

Syntax:
string.indexOf(searchString)
string.latIndexOf(searchString)

//Example :

let text4 = "Hello World";

console.log(text4.indexOf("H"));                             //0
console.log(text4.indexOf("Hello"));                         //0
console.log(text4.indexOf(" World"));                        //5
console.log(text4.indexOf("World"));                         //6
console.log(text4.indexOf("d"));                            //10
console.log(text4.indexOf("a"));                            //-1
console.log(text4.indexOf("l"));                            //2
console.log(text4.indexOf("o"));                            //4


console.log(text4.lastIndexOf("l"));                        //9          last wala l count ua bcz its reads last occurences
console.log(text4.lastIndexOf("o"));                        //7
console.log(text4.lastIndexOf("d"));                        //10
*/




/*
//___________________ ########### search() method ###################### ___________________________________

The search() method finds the position (index) of the first match in a string.
It returns: if match then retutn the index of that string(value)
            if not match ot not found then return -1.

search() finds the first occurrence of text.
Returns the starting index of the match.
Returns -1 if not found.
Unlike indexOf(), it supports regular expressions (RegExp).  


*/
let str = "Hello World";
console.log(str.search("H"));                        //0
console.log(str.search("Hello"));                    //0
console.log(str.search("World"));                    //6
console.log(str.search("A"));                        //-1

//regular Expression :
console.log(str.search(/World/));                   //6






/*
//___________________ ############ match() and matchAll() method ################# _____________________________

Both methods are used to search for matches in a string using a string or regular expression (RegExp).

1. match() : match() finds a match and returns the result as an array.
Syntax : string.match(pattern)

2. matchAll() : matchAll() finds all matches and returns an iterator.
                It is mainly used with regular expressions and the g flag
Syntax : string.matchAll(regex)      */


//---------------------------------------------------------------------------------------------------------------

//Example 1 : Find a Word
let text = "I love JavaScript";                                                // output is : null , bcz no match is found like integers(d->0-9 int)
console.log(text.match("JavaScript"));            // ['JavaScript', index: 7, input: 'I love JavaScript', groups: undefined]


//Example 2: Find All Numbers
let text1 = "My phone numbers are 123 and 456";
console.log(text1.match(/\d+/));                     // ['123', index: 21, input: 'My phone numbers are 123 and 456', groups: undefined]

console.log(text1.match(/\d+/g));                   //[ '123', '456' ] , g is basically used for find all match if we put patter (\d) means integers , this method find all integers value and return as the integer array rather than whole string as array 
