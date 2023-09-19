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

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);

// items[1].textContent = "hello 2";

// items[1].style.fontweight = "bold";
// items[2].style.backgroundColor = "green";

// GET ELEMENT BY TAG NAME
// var li = document.getElementsByTagName("li");
// console.log(li);

// li[1].textContent = "hello 2";

// li[1].style.fontweight = "bold";
// li[2].style.backgroundColor = "green";

// QUERYSELECTOR

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "hello world";

// var input = document.querySelector('input[type="submit"]');
// input.style.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "green";

// var item2 = document.querySelector(".list-group-item:nth-child(2)");
// item2.style.backgroundColor = "green";

// var item3 = document.querySelector(".list-group-item:nth-child(2)");
// item3.style.visibility = "hidden";

// QUERY SELECTOR ALL

var titles = document.querySelectorAll(".list-group-item:nth-child(2)");
console.log(titles);

// titles[1].style.color = "green ";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.backgroundColor = "red";
}
