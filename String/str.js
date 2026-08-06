/*
_________________________ ################ String #######################_________________________________________

A String is a sequence of characters(letters, numbers, symbols, spaces),  typically used to represent text.
String is predefined data type and it is also immutable (means cant changes the oroginal string).


_______________  ########## Creating strings ############ __________________________________________

Strings can be created as string literals, or as objects, using the String() constructor.
There are 4 way to create a string.

1. Double Quotes (") : ---------------------------------------------------------------------*/

let s1 = "Hello";
console.log(s1);                            //Hello


//2. 2. Single Quotes ('): --------------------------------------------------------------------

let s2 = 'Hello';
console.log(s2);                           //Hello

//No difference between single and double quotes.

//3. Backticks (Template Literals) like ( ` )-----------------------------------------------------------

let s3 = `Hello`;
console.log(s3);                       //Hello


//4. Create using Constructor or created though an object  ---------------------------------------------------
//The new String() constructor creates a string object instead of a primitive string. 
// It is generally not recommended because it can cause unexpected behavior in comparisons

let s4 = new String("Hello");
console.log(s4);                     //[String: 'Hello']




