
# Keyword	/Purpose----also called reserved word/predefined words


var	Declares a variable (function-scoped).
let	Declares a block-scoped variable.
const	Declares a block-scoped constant.
if	Conditional statement.
else	Alternative branch in conditionals.
switch	Multi-branch conditional.
case	Defines a branch in a switch.
default	Fallback branch in a switch.
for	Loop with initialization, condition, and increment.
while	Loop that runs while a condition is true.
do	Executes a loop body at least once.
break	Exits a loop or switch.
continue	Skips to the next loop iteration.
function	Declares a function.
return	Returns a value from a function.
try	Starts a block to test for errors.
catch	Handles errors from try.
finally	Executes code after try/catch.
throw	Throws an exception.
class	Declares a class.
extends	Inherits from another class.
super	Calls the parent class constructor/method.
import	Imports modules.
export	Exports modules.
new	Creates an instance of an object.
delete	Removes a property from an object.
typeof	Returns the type of a variable.
instanceof	Checks if an object is an instance of a class.
this	Refers to the current object context.
yield	Pauses a generator function.
await	Waits for a Promise to resolve.
async	Declares an asynchronous function.
with (deprecated)	Extends scope chain (not recommended).








#            ///// ###########     Debugger Keywords   #########///////

In JavaScript, the debugger keyword is used to pause the execution of code at a specific point and invoke any available debugging functionality (such as browser DevTools).
If no debugger is active, it has no effect.

# How It Works.........
When the JavaScript engine encounters debugger;, it stops execution as if a breakpoint was set.
You can then inspect variables, step through code, and analyze the program state in the debugger tool.
Works in browsers (Chrome, Firefox, Edge, etc.) and Node.js (with --inspect mode).
Example
Javascript

function calculateSum(a, b) {
    let sum = a + b;
    debugger;             // Execution will pause here if DevTools is open
    return sum;
}
console.log(calculateSum(5, 10));


# Steps to test in browser:....................

1. Open Developer Tools (F12 or Ctrl+Shift+I).
2. Go to the Console tab.
3. Run the code — execution will pause at debugger;.
4. Inspect variables and step through the code.

Use Cases
1. Debugging complex logic without manually setting breakpoints in DevTools.
2. Pausing execution in loops or conditional branches for inspection.
3. Debugging in environments where you can’t easily set breakpoints manually.


....."true , false and null are technically not keywords it is a reserved identifier ".........



#            // ##############  strict Mode ###################

Strict mode in JavaScript is a way to opt into a restricted variant of JavaScript, thereby implicitly opting out of "sloppy mode". It was introduced in ECMAScript 5 and makes several changes to normal JavaScript semantics.

# why uses strict mode in java script.............
javascript was linear type language and some behaviour is certainity and massive language in earlier javascript language.
In modern javascript, strict mode is introduced to changed the old behaviour so that code must be robust and reliable.

It helps developers write cleaner, more secure code by enforcing stricter parsing and error handling. This mode eliminates some silent errors by converting them into throw errors, fixes mistakes that make it difficult for JavaScript engines to optimize code


# Example

To enable strict mode for an entire script, add "use strict"; at the beginning of the script:

"use strict";
x = 3.14;      // This will cause an error because x is not declared

# Key Features
1. Eliminates Silent Errors: Strict mode changes some previously accepted "bad syntax" into real errors. For example, mistyping a variable name creates a new global variable in normal JavaScript, but throws an error in strict mode.
2. Prevents Undeclared Variables: Using a variable without declaring it is not allowed in strict mode.
3. Disallows Deleting Variables: Deleting a variable or object is not allowed.
4. Prohibits Duplicate Parameter Names: Function parameter names must be unique.
5. Restricts Octal Literals: Octal numeric literals are not allowed.
6. Simplifies Scope Management: Strict mode simplifies how variable names map to particular variable definitions in the code.
7. Non-leaking eval: In strict mode, eval does not introduce new variables into the surrounding scope.
8. No this Substitution: The value passed as this to a function in strict mode is not forced into being an object.

# Strict mode can be applied to entire scripts or individual functions and helps in writing more secure and optimized JavaScript code.

Strict mode can be enabled for an entire script or for individual functions. To enable it for an entire script, place the exact statement "use strict"; at the top of the file. For functions, place "use strict"; at the beginning of the function body.

# // Whole-script strict mode syntax
"use strict";
let x = 3.14; // This will cause an error because x is not declared

# // Function-level strict mode syntax
function myFunction() {
"use strict";
let y = 3.14; // This will cause an error because y is not declared
}


# What does 'use strict' mean in JavaScript?
It is a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables. Strict mode is declared by adding "use strict"; to the beginning of a script or a function.




