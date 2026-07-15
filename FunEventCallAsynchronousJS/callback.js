// __________________________###### CallBack Function ########___________________________________________

//lets take and example-

function f1(){
    console.log("Hello ");
    
}
function f2(callback){
    callback();             // f1= call back 
}
f2(f1);                    // JavaScript kehta hai ki call back function f1 which is pass an arguement as f2 like f2(f1):     callback = f1