var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// FOrm Submit event
form.addEventListener("submit", addItem);
// delete event
itemList.addEventListener("click", removeItem);
// filter event
filter.addEventListener("keyup", filterItem);

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

  //   append button to li
  li.appendChild(deletebtn);

  //   append li to list
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

// Filter Items
function filterItem(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
