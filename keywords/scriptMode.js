// without strict mode


//i =0;
//console.log(i)  // this is oldest way in the js
                // if you written this code (without keyword ka variable) at under any funct then ye variable global variable ban jata hai 
                // no error print "0

                

    // ############    with Script mode - using string literals
 
//"use strict"

//i=0;
//console.log(i);  // gives error now ......i=0;....ReferenceError: i is not defined
                 // In Strict Mode, you dont create the variable without keyword , must be use any defined keyword(let, var, const)

//let i=0;
//console.log(i); // now no error  bcz ysing string literals "use strict"

/*
"use strict"

let i=0;
console.log(i);

function f1(){

    a=0;
    console.log(a);
}

f1();                // show the error due to strict mode is applicable whole code   ....ReferenceError: a is not defined 
 */


// struct mode application only function..............................

/*
i=0;
console.log(i);    // print "0" no error bcz strict mode is not applicable at globally


function f2(){

    "use strict"

     let a=0;
     console.log(a);  // print "0" no error bcz strict mode is  applicable at only one only function f2().
}

f2();

*/


/*
//##############3 using struct mode duplication is not allow

function f2(x,y){

    console.log(x,y);
}

f2(3,4)  // output is 3 4


// if we pass the same arguments

function f1(x,x){

    console.log(x,x);
}

f1(3,4);  // output is " 4 4" duplicates value
*/


// if we using strict mode..............

"use strict"

function f1(x,x){

    console.log(x,x);
}

f1(3,4);    // show the error ........SyntaxError: Duplicate parameter name not allowed in this context

