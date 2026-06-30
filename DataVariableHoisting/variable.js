/*var a = 6
let b = 5
const c= 7
d =8*/

                      //#############var and without keyword vaarible###############
/*function f1()
{
    var x=10;
    y=20;

    console.log(x,y);  // print the o/p as well as x and y =10,20 when we invoke  the function call like(f1())
}                      // due to both are oin the same local scope

f1();
console.log(y);       //here y as treat as the global scope without its doest not define any keyword.
console.log(x,y);  */   // here error is occur due to x is not defined ->means var key jab kisi function ke andar banta hai to uska scope local hota hai (function ke andar tak)

       
                //#################### const keyword   ####################3

/*// must declration of const keyword
function f1()
{
    let x;
    console.log(x);  //SyntaxError: Missing initializer in const declaration(you must initialized const keyword x)
                     //but var mein koi error nahi aayega only show the value of x is undefined
}                    //ReferenceError: x is not defined in without keyword
                     //but var mein koi error nahi aayega only show the value of x is undefined
f1();  */


/*
function f2()
{
    const x=10;
    console.log(x);
}

f2();


// ######## fixed value cannot change the value of const variable

function f3()
{
    const y=10;
    y=12;
    console.log(y);  ypeError: Assignment to constant variable. doest not possible
}
f3();
*/


             //###################### var  keyword and let  keyword  differences ##################

 /*1. scope based  :
    var : function scope variable
    let : block scope variable    */

    /*function f1()
    {

       {
             var x=10;
             let y=20;
             console.log(x,y);

        }

        console.log(x);  var keyword is function scope , value can be access ouside the block but within the funtion block
        console.log(x,y); ReferenceError: y is not defined due let keyword only block scope doest not access the variable outside the block

    }
    f1();   */
    
    
/*
2. Re-declaration:
    var : possible this is the major 
    let : not possible  within the same scope
     

 var x=10;
 var x=20;
 console.log(x); //output is 20  
 
 
 let y=20;
 let y=40;
 console.log(y); //SyntaxError: Identifier 'y' has already been declared 
 */

 //var keyword as the property of  predefined object is called window  var keyword jo hai wo always global scope ->window mein show hoga
 //while let keyword is not associated with window object  : let window mein show nahi hoga woh script scope mein show hoga 
 // but both are the global scope


                  //################ Hoisting #######################

  //variable hoisting
 /* 
  function f1(){
    console.log(x);
    var x =10;
  }
  f1();

  //internally javascript do the above code 
  function f1(){

    var x ;
    console.log(x);
    
  }
  f1();
  */


 // means Hoisting in JavaScript is the behavior where declarations (not initializations) are conceptually moved to the top of their scope before the code executes.

  //It doesn't actually move the code. Instead, during the creation phase of execution, JavaScript allocates memory for variables and functions.

//jis scope ke under aap us variable ko use kar rahe ho, uska declaration( not initialisation) ko uske bad likha hai ->usi scope mein upar pahocha dete hai before execution.

//variable declaration above the excecution code(like console), but not assign the value of that variable.
//then no error show but value is show is undefined in var and let is show value is unavailable .
/*
function f1(){

    var x=10;
    console.log(x);



}
f1();
*/

//f1() is declare(invoke) above the function then...

// f1();
// var f1 = function(){

//     var x=10;
//     console.log(x);  // show output - f1 is not function while invoke bcz f1 as the declare as the variable 

// }


var f1 = function f2(){
    var x =10;
    console.log(x);/// this is call function expression.
}
console.log(f2());
//error f2 is not defined

