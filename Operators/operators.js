
                // ########## Arithmetic operators ############
/*
 //Addition operators .............
 let a;
 a = 3+4;
 console.log(a); // output =7

//divison ...........................
let b;
 b = 3/4;
 console.log(b);  // output is 0.75 but in c and c++ languages gives 0 bcz they gives the result as quotient (if divinded < divisor = 0 in c)


 let c;
 c = 3/4;
 console.log(Math.floor(c)); // if we want only quotient in javascript so we use "Math.floor()" function

// modulus operator.......................... 
let d;
 d = 10%4;
 console.log(d);  // gives the output as the remainder " output is 2"
                  // perfect divisible =remainder is 0


let d;
 d = -10%4;
 console.log(d);  // out put is -2


let d;
 d = 10%-4;
 console.log(d);  // output is 2 bcz sign is seen at numerator is positive give positive result ans if neg then neg result

// if we do the modulus of any floating point 

let e;
e= 3.5%2;
console.log(e);        // 1.5  
                       // if we do in c and c++ gives the error 
*/




/*
// exponent operatiors..............

let a ;
a=2**3;                     // 2 ki power 3 = 8 
console.log(a);


let b ;
b=-2**3;                     
console.log(b);       // show the ambiguity(unclear)
                     // SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence
                     // to resolve this problem we use the paranthesis



let c ;
c=-(2**2);                     
console.log(c);  // -4

let d ;
d=(-2)**2;                     
console.log(d);   //  4
*/

/*
//######## increment operators ......................................

// post increment  ...............................
// 1. assign the value of a =x=5 .
// 2. then increment the value of a = a++= 6

let a= 5;
let x;
x=a++;
console.log(x,a);      // output is 5 6


// pre- increment  ...............................
// 1. First  increment the value of b = ++b = 6
// 2. Assign the increment value of b at the y.

let b= 5;
let y;
y=++b;
console.log(y,b);         // output is 6 6



//######## decrement  operators ......................................

// post decrement   ...............................
// 1. assign the value of a =x=5 .
// 2. then decrease the value of a = a--= 4

let a= 5;
let x;
x=a--;
console.log(x,a);      // output is 5 4


// pre- decrement  ...............................
// 1. First  decrease the value of b = --b= 4
// 2. Assign the increment value of b at the y.

let b= 5;
let y;
y=--b;
console.log(y,b);         // output is  4 4

*/


//############# Assignment Operators .........................................................

//Two types = 1. simple assignment op  2. compound assignment operators
/*
let x;
x=4;
console.log(x);  // print the value of x which is copy value 


let x;
4=x;
console.log(x);  // gives error bcz left side always variable not any constant number


let a=5;
let x;
x=a+2;
console.log(x);  // ouput is 7


let y;
y+=2;
console.log(y);   // output is "NaN"  -> " not a number "
                  // y is not a number means not defined any number

// above example internally behave the concept of "undefined value"

let y;
y=undefined+2;
console.log(y);    // output is "NaN"  -> " not a number "
                  // y is not a number means not defined any number


*/