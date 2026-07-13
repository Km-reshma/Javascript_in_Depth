/*
//____________________#### Iterative control statement ###############________________________________________


In JavaScript, iterative statements (loops) allow you to execute a block of code repeatedly until a specified condition evaluates to false
Iterative statements (loops) are used to execute a block of code repeatedly until a specified condition is met.

Here’s a complete overview with examples:

There are 5 mainly loops used in javacript:
1. while loops
2. do-while loops
3. for loops
4. for in loops
5. for of loops

One of the most common examples is the " for loop " , which is widely used for iterating over arrays, ranges, or performing repetitive tasks.



//______________________ ########## while loop #############_________________________________________________

A while loop in JavaScript repeatedly executes a block of code as long as a specified condition evaluates to true.
To avoid infinite loops. Ensure the condition will become false.  
If you forget to increment i, the loop will run indefinitely and crash your browser.

let i =1;



*/

/*
//______________################ Break Statement #################___________________________________________

// break exits the nearest enclosing loop or switch
//control exits kar deta means loop 

let arr = [11,27,89,62, 77, 81.26];
let i=0;

while(i<=arr.length){
    
    console.log(arr[i]);

    if(arr[i]%2==0){               // 11 27 89 62 then breakgit 
        break;                      // jb even number then ruk jana means us block se nikle jana
    }

    i++;
}
*/

/*
//_________________________######### Continue Statement ###################_____________________________________


//Skip the current iteration and moves to the next one .

let arr = [11,27,89,62, 77, 81,26];

for( let i=0;i<=arr.length-1; i++){

    if(arr[i]%2==0){
        continue;              // even aaye usko skip kr ke continue ke do 
    }

    console.log(arr[i]);       // 11 22 89 77 81 
}

*/



// ________________________######### Return Statement #########__________________________________________


// return statement     - are used inside the functions to return a value and exit the functions.

//syntax
function f1(){
    return "something" ;
}
console.log(f1());          // something

//example- 

function add(a,b){
    return a+b;
}
console.log(add(4,5));       //9


