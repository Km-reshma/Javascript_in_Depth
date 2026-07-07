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

/*

let x ={name:"John", age:30};
let y=x;
console.log(x==y);  // true, because both x and y reference the same object in memory
console.log(x===y); // true, because both x and y reference the same object in memory

let z={name:"John", age:30};
console.log(x==z);  // false, because x and z reference different objects in memory, even though their contents are the same
console.log(x===z); // false, because x and z reference different objects in memory, even though their contents are the same

//x is a variable thats strore the address of the object in memory, and y is another variable that stores the same address of the object. Therefore, x and y are equal (==) and strictly equal (===) because they point to the same object.
// while z is a new object with the same contents as x, it is stored at a different memory address. Therefore, x and z are not equal (==) or strictly equal (===) because they point to different objects in memory.

let d;
console.log(0==false);  // true, because 0 is falsy and false is also falsy
console.log(0===false); // false, because 0 is a number and false is a boolean, so they are not strictly equal

let e ;
console.log(0=="");  // true, because 0 is falsy and "" (empty string) is also falsy
console.log(0===""); // false, because 0 is a number and "" is a string, so they are not strictly equal

let f;
console.log(0==null);  // false, because null is only equal to undefined and not equal to any other value
console.log(0==undefined);  // false, because undefined is only equal to null and not equal to any other value
console.log(null==undefined);  // true, because null and undefined are considered equal in non-strict comparison
*/


//   NaN....................................................

let x;
console.log(typeof NaN);  // output: "number", because NaN is a special numeric value that represents "Not-a-Number"

console.log(0==NaN);  // false, because NaN is not equal to any value, including itself
console.log(NaN==NaN);  // false, because NaN is not equal to any value, including itself

let y =NaN;
console.log(y==NaN);  // false, because NaN is not equal to any value, including itself

//"NaN is a special value in JavaScript, it is a actual "Number Type" that represents "Not-a-Number". It is used to indicate that a value is not a valid number. However, NaN has some unique properties that can be confusing:
// means jo bhi operation NaN ke sath kiya jata hai, woh meaningless hota hai ,wo hamesha NaN return karega. For example, 5 + NaN will return NaN, and Math.sqrt(-1) will also return NaN.

