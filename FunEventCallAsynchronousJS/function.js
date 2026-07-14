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

//___________#########  Parameters and Arguements  #########___________________________________

Parameters -A parameter is a variable listed in the function definition. It acts as a placeholder for the value that will be passed when the function is called.

Arguements - An argument is the actual value you pass to the function when calling it.

//Function Definition
function add(a, b)
//function body 
{
    return a+b;
}

//Function Call
add(10, 20)
  