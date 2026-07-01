
Keyword	/Purpose----also called reserved word/predefined words


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








             ///// ###########     Debugger Keywords   #########///////

In JavaScript, the debugger keyword is used to pause the execution of code at a specific point and invoke any available debugging functionality (such as browser DevTools).
If no debugger is active, it has no effect.

How It Works.........
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


Steps to test in browser:....................

1. Open Developer Tools (F12 or Ctrl+Shift+I).
2. Go to the Console tab.
3. Run the code — execution will pause at debugger;.
4. Inspect variables and step through the code.

Use Cases
1. Debugging complex logic without manually setting breakpoints in DevTools.
2. Pausing execution in loops or conditional branches for inspection.
3. Debugging in environments where you can’t easily set breakpoints manually.


....."true , false and null are technically not keywords it is a reserved identifier ".........



            // ##############  strict Mode ###################

            
