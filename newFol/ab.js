// console.log("hii");
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GET ELEMENT
// console.log(document.getElementById("header-title"));
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");

// console.log(headerTitle);

// headerTitle.textContent = "hello";
// headerTitle.innerText = "hello1";

// headerTitle.innerHTML = "<h3>hello</h3>";

// header.style.borderBottom = "solid 3px #000";

// GET ELEMENT BY CLASS NAME

var items = document.getElementsByClassName("list-group-item");
console.log(items);

items[1].textContent = "hello 2";

items[1].style.fontweight = "bold";
items[2].style.backgroundColor = "green";
