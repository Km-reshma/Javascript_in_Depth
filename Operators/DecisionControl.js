//____________________________ ######### Control Statement ##########_____________________________________
/* 
Control statement in js are the instruction that determine the flow of execution  of Code, 
Wheter it should be executed, skipped or repeated.

1. Decision Control statements
2. Iterative control statements
3. Jump statements

// _______________________####### Decision Control Statement #########_____________________________________

Decision control statemnet are -----
1. if 
2. if else
3. if else if (elseif ladder)
4. ?. (ternary)
5. switch 


//___________________################      if      ###############________________________________________________________

let x=25;
if(x>0){
    console.log("positive");
}
if(x<0){
    console.log("negative")
}


//___________________################      if-else     ###############________________________________________________________

let x=25;
if(x>0){
    console.log("positive");
}
else{
    console.log("negative");
}


//___________________################      ?. ternary      ###############____________________________

// Syntax: comdition ? Expression1 : Epression2

let x=-25;
(x > 0) ? console.log("positive") : console.log("negative") ;  // negative

//or 

console.log((x > 0) ? "positive" : "negative");       // negative


//___________________################      if-else-if (ladder)      ###############____________________________

let marks=78;
if(marks>=90){
    console.log("Grade-A");
}
else if(marks>=75){
    console.log("Grade-B");
}
else{
    console.log("Grade-C"); 
}

//output : Garade-B

*/

//___________________################      Switch      ###############____________________________
