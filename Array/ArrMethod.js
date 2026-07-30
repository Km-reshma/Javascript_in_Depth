/*
1. push() method _______________________________________________________________________________________

Push() method is used for Append an item to an array to the end.
push() JavaScript ka ek array method hai jo array ke end (last) mein ek ya ek se zyada elements add karta hai.

Syntax : "    array.push(element1, element2, ...);    "     
let a = [10, 20];
a.push(20);
a.push(30);
a.push(40,50,60)
console.log(a, "length of the Array is :" + a.length);         // output is : [10,20,20,30,40,50,60]  length of the Array is :7


1. pop() Method ______________________________________________________________________________________

pop() method is used for Remove the last item from an array.
pop() array ke last (end) se ek element remove karta hai.

Saath hi, pop() jo element remove hua hai, usko return bhi karta hai.  */


let animal = ["cow", "horse", "dog", "cat", "Lion", "tiger"];
console.log(animal.pop());                                      // output is : tiger , bcz jo element remove hua hai usko bhi return krta hai dikhata hai ki konsa element pop hua hai 
animal.pop();
console.log(animal);                                           //[ 'cow', 'horse', 'dog', 'cat' ]


//Is line mein do kaam ek saath ho rahe hain.
//1. Ye array ke end mein "sheep" add karega. 
//2. new array ki length return karega 
console.log(animal.push("sheep"));                             // 5