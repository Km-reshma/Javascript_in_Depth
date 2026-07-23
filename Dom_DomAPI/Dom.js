
//___________________________________ ########## Dom and Dom Api ########### ____________________________________
/*
DOM --> stands for Document Object Model.

It is the map of HTML page element(object).

It acts as a bridge between HTML and JavaScript, allowing JavaScript to read, modify, create, and delete HTML elements dynamically.

When a browser loads an HTML page, it doesn't directly work with the HTML text. Instead, it converts the HTML into a tree-like structure called the DOM Tree.

It is a programming interface for HTML and XML documents that represents the page as a tree of objects so that programming languages (like JavaScript) can read, manipulate, and update the document dynamically.

Document → The HTML or XML document loaded in the browser.
Object   → Every element, attribute, and piece of text is represented as an object.
Model    → The structured representation (tree) of the document.


Example DOM Tree for HTML:

Copy code-------------

<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
Tree representation:

//document structure

Document
 └── html
     ├── head
     │    └── title
     │         └── "My Page"
     └── body
          ├── h1
          │    └── "Hello"
          └── p
               └── "World"


DOM vs HTML Source---------------------------------------------------------------------------

HTML Source: Static text file written by the developer.
DOM: Live, in-memory object representation of the HTML after the browser parses it.

JavaScript manipulates the DOM, not the raw HTML file.



DOM API----------------------------------------------------------------------------

The DOM API is the set of interfaces, properties, and methods provided by the browser to interact with the DOM tree.

DOM API browser ke dwara provide ki gayi built-in JavaScript functions aur objects ka collection hai. In functions ko hum apne JavaScript program se call karte hain, aur inke through browser ke C++ me implement kiye gaye DOM engine ko access aur manipulate karte hain.

DOM API browser dwara provide ki gayi built-in methods aur properties ka collection hai. In methods ko JavaScript se call karke browser ke C++ me implement DOM tree ko access aur manipulate kiya jata hai.

DOM API JavaScript ka part nahi hai. Ye Web APIs ka hissa hai, jo browser provide karta hai. JavaScript sirf in APIs ko use (call) karti hai.


JavaScript Code
       │
       ▼
DOM API (document, Element, Node)
       │
       ▼
Browser Engine (C++ Implementation)
       │
       ▼
HTML DOM Tree


Main DOM Interfaces----------------------------------------------------------------------------

Document — Represents the whole page.
Element — Represents an HTML element.
Node — Base interface for all DOM nodes (elements, text, comments).
NodeList / HTMLCollection — Array-like collections of nodes.
EventTarget — Allows attaching event listeners.
*/




/*
let e = document.querySelector ("h1");        // document -ye ek global object hai jo current html page ko  represent karta hai , 
                                              // ye browser ke through provide hota hai 
console.log(e.textContent);                   // document → Poore HTML document ka object.
                                              //querySelector() → document object ki method.-this is a method , ye btata hai kis elemnt ko access karna hai 

                                              // output is : Hello Java Script   
                                              // h1 ka pura ka pura elemment ka text content console ho gya                                            //"h1" → CSS selector.
                                              //  document objet not run at " node " bcz it is object whic is provded by browser.
*/

// or-----------
// if we access or console the "tag name or element name "  as we use " e.tagName "

/*let e = document.querySelector("h1");

console.log(e.tagName);                   // output :  H1 ----- elemet or tag name access
console.log(e.textContent);               // output is :   Hello Java Script -  all content of h1 tag access
*/




// _______________########### Why we use Dom ##########_____________________________________
/*
1. Html ke element ko access karne ke liye               (getElementById, querySelector )

2. change the content of document dynamically            (innerText, textContent)
    like -
         e.textContent = " Hello Reshma "
         console.log(e.textConent);

3. Handles Event - suppose you create a  button and        (addEventListner);
you want to change ka color of the page , when user 
click the button , some event ir trigger is happen 
when click the button that is possible by dom and jsx.
** Button click karna - this a also an event.
                                                          
                                                          
4. create/ remove element                                 (appendChild, remove)


Working of DOM__________________________________________________________________________________
The DOM connects your webpage to JavaScript, allowing you to:

Access elements (like finding an <h1> tag).
Modify content (like changing the text of a <p> tag).
React to events (like a button click).
Create or remove elements dynamically.

*/










//_____________________ ############### DOM Methods #############______________________________

//1. Access or Selecting Elements ____________________________________________________________

//An element is the complete HTML object, including the opening tag, content, and closing tag.
//A tag is the HTML syntax used to define an element. It is written inside angle brackets (< >).


/*
(a).  document.getElemetById()

Selects or Retrieves an element by its unique id.
id is unique of each element so not use for all common element only for one. 


//example----------------

let a = document.getElementById("heading1");
console.log(a);

// output is : <h1 id = "heading1">  first Heading - Hello Java Script</h1>
*/


/*
(b). document.getElementsByTagName()_________________________________________________________________________

Selects all elements with a tag.
Returns all the collection of elements  

//Example------------

let b = document.getElementsByTagName("h1");

console.log(b);                   //HTMLCollection(2) [h1#heading1, h1, heading1: h1#heading1] 

console.log(b[0]);                // <h1 id = "heading1">  first Heading - Hello Java Script</h1>

console.log(b[1]);               // <h1> Secomd heading - This is a special course.</h1>
*/


/*
(c). document.getElementsByClassName()___________________________________________________________________

Selects all elements with a class name.
Returns a collection of elements with a specified class.
method retrieves all elements that share a given class name.

//Example-----------------

let c = document.getElementsByClassName(" c1 ");

console.log(c);               // output is : HTMLCollection(2) [p.c1, h2.c1]
*/


/*
(d). document.querySelector()_______________________________________________________________

Returns the first matching element.

//Example ----------


let d = document.querySelector("h1");

console.log(d);                // h1 id = "heading1">  first Heading - Hello Java Script</h1>
*/



/*
(e). querySelectorAll()_______________________________________________________________________________

Returns all elements matching a CSS selector.

//Example -----------------

let e = document.querySelectorAll("h1");

console.log(e);                    // output is : NodeList(2) [h1#heading1, h1]
*/




/*
2. difference between "html tag", "inner html", and "textContent" ____________________________________________

| HTML Tag                |  innerHTML                       |  textContent              |
| ----------------------- | -------------------------------- | ------------------------- |
| The actual HTML element | Gets/sets HTML inside an element | Gets/sets only plain text |
| Example: `<p></p>`      | Can include HTML tags            | Shows tags as text        |


(a). HTML Tag---------------------------------------------------------------------------------

An HTML tag is an element used to build a webpage.

Example----     
1. <h1>Hello</h1>
2. <p>This is a paragraph.</p>
3. <div></div>

Here:

<h1> is an HTML tag.
<p> is an HTML tag.
<div> is an HTML tag.


(b). innerHTML----------------------------------------------------------------------------------

innerHTML reads or changes everything inside an element, including HTML tags or inner html tag.

Example
<div id="box"></div>

<script>
document.getElementById("box").innerHTML = "<h2>Welcome</h2>";
</script>

The browser creates an actual <h2> element.

Output :    Welcome

The page becomes:-------------

<div id="box">
    <h2>Welcome</h2>
</div>



Another Example------------------
box.innerHTML = "<b>Hello</b>";

Output : Hello

Because <b> is treated as an HTML tag.

(c). textContent-------------------------------------------------------------------------------------

textContent adds or gets only plain text.
It does not interpret HTML tags.

Example---------------
box.textContent = "<b>Hello</b>";
Output : <b>Hello</b>

The browser displays the angle brackets and letters exactly as text.
*/


/*
a.  tag =HTML page me jo bhi likha hota hai, wo elements (tags) ke andar hota hai.____________________________________________

//Example -
<p>Hello</p>

<p> → Opening tag
Hello → Content
</p> → Closing tag

DOM browser me in tags ko objects bana deta hai.

b. innerHTML = html mein jitne bhi inner html tag honge woh bhi print hoge _____________________________________________
               Ye element ke andar ka poora HTML return karta hai.
            

              //Example : 
              //Html code --->  <h3 id = "heading3"><u>Hello we check inner html or textContent </u></h3>

            
              let box = document.getElementById("heading3");
              console.log(box.innerHTML);

              // output - <u>Hello we check inner html or textContent </u>

c. innerText = only tag ka context print hoga --> innerText Ye sirf screen par dikhne wala text deta hai.____________________________________

             console.log(box.innerText);

             // output : Hello we check inner html or textContent

d. textContent = Ye element ke andar ka saara text deta hai. ___________________________________________________
                 Element ke andar ka poora text, chahe hidden ho ya visible.   
              
                console.log(box.textContent);
                           
*/



/*
3. ________________ ##########  change the content dynamically ############______________________________________________

change the content of any cript dynamically witCh the help of javascript not in html.

(a). By Using ".textContent" :
    
//example : h1 tag ka content change karna hai jiski headinng "heading1" hai --------------

let h1 = document.getElementById("heading1");
h1.textContent = "This is first Heading - Hello JavaScript Change dynamically content";

//output at browser screen par ye dikhega : This is first Heading - Hello JavaScript Change dynamically content



//Exanple 2 . --------->   h1 tag ki sari headiing change krni without id  so we use --------" getelementByTagName("tagName") "______________________________


let headings = document.getElementsByTagName('h1');

headings[0].textContent = "This is first Heading - Hello JavaScript Change dynamically content";
headings[1].textContent = "This is a Second Heading - This is a special course for beginnner friendly students- dynamicaly change the haeding through the js ";

// output is on the browser screen :

// "This is first Heading - Hello JavaScript Change dynamically content"
// "This is a Second Heading - This is a special course for beginnner friendly students- dynamicaly change the haeding through the js"

*/