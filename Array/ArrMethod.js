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

Saath hi, pop() jo element remove hua hai, usko return bhi karta hai. 


let animal = ["cow", "horse", "dog", "cat", "Lion", "tiger"];
console.log(animal.pop());                                      // output is : tiger , bcz jo element remove hua hai usko bhi return krta hai dikhata hai ki konsa element pop hua hai 
animal.pop();
console.log(animal);                                           //[ 'cow', 'horse', 'dog', 'cat' ]


//Is line mein do kaam ek saath ho rahe hain.
//1. Ye array ke end mein "sheep" add karega. 
//2. new array ki length return karega 
console.log(animal.push("sheep"));                             // 5 */


/*
3. splice() method _______________________________________________________________________________________________________

splice() method is used for Remove multiple items from the end of an array.

splice() JavaScript ka sabse powerful array method hai.
The splice() method removes or replaces the element from the array.

Iska use 3 kaam ke liye hota hai: all in one method.

✅ Element replace karna
✅ Element  remove karna
✅ Element add karna

Aur ye original array ko modify karta hai.

syntax : array.splice(startIndex, deleteCount, item1, item2, ...);

startIndex → Kahan se operation start karna hai.
deleteCount → Kitne elements remove karne hain.
item1, item2... → Jo naye elements add karne hain (optional).

 ######### 1. Remove element by using splice() method  #############------------------------------------------------

 let a =[10,20,30,40,50];
 console.log(a);                                              //[ 10, 20, 30, 40, 50 ]

 a.splice(2,2);                                               // [ 10, 20, 50 ]
 console.log(a);                                              


 Explanation :

Index : 0   1   2   3   4
Value : 10  20  30  40  50

iska mtlb :   a.splice(2,2);

Start index = 2         // 30   start                             (start from index 2)           
Remove = 2 elements     // 30, 40 remove                          (remove 2 element from start index)
 

########## 2. Add Element using splice() method  ------------------------------------------------------


let a = [10,20,50];
console.log(a);                                             //[ 10, 20, 50]

a.splice(2, 0, 30, 40);
console.log(a);                                            // [ 10, 20, 30, 40, 50 ]

Explanation: 

splice(2,0,30,40):   

-> Index 2 se start karo.
-> 0 elements delete karo.
-> 30 aur 40 insert kar do.



//################# Replace element by using splice() method----------------------------------------------------

let a =[10,20,30,40,50];
console.log(a);                            //[ 10, 20, 30, 40, 50 ] 

a.splice(1,1,100);                         // [ 10, 100, 30, 40, 50 ]
console.log(a);

a.splice(2,1,200);                         // [ 10, 100, 200, 40, 50 ]
console.log(a);

Exaplanation:

a.splice(1,1,100);

index 1 par value hai:    20

Usko remove kiya aur usi jagah   100   add kar diya.

*/