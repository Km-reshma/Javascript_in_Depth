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