/*
// ### typeof Operator ########__________________________________________________________
//typeof a returns the data type of the variable a as a string.

let a = "Hello Reshma";
console.log(typeof a);             

// ###### instanceof operator___________________________________________________________
//instanceof is also a type operator in JavaScript. It checks whether an object is an instance of a specific constructor or class.

let arr = [1, 2, 3];

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
console.log(arr instanceof Date);   // false

//array is a specified typed of Object

// ############## Array.isArray() #############____________________________________________________________
//Array.isArray() is a built-in JavaScript method, not an operator. It checks whether a value is an array.

console.log(Array.isArray(arr));   // true


// ############### " in " operator ##############________________________________________________________
//"in" is a relational operator in JavaScript. It checks whether a property exists in an object.

let p1={
    name:"Reshma",
    age:"24"
    
};
console.log(p1);
console.log("name" in p1);  // true
console.log("city" in p1);  // false



// ########## delete operators ##################______________________________________________________
// "delete " is a unary operator in JavaScript. It removes a property from an object.
// delete op in object..............................
let p1={
    name:"Reshma",
    age:"24"
    
};

console.log(p1);    //{ name: 'Reshma', age: '24' }
delete p1.age;
console.log(p1);    // { name: 'Reshma' }

// delete  op in array................................
let a =[10,20,30];
delete a[0];
console.log(a);      // [ <1 empty item>, 20, 30 ] this is posssible in js not other language;



// ########3 Ternary Operator(conditional ) ############_____________________________________________
//The ternary operator (?:) is a conditional operator in JavaScript. It is a shorthand for if...else.
//Syntax:......................................
//condition ? expression1 : expression2;
//if condition is true goes to exp1 else goes to exp2;

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);                                // Adult


// ############ comma (,) operator ################___________________________________________________________
//The comma operator (,) evaluates multiple expressions(or elements) from left to right and returns the value of the last expression(or last element).
//the comma operator evaluates all expressions, but only the last expression's value is returned. It is used rarely in JavaScript.

let a =(1,2,3);
console.log(a);                                //3

let b = (2 + 3, 4 + 5);
console.log(b);                               // 9
*/

// ################## Spread Operators (...iterable) at array ###########_____________________________________________________________
//The spread operator (...) expands an iterable (such as an array or string) or an object into individual elements or properties.

/*   #########3 without spread _______________________________________________________________________-
a ans b same ek array ko hi refer kar rha hai  or 2 refer refer banega.
Haan, bilkul. Is code mein a aur b dono same array ko refer kar rahe hain.

let a = [10, 20, 30];
let b = a;
console.log(b);                   // [10, 20, 30]

Memory mein ye hota hai:
Array: [10, 20, 30]           
        │        │
        a        b

a ek array ko point karta hai.
b = a karne se naya array nahi banta.
Sirf ek aur reference (b) usi array ko point karne lagta hai.

Isliye agar b se array change karoge:

b[0] = 100;
console.log(a);                      //   [100, 20, 30]
console.log(b);                      //   [100, 20, 30]

Dono mein change dikhega, kyunki array ek hi hai, references do hain.


//____________________________________________________________________________________________


//Agar alag (copy) array banana ho, to spread operator use karo:

let a = [10, 20, 30];
let b = [...a];

console.log(a);                 // [10, 20, 30]
console.log(b);                 // [10, 20, 30]

//Yahan a aur b do alag arrays hain.

//if we change in b doest not any changes happens in a  , so a nad we both are two different Array.

b[0] = 100;

console.log(a);                // [10, 20, 30]
console.log(b);                // [100, 20, 30]



// #########   Spread Operators (...iterable) at "Array" ###########_____________________________________________________________

function f1(x, y, z) {
    return (x + y + z);
}

let a = [10, 20, 30];

console.log(f1(a[0], a[1], a[2]));               // 60

//instead of written  console.log(f1(a[0], a[1], a[2])); entire this line we use spread operator like "f1(...a) "

console.log(f1(...a));                            // 60

// examplle 3___________________________________-__________________________________________

let p1={
    name:"Reshma",
    age:"24"  
};
//we want to p1 int0 p2

let p2={
    ...p1,
    city: "Noida" 

};

console.log(p1);         //  { name: 'Reshma', age: '24' }

console.log(p2);         //   { name: 'Reshma', age: '24', city: 'Noida' }
*/
    

//########( ?? ) Nullish Coalescing Operator ######### _____________________________________________________
//Agar left side ki value null ya undefined hai, to right side ki value use karo. Warna left side ki value hi use karo.
/*
let name = null;
console.log(name ?? "Guest");    // Guest

explanation : Kyuki name ki value null hai, isliye "Guest" print hua.

*/

/*
//without nullish operator-..........................

let a =135;
let b=" Anything write";
let c;
if(a === null || a === undefined){
    c=b;
}
else{
    c=a;
}

console.log(c);         // out put is 135;
console.log(c);         // agar  a = null ; then c meib b ki valuue print hoti "Anything Written"


// with nullish _________________________________________

let a =null;
let b=" Anything write";
let c= a ?? b;
console.log(c)                   //  output: Anything write
*/



//  ######### optional chain (?.) operator ###############_____________________________________________________________

// The ?. operator, called the optional chaining operator, is used in programming (like JavaScript) to safely access properties of an object without causing errors if something is null or undefined.
//Normally, agar aap kisi object ka property check karte ho aur wo object null ya undefined ho, toh error aata hai.
//?. lagane se, agar object nahi hai toh error nahi aayega, bas undefined return karega.

//without ?. operator ............

let p1={
    name :"Alice",
    age: 45,
    address: {
        firstline: "A-201 Tower A",
        secondLine: "Sector-8",
        city:" Laxmi Nagar",
        State: "Delhi",
        Pincode: "1100060",
    },
    greet(){
        return "Hello";
    } 
};
//console.log(p1);              // whole print p1 object 
//console.log(p1.address);      // only addresse
//console.log(p1.greet());      // Hello 
//console.log(p1.address.city);  // Laxmi Nagar


// if we accese the property of an object which has not so gives error without this ?. operator 

//console.log(p1.address.mobile.surname);  //TypeError: Cannot read properties of undefined (reading 'surname') 

console.log(p1.address?.mobile?.surname);  // no erroe gives undefined