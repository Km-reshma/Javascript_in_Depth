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