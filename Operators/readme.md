#   .............// ######### Operators ##########//........................

JavaScript operators are symbols or keywords used to perform operations on values and variables. They are the building blocks of JavaScript expressions and can manipulate data in various ways.
1. Arithmetic 
2. Assignment
3. Comparison 
4. Logical
5. Bitwise
6. Strig
7. Type Operator
8. Other useful Operators

# Arithmetic Operator.........................................

In JavaScript, arithmetic operators are used to perform mathematical calculations on numbers.
Here’s a complete list with examples:

# 1. Addition (+) :
Adds two numbers.
Also concatenates strings.

Example............
let a = 5 + 3;       // 8
let b = "Hello " + "World"; // "Hello World"

# 2. Subtraction (-)
Subtracts the right operand from the left.

Example...........
let a = 10 - 4; // 6

# 3. Multiplication (*)
Multiplies two numbers.

Example...............
let a = 6 * 7; // 42

# 4. Division (/)
Divides the left operand by the right.

Example...............
let a = 20 / 4; // 5

# 5. Modulus (%)
Returns the remainder after division.

Example................
let a = 10 % 3; // 1

# 6. Exponentiation (**)
Raises the left operand to the power of the right.

let a = 2 ** 3; // 8

# 7. Increment (++)
Increases a number by 1.
Can be prefix (++x) or postfix (x++).

Example...............
let x = 5;
x++; // 6
++x; // 7

# 8. Decrement (--)
Decreases a number by 1.
Can be prefix (--x) or postfix (x--).

Example.................
let x = 5;
x--; // 4
--x; // 3


# JavaScript automatically converts strings to numbers when possible in arithmetic (except +, which may concatenate).
# Division by zero returns Infinity or -Infinity (not an error).



#                // ########### Comparison or Realational Operators  ########### //

Comparison op also called Relational Op.

Comparison operators in JavaScript are used to compare two values and return a Boolean value indicating whether the comparison is true or false. These operators are essential for making decisions in your code and are often used in conditional statements and loops.

# Types of Comparison Operators.............. 8 types.


1. Equality (==) or Equal to:
Compares two values for equality after converting both values to a common type. For example: let val1 = 5; let val2 = '5'; console.log(val1 == val2); // true Here, val1 and val2 are considered equal because the string '5' is converted to the number 5 before comparison.

2. Strict Equality (===) or Strict Equal to: 
Compares both the value and the type without converting the values. For example: let val1 = 5; let val2 = '5'; console.log(val1 === val2); // false Here, val1 and val2 are not considered equal because they are of different types.

3. Inequality (!=) or Not Equal to: 
Compares two values for inequality after converting both values to a common type. For example: let val1 = 5; let val2 = '5'; console.log(val1 != val2); // false Here, val1 and val2 are considered equal after type conversion, so the result is false.

4. Strict Inequality (!==) or Strict not Equal to: 
Compares both the value and the type without converting the values. For example: let val1 = 5; let val2 = '5'; console.log(val1 !== val2); // true Here, val1 and val2 are not considered equal because they are of different types.

5. Greater Than (>): 
Checks if the left operand is greater than the right operand. For example: let a = 10; let b = 5; console.log(a > b); // true Here, a is greater than b, so the result is true.

6. Less Than (<): 
Checks if the left operand is less than the right operand. For example: let a = 10; let b = 5; console.log(a < b); // false Here, a is not less than b, so the result is false.

7. Greater Than or Equal To (>=): 
Checks if the left operand is greater than or equal to the right operand. For example: let a = 10; let b = 10; console.log(a >= b); // true Here, a is equal to b, so the result is true.

8. Less Than or Equal To (<=): 
Checks if the left operand is less than or equal to the right operand. For example: let a = 10; let b = 15; console.log(a <= b); // true Here, a is less than b, so the result is true.

# important -> When comparing different data types, JavaScript may perform type coercion, which can lead to unexpected results. To avoid this, use strict comparison operators (===, !==) and ensure the values being compared are of the same type before performing the comparison.

