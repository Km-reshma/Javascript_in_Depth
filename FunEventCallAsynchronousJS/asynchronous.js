/*
    JAVASCRIPT ENGINE

 _________________________                                  Proceesor / CPU 
|                         |                                 __________________
|                         |                                |                  |
|                         |                                |                  |
|                         |                                |                  |
|                         |                                --------------------
|                         |                                  |      |        |
|                         |             independent path<----|      |        |
---------------------------              of execution        |      |        |
                                                      _________   ________   _________
                                                      | ----  |   | ---- |   |       |
                                line by line---       | ----  |   |      |   |
                                 code execution       | ----  |   |      |   |       |
                                 (Synchronous)        | ----  |   |      |   |       |
                                                      ---------   --------   ---------
                                                      program 1   program 2   program 3-----and so on.

Synchronous JavaScript
By default, JavaScript executes one statement at a time, from top to bottom.

like---------

console.log("start");
console.log("Learning JS") ;
console.log(" End") ;

output is :

Start
Learning JS
End

*******Nothing else can execute until the current statement finishes.
*******This is called blocking execution



//________________________  ####### Single Thread —###### _______________________________________


JavaScript is single-threaded. but don't understand it
A thread is like a worker.

Suppose a restaurant has-------------
One Chef:-
Order 1
Order 2
Order 3

Only one meal is cooked at a time.

Now imagine five chefs.
Chef 1 Order A
Chef 2 Order B
chef 3 order C
Chef 4 Order D
Chef 5 Order E

Everything happens simultaneously.

JavaScript has only one chef.
Only one piece of JavaScript code executes at one moment





*/ 



/*

    Js Engine

 _________________________                                    Browser: is a software or lik a program which has multiple codeek sath chl sakte hai . 
|                         |                                 __________________
|  |     |     |      |   |                                |                  |
|  |     |     |      |   |                                |                  |
|  |     |     |      |   |                                |                  |
|  |EC   |     |      |   |                                --------------------
|  |GEC  |     |  f1  |   |                                  |      |        |
|  -------     --------   |          Threads -> m8ltople     |      |        |
| callStack      Heap     |                           _________   ________   _________
___________________________                           | ----  |   | ---- |   |       |
                             Browser functionality    | ----  |   |      |   |
                             built in code            | ----  |   |      |   |       |
                                                      | ----  |   |      |   |       |
                                                      ---------   --------   ---------
  

*/




/*
//lets take an expample -------------

console.log("1")
console.log("2")

f1();

console.log("3")
console.log("4")

f1();

console.log("5")
console.log("6")

function f1()
{
     console.log("Hello");
}
f1();     

//output:-

1
2
Hello
3
4
Hello
5
6
Hello


//lets undersstad behind the code 

Phase 1: Memory Creation Phase (Global Execution Context)___________________________________


Jab JavaScript code run hona start hota hai, sabse pehle Global Execution Context (GEC) create hota hai.

Execution Stack

┌──────────────┐
│ Global EC    │
└──────────────┘

Memory Component     -------- JavaScript pehle memory allocate karti hai.

Memory :  f1  --->  function f1() { console.log("Hello"); }

Notice:

1. function f1() poori ki poori memory mein store ho jati hai.
2. Isliye function ko declaration se pehle bhi call kar sakte ho.
3. Is process ko Function Hoisting kehte hain.


Phase 2: Code Execution Phase____________________________________________________

Ab line by line code execute hoga.

line 1. console.log("1")                       // 1

Line 2. console.log("2")                       // 2


Line 3. f1();

Ab function call hua.
JavaScript ek new Function Execution Context (FEC) create karegi.

Execution Stack:
┌──────────────┐
│ f1 EC        │
├──────────────┤
│ Global EC    │
└──────────────┘

Function execute hota hai : f1(){ console.log("Hello");}        // Hello

Function khatam.  and  Function EC remove ho jayega.

Stack:
┌──────────────┐
│ Global EC    │
└──────────────┘

NExT Line Similar 


console.log("3")
console.log("4")

Output

1
2
Hello
3
4

Next-
f1();

Fir se function call. and New Execution Context create hoga.

Stack
┌──────────────┐
│ f1 EC        │
├──────────────┤
│ Global EC    │
└──────────────┘

Output

Hello

Function complete.
Stack

──────────────┐
│ Global EC    │
└──────────────┘

*/









/*

//____________________######## Aynschronous JavaScript ##############________________________


if we create a fuction, whose task is to fetch the data from the server and display on the page.
function takes too much  the time  for fetch the data from the server .then your page un-responsible ho jayega,
bcz aapka aage ki code ki line nahi chalegi jab tak previous task complete na ho jaye .

so this problem is resolved by the concept of "asynchronous javascript".


Asynchronous means -->  Don't stop execution.
Continue running other code while waiting for a task to complete.


JavaScript was created in 1995 to make web pages interactive.
Users click  ---> JavaScript reacts
User clicks again  ---> JavaScript reacts
The browser must always remain responsive.

Imagine clicking a button and the page freezes for 10 seconds because JavaScript is downloading an image.
That would be terrible.
So JavaScript never waits for long tasks.




//_______________________ ######## Browser = JavaScript's Assistant ######## _____________________________

Think Of JavaScript and the browser like this.

JavaScript say to "Browser" --> wait 5 seconds.

Browser say --->  "Okay. "

After five seconds --- Browser --> "I m done."

JavaScript   --- > "Great.  ---> Run this callback."

now we can see that - JavaScript never waits. and the browser waits.
*/



//__________________-########## CallStack ############____________________________________

The call stack is the most important concept in JavaScript.

Think Of a stack of plates.

|        |
|plate 3 |
|plate 2 |
|plate 1 |
----------

You always put a new plate on top.
You always remove the top plate first
This is called Last In, First Out (UFO).
Functions work the same way.

//Example : -

function eat() {
cook() ;
}

function cook() {
wash() ;
}

function wash() {
console. log("done");
}

eat();


Execution of the above function code -

wash()
cook()
eat()
Global

The engine always executes the function on top.

After wash() finishes
cook()
eat()
Global

Then
eat()
Global

Finally
Global
The call stack is empty again.

