/*
_________________________ ################ String #######################_________________________________________

A String is a sequence of characters(letters, numbers, symbols, spaces),  typically used to represent text.
String is predefined data type and it is also immutable (means cant changes the oroginal string).


_______________  ########## Creating strings ############ __________________________________________

Strings can be created as string literals, or as objects, using the String() constructor.
There are 4 way to create a string.

1. Double Quotes (") : ---------------------------------------------------------------------*

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

//This is because new String() creates a String object (wrapper object), not a primitive string.


//--------------------------------------------------------------------------------------------------------------

//lets compare s1 ,s2, s3, s4 to find the difference :

console.log(s1===s2);                     //true
console.log(s1===s3);                     //true
console.log(s1===s4);                     //false
console.log(s2===s3);                     //true
console.log(s2===s4);                     //false
console.log(s3===s4);                     //false

//but by s4 and s1 gives false let me check the datatype of the s1 and s4.at

console.log(typeof(s1));                 //string
console.log(typeof(s2));                 //string
console.log(typeof(s3));                 //string
console.log(typeof(s4));                 //object

why s4 is show object ?

The new keyword tells JavaScript:
"Create a new object from the String constructor."

So instead of storing just the text "Hello", JavaScript creates a String object that contains the text.

But we recommended to use string literal( "", '', ``), instead of object/string constructor.
_______________________________________________________________________________________________________________________________
*/



/* ___________________ ############# Access the String #################### _________________________________

//1. Normal acces by index : //if index is does not exist then return undefined.

let s1 = "Hello";
console.log(s1[0]);               //H
console.log(s1[1]);               //e
console.log(s1[2]);               //l
console.log(s1[3]);               //l
console.log(s1[4]);               //o
console.log(s1[5]);               //undefined


//2. By using "chatAt(index)" : charAt() returns the character at a specific index in a string. 
//if index is does not exist then return empty string("").

//Syntax : str.charAt(index);

console.log(s1.charAt(0));               //H
console.log(s1.charAt(1));               //e
console.log(s1.charAt(5));               // empty output 


Both return the same character for valid indexes. But :
charAt(10) → "" (empty string)
str[10] → undefined



//3. By using at() method : same as the chatAt() but support it negative index. 

if index doest not exist then return undefined.

let s1 = "Hello";
console.log(s1.at(1));              //e
console.log(s1.at(-1));             //o
console.log(s1.at(-2));             //l
console.log(s1.at(-6));             //undefined

//Difference between [], charAt(), at() :-------------------------------------------

Method	             Valid Index	      Invalid Index         	Negative Index

charAt()	         Character	          "" (empty string)	        ❌ Not supported
[]	                 Character	          undefined	                ❌ Not supported
at()	             Character	          undefined              	✅ Supported
*/




/*
________________________ ######### backtick (`) ################### ________________________________________
Backticks (`) were introduced in ES6 (ECMAScript 2015). They create template literals,
which are a more powerful way to work with strings than single (') or double (") quotes.

Three Ways to Create Strings :

let s1 = "Hello";   // Double quotes
let s2 = 'Hello';   // Single quotes
let s3 = `Hello`;   // Backticks (Template Literal)

Output:
console.log(s1); // Hello
console.log(s2); // Hello
console.log(s3); // Hello

All three create strings:

console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);

Output:
string
string
string

So why do backticks exist?
Because they provide extra features that ' and " don't.
_______________________________________________________________________________________

Feature 1: String Interpolation:----------------------------------

Interpolation means inserting variables or expressions inside a string instead of using concatation/+.
*/

//Without backtick , using +

let name = "John";

let message = "Hello " + name ;

console.log(message );                          // Hello John

//with backtick (`)

let name1 = "John";

let msg = `Hello ${name1}`

console.log(msg);                              // Hello John


/*
How does ${} work?

The syntax is:    `${expression}`
JavaScript evaluates the expression inside ${} and inserts its result into the string.

1. template literals (backticks `) are preferred because they are easier to read and write.
2. Easier to read : Instead of joining many strings with +, you write the sentence naturally.
3. Less chance of mistakes : With concatenation, it's easy to forget spaces or +.
4. Supports expressions : You can put any JavaScript expression inside ${}.
5. Supports multi-line strings

Without backticks:   let text = "Hello\nWorld";

With backticks: let text = `Hello
                World`;
Output:
Hello
World

//Example 2 :

let a =10;
let b =20;
let c =a+b;
let result = "Sum of " +a+ " and " +b+ " is " +c;
console.log(result);                               //Sum of 10 and 20 is 30

//With backtick

let res = `sum of ${a} and ${b} is ${c}`;
console.log(res);                               //Sum of 10 and 20 is 30

let res1 = `sum of ${a+b}`;                     //sum of 30
console.log(res1);

console.log(`a*b is ${a*b}`);                   //a*b is 200

console.log(`square of a = ${a*a}`);            //square of a = 100


//Preserve Formating -----------------------

let html = `
<div>
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
`;

console.log(html);

//output is : 
<div>
    <h1>Hello</h1>
    <p>Welcome</p>
</div>

*/

//Nested quotes-----------------------------

let text = `It's a beautiful day.`;
let text1 = `He said "Hello"`;

console.log(text);                         //It's a beautiful day.
console.log(text1);                        //He said "Hello"


