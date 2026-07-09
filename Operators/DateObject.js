
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
console.log(d3);