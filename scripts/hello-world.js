// Fetch the first h1 element from the HTML document
const myHeading = document.querySelector("h1");
// Modify its text, changing it to "Hello, world!"
myHeading.textContent = "Hello, world!";

/**
 * === The DOM API ===
 * The features used in this script are parts of the
 * Document Object Model (DOM) API, 
 * which has the capibility to manipuliate documents.
 * 
 * === Functions ===
 * querySelector(): graps a single refrence to an element.
 * 
 * === The 'let' and 'var' keywords ===
 * Both are used to declare variables without concern of
 * the type they should be (which must be specified in earlier versions of C++ 
 * and Java, for example).
 * 
 * The main differences between them are the following:
 * 
 * 1) Scoping rules: 'let' variables are destroyed at the end of inner block 
 *      scopes, while 'var' variables will still exist.
 * 
 * 2) Redeclaration: One cannot redeclare a 'let' variable with the same name
 *      as one already defined. But this is not a problem with 'var' variables.
 * 
 * 
 * Also, 'let' is a recent addition (ECMAScript 6, released 2015), so older 
 * versions will not have it.
 */