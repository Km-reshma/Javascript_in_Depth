
//___________________________________ ########## Dom and Dom Api ########### ____________________________________
/*
DOM --> stands for Document Object Model.

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

Main DOM Interfaces----------------------------------------------------------------------------

Document — Represents the whole page.
Element — Represents an HTML element.
Node — Base interface for all DOM nodes (elements, text, comments).
NodeList / HTMLCollection — Array-like collections of nodes.
EventTarget — Allows attaching event listeners.
*/




