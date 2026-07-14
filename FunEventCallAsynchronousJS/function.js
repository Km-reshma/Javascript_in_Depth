// _________________####### Functions #########_______________________________________________________
/*
A function is a reusable block of code that performs a specific task.
It can take parameters (inputs)and process them and can return a value.
A function is executed when “something” invokes it (calls it). It is a reusable block of code.
Functions allow you to encapsulate code that performs a specific task into a block that you can call multiple times.

" Functions are “first-class objects” in JavaScript, which means they can be properties of objects, elements of arrays, arguments to other functions, and more. "

Functions help in organizing code, improving reusability, and making programs modular.

Syntax of function:-

//keyword  function_name
    |    |      _____________Parameters
    |    |     |                             
function sum (x,y){

    return x+y;               // function body andy return keyword
}

let result = sum(4,5);        // (4,5) as an arguement
  //            |_____________  function call
console.log(result);

*/

/*
//___________#########  Parameters and Arguements and Return   #########___________________________________

Parameters -A parameter is a variable listed in the function definition. It acts as a placeholder for the value that will be passed when the function is called.

Arguements - An argument is the actual value you pass to the function when calling it.

Return Statement-
1. The return statement is used to send a result back from a function.
2. When return executes, the function stops running at that point.
3. The returned value can be stored in a variable or used directly.



//Function Definition
function add(a, b)
//function body 
{
    return a+b;
}

//Function Call
add(10, 20)



//______________########## Why are functions called first-class objects #########____________________________________

Functions are called first-class objects because they are treated like any other value. 
They can be assigned to variables, passed as arguments, returned from other functions, stored in arrays and objects,
and they have their own properties and methods.

Internally, every function is a special type of object with an internal [[Call]] capability, which makes it callable.

Every function is an object.
Not every object is a function


JavaScript me function ek special object hota hai. 
Isliye function ko hum first-class object ya first-class citizen bolte hain.

Agar kisi value ko variable me store kar sakte ho, function ke argument ke roop me pass kar sakte ho,
kisi function se return kar sakte ho, aur uske properties aur methods ho, 
to us value ko first-class kehte hain.
JavaScript me function ye sab kar sakta hai, isliye function first-class object hai.

lets take an example to understand this--------------------------------------------------

Suppose tumhare paas ek number hai.

let x = 10;

Tum is number ko------------------------------------------
1. Variable me store kar sakte ho. 
2. Dusre function me pass kar sakte ho 
3, Return kar sakte ho 
JavaScript functions bhi bilkul isi tarah behave karte hain.


1. Function ko Variable me Store kar sakte hain__________________________________________________

const greet = function () {
    console.log("Hello");
};

greet();                               //ouput : "Hello"


2. Function ko Argument ke roop me Pass kar sakte hain_______________________________________________________
************  Isse callback function bhi kehte hain.

function hello() {
    console.log("Hello");
}

function execute(fn) {
    fn();
}

execute(hello);


3. Function ko Return bhi kar sakte hain_______________________________________________________

function outer() 
{
    return function () 
    {
        console.log("Inner Function");
    };

}

const result = outer();                             //Yahan function ne dusra function return kiya.
                                                   //  Ye bhi first-class object ki property hai.
result();                                          //output is : Inner Function



4. Function Object ke andar Store ho sakta hai____________________________________________________

const person = {

    name: "Rahul",

    greet: function () {
        console.log("Hello");
    }

};

person.greet();       // Hello




5. Function Array ke andar bhi Store ho sakta hai______________________________________________________________

function add() {
    console.log("Additiom");
}

function subtract() {
    console.log("Subtraction");
}

const arr = [add, subtract];

arr[0]();             // addution
arr[1]();             //Subtraction



6. Function ki Apni Properties Hoti Hain______________________________________________________________________

function greet(a, b) {}

console.log(greet.name);                     // name -Function ka naam batata hai.
console.log(greet.length);                   // length- Kitne parameters hain, woh batata hai

Output
greet
2
*/



/*
//___________________##### Classification of Function Based on parameters and return ____________________________


The classification of functions into 4 types is based on whether a function accepts input (parameters) and whether it sends output back (return value).

    
                                            Function
                                               │
                                ┌──────────────┼──────────────┐
                                │              │              │
                          No Parameters   Parameters    Return Value
                           No Return       No Return      Yes/No



Type 1: Function with No Parameters and No Return Value________________________________________________

A function that does not accept any parameters and does not return any value.
It simply performs a task when it is called. 

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();




Type 2: Function with Parameters but No Return Value_______________________________________________________

A function that accepts one or more parameters but does not return any value.
Instead of returning data, it usually displays or processes the received information.

function greet(name) {
    console.log("Hello " + name);
}

greet("Alice");




Type 3: Function with No Parameters but Return Value__________________________________________________

A function that does not accept any input but returns a value.
The value is usually calculated or obtained internally.

function getCurrentYear() {
    return 2026;
}
let year = getCurrentYear();
console.log(year);




Type 4: Function with Parameters and Return Value________________________________________________________

A function that accepts parameters and returns a value after processing.
This is the most commonly used function type in programming.


function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);
*/



/*
// ____________________ ######## Types Of Functions ###############______________________________________________

1. Function Declaration (name function)
2. Function Expression
3. Arrow Function 
4. Default parameters 
5. Anonymous Function 
6. Immediately, Invoke function, expression function 
7. arguement object 
8. constructor object
9. generator function 
10. Async function
*/

/*
//___________-#######  Named Function (Function Declaration)  ###########___________________________

A named function is a function that has an identifier (name). 
The name is used to call the function, refer to it, or identify it during debugging and recursion.
A named function is any function that is declared with a specific name.


Function Declaration____________________________________________________________

A Function Declaration is the most common way to define a function in JavaScript. 
It creates a named function that can be called anywhere within its scope because function declarations are hoisted.
"   It defines the function before it is executed.    " 


//Example of function declaration---------------------------
hello();

function hello() {

    console.log("Hello");

}


Syntax of Named Function-------------------------
function functionName(parameters) {
    // function body
}



1. function → JavaScript keyword
2. functionName → Name (identifier) of the function
3. parameters → Optional input values
4. {} → Function body


//Example of Named Function--------------------

function greet() {

    console.log("Hello");
}

greet();
*/



/*
//_______________________#######  Function Expression  ###########__________________________________________________


Why Is It Called a Function Expression?
Because the function is created inside an expression.

A Function Expression is a way of creating a function by assigning it to a variable.
Unlike a function declaration, the function becomes available only after the assignment is executed.
Syntax----------------

const variableName = function(parameters) 
{
    // function body
};

//Example----------------------------------------
const message = "Hello";                    //"Hello" is assigned to message
const number = 100;                         //100 is assigned to number.

const add = function(a, b)                  //A function is assigned to add.
{
    return a + b;
};

console.log(add(10,29));                       // 39

*/



/*

// ______________________ ########## Arrow Function ##############______________________________________

An arrow function is a shorter syntax for writing functions in JavaScript. It was introduced in ES6 (ECMAScript 2015) and is commonly used for cleaner and more concise code.

A new way to write functions using the => syntax. 

Syntax-------------------------------

// Traditional function
function add(a, b) {
  return a + b;
}

//Arrow function'
let add = (a,b) => 
{ 
      return a+b;

}
console.log(add(10,20));


//Shorter Syntax of arrow function
// If the function has only one expression, you can omit the braces {} and the return keyword.
let add =(a,b) => a+b;
console.log(add(20,60));

*/




/*
//_____________________########## Anonymous Function #############_____________________________________

An anonymous function in JavaScript is a function without a name. It is usually created and used directly where it is needed, often as a callback or a one-time function.

syntax----------------------------------

function () 
{
  // function body
}*/


//Unlike a normal function:----------------
let greet2 = function greet() {
  console.log("Hello");
}
greet2();                                 // Hello



//an anonymous function has no function name:
const greet1 = function () {
  console.log("Hello World");
};
greet1();                                   // Hello World


