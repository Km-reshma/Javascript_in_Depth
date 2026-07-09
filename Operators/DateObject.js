
// ####### Date Object #########____________________________________________________________________________ 

//A Date object is a built-in object in javascriptt programming language used to represent a specific date and time.
// It stores or add the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (the Unix epoch).

/* In Date oBject -
Months are 0-based:
0 = January
1 = February
...
11 = December   */

//Jab bhi string se Date object banao, to hamesha ISO 8601 format (YYYY-MM-DD ya YYYY-MM-DDTHH:mm:ssZ) use karo. Isse different browsers aur environments me date parsing ka behavior consistent rehta hai aur unexpected bugs se bach sakte ho.
// use like -----" const date = new Date("2026-07-09"); "
// avoid like --------  "const date = new Date("07/09/2026");" "  or  "const date = new Date("9 Jul 2026");"
 
// date handle karne ke liye date ka object create karna hota hai.............

let d1 = new Date();
console.log(d1);          // output : 2026-07-09T11:17:38.964Z     
                          // this type show the global time not according to indian standard show 5 hour 30 min before as according to indian ti
                        

// ###### New Type create a consturctor or by usng string format and standar d type __________________________

let d2 =new Date('2026-06-09');
console.log(d2)              //2026-06-09T00:00:00.000Z
                             // time is 00 00 00 bcz we pass the arguement for date not time 

                            
//######## Another way ######_______________________________________________________________________________

let d3 = new Date(2026,6,9);
console.log(d3);               // 2026-07-08T18:30:00.000Z// by defualt consider karta hai 


//______________________________________________________________________________________________________________

//                 ######## Get Method in Date Object ###########...........................................

/* 
| Method                | Kya return karta hai                                   |
_______________________________________________________________________________

  `getDate()`           | Month ki date (1–31)                                   |
| `getDay()`            | Week ka day (0–6), **0 = Sunday**                      |
| `getFullYear()`       | Full year (e.g., 2026)                                 |
| `getMonth()`          | Month (0–11), **0 = January**                          |
| `getHours()`          | Hours (0–23)                                           |
| `getMinutes()`        | Minutes (0–59)                                         |
| `getSeconds()`        | Seconds (0–59)                                         |
| `getMilliseconds()`   | Milliseconds (0–999)                                   |
| `getTime()`           | 1 Jan 1970 se ab tak ke milliseconds (timestamp)       |
| `getTimezoneOffset()` | UTC aur local time ke beech ka difference (minutes me) |
__________________________________________________________________________________

console.log(d1);                  //2026-07-09T11:38:26.135Z    5 hour and 30 min pahle ka time dikha rha hai bcz global time

console.log(d1.getFullYear());   // 2026
console.log(d1.getMonth());      // 6        bcz start 0-jan and end 11-dec
console.log(d1.getDay());        //4         similar 0- sunday and 6- saturday 
console.log(d1.getDate());       // 9
console.log(d1.getTime());        // 1783597106135  total milisec from i jan 1970 se ab tak ke miliseconds
console.log(d1.getHours());       //17
console.log(d1.getMinutes());     //8
console.log(d1.getSeconds());     //26
console.log(d1.getMonth());       //6



// ##### we also find all these time anither waylike__________________________________________________

console.log(d1.getTime());               //output: 1783597862316        // get the time in miliseconds by default
console.log(d1.getTime()/1000);          //output: 1783597862.316       // divide by 1000 to get the time in seconds
console.log(d1.getTime()/1000/60);       //output: 29726631.0386        //divide by 60 to get the time in minutes
console.log(d1.getTime()/1000/60/60);    //output: 495443.85064333334   // divide by 60 to get the time in hours
console.log(d1.getTime()/1000/60/60/24); //output: 20643.493776805557   // divide by 24 to get the time in days

*/


//______________________________________________________________________________________________________________________________

// #### Value Set method in Date Object #############----------------------------------------------------
//JavaScript ke Date object me set methods date aur time ki values ko modify (change) karne ke liye use hote hain.


/*
Local Time set Methods_
__________________________________________________________________
| Method              | Kya set karta hai                         |
| ------------------- | ----------------------------------------- |
| `setDate()`         | Month ki date (1–31)                      |
| `setFullYear()`     | Year                                      |
| `setMonth()`        | Month (0–11)                              |
| `setHours()`        | Hours (0–23)                              |
| `setMinutes()`      | Minutes (0–59)                            |
| `setSeconds()`      | Seconds (0–59)                            |
| `setMilliseconds()` | Milliseconds (0–999)                      |
| `setTime()          | Timestamp (milliseconds since 1 Jan 1970) |
___________________________________________________________________
*/

let d4 = new Date();

console.log(d4.setFullYear(2026));     // 1783598829741            Ye numbers milliseconds since 1 Jan 1970 hote hain.
console.log(d4.setMonth(6));           // 1783598829741
console.log(d4.setDate(1));            // 1782907629741
console.log(d4.setHours(10));          // 1782882429741
console.log(d4.setMinutes(30));        // 1782882009741
//console.log(d3.setDay());            // ye method work nahi krta bcz we cant change the actual date

console.log(d4);                       //2026-07-01 T05:00:09.741Z


// ___________________________________________________________________________________________________________

// ######## use toLocalString Method ######################..............................................
//JavaScript me toLocaleString() methods date, time, aur numbers ko user ki locale (language + region) ke format me display karne ke liye use hote hain.

console.log(d4.toLocaleString());       //   1/7/2026, 10:30:48 am

// we pass the obj4ect yo modified the format of date and time 

console.log(d4.toLocaleString('default'));      //   1/7/2026, 10:30:48 am

console.log(d4.toLocaleString('default',{
     
    weekday:'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'

}));             // Wednesday, 01 July 2026

//_______________________________________________________________________

//2.toLocaleDateString().............................................
//Sirf date return karta hai.

const date1 = new Date();
console.log(date1.toLocaleDateString());                     // 9/7/2026    

//_______________________________________________________________________________
//3. Locale specify kar sakte ho

const date2 = new Date();
console.log(date2.toLocaleDateString("en-IN"));                // 9/7/2026

const date8 = new Date();
console.log(date2.toLocaleDateString("en-Us"));                  //7/9/2026  forat change standard format

//____________________________________________________________________________
//4. toLocaleTimeString()
//Sirf time return karta hai.

const date3 = new Date();

console.log(date3.toLocaleTimeString());                    //6:04:21 pm


