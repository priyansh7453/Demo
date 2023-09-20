var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// FOrm Submit event
form.addEventListener("submit", addItem);
// delete event
itemList.addEventListener("click", removeItem);

// add item
function addItem(e) {
  e.preventDefault();

  // get input value
  var newItem = document.getElementById("item").value;

  // create new li element
  var li = document.createElement("li");

  // add class
  li.className = "list-group-item";

  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //   create delete element
  var deletebtn = document.createElement("button");

  // add classes to del button
  deletebtn.className = "btn btn-danger btn-sm float-right delete";

  deletebtn.appendChild(document.createTextNode("X"));

  li.appendChild(deletebtn);

  itemList.appendChild(li);
}

// function remove item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
