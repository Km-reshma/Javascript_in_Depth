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


// break exits the nearest enclosing loop or switch
//control exits kar deta means loop 

let arr = [11,27,89,62, 77, 81.26];
let i=0;

while(i<=arr.length){
    
    console.log(i);

    if(arr[i]%2==0){               // 0 1 2 3 then break
        break;
    }

    i++;
}


