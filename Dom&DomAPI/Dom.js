
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




(b). document.getElementsByTagName()_________________________________________________________________________

Selects all elements with a tag.
Returns all the collection of elements  */

//Example------------

let b = document.getElementsByTagName("h1");

console.log(b);                   //HTMLCollection(2) [h1#heading1, h1, heading1: h1#heading1] 

console.log(b[0]);                // <h1 id = "heading1">  first Heading - Hello Java Script</h1>

console.log(b[1]);               // <h1> Secomd heading - This is a special course.</h1>



(c). document.getElementsByClassName()___________________________________________________________________

Selects all elements with a class name.
Returns a collection of elements with a specified class.
method retrieves all elements that share a given class name.


    

