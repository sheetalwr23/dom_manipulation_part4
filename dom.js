var form = document.getElementById("addForm");
var ulitems = document.getElementById("items");
var filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);

//%%%%%%%%%%% delete event %%%%%%%%%%%%
ulitems.addEventListener("click", removeItem);

//%%%%%%% filter event%%%%%%%%%%%
filter.addEventListener("keyup", filterItems);

// addevent function
function addItem(e) {
  e.preventDefault();
  // get input value
  var newItem = document.getElementById("input").value;

  // create new li element
  var li = document.createElement("li");

  // add class name
  li.className = "list-group-item d-flex justify-content-between";
  li.appendChild(document.createTextNode(newItem));

  //create delete button element
  var delete_button = document.createElement("button");

  //add classes
  delete_button.className = "btn btn-danger btn-sm float-right delete";

  //append text node
  delete_button.appendChild(document.createTextNode("x"));

  //append button to li
  li.appendChild(delete_button);

  //append li to list
  ulitems.appendChild(li);
}
// remove item function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure")) {
      var li = e.target.parentElement;
      ulitems.removeChild(li);
    }
  }
}
//filter items
function filterItems(e) {
  //converts into lowercase
  var text = e.target.value.toLowerCase();
  // console.log(text);
  //grab all li
  var items = ulitems.getElementsByTagName("li");
  // console.log(items);
  //convert into array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    // console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
