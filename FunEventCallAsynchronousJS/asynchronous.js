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







/*
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


 / Why Can't JavaScript Run Two Functions together?__________________________________________
Suppose

while(true){}

This infinite loop never finishes.
The call stack looks like-

Infinite Loop
Global

Since the top never leaves, nothing else can execute.

Not-----
button clicks
timers
promses
keyboard events
Everything waits.

This is why heavy computations can freeze a page.

*/





/*
//_____________ ##########  Web APIs ###############________________________________
Many people think

setTimeout()

is a JavaScript feature. but It isn't. JavaScript only says : -------------

"Please create a timer."
The browser actually creates the timer.

Think of JavaScript as someone placing an order.

    JavaScript
        │
        ▼

  "I need a timer."
        │
        ▼

Browser Timer Department
        │
        ▼

Timer runs independently.

*/






/*
//___________________________####### Set TimeOut ################_____________________________________

//Example :

console. log ( "A" );
setTimeout(() => { console.log("B"); }, 3000  );
console.log("C");


People often think JavaScript pauses for three seconds.
It doesn't.

Real sequence:------

step 1  Print A
        │
        ▼
step 2  Ask browser     -- "Run this callback after 3 seconds. "
        │
        ▼ 
Browser Starts timer.
        │
        ▼
JavaScript keeps running.
        │
        ▼
    print C
        │
        ▼
Call stack becmes empty.
        │
        ▼
After 3 seconds,
browser places callback into a queue.
        │
        ▼
Event loop it onto the stack.
print B

Output :-
A
C
B
*/








/*
//____________________ ########### Why Do We Need a Queue ############ ___________________________

Imagine three customers finish their work at the same time.
• Timer finished
• Mouse clicked
• File downloaded

Can JavaScript execute all three immediately ?  "  No.  "

It has only one call stack.
so they wait in line. 
Queue
  │
  ▼
Timer
  │
  ▼
click
  │
  ▼
Download

The first completed task gets processed first (for macrotasks).

*/




/*
// _______________ #########  The Event Loop — The Traffic Police ########______________________________

The event loop doesn't execute your code itself.
It simply watches.

Think of it as a traffic police officer.
call stack Busy?
Yes
Wait
Call Stack Empty?
Yes
Take next callback
it onto stack
Repeat forever

Without the event loop, asynchronous callbacks would remain in queues forever.

*/



/*

// lets take an example ________

console.log("1")
console.log("2")

f1();

console.log("3")
console.log("4")

f1();

console.log("5")
console.log("6")

function f1() {
    console.log("Hello");
}

f1();

//_________-###### Step 1: Memory Creation Phase (Global Execution Context) ##### ____________________

Jab JavaScript code run hona start hota hai, sabse pehle Global Execution Context (GEC) create hota hai.

Execution Stack----->

┌──────────────┐
│ Global EC    │
└──────────────┘

Memory ----> JavaScript pehle memory allocate karti hai.

"  f1  --->  function f1() { console.log("Hello"); }  "

function f1() ka code poora ki poora memory mein store ho jata hai.
Isliye function ko declaration se pehle bhi call kar sakte ho.
Is process ko Function Hoisting kehte hain.


//_________________ ######## Step 2: Code Execution Phase ######___________________________

Ab line by line code execute hoga.

Line 1.........................................
console.log("1")    // output : 1

Stack
┌──────────────┐
│ Global EC    │
└──────────────┘


Line 2.......................................
console.log("2")           //Output  : 1
                                       2

Line 3............................................
f1();

Ab function call hua.
JavaScript ek new Function Execution Context (FEC) create karega.

Execution Stack------>
┌──────────────┐
│ f1 EC        │
├──────────────┤
│ Global EC    │
└──────────────┘

Function execute hota hai

console.log("Hello");            //Output :  1
                                             2
                                             Hello

Function khatam.
Function EC remove ho jayega.

Stack------------------->
 ──────────────┐
│ Global EC    │
└──────────────┘


Next Lines
console.log("3")
console.log("4")

Output    :    1
               2
               Hello
               3
               4


Next...........................................................
f1();

Fir se function call.
New Execution Context create hoga.

Stack------------------>
┌──────────────┐
│ f1 EC        │
├──────────────┤
│ Global EC    │
└──────────────┘

Output :   Hello

Function complete.

Stack------------------------------->
┌──────────────┐
│ Global EC    │
└──────────────┘


Next
console.log("5")
console.log("6")

Output

1
2
Hello
3
4
Hello
5
6


Last....................................................................
f1();

Fir ek naya Function Execution Context banega.

Stack-------------------------------------->
┌──────────────┐
│ f1 EC        │
├──────────────┤
│ Global EC    │
└──────────────┘

Output : Hello

Function complete.

Stack
┌──────────────┐
│ Global EC    │
└──────────────┘

Program end hone par Global EC bhi remove ho jata hai.

Stack
Empty

Execution Context Timeline.....................................................
Program Start

Stack
┌──────────────┐
│ Global EC    │
└──────────────┘
dd
↓

console.log("1")

↓

console.log("2")

↓

f1()

┌──────────────┐
│ f1 EC        │
├──────────────┤
│ Global EC    │
└──────────────┘

↓

Hello

↓

f1 EC removed

┌──────────────┐
│ Global EC    │
└──────────────┘

↓

console.log("3")

↓

console.log("4")

↓

f1()

┌──────────────┐
│ f1 EC        │
├──────────────┤
│ Global EC    │
└──────────────┘

↓

Hello

↓

f1 EC removed

↓

console.log("5")

↓

console.log("6")

↓

f1()

┌──────────────┐
│ f1 EC        │
├──────────────┤
│ Global EC    │
└──────────────┘

↓

Hello

↓

f1 EC removed

↓

Global EC removed

Stack Empty


Final Output: -
1
2
Hello
3
4
Hello
5
6
Hello

imp  point: Global Execution Context sirf ek baar banta hai jab program start hota hai. Lekin har baar f1() call hone par ek naya Function Execution Context (EC/FEC) banta hai, function execute karta hai, aur execution complete hote hi stack se remove ho jata hai. Isi wajah se Hello har function call par print hota hai.





//_______________-######### how to use of asynchronous js in dpeth ########_______________________

Asynchronous JavaScript (Async JS) is one of the most important concepts in JavaScript because JavaScript is single-threaded, but it can still perform tasks like API calls, timers, and file operations without blocking the main thread.



1. Why Do We Need Asynchronous JavaScript?_______________________________________________________

Imafine code:

console.log("Start");

for (let i = 0; i < 10000000000; i++) {}

console.log("End");

Output is : --

Start
(wait for several seconds)
End


JavaScript is single-threaded.
It has only one Call Stack, so it executes one task at a time.

The loop blocks the Call Stack.

During that time,..................
No button click works.
No API call response is processed.
No timer executes.

Everything waits.

This is called Blocking Code.

2. Synchronous JavaScript_______________________________________________________________--

Everything executes line by line.

console.log("A");
console.log("B");
console.log("C");

Output

A
B
C


Execution:------------------------------------------------
Call Stack_________________________________________

Push A
Execute
Pop

Push B
Execute
Pop

Push C
Execute
Pop


3. Problem with Synchronous Code

Suppose fetching data from a server takes 5 seconds.

If JavaScript waited,

Open Website

↓

Wait 5 seconds

↓

Then show page
Terrible user experience.


Instead JavaScript says  ---->   "I'll continue executing other code while waiting."
That's asynchronous programming.

4. What is Asynchronous JavaScript?_________________________________________________________

Asynchronous means --------------->  Don't stop execution.
Continue running other code while waiting for a task to complete.

Example

console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");

Output:---
Start
End
Hello

see that-
Even though setTimeout appears before "End",
Hello prints later.

5. How Does JavaScript Do This?______________________________________________________

JavaScript itself has only

Memory
↓
Call Stack

It does not contain timers or network APIs.

The browser (or Node.js) provides those features.

In a browser, the environment looks like this:

               Browser

   ┌────────────────────────────┐
   │ Web APIs                   │
   │                            │
   │ setTimeout                 │
   │ fetch                      │
   │ DOM Events                 │
   │ localStorage               │
   └────────────────────────────┘

              ↑

        Callback Queue

              ↑

         Event Loop

              ↑

        Call Stack

*/