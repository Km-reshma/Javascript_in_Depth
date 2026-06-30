                 // ########### Data Types####################

//Primitive Data Types: Includes Number, String, Boolean, Null, Undefined, BigInt, and Symbol.
//Non-Primitive Data Types: Includes Object, Array, and Function used to store complex data.             


//1. Number: Represents numeric values (integers and decimals).
 let n =10;
 console.log(n);
 console.log(typeof(n));
 let pi=3.14;
 console.log(pi);
 console.log(typeof(pi));

//2.String: Represents text enclosed in single or double quotes.
let s = "Hello, World!";
console.log(s);
console.log(typeof(s));

//3.Boolean: Represents a logical value (true or false).
let bool= true;
console.log(bool);
console.log(typeof(bool));

//4.Undefined: A variable that has been declared but not assigned a value.

let notAssigned;
console.log(notAssigned);
console.log(typeof(notAssigned));

let x =undefined;
console.log(x);
console.log(typeof(x));

var y=undefined;
console.log(y);
console.log(typeof(y));

//5.Null: Represents an intentional absence of any value.
let empty = null;
console.log(empty);
console.log(typeof(empty)); // it is a null datatype but  , showing only "objet" data type
                            //bcz it is a bug in language that has been since the begining and kept fot backward compatability.

//6.Symbol: Represents unique and immutable values, often used as object keys.
let sym = Symbol('unique');
console.log(typeof(sym)); //symbol

//7.BigInt: Represents integers larger than Number.MAX_SAFE_INTEGER.
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof(bigNumber)); //bigint

/*


     //######### Non-Primitive DataType #################

//1. object   .....................................

let x = {
    name:"Arun",
    age:35
}

console.log(x);  // object type data and ouput { name: 'Arun', age: 35 }
console.log(typeof(x)); // output - object  maean object type data type

//2. Array................................................

let arr =[10,30,40];
console.log(arr);
console.log(typeof(arr));           //but here show the data types is "object"


//3. functions.............................................

function f1(){
    let y=44;
    console.log(y);
}
f1();
console.log(f1);
console.log(typeof(f1));            // data type show as the 'function'
*/