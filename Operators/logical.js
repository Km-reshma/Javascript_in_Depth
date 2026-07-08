        //  ########Logical Operators   ###################
/*
1. && (Logical AND) Operator:
The && operator returns true if both operands are true;

2. || (Logical OR) Operator:
The || operator returns true if at least one of the operands is true;

3. ! (Logical NOT) Operator:
The ! operator returns true if the operand is false, and false if the operand is true.



          //############# 1.....Logical Not (!) Operators #####################


let a=5;
let b=!a;
console.log(a,b);    // out put : 5 false because a is 5 which is true and !a will return false
                     // a is non zero number so it is true and !a will return false bcz a is true and !a is false

                     
let a=0;
let b=!a;
console.log(a,b)


let understand ---------

!true = false
!false =true

Not operator operand  means (! operand) ----------------->

1. if operand is Boolean the return according to boolean type true or false

2. if operand is Number then
     a. Number is Non- Zero  gives "True"
     b. Number is Zero  gives "False"

3. if operand is String then
     a. String is Non-Empty  gives "True"
     b. String  is Empty  gives "False"



let a= "Reshma";      // non empty string
let b=!a;
console.log(a,b);    // Reshma False


let c= "";           // emoty String
let d=!c;
console.log(c,d);    // space then true


let a= undefined;     
let b=!a;
console.log(a,b);     // undefined true 


let a= NaN;     
let b=!a;
console.log(a,b);     // NaN TRue


let a= null;     
let b=!a;
console.log(a,b);     // null True


// undfined , null, NaN, Zero, Empty STring all these treat as the "False".

*/


//              ############## AND(&&), OR(||) Operators ####################

/*
1. AND (&&)
Returns true only if both operands are truthy.
Short-circuits: If the first operand is falsy, it returns that value without checking the second.
truth table -

expression 1      expression 2      Result      
 True              True              True
 False             True              False
 False             False             False
 True              Fasle             False

console.log(true && true);   // true
console.log(true && false);  // false
console.log(5 > 3 && 2 < 4); // true
console.log(0 && "Hello");   // 0 (falsy, stops here)

2. 2. OR (||)
Returns true if at least one operand is truthy.
Short-circuits: If the first operand is truthy, it returns that value without checking the second.

xpression 1      expression 2      Result      
 True              True              True
 False             True              True
 False             False             False
 True              Fasle             True


console.log(true || false);  // true
console.log(false || false); // false
console.log(5 > 10 || 2 < 4); // true
console.log("Hi" || "Hello"); // "Hi" (truthy, stops here)


let a = 5;
let b = 6;
let c = a>0 && b>0;
console.log(c);             // output is "True " bcz both condition is true .


let a = 5;
let b = 6;
let c = a<0 && b>0;
console.log(c);              // // output is "False " bcz fist exp is false and second is true .



let a = 5;
let b = 6;
let c = a<0 && ++b;
console.log(c);                // false if first condition is failed then not check the second expression even if the second statement is True.
console.log(a,b,c);            // 5 6 false    , b mein koi increment hoga hi nahi



let a = 5;
let b = 6;
let c = a>0 && ++b;                
console.log(c, b);                // 7 7 

//  " If AND / OR Operator  --  two expression  first is true and second is also true but output depend the type of second expression 
// we can see the above example c return the numeric value "7" because fisrt condition is true(boolean) but secon expression is numeric.




let a = 5;
let b = 6;
let c = 0 && 5;                
console.log(c);           // result is 0 because 0 is false then not go to next exp so return first experssion "0"



let a = 5;
let b = 6;
let c = 2 && 5;                
console.log(c);          // result is 5 because 2 is True(non zero) then go to next exp so return first experssion "5"
                        // agar first coonditon trye hai then second condition bhi true hai to second con ka ans return karenge
          
                        
*/

let a = 5;
let b = 6;
let c = 2 || null;                
console.log(c);       // ouput is 2 