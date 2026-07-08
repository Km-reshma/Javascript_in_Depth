let a = 12 &  10;
console.log(a);    // output is 8 

let b = 12 | 10;
console.log(b); 

let c = 12 ^ 10;
console.log(c); 

/*
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