// __________________________###### CallBack Function ########___________________________________________

//callback function is a type of function , which is passed an arguement to the another function.
//kisi or function ke andar as an arguement pass hota wahi wahi function callback hota hai.
// its execute jab tak main function apna task complete nahi kr leta.


//lets take and example-
/*
function f1(){
    console.log("Hello ");
    
}
function f2(callback){
    callback();             // f1= call back 
}
f2(f1);  */                  // JavaScript kehta hai ki call back function f1 which is pass an arguement as f2 like f2(f1):     callback = f1

//---------or 

/*
function f2(callback){
    callback();             // f1= call back 
}

f2(function () {                 // anonymous function ()
    console.log("Hello");
});
*/


/*
//____________Explanation how does it works_______________________________________________________


//Example-------------------

function f1() {
    console.log("Hello");
}

function f2(callback) {
    console.log("Inside f2");

    callback();
}

f2(f1);
*/


/*
Step 1: Functions Memory me store hote hain____________________________________________________

JavaScript sabse pehle dono functions ko memory me store karta hai.

Memory-

f1  ─────► Function
f2  ─────► Function

Abhi kuch execute nahi hua.



Step 2: Function call__________________________________________________________________________________________

f2(f1);

JavaScript dekhta hai:

f2(
   f1
)

remember:-------

Yahan  f1  likha hai,  f1()  nahi.

Matlab:---------

"Ye function le lo."

JavaScript internally aisa sochta hai:              callback = f1;

Memory:------------

callback
    │
    ▼
   f1 Function


Step 3: f2 ke andar aaye________________________________________________________________________

function f2(callback) {

    console.log("Inside f2");

    callback();

}

Pehle ye line chalegi:    bcz for this f2 (f1)

console.log("Inside f2");

Output:  Inside f2


Step 4: callback()____________________________________________________________________________

Ab JavaScript dekhta hai:

callback();

Usko pata hai:            callback = f1

To ye line automatically ban jati hai:            f1();


Step 5: f1 execute________________________________________________________________________________________

Ab f1() ke andar jata hai.

function f1() {
    console.log("Hello");
}

Output:   Hello

Final Output----------

Inside f2
Hello

Flow chart-

      f2(f1)

        │
        ▼
    callback = f1

        │
        ▼
     Inside f2

        │
        ▼
     callback()

        │
        ▼
      f1()

        │
        ▼
      Hello
*/
