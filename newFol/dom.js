var itemList = document.querySelector("#items");

// PARENT NODE
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// PARENT ELEMENT
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// CHILD NODES
// console.log(itemList.childNodes);

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "green";

// FIRST CHILD
// console.log(itemList.firstChild);

//FIRSTELEMENT CHILD
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello";

// last CHILD
// console.log(itemList.lastChild);

//lastELEMENT CHILD
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello";

// next SIBLING
// console.log(itemList.nextSibling);

// next ELEMNT SIBLING
// console.log(itemList.nextElementSibling);

// PREVIOUS SIBLING
// console.log(itemList.previousSibling);

// PREVIOUS ELEMNT SIBLING
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// CREATE ELEMENT
var newDiv = document.createElement("div");
// ADD CLASS
newDiv.className = "hello";

// ADD ID
newDiv.id = "hello1";

// ADD ATTR
newDiv.setAttribute("title", "hello div");

// Create TEXT Node
var newdivText = document.createTextNode("hello world");

// add text to div
newDiv.appendChild(newdivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";
container.insertBefore(newDiv, h1);
