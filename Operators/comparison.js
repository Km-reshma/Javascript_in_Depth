/*
// Equality opertaor- 4 types

let x;
x=  3>4;
console.log(x);

let y;
y=  3==4;
console.log(y);

let z;
z=  3!==4;
console.log(z);

let a;
a=4=="4";   // equal operator: both type different but value is same so it will return true , phase value only check not type value 
console.log(a); 

let b;
b=  3==="3";  // strict equal operator: both type and value should be same so it will return false
console.log(b);

// default case

let c;
c=3*'4';          // no error but it will return 12
console.log(c);  // because the * (multiplication) operator automatically converts strings to numbers when possible. This is called type coercion (specifically, implicit numeric conversion).



The * (multiplication) operator works only with numbers.
When JavaScript sees a string with the * operator, it tries to convert the string into a number.

Here's what happens:
3 is a number.
'4' is a string.
The * operator expects numeric operands.
JavaScript converts '4' to the number 4.
It performs 3 * 4, resulting in 12.

Equivalent explicit conversion:......................................
let c = 3 * Number('4');
console.log(c);             // 12
More examples
console.log(3 * '5');      // 15
console.log(3 * '5.5');    // 16.5
console.log(3 * 'abc');    // NaN (cannot convert to a number)
console.log(3 * '');       // 0 (empty string becomes 0)
console.log(3 * '   4  '); // 12 (whitespace is ignored)

Why doesn't + behave the same?.....................................
The + operator is special because it is used for both addition and string concatenation.
console.log(3 + '4');                // "34"
Since one operand is a string, JavaScript performs string concatenation instead of numeric addition.

If you want numeric addition:
console.log(3 + Number('4'));      // 7

Rule to remember.........................................
1. If the entire string is a valid number, JavaScript converts it to a number.
If the string contains any invalid character (like a, b, @, etc.), the conversion fails and returns NaN.
*/

