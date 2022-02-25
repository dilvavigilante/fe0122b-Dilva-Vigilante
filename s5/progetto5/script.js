

var listItems = ['', '', ''];

var listElement = document.querySelector('#task-list');

var listItemsAsString = JSON.stringify(listItems);

if (localStorage.listItems) {
        var listItems = JSON.parse(localStorage.listItems);
} else {
        localStorage.listItems = listItemsAsString;
      }

var renderItem = function(itemText) {
    var template = document.querySelector('#item-template');
    var clone = template.content.cloneNode(true);
    clone.querySelector("span").innerText = itemText;

    return clone;
  }
  

var updateList = function(items) {
    var listElement = document.querySelector('#task-list');
    while (listElement.firstChild) listElement.removeChild(listElement.firstChild);
  
     items.forEach(function(item) {
        var element = renderItem(item);
        listElement.appendChild(element);
      });

    localStorage.listItems = JSON.stringify(items); 
  }

var createNew = function(event) {
    event.preventDefault();
  
    var newItemElement = document.querySelector('#new-item');
    var newItemValue = newItemElement.value.trim();
  
    if (!newItemValue) return;
  
    listItems.push(newItemValue);
    newItemElement.value = '';
  
    updateList(listItems);
}

var removeItem = function(event) {
    var clickedItemText = event.target.previousElementSibling.innerHTML;
  
    listItems = listItems.filter(function(itemText) {
      return clickedItemText != itemText;
    });
  
    updateList(listItems);
}

updateList(listItems);