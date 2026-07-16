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



 _________________________                                    Brows
|                         |                                 __________________
|                         |                                |                  |
|                         |                                |                  |
|                         |                                |                  |
|                         |                                --------------------
|                         |                                  |      |        |
|                         |                                  |      |        |
                                                      _________   ________   _________
                                                      | ----  |   | ---- |   |       |
                                line by line---       | ----  |   |      |   |
                                 code execution       | ----  |   |      |   |       |
                                 (Synchronous)        | ----  |   |      |   |       |
                                                      ---------   --------   ---------
                                                      