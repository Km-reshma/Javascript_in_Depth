/*

let a = 12 &  10;
console.log(a);    // output is 8 

let b = 12 | 10;
console.log(b); 

let c = 12 ^ 10;
console.log(c); 


why 8 is the output..............

bcz we convert all above tw number into binary and perform "&" operator

Bitwise operators in JavaScript treat their operands as a set of 32-bit binary digits (zeros and ones) and perform operations at the bit level.

// And operator (&)....................................

12 = 00000000 00000000 00000000 00001100
10 = 00000000 00000000 00000000 00001010
--------------------------------------------- perform & operations
8 =  00000000 00000000 00000000 00001000

// or operator(|).............................................................

12 = 00000000 00000000 00000000 00001100
10 = 00000000 00000000 00000000 00001010
--------------------------------------------- perform | operations
14 = 00000000 00000000 00000000 00001110


//Xor operator (^)...........................................................

12 = 00000000 00000000 00000000 00001100
10 = 00000000 00000000 00000000 00001010
--------------------------------------------- perform & operations
6 =  00000000 00000000 00000000 00000110


1. Bitwise AND (&)...........................
A	B	A & B
0	0	0
0	1	0
1	0	0
1	1	1

2. Bitwise OR (|)..............................
A	B	A | B
0	0	0
0	1	1
1	0	1
1	1	1

3. Bitwise XOR (^)................................
A	B	A ^ B
0	0	0
0	1	1
1	0	1
1	1	0

*/


/*
//  ############# bit wise not operator ###############

#### First Method -
Unary operator — flips all bits (including the sign bit).

" Formula: ~x = -(x + 1)  "

#### second method - 

1. 1st ~(not) nikalo means opposite 0-->1 and 1-->0
2. then 2's complement nikalo 



let n=6;
console.log(~n);   // -7   "explanation  -(n+1)""     or  " -(6+1) = -7 "

*/

/*

//  ########## Left Shift operator #######//////////

JavaScript ka Left Shift Operator (<<) ek bitwise operator hai. Ye number ke binary bits ko left side shift karta hai.

Syntax:
" result = value << shiftCount;  "

1. value → jis number ko shift karna hai.
2. shiftCount → kitni positions left shift karni hain.


JavaScript bitwise operators actually works on 32-bit binary numbers .

What is Left Shift

When we apply the left shift ...............

1. Sare bits left move karte hain.
2. Right side par 0 add hota hai.
3. Left se jo bit bahar nikalti hai wo discard ho jati hai.

Example:.........................
console.log(5 << 1);

5 ka binary     =        00000101
Left shift by 1 =        00001010
-------------------------------------------
Ab decimal mein =             10

Output -----> 10

Har ek left shift ka matlab hota hai 2 se multiply.

Example
1. 5 << 1
Means ,  5 * 2 = 10

2. 5 << 2
Means,   5 * 4 = 20

3. 5 << 3
Means,   5 * 8 = 40

Formula

"       x << n = x * (2ⁿ)        "


10                    =     00000000 00000000 00000000 00001010
1 left bit  shift     =     00000000 00000000 00000000 0001010_      //always zero placed so "00010100"=




let a=10<<1;
console.log(a);    // 20     "x*2=twice of x"   "10*2=20"

let b=10<<2;
console.log(b);    // 40

let c=10<<3;
console.log(c);   //80

let d=10<<4;
console.log(d);    // 160

*/

/*
// ###### right sgift operators--------------------------------------------------------------------

let a=10>>1;
console.log(a)    // 5

let b=10>>2;
console.log(b);    // 2

let c=10>>3;
console.log(c);   //1

let d=10>>4;
console.log(d);    // 0

let e=10>>6;
console.log(e);    // 0


Right Shift Operator (>>) in JavaScript ..................

Right Shift (>>) ek bitwise operator hai jo number ke bits ko right side shift karta hai.

Syntax:-------------------
result = value >> shiftCount;
value → jis number ko shift karna hai.
shiftCount → kitni positions right shift karni hain.

Example ..............
console.log(8 >> 1);

Binary of 8:               00001000

Right shift by 1:          00000100              //4

Output:   4

*/

/*
//  ############# binary represntation of a number #########------------------------------

let a= 25;
console.log(a);       //25    


JavavaScript, the toString() method is used to convert a value (number, array, date, object, etc.) into its string representation
"  value.toString([radix])  "
radix (optional) — For numbers, specifies the base (2 to 36) for conversion.
Example: num.toString(2) → binary string.

*/
let b  = 255;
console.log(b.toString());    // "255" string
console.log(b.toString(16));  // "ff" (hexadecimal)
console.log(b.toString(2));   // "11111111" (binary)
console.log(b.toString(10))   // 255  (decimal)